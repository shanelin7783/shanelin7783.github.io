import { useCallback, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { KINDS_NAME } from "@core/constants/pc28/dictionary";
import { useClickOutside } from "@core/hooks/useClickOutside";
import { KIND_TYPE } from "@core/constants/pc28";
import { chunk } from "lodash";

export const As5f28GameKindMenu = () => {
    const image = useImage();
    const { showGameKindMenu, toggleGameKindMenu, gameKind, setGameKind } = useContext(GameSwitchContext);
    const navRef = useClickOutside(showGameKindMenu, toggleGameKindMenu);
    const onConfirm = (value) => (event) => {
        event.stopPropagation();
        setGameKind(value);
        onClose();
    };

    const onClose = () => {
        toggleGameKindMenu(false);
    };
    return (
        <nav onClick={() => toggleGameKindMenu(!showGameKindMenu)}>
            <div className="play_option">玩法选择</div>
            <h2>{KINDS_NAME[gameKind]}</h2>
            <div className="play_arr">
                <img src={image(`${showGameKindMenu ? "nav_down.png" : "nav_up.png"}`)} alt="" />
            </div>
            <div ref={navRef} className={`menu ${showGameKindMenu ? "active" : ""}`}>
                <h3>请选择一玩法</h3>
                {chunk(Object.keys(KIND_TYPE), 3).map((block, index) => (
                    <ul key={index}>
                        {block.map((kind) => (
                            <li key={kind} className={`${gameKind === kind ? "active" : ""}`}>
                                <a onClick={onConfirm(kind)}>{KINDS_NAME[kind]}</a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </nav>
    );
};
