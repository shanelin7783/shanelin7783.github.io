import { useCallback, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { TAB_TYPE } from "@core/constants/marksix_t1";
import { TAB_TYPE_DESC } from "@core/constants/marksix_t1/as5fhk6/dictionary";

export const As5fhk6GameCategoryMenu = () => {
    const image = useImage();
    const { gameCategory, setGameCategory, toggleGameCategoryMenu } = useContext(GameSwitchContext);

    const onConfirm = (value) => () => {
        setGameCategory(value);
        onClose();
        window.scrollTo(0, 0);
    };

    const onClose = () => {
        toggleGameCategoryMenu(false);
    };

    return (
        <div className="window_con2">
            <div className="window_list">
                <p>请选择一种玩法</p>
                {Object.keys(TAB_TYPE).map((value) => (
                    <button key={value} className={`${value === gameCategory ? "active" : ""}`} onClick={onConfirm(value)}>
                        {TAB_TYPE_DESC[value]}
                    </button>
                ))}
                <img className="list-close" onClick={onClose} src={image("closegame.png")} alt="" />
            </div>
            <div className="window_con_bg2" onClick={onClose} />
        </div>
    );
};
