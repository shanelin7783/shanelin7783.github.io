import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { of, Subject } from "rxjs";
import { StateObservable } from "redux-observable";
import dynamic from "next/dynamic";
import { rootEpic } from "@core/epics";
import { fetchConfig, stopRetry } from "@core/reducer/Config";
import { touchToken, fetchBalance } from "@core/reducer/Auth";
import MARKSIX_N1Loading from "@components/marksix_n1/LoadingContainer";
import MARKSIX_T1Loading from "@components/marksix_t1/LoadingContainer";
import SSC_N1Loading from "@components/ssc_n1/LoadingContainer";
import SSC_N2Loading from "@components/ssc_n2/LoadingContainer";
import SSC_T1Loading from "@components/ssc_t1/LoadingContainer";
import PC28Loading from "@components/pc28/LoadingContainer";
import PC28_N1Loading from "@components/pc28_n1/LoadingContainer";
import { MultipleProvider } from "@core/hooks/MultipleContext";
import { GoPageProvider } from "@core/hooks/GoPageContext";
import { fetchRecentInfo } from "@core/reducer/RecentInfo";
import { fetchHistory } from "@core/reducer/History";
import { BetResultDialog } from "@components/common/BetResultDialog";
import { MessageDialog } from "@components/common/MessageDialog";
import { showDialog } from "@core/reducer/Dialog";
import { fetchFair } from "@core/reducer/Fair";

const MARKSIX_N1 = dynamic(import("@components/marksix_n1"), { loading: () => <MARKSIX_N1Loading /> });
const MARKSIX_T1 = dynamic(import("@components/marksix_t1"), { loading: () => <MARKSIX_T1Loading /> });
const SSC_N1 = dynamic(import("@components/ssc_n1"), { loading: () => <SSC_N1Loading /> });
const SSC_N2 = dynamic(import("@components/ssc_n2"), { loading: () => <SSC_N2Loading /> });
const SSC_T1 = dynamic(import("@components/ssc_t1"), { loading: () => <SSC_T1Loading /> });
const PC28 = dynamic(import("@components/pc28"), { loading: () => <PC28Loading /> });
const PC28_N1 = dynamic(import("@components/pc28_n1"), { loading: () => <PC28_N1Loading /> });

const Game = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.Auth.token);
    const game_group = useSelector((state) => state.BaseInfo.game_group);

    useEffect(() => {
        if (token) {
            dispatch(touchToken());
            dispatch(fetchRecentInfo({ isInit: true, step: "didmount" }));
            dispatch(fetchHistory());
            dispatch(fetchBalance());
        }
        return () => {
            dispatch(stopRetry());
        };
    }, [token]);

    return (
        <MultipleProvider>
            <GoPageProvider>
                {{
                    pc28: <PC28 />,
                    pc28_n1: <PC28_N1 />,
                    ssc_n1: <SSC_N1 />,
                    ssc_n2: <SSC_N2 />,
                    ssc_t1: <SSC_T1 />,
                    marksix_n1: <MARKSIX_N1 />,
                    marksix_t1: <MARKSIX_T1 />,
                }[game_group] || <div>123213</div>}
                <BetResultDialog />
                <MessageDialog />
            </GoPageProvider>
        </MultipleProvider>
    );
};

// Game.getInitialProps = async ({ store, query, res }) => {
//     if (res && query.err) {
//         console.log("query.err", query.err);
//         store.dispatch(showDialog({ message: "登入已过期,请重新登入", code: 5 }));
//         res.clearCookie("_tkn");
//     }
//     async function handleFetchConfig() {
//         const { config } = store.getState().Config;
//         if (isEmpty(config)) {
//             const state$ = new StateObservable(new Subject(), store.getState());
//             const resultAction = await rootEpic(of(fetchConfig()), state$).toPromise();
//             store.dispatch(resultAction);
//         }
//     }
//     await handleFetchConfig();
//     return {};
// };

export default Game;
