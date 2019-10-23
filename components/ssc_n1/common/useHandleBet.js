import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useDispatch } from "react-redux";
import { sendBetList } from "@core/reducer/Bet";

export const useHandleBet = () => {
    const dispatch = useDispatch();
    const { multiple, itemList, itemListHandle } = useContext(MultipleContext);
    const handleBet = useCallback(() => {
        const bet_list = itemList
            .keySeq()
            .toArray()
            .reduce((prev, curr) => {
                const currentItem = itemList.get(curr);
                const isSameId = prev.some((value) => value.rule === currentItem.id);
                if (isSameId && currentItem.category !== "s98") {
                    prev.find((v) => v.rule === itemList.get(curr).id).detail[currentItem.category].push(currentItem.value);
                    prev.find((v) => v.rule === itemList.get(curr).id).bets++;
                } else {
                    const detail = {};
                    Object.keys(currentItem.rule).forEach((it) => (detail[it] = []));
                    detail[currentItem.category] = [currentItem.value];
                    const odds = currentItem.category === "s98" ? currentItem.rule.s98.num_odds[currentItem.value] : currentItem.odds;
                    prev.push({
                        bets: 1,
                        rule: currentItem.id,
                        odds,
                        multiple,
                        detail,
                    });
                }
                return prev;
            }, []);
        itemListHandle.clean();
        dispatch(sendBetList({ bet_list }));
    }, [itemList, multiple]);
    return handleBet;
};
