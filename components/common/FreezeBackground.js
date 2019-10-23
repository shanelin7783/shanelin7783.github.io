import { useEffect } from "react";

export const FreezeBackground = ({ children }) => {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.style.cssText = "overflow: hidden; width: 100%";
        return () => (body.style.cssText = "");
    }, []);
    return children;
};
