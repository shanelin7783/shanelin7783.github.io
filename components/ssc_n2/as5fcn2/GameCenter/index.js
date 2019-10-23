import { useContext } from "react";
import { GameSwitchContext } from "@components/ssc_n2/common/GameSwitchContext";
import { GAME_KIND } from "@core/constants/ssc_n2";
import { TwoFace } from "./TwoFace";
import { GroupRule } from "./GroupRule";
import { UnderwearColor } from "./UnderwearColor";

export const As5fcn2Game = () => {
    const { gameKind } = useContext(GameSwitchContext);
    return (
        <main>
            {{
                [GAME_KIND.TWO_FACE]: <TwoFace />,
                [GAME_KIND.GROUP_RULE]: <GroupRule />,
                [GAME_KIND.SELECT_POS]: null,
                [GAME_KIND.UNDERWEAR_COLOR]: <UnderwearColor />,
            }[gameKind] || null}
        </main>
    );
};
