import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits, _rangeArr } from "@core/libraries/utils";
import { chunk } from "lodash";

const NUMBER_LIST = _rangeArr(0, 8).reduce((prev, curr) => {
    for (let i = curr + 1; i <= 9; i++) prev.push(`${curr},${i}`);
    return prev;
}, []);

const bet_type = "two_different";

export const TwoDifferent = () => {
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
                二不同号
            </h2>
            {chunk(NUMBER_LIST, 6).map((block, index) => (
                <div key={index} className="ff28_btn_box twocon">
                    {block.map((number) => {
                        const key = `${bet_type}${number}`;
                        const isActive = itemList.has(key);
                        const [number1, number2] = number.split(",");
                        return (
                            <div key={key} className={`${isActive ? "active" : ""}`} onClick={onToggleItem(key, number)}>
                                <span>{number1}</span>
                                <span>{number2}</span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
