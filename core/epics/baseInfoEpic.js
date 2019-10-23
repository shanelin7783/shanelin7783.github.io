import { ofType } from "redux-observable";
import { encode } from "./encode";
import { switchMap } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ROUTE } from "@core/constants/apiConstants";
import { decode } from "./decode";
import { of } from "rxjs";
import { FETCH_BASEINFO, fetchBaseInfoFulfilled } from "@core/reducer/BaseInfo";
import { API_PATH, uid } from "@core/libraries/config";

export const fetchBaseInfoEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_BASEINFO),
        switchMap((action) =>
            request(
                encode({
                    url: `${API_PATH}${ROUTE.GET_BASE_INFO}`,
                    params: {
                        ...uid,
                        token: state$.value.Auth.token,
                    },
                }),
            ).pipe(
                decode((response) => {
                    if (response.code === 1) {
                        return of(fetchBaseInfoFulfilled(response));
                    }
                }, action.type),
            ),
        ),
    );
