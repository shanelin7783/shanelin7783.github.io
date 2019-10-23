import App from "next/app";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { of, Subject } from "rxjs";
import { StateObservable } from "redux-observable";
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import getConfig from "next/config";
import makeStore from "@core/store";
import { setToken } from "@core/reducer/Auth";
import { fetchBaseInfo, setGameInfo } from "@core/reducer/BaseInfo";
import { rootEpic } from "@core/epics";
import { parse } from "url";
import uaParser from "ua-parser-js";
import { setQuery } from "@core/reducer/Query";
import { _floorWithDigits } from "@core/libraries/utils";
import NProgress from "nprogress";
import Router, { withRouter } from "next/router";
import { getLink } from "@core/libraries/getLink";

const { PUBLIC } = getConfig().publicRuntimeConfig;

class MyApp extends App {
    componentDidMount() {
        Router.events.on("routeChangeStart", () => {
            NProgress.start();
        });
        Router.events.on("routeChangeComplete", () => {
            NProgress.done();
        });
    }
    render() {
        const { Component, pageProps, store } = this.props;
        const { game_group, game_code, game_name } = store.getState().BaseInfo;
        return (
            <Fragment>
                <Head>
                    <title>{game_name}</title>
                    <link rel="stylesheet" type="text/css" href={getLink(`${game_group}/${game_code}/mobile/css/mobile-main.css`)} />
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Fragment>
        );
    }
}

// MyApp.getInitialProps = async ({ ctx, Component }) => {
//     const { isServer, store, asPath, req, query, err } = ctx;
//     if (isServer && err === undefined) {
//         function handleSetToken() {
//             const { token = "" } = query;
//             store.dispatch(
//                 setToken({
//                     token: PUBLIC ? token : "dev",
//                 }),
//             );
//         }
//         function handleSetQuery() {
//             const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//             const os = uaParser(userAgent).os.name;
//             const { vendor_id, first_time, currency, mute, currency_rate } = query;
//             store.dispatch(
//                 setQuery({
//                     os,
//                     vendor_id: PUBLIC ? vendor_id : "2",
//                     first_time: first_time == "1",
//                     currency: PUBLIC ? currency : "RMB",
//                     mute: PUBLIC ? !!mute : false,
//                     currency_rate: _floorWithDigits(PUBLIC ? currency_rate : 1),
//                 }),
//             );
//         }
//         async function handleSetBeseInfo() {
//             const state$ = new StateObservable(new Subject(), store.getState());
//             const resultAction = await rootEpic(of(fetchBaseInfo()), state$).toPromise();
//             store.dispatch(resultAction);
//             const { BaseInfo } = store.getState();
//             const gameList = new Set(Object.keys(BaseInfo.game_list));
//             const [, route, game_code = ""] = parse(asPath).pathname.split("/");
//             if (gameList.has(game_code)) {
//                 store.dispatch(setGameInfo(game_code));
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         const isExist = await handleSetBeseInfo();
//         if (isExist) {
//             handleSetToken();
//             handleSetQuery();
//         } else {
//             console.error("game is not exist");
//             return;
//         }
//     }

//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     return { pageProps, store };
// };

export default withRedux(makeStore)(MyApp);
