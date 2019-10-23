import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { SUM_LIST } from "@core/constants/pc28/oddConfig";

export const Sum = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28);
    const { bet_odds_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <section className="play_number">
            {chunk(SUM_LIST, 4).map((block, index) => (
                <div key={index} className="number_con">
                    {block.map((bet_type) => {
                        const { odds = 0, bet_type_msg = "" } = bet_odds_config[bet_type] || {};
                        const isActive = itemList.has(bet_type)
                        return (
                            <div key={bet_type} className={`number_box1 ${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                                <div>{bet_type_msg}</div>
                                <div>{_floorWithDigits(odds)}</div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </section>
    );
};
