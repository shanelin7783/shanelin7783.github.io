import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits, _rangeArr } from "@core/libraries/utils";
import { chunk } from "lodash";

const NUMBER_LIST = _rangeArr(0, 7);
const bet_type = 'three_serial_single';

export const ThreeSerialAll = () => {
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
                三连号单选
            </h2>
            {chunk(NUMBER_LIST, 4).map((block, index) => (
                <div key={index} className="ff28_btn_box twocon">
                    {block.map((number) => {
                        const bet_detail = `${number},${number + 1},${number + 2}`;
                        const key = `${bet_type}${bet_detail}`;
                        const isActive = itemList.has(key);
                        return (
                            <div key={number} className={`${isActive ? "active" : ""}`} onClick={onToggleItem(key, bet_detail)}>
                                <span>{number}</span>
                                <span>{number + 1}</span>
                                <span>{number + 2}</span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
