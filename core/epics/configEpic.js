import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of } from "rxjs";
import { API_PATH, uid } from "@core/libraries/config";
import { FETCH_CONFIG, fetchConfigFulfilled, FETCH_INTRODUCTION, fetchIntroductionFulfilled } from "@core/reducer/Config";

export const fetchConfigEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_CONFIG),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_INFO}`,
                    params: {
                        ...uid,
                        game_code: state$.value.BaseInfo.game_code,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    return of(fetchConfigFulfilled(response));
                }, action.type),
            ),
        ),
    );

export const fetchIntroductionEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_INTRODUCTION),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_INTRODUCTION}`,
                    params: {
                        ...uid,
                        game_code: state$.value.BaseInfo.game_code,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    return of(fetchIntroductionFulfilled(response));
                }, action.type),
            ),
        ),
    );
