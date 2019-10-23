import React, { useState } from "react";
import { GAME_KIND } from "@core/constants/marksix_n1/as5fhk6n1";

const GameSwitchContext = React.createContext();

const GameSwitchProvider = (props) => {
    const [gameKind, setGameKind] = useState(GAME_KIND.REGULAR);

    return <GameSwitchContext.Provider value={{ gameKind, setGameKind }}>{props.children}</GameSwitchContext.Provider>;
};

export { GameSwitchContext, GameSwitchProvider };
