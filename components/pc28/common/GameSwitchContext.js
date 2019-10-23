import React, { useState } from "react";
import { KIND_TYPE } from "@core/constants/pc28";

const GameSwitchContext = React.createContext();

const GameSwitchProvider = (props) => {
    const [gameKind, setGameKind] = useState(KIND_TYPE.SUM);
    const [showGameKindMenu, toggleGameKindMenu] = useState(false);

    return (
        <GameSwitchContext.Provider value={{ showGameKindMenu, toggleGameKindMenu, gameKind, setGameKind }}>
            {props.children}
        </GameSwitchContext.Provider>
    );
};

export { GameSwitchContext, GameSwitchProvider };
