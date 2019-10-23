import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { LEOPARD_LIST } from "@core/constants/pc28/oddConfig";
import { useImage } from "@core/hooks/useImage";

export const Leopard = () => {
    const image = useImage();
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28);
    const { bet_odds_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <section className="play_number">
            {LEOPARD_LIST.map((bet_type) => {
                const { odds = 0 } = bet_odds_config[bet_type] || {};
                const isActive = itemList.has(bet_type);
                return (
                    <div key={bet_type} className={`number_leopard ${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                        <div className="leopard_con">
                            <img src={image("img_leo.png")} alt="" />+
                            <img src={image("img_leo.png")} alt="" />+
                            <img src={image("img_leo.png")} alt="" />
                        </div>
                        <div>{_floorWithDigits(odds)}</div>
                    </div>
                );
            })}
        </section>
    );
};
