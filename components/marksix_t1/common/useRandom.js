import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { ZODIAC_AMOUNT_LIST } from "@core/constants/marksix/oddConfig";
import { SPECIAL_BLUE, SPECIAL_RED, SPECIAL_GREEN, TAB_TYPE } from "@core/constants/marksix_t1";
import { random } from "lodash";
import { Map } from "immutable";

export const useRandom = () => {
    const { itemListHandle } = useContext(MultipleContext);
    const { gameCategory, gameKind } = useContext(GameSwitchContext);
    const handleRandom = useCallback(() => {
        const randomList = {
            [TAB_TYPE.ZODIAC_AMOUNT]: () => getZodiacAmountRandomValue(),
            [TAB_TYPE.SPECIAL]: () => getSpecialRandomValue(),
            [TAB_TYPE.ZODIAC]: () => getZodiacRandomValue(gameKind),
            [TAB_TYPE.REGULAR]: () => getRegularRandomValue(gameKind),
        }[gameCategory]();
        itemListHandle.set(randomList);
    }, [gameCategory, gameKind]);
    return handleRandom;
};
const getSpecialRandomValue = () => {
    const allSpecial = [...SPECIAL_BLUE, ...SPECIAL_RED, ...SPECIAL_GREEN];
    const randomNumber = random(0, allSpecial.length - 1);
    const bet_type = allSpecial[randomNumber];
    return Map().set(bet_type, { bet_type });
};

const getZodiacAmountRandomValue = () => {
    const randomNumber = random(0, ZODIAC_AMOUNT_LIST.length - 1);
    const bet_type = ZODIAC_AMOUNT_LIST[randomNumber];
    return Map().set(bet_type, { bet_type });
};

const getZodiacRandomValue = (gameKind) => {
    const lastNumber = random(1, 12);
    const bet_type = `${gameKind}_${lastNumber}`;
    return Map().set(bet_type, { bet_type });
};

const getRegularRandomValue = (gameKind) => {
    const bet_detail = String(random(1, 49));
    const key = `${gameKind}${bet_detail}`;
    return Map().set(key, { bet_type: gameKind, bet_detail });
};
