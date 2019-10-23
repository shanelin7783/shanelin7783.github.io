import { Fragment, useMemo, useCallback, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { useClickOutside } from "@core/hooks/useClickOutside";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useVersion } from "@core/hooks/useVersion";

export const As5fcGameSwitchMenu = () => {
    const image = useImage();
    const getVersion = useVersion();
    const { gameConfig, gameTab, setGameTab, showGameSwtichMenu, toggleGameSwitchMenu, game, setGame } = useContext(GameSwitchContext);
    const { itemListHandle } = useContext(MultipleContext);
    const meunRef = useClickOutside(showGameSwtichMenu, toggleGameSwitchMenu);
    const gameTabName = useMemo(() => {
        const { name = "" } = gameConfig[gameTab] || {};
        return name;
    }, [game]);

    const gameList = useMemo(() => {
        const { list = [] } = gameConfig[gameTab] || {};
        return list;
    }, [gameTab, game]);

    const onConfirm = (game) => () => {
        setGame(game);
        itemListHandle.clean();
        toggleGameSwitchMenu(false);
    };

    return (
        <Fragment>
            <div className="title" onClick={getVersion}>
                {gameTabName}
                {game.name}
            </div>
            <div className="topbtn" onClick={() => toggleGameSwitchMenu(!showGameSwtichMenu)}>
                <img src={image(showGameSwtichMenu ? "drop_up.png" : "drop_down.png")} alt="" />
            </div>
            <div ref={meunRef} className="dropmenu" style={{ display: showGameSwtichMenu ? "block" : "none" }}>
                <article>
                    <section className="lhc_menu">
                        {gameConfig.map(({ name }, index) => (
                            <a key={name} className={`${index === gameTab ? "active" : ""}`} onClick={() => setGameTab(index)}>
                                {name}
                            </a>
                        ))}
                    </section>
                </article>
                <article>
                    <section className="lhc_tab">
                        {gameList.map((list) => (
                            <dl key={list.name}>
                                <dt>{list.name}</dt>
                                <dd>
                                    {list.game.map((item) => (
                                        <div key={item.id} className={item.id === game.id ? "active" : ""} onClick={onConfirm(item)}>
                                            {item.name}
                                        </div>
                                    ))}
                                </dd>
                            </dl>
                        ))}
                    </section>
                </article>
            </div>
        </Fragment>
    );
};
