import React, { useState } from "react";
import { GAME_KIND } from "@core/constants/ssc_n2";

const GameSwitchContext = React.createContext();

const GameSwitchProvider = (props) => {
    const [gameKind, setGameKind] = useState(GAME_KIND.TWO_FACE);

    return (
        <GameSwitchContext.Provider value={{ gameKind, setGameKind }}>
            {props.children}
        </GameSwitchContext.Provider>
    );
};

export { GameSwitchContext, GameSwitchProvider };
