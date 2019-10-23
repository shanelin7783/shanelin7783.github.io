import { useContext } from "react";
import { Regular } from "./Regular";
import { Color } from "./Color";
import { Zodiac } from "./Zodiac";
import { ZodiacAmount } from "./ZodiacAmount";
import { TAB_TYPE } from "@core/constants/marksix_t1";
import { GameSwitchContext } from "../../common/GameSwitchContext";

export const As5fhk6Game = () => {
    const { gameCategory } = useContext(GameSwitchContext);
    return (
        <article style={{ flex: 1, overflow: "auto" }}>
            {{
                [TAB_TYPE.REGULAR]: <Regular />,
                [TAB_TYPE.ZODIAC_AMOUNT]: <ZodiacAmount />,
                [TAB_TYPE.ZODIAC]: <Zodiac />,
                [TAB_TYPE.SPECIAL]: <Color />,
            }[gameCategory] || null}
        </article>
    );
};
