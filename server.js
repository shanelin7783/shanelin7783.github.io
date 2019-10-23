require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { parse } = require("url");
const next = require("next");
const request = require("superagent");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const CLOSE_TOKEN_CHECKER = true;
const { paramsEncode, paramsDecode } = require("./core/libraries/paramsUtils");

const tokenChecker = (oriReq, oriRes, renderPage) => {
    if (CLOSE_TOKEN_CHECKER) {
        console.log("renderPage")
        return renderPage();
    }
    const errorRedirect = (err, info) => app.render(oriReq, oriRes, "/game", { err });
    const parsedUrl = parse(oriReq.url, true);
    const { pathname, query } = parsedUrl;
    const [, , gameCode] = pathname.split("/");
    const { _tkn = "" } = oriReq.cookies;
    const [cookie_token, , cookie_auth_key] = _tkn.split("_");
    const sendObject = cookie_token == query.token ? { auth_key: cookie_auth_key } : {};
    const isGuest = !query.token || !query.vendor_id;
    if (isGuest) {
        oriRes.clearCookie("_tkn");
        return errorRedirect("not have token or auth key");
    }
    const url = `${process.env.API_PATH}/lottery_game/init`;
    const req = {
        ...sendObject,
        game_code: gameCode,
        token: query.token,
        vendor_id: query.vendor_id,
    };
    request
        .post(url)
        .type("form")
        .send({ par: paramsEncode(req) })
        .end((err, res) => {
            if (err) {
                return errorRedirect(`call init err:${err}`);
            }
            const { code, init_info, desc } = paramsDecode(res.text);
            const isSuccess = code == 1;
            if (!isSuccess) {
                oriRes.clearCookie("_tkn");
                return errorRedirect(`init is not success:${desc}`, {
                    url,
                    req,
                    req_encode: paramsEncode(req),
                    res: res.text,
                    res_decode: paramsDecode(res.text),
                });
            }
            const { auth_key } = init_info;
            const { token, vendor_id } = query;
            oriRes.cookie("_tkn", `${token}_${vendor_id}_${auth_key}`);
            return renderPage();
        });
};

app.prepare()
    .then(() => {
        const server = express();
        server.use(cookieParser());
        // server.use('/static', express.static('static'))
        
        server.get("/", (req, res) => {
            return res.redirect(`/game/as5fcn1_f/`);
        });
        server.get("/game/*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { query } = parsedUrl;
            console.log("gamegame")
            return tokenChecker(req, res, () => app.render(req, res, `/game`, query));
        });
        server.get("/trend/*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { query } = parsedUrl;
            return app.render(req, res, "/trend", query);
        });

        server.get("/rule/*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { query } = parsedUrl;
            return app.render(req, res, "/rule", query);
        });

        server.get("/betRecord/*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { query } = parsedUrl;
            return tokenChecker(req, res, () => app.render(req, res, "/betRecord", query));
        });

        server.get("/history/*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { query } = parsedUrl;
            return app.render(req, res, "/history", query);
        });

        server.get("/rolling", (req, res) => {
            return app.render(req, res, "/rolling", {});
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });
        server.listen(process.env.PORT, (err) => {
            if (err) throw err;
            console.log(`> ${process.env.NODE_ENV} Ready on http://localhost:${process.env.PORT}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
