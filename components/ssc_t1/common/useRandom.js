import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { ZODIAC_AMOUNT_LIST } from "@core/constants/marksix/oddConfig";
import { SPECIAL_BLUE, SPECIAL_RED, SPECIAL_GREEN, TAB_TYPE } from "@core/constants/marksix_t1";
import { take, shuffle, isEmpty } from "lodash";
import { Map } from "immutable";

export const useRandom = () => {
    const { itemListHandle } = useContext(MultipleContext);
    const { game } = useContext(GameSwitchContext);

    const getRandomItem = useCallback(() => {
        const { rule } = game;
        const randomCategory = take(shuffle(Object.keys(rule)), 1)[0];
        return Object.keys(rule).map((category) => {
            const { limit = [], num = [] } = rule[category];
            const [min = 0] = limit;
            const numbers = take(shuffle(num), min == 0 && category == randomCategory ? 1 : min);
            return { category, numbers };
        });
    }, [game]);

    const handleRandom = useCallback(() => {
        getRandomItem().forEach(({ category, numbers }) => {
            const itemList = numbers.reduce((prev, number) => {
                const key = `${game.id}${category}${number}`;
                prev = prev.set(key, { [category]: number });
                return prev;
            }, Map());
            itemListHandle.set(itemList);
        });
    }, [game]);
    return handleRandom;
};
