import { useContext } from "react";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { GAME_KIND } from "@core/constants/ssc_n2";
import { GAME_KIND_DESC } from "@core/constants/ssc_n2/as5fcn2/dictionary";

export const As5fcn2GameSwitchMenu = () => {
    const { gameKind, setGameKind } = useContext(GameSwitchContext);

    const onConfirm = (kind) => () => {
        setGameKind(kind);
    };

    return (
        <div className="lhc_tab">
            {Object.keys(GAME_KIND).map((key) => {
                const kind = GAME_KIND[key];
                const isActive = gameKind == kind;
                return (
                    <h6 key={kind} className={`${isActive ? "active" : ""}`} data-tabid={kind} onClick={onConfirm(kind)}>
                        {GAME_KIND_DESC[kind]}
                    </h6>
                );
            })}
        </div>
    );
};
