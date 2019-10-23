import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { Map } from "immutable";
import { TWO_FACE_TYEP, TWO_FACE_VALUE, GROUP_RULE_TYPE, UNDERWEAR_TYPE, UNDERWEAR_VALUE, GAME_KIND } from "@core/constants/ssc_n2";

export const useRandom = () => {
    const { itemListHandle } = useContext(MultipleContext);
    const { gameKind } = useContext(GameSwitchContext);
    const handleRandom = useCallback(() => {
        const randomList = {
            [GAME_KIND.TWO_FACE]: () => getTwoFaceRandom(),
            [GAME_KIND.GROUP_RULE]: () => getGroupRuleRandom(),
            [GAME_KIND.SELECT_POS]: () => Map(),
            [GAME_KIND.UNDERWEAR_COLOR]: () => getUnderWearColorRandom(),
        }[gameKind]();

        itemListHandle.set(randomList);
    }, [gameKind]);
    return handleRandom;
};

const getTwoFaceRandom = () => {
    const { id, rule } = TWO_FACE_TYEP[Math.floor(Math.random() * TWO_FACE_TYEP.length)];
    const value = TWO_FACE_VALUE[Math.floor(Math.random() * TWO_FACE_VALUE.length)];
    const key = `${id}${rule}${value}`;
    return Map().set(key, { id, rule, value });
};

const getGroupRuleRandom = () => {
    const { id, rule, value } = GROUP_RULE_TYPE[Math.floor(Math.random() * GROUP_RULE_TYPE.length)];
    const key = `${id}${rule}${value}`;
    return Map().set(key, { id, rule, value });
};

const getUnderWearColorRandom = () => {
    const { id, rule } = UNDERWEAR_TYPE[Math.floor(Math.random() * UNDERWEAR_TYPE.length)];
    const value = UNDERWEAR_VALUE[Math.floor(Math.random() * UNDERWEAR_VALUE.length)];
    const key = `${id}${rule}${value}`;
    return Map().set(key, { id, rule, value });
};
