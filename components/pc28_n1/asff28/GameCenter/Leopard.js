import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits, _rangeArr } from "@core/libraries/utils";
import { chunk } from "lodash";

const NUMBER_LIST = _rangeArr(0, 9);

const bet_type = "three_identical_single";

export const Leopard = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.pc28_n1);
    const { bet_odds_config } = config;

    const odds = useMemo(() => _floorWithDigits(bet_odds_config[bet_type].odds[0]), [bet_odds_config[bet_type]]);

    const onToggleItem = (key, bet_detail) => () => {
        itemListHandle.toggle(key, { bet_type, bet_detail });
    };

    return (
        <article className="ff28_kind">
            <h2>
                <span>赔率：{odds}</span>
                豹子
            </h2>
            {chunk(NUMBER_LIST, 5).map((block, index) => (
                <div key={index} className="ff28_btn_box threecon">
                    {block.map((number) => {
                        const bet_detail = `${number},${number},${number}`;
                        const key = `${bet_type}${bet_detail}`;
                        const isActive = itemList.has(key);
                        return (
                            <div key={key} className={`${isActive ? "active" : ""} `} onClick={onToggleItem(key, bet_detail)}>
                                <span>{number}</span>
                                <span>{number}</span>
                                <span>{number}</span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
