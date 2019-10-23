import React, { useState } from "react";
import { TAB_TYPE } from "@core/constants/marksix_t1";

const GameSwitchContext = React.createContext();

const GameSwitchProvider = (props) => {
    const [gameCategory, setGameCategory] = useState(TAB_TYPE.REGULAR);
    const [gameKind, setGameKind] = useState("");
    const [showGameCategoryMenu, toggleGameCategoryMenu] = useState(false);

    return (
        <GameSwitchContext.Provider value={{ gameCategory, setGameCategory, showGameCategoryMenu, toggleGameCategoryMenu, gameKind, setGameKind }}>
            {props.children}
        </GameSwitchContext.Provider>
    );
};

export { GameSwitchContext, GameSwitchProvider };
