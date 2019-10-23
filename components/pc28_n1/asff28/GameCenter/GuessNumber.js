import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GUESS_NUMBER_LIST } from "@core/constants/pc28_n1";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";

export const GuessNumber = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28_n1);
    const { bet_odds_config } = config;

    const odds = useMemo(() => _floorWithDigits(bet_odds_config["guess_number_0"].odds[0]), [bet_odds_config["guess_number_0"]]);

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <article className="ff28_kind">
            <h2>
                <span>赔率：{odds}</span>
                猜—个号就中奖
            </h2>
            {chunk(GUESS_NUMBER_LIST, 4).map((block, index) => (
                <div key={index} className="ff28_btn_box onecon">
                    {block.map((bet_type) => {
                        const { bet_type_msg } = bet_odds_config[bet_type];
                        const isActive = itemList.has(bet_type);
                        return (
                            <div key={bet_type} className={`${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                                <span>{bet_type_msg}</span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
