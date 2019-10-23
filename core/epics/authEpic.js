import { ofType } from "redux-observable";
import { catchError, debounceTime, delay, switchMap, takeUntil, tap } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { empty, of, throwError } from "rxjs";
import { API_PATH, PUBLIC, uid } from "@core/libraries/config";
import { encode } from "./encode";
import { decode } from "./decode";
import {
    TOUCH_TOKEN,
    TOUCH_TOKEN_REJECTED,
    touchToken,
    touchTokenRejected,
    deleteToken,
    FETCH_BALANCE,
    fetchBalanceFulfilled,
} from "@core/reducer/Auth";
import { showDialog } from "@core/reducer/Dialog";
import { _delete_cookie } from "@core/libraries/utils";

const TOUCH_TIMES = 59000;
export const touchTokenEpic = (action$, state$) =>
    action$.pipe(
        ofType(TOUCH_TOKEN),
        switchMap((action) => {
            if (PUBLIC) {
                return request(
                    encode({
                        url: `${API_PATH}${ROUTE.TOUCH_TOKEN}`,
                        params: {
                            token: state$.value.Auth.token,
                        },
                    }),
                ).pipe(
                    decode((response) => {
                        const { code } = response;
                        const isSuccess = code == 1;
                        if (isSuccess) {
                            return of(touchToken(action.token)).pipe(
                                delay(TOUCH_TIMES),
                                takeUntil(action$.pipe(ofType(TOUCH_TOKEN_REJECTED))),
                            );
                        } else {
                            return throwError(response);
                        }
                    }, action.type),
                    catchError((response) => of(touchTokenRejected(response))),
                );
            } else {
                return empty();
            }
        }),
    );

export const tokenRejectedEpic = (action$) =>
    action$.pipe(
        ofType(TOUCH_TOKEN_REJECTED),
        debounceTime(100),
        tap(() => {
            _delete_cookie("cookie_auth_key");
            _delete_cookie("cookie_token");
            _delete_cookie("cookie_vendor_id");
        }),
        switchMap((action) => {
            const { desc } = action.payload;
            return of(deleteToken(), showDialog({ message: desc, code: 5 }));
        }),
    );

export const fetchBalanceEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_BALANCE),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_BALANCE}`,
                    params: {
                        ...uid,
                        currency: state$.value.Query.currency,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    return of(fetchBalanceFulfilled(response));
                }, action.type),
            ),
        ),
    );
