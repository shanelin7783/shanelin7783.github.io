import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap, map } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of } from "rxjs";
import { FETCH_FAIR, fetchFairFulfilled } from "@core/reducer/Fair";
import { API_PATH, uid } from "@core/libraries/config";

export const fetchFairEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_FAIR),
        switchMap((action) => {
            console.log("game_code", state$.value.BaseInfo.game_code)
            console.log("expect", state$.value.History.list[0].expect)
            console.log("token", state$.value.Auth.token)
            return request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_FAIR}`,
                    params: {
                        uid: "1543985415_1",
                        game_code: state$.value.BaseInfo.game_code,
                        expect: state$.value.History.list[0].expect,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode(({ web_url = "" }) => {
                    console.log("web_url", web_url);
                    return of(fetchFairFulfilled(web_url));
                }),
            );
        }),
    );
