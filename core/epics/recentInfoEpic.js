import { ofType } from "redux-observable";
import { concat, empty, of, throwError, timer } from "rxjs";
import { delay, flatMap, retryWhen, switchMap, takeUntil } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { API_PATH, uid } from "@core/libraries/config";
import { encode } from "./encode";
import { decode } from "./decode";
import { FETCH_RECENTINFO, FETCH_RECENTINFO_FULFILLED, CURRENT_FINISHEN, fetchRecentInfo, fetchRecentInfoFulfilled } from "@core/reducer/RecentInfo";
import { STOP_RETRY } from "@core/reducer/Config";
import { fetchHistory } from "@core/reducer/History";

export const fetchRecentInfoEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_RECENTINFO),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_RECENT_RECORD}`,
                    params: {
                        game_code: state$.value.BaseInfo.game_code,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    const { code } = response;
                    const isSuccess = code == 1;
                    if (isSuccess) {
                        const { game_code } = state$.value.BaseInfo;
                        const payload = { ...response, recent_code: game_code };
                        const { isInit = false } = action.payload;
                        if (state$.value.RecentInfo.recent_code == game_code && !isInit) {
                            //未換遊戲且不是第一次拿資料
                            if (state$.value.RecentInfo.current.expect == response.info.next.expect) {
                                //倒數完後取得的資料未更新
                                return throwError();
                            } else {
                                if (
                                    response.info.previous.winning_numbers ||
                                    state$.value.RecentInfo.current.expect != response.info.current.expect
                                ) {
                                    //取得上期開獎或期號改變就存
                                    return of(fetchRecentInfoFulfilled(payload), fetchHistory({ reCheck: true }), fetchBetRecord({ reCheck: true }));
                                    // return of(fetchRecentInfoFulfilled(payload));
                                } else {
                                    //上期開獎為空
                                    return throwError();
                                }
                            }
                        } else {
                            //第一次拿資料或換遊戲直接存
                            return of(fetchRecentInfoFulfilled(payload));
                        }
                    } else {
                        return throwError();
                    }
                }, action.type),
                retryWhen((errors) => errors.pipe(delay(3000))),
                takeUntil(action$.pipe(ofType(STOP_RETRY))),
            ),
        ),
    );

export const fetchWinNumberEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_RECENTINFO_FULFILLED),
        switchMap(() =>
            timer(3000).pipe(
                flatMap(() => {
                    const { previous } = state$.value.RecentInfo;
                    return previous.winning_numbers ? empty() : of(fetchRecentInfo({ step: "winnumber" }));
                }),
                takeUntil(action$.pipe(ofType(STOP_RETRY))),
            ),
        ),
    );

export const currentFinishedEpic = (action$, state$) =>
    action$.pipe(
        ofType(CURRENT_FINISHEN),
        flatMap(() => {
            return of(fetchRecentInfo({ step: "currentFinished" }));
        }),
    );
