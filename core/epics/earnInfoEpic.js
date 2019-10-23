import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap, retryWhen, takeUntil, delay } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of, throwError } from "rxjs";
import { API_PATH, uid } from "@core/libraries/config";
import { FETCH_EARN_INFO, fetchEarnInfoFulfilled } from "@core/reducer/EarnInfo";
import { STOP_RETRY } from "@core/reducer/Config";

export const fetchEarnInfoEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_EARN_INFO),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_EARN_INFO}`,
                    params: {
                        ...uid,
                        ...action.payload,
                        game_code: state$.value.BaseInfo.game_code,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    if (response.code === 54) {
                        // 玩家當期有投注，但還在結算中
                        return throwError();
                    } else {
                        return of(fetchEarnInfoFulfilled(response));
                    }
                }, action.type),
                retryWhen((errors) => errors.pipe(delay(3000))),
                takeUntil(action$.pipe(ofType(STOP_RETRY))),
            ),
        ),
    );
