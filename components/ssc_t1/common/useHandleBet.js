import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { useDispatch } from "react-redux";
import { sendBetList } from "@core/reducer/Bet";

export const useHandleBet = () => {
    const dispatch = useDispatch();
    const { multiple, itemList, totalBets, itemListHandle } = useContext(MultipleContext);
    const { game } = useContext(GameSwitchContext);
    const handleBet = useCallback(() => {
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

        const bet_list = [
            {
                detail,
                bets: totalBets,
                multiple,
                odds: game.odds,
                rule: game.id,
            },
        ];
        itemListHandle.clean();
        dispatch(sendBetList({ bet_list }));
    }, [itemList, multiple, totalBets]);
    return handleBet;
};
