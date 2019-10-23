import { paramsEncode } from "@core/libraries/paramsUtils";
import { PUBLIC } from "@core/libraries/config";

export const encode = ({ url, params }) => {
    return {
        url,
        body: {
            par: PUBLIC ? paramsEncode(params) : JSON.stringify(params),
        },
        responseType: PUBLIC ? "text" : "json",
        method: "POST",
    };
};
