import { useContext } from "react";
import { useSelector } from "react-redux";
import { Color } from "./Color";
import { Regular } from "./Regular";
import { GameSwitchContext } from "@components/marksix_n1/common/GameSwitchContext";
import { GAME_KIND } from "@core/constants/marksix_n1/as5fhk6n1";
import { GAME_KIND_DESC } from "@core/constants/marksix_n1/as5fhk6n1/dictionary";
import { MultipleContext } from "@core/hooks/MultipleContext";

export const As5fhk6n1Game = () => {
    const { gameKind, setGameKind } = useContext(GameSwitchContext);
    const { itemListHandle } = useContext(MultipleContext);
    const expect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    const onSelected = (kind) => () => {
        if (kind != gameKind) {
            itemListHandle.clean();
            setGameKind(kind);
        }
    };

    return (
        <main style={{ position: "relative", flex: 1, overflow: "auto", margin: "unset" }}>
            <div className="now">当期期号：{expect}</div>
            <div className="lhc_tab">
                {Object.keys(GAME_KIND).map((kind) => (
                    <h6 key={kind} className={gameKind == kind ? "active" : ""} onClick={onSelected(kind)}>
                        {GAME_KIND_DESC[kind]}
                    </h6>
                ))}
            </div>
            {gameKind == GAME_KIND.REGULAR && <Regular />}
            {gameKind == GAME_KIND.COLOR && <Color />}
        </main>
    );
};
