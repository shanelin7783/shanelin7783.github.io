import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { getLink } from "@core/libraries/getLink";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage, store }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags, store };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="stylesheet" type="text/css" href={getLink("nprogress.css")} />
                    <script src={getLink("createJs.js")} />
                    {this.props.styleTags}
                </Head>
                <body>
                    <iframe src={getLink("mute.mp3")} allow="autoplay" id="audio" style={{ display: "none" }} />
                    <Main />
                    <NextScript />
                    <script src={getLink("customer.js")} />
                </body>
            </html>
        );
    }
}
