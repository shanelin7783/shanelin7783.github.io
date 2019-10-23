import { useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { GAME_KIND } from "@core/constants/ssc_n2";
import { sendBetList } from "@core/reducer/Bet";

export const useHandleBet = () => {
    const dispatch = useDispatch();
    const config = useSelector((state) => state.Config.config.ssc_n2);
    const { multiple, itemList, itemListHandle } = useContext(MultipleContext);
    const handleBet = useCallback(() => {
        const bet_list = itemList
            .keySeq()
            .toArray()
            .reduce((prev, curr) => {
                const { id, rule, value } = itemList.get(curr);
                const { odds = 0 } = config[0].list[0].game.find((result) => result.id === id) || {};
                const detail =
                    rule == "s99"
                        ? {}
                        : {
                              s0: [],
                              s1: [],
                              s2: [],
                              s3: [],
                              s4: [],
                          };
                detail[rule] = [value];
                prev.push({
                    bets: 1,
                    rule: id,
                    odds,
                    multiple,
                    detail,
                });
                return prev;
            }, []);
        itemListHandle.clean();
        dispatch(sendBetList({ bet_list }));
    }, [itemList, multiple]);
    return handleBet;
};
