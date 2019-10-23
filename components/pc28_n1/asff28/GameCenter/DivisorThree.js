import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits, _rangeArr } from "@core/libraries/utils";
import { DIVISOR_THREE_LIST } from "@core/constants/pc28_n1";

export const DivisorThree = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28_n1);
    const { bet_odds_config } = config;

    const odds = useMemo(() => _floorWithDigits(bet_odds_config[DIVISOR_THREE_LIST[0]].odds[0]), [bet_odds_config[DIVISOR_THREE_LIST[0]]]);

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <article className="ff28_kind">
            <h2>
                <span>赔率：{odds}</span>
                除三余数
            </h2>
            <div className="ff28_btn_box">
                {DIVISOR_THREE_LIST.map((bet_type) => {
                    const isActive = itemList.has(bet_type);
                    return (
                        <div key={bet_type} className={`divided_con ${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                            <h6>{bet_odds_config[bet_type].bet_type_msg}</h6>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};
