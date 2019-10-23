import React, { Fragment } from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { of, Subject } from "rxjs";
import { StateObservable } from "redux-observable";
import dynamic from "next/dynamic";
import { rootEpic } from "@core/epics";
import { fetchConfig } from "@core/reducer/Config";
import MARKSIX_N1Loading from "@components/marksix_n1/LoadingContainer";
import MARKSIX_T1Loading from "@components/marksix_t1/LoadingContainer";
import PC28Loading from "@components/pc28/LoadingContainer";
import PC28_N1Loading from "@components/pc28_n1/LoadingContainer";
import SSC_N1Loading from "@components/ssc_n1/LoadingContainer";
import SSC_N2Loading from "@components/ssc_n2/LoadingContainer";
import SSC_T1Loading from "@components/ssc_t1/LoadingContainer";
import { fetchIntroduction } from "@core/reducer/Config";
import { toArray } from "rxjs/operators";

const MARKSIX_N1 = dynamic(import("@components/marksix_n1/RuleContaine"), { loading: () => <MARKSIX_N1Loading /> });
const MARKSIX_T1 = dynamic(import("@components/marksix_t1/RuleContaine"), { loading: () => <MARKSIX_T1Loading /> });
const PC28 = dynamic(import("@components/pc28/RuleContaine"), { loading: () => <PC28Loading /> });
const PC28_N1 = dynamic(import("@components/pc28_n1/RuleContaine"), { loading: () => <PC28_N1Loading /> });
const SSC_N1 = dynamic(import("@components/ssc_n1/RuleContaine"), { loading: () => <SSC_N1Loading /> });
const SSC_N2 = dynamic(import("@components/ssc_n2/RuleContaine"), { loading: () => <SSC_N2Loading /> });
const SSC_T1 = dynamic(import("@components/ssc_t1/RuleContaine"), { loading: () => <SSC_T1Loading /> });

const Rule = () => {
    const game_group = useSelector((state) => state.BaseInfo.game_group);
    return (
        <Fragment>
            {{
                marksix_n1: <MARKSIX_N1 />,
                marksix_t1: <MARKSIX_T1 />,
                pc28: <PC28 />,
                pc28_n1: <PC28_N1 />,
                ssc_n1: <SSC_N1 />,
                ssc_n2: <SSC_N2 />,
                ssc_t1: <SSC_T1 />,
            }[game_group] || null}
        </Fragment>
    );
};

// Rule.getInitialProps = async ({ store }) => {
//     async function handleFetchIntroduction() {
//         const state$ = new StateObservable(new Subject(), store.getState());
//         const todo = [fetchIntroduction()];
//         const { config } = store.getState().Config;
//         if (isEmpty(config)) {
//             todo.push(fetchConfig());
//         }
//         const actions = await rootEpic(of(...todo), state$)
//             .pipe(toArray())
//             .toPromise();

//         actions.forEach(store.dispatch);
//     }
//     await handleFetchIntroduction();
//     return {};
// };

export default Rule;
