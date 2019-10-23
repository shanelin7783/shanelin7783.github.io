import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of, concat } from "rxjs";
import { API_PATH, uid } from "@core/libraries/config";
import { SEND_BETLIST, sendBetListFulfilled, sendBetListFailure } from "@core/reducer/Bet";
import { fetchBalance } from "@core/reducer/Auth";
import { showDialog } from "@core/reducer/Dialog";

export const sendBetListEpic = (action$, state$) =>
    action$.pipe(
        ofType(SEND_BETLIST),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.POST_BET}`,
                    params: {
                        ...uid,
                        ...action.payload,
                        game_code: state$.value.BaseInfo.game_code,
                        expect: state$.value.RecentInfo.current.expect,
                        currency: state$.value.Query.currency,
                        currency_rate: state$.value.Query.currency_rate,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    const { code } = response;
                    const isSuccess = code == 1;
                    return concat(
                        isSuccess
                            ? of(sendBetListFulfilled(response))
                            : of(sendBetListFailure(response), showDialog({ code: response.code, message: response.desc })),
                        of(fetchBalance()),
                    );
                }, action.type),
            ),
        ),
    );
