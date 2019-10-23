import { useContext } from "react";
import { GameSwitchContext } from "../../common/GameSwitchContext";
import { KIND_TYPE } from "@core/constants/pc28";
import { Sum } from "./Sum";
import { DivisorThree } from "./DivisorThree";
import { BigSmall } from "./BigSmall";
import { ExtremelyBigSmall } from "./ExtremelyBigSmall";
import { Color } from "./Color";
import { Side } from "./Side";
import { Leopard } from "./Leopard";
import { GuessNumber } from "./GuessNumber";

export const As5f28Game = () => {
    const { gameKind } = useContext(GameSwitchContext);
    return (
        <article style={{ flex: 1, overflow: "auto" }}>
            {{
                [KIND_TYPE.SUM]: <Sum />,
                [KIND_TYPE.DIVISOR_THREE]: <DivisorThree />,
                [KIND_TYPE.BIG_SMALL]: <BigSmall />,
                [KIND_TYPE.EXTREMELY_BIG_SMALL]: <ExtremelyBigSmall />,
                [KIND_TYPE.COLOR]: <Color />,
                [KIND_TYPE.SIDE]: <Side />,
                [KIND_TYPE.LEOPARD]: <Leopard />,
                [KIND_TYPE.GUESS_NUMBER]: <GuessNumber />,
            }[gameKind] || null}
        </article>
    );
};
