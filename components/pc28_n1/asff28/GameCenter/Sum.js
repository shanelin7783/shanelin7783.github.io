import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits, _rangeArr } from "@core/libraries/utils";
import { chunk } from "lodash";
import { SUM_LIST } from "@core/constants/pc28_n1";

export const Sum = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28_n1);
    const { bet_odds_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <article className="ff28_kind">
            <h2>
                <span />
                和值
            </h2>
            {chunk(SUM_LIST, 6).map((block, index) => (
                <div key={index} className="ff28_btn_box">
                    {block.map((bet_type) => {
                        const {
                            bet_type_msg,
                            odds: [odds],
                        } = bet_odds_config[bet_type] || {};
                        const isActive = itemList.has(bet_type);
                        return (
                            <div key={bet_type} className={`sum_con ${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                                <h5>{_floorWithDigits(odds)}</h5>
                                <h6>{bet_type_msg}</h6>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
