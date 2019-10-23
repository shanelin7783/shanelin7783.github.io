import { useContext, useCallback } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "./GameSwitchContext";
import { Map } from "immutable";
import { KIND_TYPE } from "@core/constants/pc28";
import {
    SUM_LIST,
    DIVISOR_THREE_LIST,
    BIG_SMALL_LIST,
    EXTREMELY_BIG_SMALL_LIST,
    SIDE_LIST,
    GUESS_NUMBER_LIST,
    COLOR_LIST,
    LEOPARD_LIST,
} from "@core/constants/pc28/oddConfig";

export const useRandom = () => {
    const { itemListHandle } = useContext(MultipleContext);
    const { gameKind } = useContext(GameSwitchContext);
    const handleRandom = useCallback(() => {
        const randomBetType = {
            [KIND_TYPE.SUM]: () => getRandomType(SUM_LIST),
            [KIND_TYPE.DIVISOR_THREE]: () => getRandomType(DIVISOR_THREE_LIST),
            [KIND_TYPE.BIG_SMALL]: () => getRandomType(BIG_SMALL_LIST),
            [KIND_TYPE.EXTREMELY_BIG_SMALL]: () => getRandomType(EXTREMELY_BIG_SMALL_LIST),
            [KIND_TYPE.SIDE]: () => getRandomType(SIDE_LIST),
            [KIND_TYPE.GUESS_NUMBER]: () => getRandomType(GUESS_NUMBER_LIST),
            [KIND_TYPE.COLOR]: () => getRandomType(COLOR_LIST),
            [KIND_TYPE.LEOPARD]: () => getRandomType(LEOPARD_LIST),
        }[gameKind]();

        const randomList = Map().set(randomBetType, { bet_type: randomBetType });
        itemListHandle.set(randomList);
    }, [gameKind]);
    return handleRandom;
};

const getRandomType = (list) => list[Math.floor(Math.random() * list.length)];
