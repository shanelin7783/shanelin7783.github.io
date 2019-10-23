import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { COLOR_LIST } from "@core/constants/pc28/oddConfig";

export const Color = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28);
    const { bet_odds_config, color_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <section className="play_number">
            {COLOR_LIST.map((bet_type) => {
                const [, , color] = bet_type.split("_");
                const numbers = color_config[`${color}_numbers`];
                const { odds = 0, bet_type_msg = "" } = bet_odds_config[bet_type] || {};
                const isActive = itemList.has(bet_type);
                return (
                    <div key={bet_type} className={`number_${color} ${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                        <div>{bet_type_msg}</div>
                        <div className={`color_${color}`}>
                            {numbers.map((value) => (
                                <div key={value}>{value}</div>
                            ))}
                        </div>
                        <div>{_floorWithDigits(odds)}</div>
                    </div>
                );
            })}
        </section>
    );
};
