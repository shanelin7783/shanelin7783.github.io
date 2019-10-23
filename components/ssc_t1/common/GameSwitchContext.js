import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { GAME_KIND } from "@core/constants/ssc_t1";

const GameSwitchContext = React.createContext();

const GameSwitchProvider = (props) => {
    const config = useSelector((state) => state.Config.config.ssc_t1) || [];
    const gameConfig = useMemo(() => {
        return config.reduce((prev, curr) => {
            const list = curr.list.reduce((prev, curr) => {
                const game = curr.game.filter(({ id }) => GAME_KIND.has(id));
                if (game.length > 0) {
                    prev.push({ name: curr.name, game });
                }
                return prev;
            }, []);
            if (list.length > 0) {
                prev.push({ name: curr.name, list });
            }
            return prev;
        }, []);
    }, [config]);

    const [gameTab, setGameTab] = useState(0);
    const [game, setGame] = useState(gameConfig[0].list[0].game[0]);
    const [showGameSwtichMenu, toggleGameSwitchMenu] = useState(false);

    return (
        <GameSwitchContext.Provider value={{ gameConfig, gameTab, setGameTab, showGameSwtichMenu, toggleGameSwitchMenu, game, setGame }}>
            {props.children}
        </GameSwitchContext.Provider>
    );
};

export { GameSwitchContext, GameSwitchProvider };
