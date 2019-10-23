import { useContext, useEffect } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { isEmpty } from "lodash";
import { _bets_config } from "@core/constants/ssc_t1";

export const useCheckOrder = () => {
    const { itemList, totalBets, setTotalBets } = useContext(MultipleContext);
    const { game } = useContext(GameSwitchContext);

    useEffect(() => {
        const detail = itemList
            .keySeq()
            .toArray()
            .reduce((prev, curr) => {
                for (let [category, value] of Object.entries(itemList.get(curr))) {
                    if (prev[category]) {
                        prev[category].push(value);
                    } else {
                        prev[category] = [value];
                    }
                }
                return prev;
            }, {});
        const bets = checkOrder(detail, game);
        if (totalBets != bets) {
            setTotalBets(bets);
        }
    }, [totalBets]);
};

const checkOrder = (detail, game) => {
    const { rule } = game;
    let bets = 0;
    let init = false;
    if (!isEmpty(detail)) {
        if (game.bet_type != "") {
            //特殊的算法
            switch (game.bet_type) {
                case "c_3_gc3":
                    bets = c_3_gc3(detail);
                    break;
                case "c_3_bd":
                    bets = c_3_bd(detail);
                    break;
                case "c_2_bd":
                    bets = c_2_bd(detail);
                    break;
                default:
                    alert("尚未撰寫" + game.bet_type + "的注數算法");
                    break;
            }
        } else if (game.bet_config != "") {
            //特殊狀況, 例如和值 跨度, 直接讀取config中的注數
            for (const k in detail["s99"]) {
                bets += _bets_config[game.bet_config][detail["s99"][k]];
            }
        } else if (game.repetition == 0 && Object.keys(detail).length == 2) {
            //不同位置 號碼不能重複
            let tmpAry = [];
            let tmpLimitAry = [];
            for (const k in detail) {
                tmpAry.push(detail[k]);
                tmpLimitAry.push(rule[k].limit[0]);
            }

            bets = notRepetitionNumCount(tmpAry, tmpLimitAry);
        } else {
            Object.keys(rule).forEach((category) => {
                const [min = 0] = rule[category].limit;
                const pickNumber = detail[category] || [];
                const _tmpBets = _combinationCount(pickNumber.length, min);

                if (min == 0) {
                    bets += _tmpBets;
                } else {
                    if (bets == 0 && !init) {
                        bets = 1;
                        init = true;
                    }
                    bets = bets * _tmpBets;
                }
            });
        }
    }

    return bets;
};

const c_3_gc3 = (chooseNumAry) => {
    let num_1_ary = [];
    for (const ck in combination_2) {
        let checkIndexResult = 0;
        if (chooseNumAry["s99"].indexOf(Number(combination_2[ck][0])) >= 0) {
            checkIndexResult++;
        }
        if (chooseNumAry["s99"].indexOf(Number(combination_2[ck][1])) >= 0) {
            checkIndexResult++;
        }

        if (checkIndexResult == 2) {
            num_1_ary.push([combination_2[ck][0], combination_2[ck][1]]);
        }
    }
    return num_1_ary.length * 2;
};

//每選一個號碼算54注
const c_3_bd = (chooseNumAry) => {
    return chooseNumAry["s99"].length * 54;
};

//每選一個號碼算9注
const c_2_bd = (chooseNumAry) => {
    return chooseNumAry["s99"].length * 9;
};

const notRepetitionNumCount = (numAry, numLimitAry) => {
    //第一位置號碼陣列
    const num_1 = numAry[0];
    //第二位置號碼陣列
    const num_2 = numAry[1];
    //第一位置號碼最小需要幾位
    const num_limit_1 = numLimitAry[0];
    //第二位置號碼最小需要幾位
    const num_limit_2 = numLimitAry[1];

    if (num_1.length == 0 || num_2.length == 0) return 0;

    let bets = 0;
    const _tmpBets_1 = 1;
    let _tmpBets_2 = 0;
    let numLength_1 = 0;
    let numLength_2 = 0;

    //第一個位置只需一個號碼
    if (num_limit_1 == 1) {
        for (const k in num_1) {
            if (num_2.indexOf(num_1[k]) >= 0) {
                numLength_2 = num_2.length - 1;
            } else {
                numLength_2 = num_2.length;
            }

            //n個不同物 取出m 個
            _tmpBets_2 = _combinationCount(numLength_2, num_limit_2);

            bets += _tmpBets_1 * _tmpBets_2;
        }
    } else if (num_limit_1 == 2) {
        //第一個位置需要2個號碼
        let checkIndexResult = 0;

        //組成此次選擇的號碼有幾種組合
        let num_1_ary = [];

        for (const ck in combination_2) {
            checkIndexResult = 0;
            const first = Number(combination_2[ck][0]);
            const second = Number(combination_2[ck][1]);
            if (num_1.indexOf(first) >= 0) {
                checkIndexResult++;
            }
            if (num_1.indexOf(second) >= 0) {
                checkIndexResult++;
            }

            if (checkIndexResult == 2) {
                num_1_ary.push([first, second]);
            }
        }

        //從兩位的組合中過濾掉單位號有的號碼
        //組成此次選擇的號碼有幾種組合
        let num_2_count = 0;
        for (const ck in num_1_ary) {
            num_2_count = num_2.length;

            if (num_2.indexOf(num_1_ary[ck][0]) >= 0) {
                num_2_count--;
            }

            if (num_2.indexOf(num_1_ary[ck][1]) >= 0) {
                num_2_count--;
            }

            //n個不同物 取出m 個
            if (num_2_count > 0) {
                bets += _combinationCount(num_2_count, num_limit_2);
            }
        }
    }
    return bets;
};

//n個不同物 取出m 個(單一注數)
const _combinationCount = function(n, m) {
    if (m < 1) m = 1;

    let sResult = 1;
    let mResult = 1;
    let i;

    for (i = n; i >= n - m + 1; i--) {
        sResult = sResult * i;
    }

    for (i = m; i >= 1; i--) {
        mResult = mResult * i;
    }

    return sResult / mResult;
};
