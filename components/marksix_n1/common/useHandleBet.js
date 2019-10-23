import { useContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { sendBetList } from "@core/reducer/Bet";

export const useHandleBet = () => {
    const dispatch = useDispatch();
    const { multiple, itemList, itemListHandle } = useContext(MultipleContext);
    const handleBet = useCallback(() => {
        const bet_list = itemList
            .keySeq()
            .toArray()
            .reduce((prev, curr) => {
                const { bet_type, bet_detail } = itemList.get(curr);
                prev.push({
                    bet_type,
                    bet_detail,
                    multiple,
                    bet_amount: 1,
                });
                return prev;
            }, []);
        itemListHandle.clean();
        dispatch(sendBetList({ bet_list }));
    }, [itemList, multiple]);
    return handleBet;
};
