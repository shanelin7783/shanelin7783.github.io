import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap, retryWhen, takeUntil, delay } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of, throwError } from "rxjs";
import { API_PATH, uid } from "@core/libraries/config";
import { FETCH_HISTORY, fetchHistoryFulfilled } from "@core/reducer/History";
import { STOP_RETRY } from "@core/reducer/Config";

export const fetchHistoryEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_HISTORY),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_HISTORY}`,
                    params: {
                        ...uid,
                        game_code: state$.value.BaseInfo.game_code,
                        rows: 50,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    if (action.reCheck) {
                        const { list = [] } = response;
                        const [{ expect }] = list;
                        if (state$.value.History.list.find((result) => result.expect == expect)) {
                            return throwError("");
                        }
                    }
                    return of(fetchHistoryFulfilled(response));
                }, action.type),
                retryWhen((errors) => errors.pipe(delay(5000))),
                takeUntil(action$.pipe(ofType(STOP_RETRY))),
            ),
        ),
    );
