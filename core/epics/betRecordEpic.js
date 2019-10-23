import { ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, retryWhen, delay, takeUntil } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { encode } from "./encode";
import { decode } from "./decode";
import { fetchBalance } from "@core/reducer/Auth";
import { API_PATH, uid } from "@core/libraries/config";
import { STOP_RETRY } from "@core/reducer/Config";
import { FETCH_BETRECORD, FETCH_BETRECORD_DETAIL, fetchBetRecordFulfilled, fetchBetRecordDetailFulfilled } from "@core/reducer/BetRecord";

export const fetchBetRecordEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_BETRECORD),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_BET_RECORD}`,
                    params: {
                        ...uid,
                        page: 1,
                        rows: action.rows,
                        game_code: state$.value.BaseInfo.game_code,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    if (action.reCheck) {
                        const { list = [] } = response;
                        const { expect = "" } = list.find(({ status }) => status == 1) || {};
                        //取得未開期號
                        if (expect && state$.value.History.list.find((result) => result.expect == expect)) {
                            //未開期號弱存在於歷史開獎內
                            return throwError();
                        } else {
                            return of(fetchBetRecordFulfilled(response), fetchBalance());
                        }
                    } else {
                        return of(fetchBetRecordFulfilled(response));
                    }
                }, action.type),
                retryWhen((errors) => errors.pipe(delay(5000))),
                takeUntil(action$.pipe(ofType(STOP_RETRY))),
            ),
        ),
    );

export const fetchBetRecordDetailEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_BETRECORD_DETAIL),
        switchMap((action) =>
            of(fetchBetRecordDetailFulfilled({
                code: 1,
                list: [
                    {id: 3, bet_type: '混合', bet_detail: '3', bets: 1, bet_currency_amount: 10, currency: 'RMB', status: 1, status_text: '未中獎', win_currency_amount: 0, odds: 1}
                ],
                win_numbers: '1,3,5,9,7'
            }))
        ),
    );
