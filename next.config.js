const path = require("path");
const fs = require("fs");
const isProduction = process.env.NODE_ENV === "production";
const readBuildId = () => {
    try {
        return fs.readFileSync("./build/BUILD_ID", "utf8");
    } catch (e) {
        return "NULL";
    }
};

module.exports = {
    distDir: "build",
    serverRuntimeConfig: {
        isServer: true,
    },
    publicRuntimeConfig: {
        API_PATH: process.env.API_PATH,
        CDN_ENV: process.env.CDN_ENV,
        CDN_PATH: process.env.CDN_PATH,
        PUBLIC: isProduction,
        USE_CDN: process.env.USE_CDN == "true",
        BUILD_ID: isProduction ? readBuildId() : "",
    },
    generateBuildId: async () =>
        new Date()
            .toLocaleString()
            .replace(/[\u4e00-\u9fa5]/g, "")
            .replace(/[-:\s\/]/g, "_"),
    webpack(config, options) {
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            "@components": path.resolve(__dirname, "components"),
            "@core": path.resolve(__dirname, "core"),
            "@pages": path.resolve(__dirname, "pages"),
            "@static": path.resolve(__dirname, "static"),
        });
        config.module.rules.push({
            test: /\.(jpg|png|svg|ttf|otf|TTF)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        context: "",
                        emitFile: true,
                        name: "[path][name].[hash].[ext]",
                        publicPath: "/_next/static/images",
                        outputPath: "static/images",
                    },
                },
            ],
        });
        return config;
    },
    assetPrefix: '/shanelin7783.github.io/',
    exportPathMap: async function(defaultPathMap) {
        return {
            "/": { page: "/" },
            "/game": { page: "/game" },
            "/history": { page: "/history" },
            "/rule": { page: "/rule" },
            "/trend": { page: "/trend" },
        };
    },
};
