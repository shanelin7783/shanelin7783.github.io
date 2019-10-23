import { useSelector } from "react-redux";

export const useWebView = () => {
    const os = useSelector((state) => state.Query.os);
    const backApp = () => {
        if (os === "iOS") {
            try {
                window.webkit.messageHandlers.back.postMessage("");
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                app.back();
            } catch (e) {
                console.log(e);
            }
        }
    };

    const backAppRecharge = () => {
        if (os === "iOS") {
            try {
                window.webkit.messageHandlers.recharge.postMessage("");
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                app.recharge();
            } catch (e) {
                console.log(e);
            }
        }
    };

    return { backApp, backAppRecharge };
};
