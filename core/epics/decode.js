import { flatMap, pluck, filter } from "rxjs/operators";
import { paramsDecode } from "@core/libraries/paramsUtils";
import { of, throwError } from "rxjs";
import { OPEN_SEND_CONSOLE, PUBLIC } from "@core/libraries/config";
import { touchTokenRejected } from "@core/reducer/Auth";

export const decode = (callBack, type = "") => {
    return function decodeImplementation(source) {
        return source.pipe(
            pluck("response"),
            filter(({ code }) => code !== 3),
            flatMap((response) => {
                if (!response) throwError("no data");
                const decode = PUBLIC ? paramsDecode(response) : response;
                OPEN_SEND_CONSOLE && console.log(`%c ${type} `, "background: blue; color: white;", decode);
                const { code = 1 } = decode;
                const isLogout = code === 5;
                if (isLogout) {
                    return of(touchTokenRejected(decode));
                } else {
                    return callBack(decode);
                }
            }),
        );
    };
};
