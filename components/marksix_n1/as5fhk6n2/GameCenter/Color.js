import { useMemo, useContext } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";

const odd = (arr) => arr.filter((n) => n % 2 == 1);
const even = (arr) => arr.filter((n) => n % 2 == 0);
const bigThen = (arr, num) => arr.filter((n) => n >= num);
const smallThen = (arr, num) => arr.filter((n) => n < num);

export const Color = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_n1);
    const {
        bet_odds_config,
        color_config: { red_numbers: red, blue_numbers: blue, green_numbers: green },
    } = config;
    const COLOR_LIST = useMemo(
        () => [
            { name: "全", color: "red", bet_type: "special_red", num: red },
            { name: "全", color: "blue", bet_type: "special_blue", num: blue },
            { name: "全", color: "green", bet_type: "special_green", num: green },
            { name: "大", color: "red", bet_type: "special_red_big", num: bigThen(red, 27) },
            { name: "大", color: "blue", bet_type: "special_blue_big", num: bigThen(blue, 25) },
            { name: "大", color: "green", bet_type: "special_green_big", num: bigThen(green, 27) },
            { name: "小", color: "red", bet_type: "special_red_small", num: smallThen(red, 27) },
            { name: "小", color: "blue", bet_type: "special_blue_small", num: smallThen(blue, 25) },
            { name: "小", color: "green", bet_type: "special_green_small", num: smallThen(green, 27) },
            { name: "单", color: "red", bet_type: "special_red_odd", num: odd(red) },
            { name: "单", color: "blue", bet_type: "special_blue_odd", num: odd(blue) },
            { name: "单", color: "green", bet_type: "special_green_odd", num: odd(green) },
            { name: "双", color: "red", bet_type: "special_red_even", num: even(red) },
            { name: "双", color: "blue", bet_type: "special_blue_even", num: even(blue) },
            { name: "双", color: "green", bet_type: "special_green_even", num: even(green) },
        ],
        [red, blue, green],
    );
    return (
        <article className="lhc_kind color play_number">
            <h2>
                <span />
                特码色波
            </h2>
            <div className="lhc_btn_title">
                <div>红波</div>
                <div>蓝波</div>
                <div>绿波</div>
            </div>
            {chunk(COLOR_LIST, 3).map((block, index) => (
                <div key={index} className="lhc_btn_box">
                    {block.map(({ bet_type, color, name, num }) => {
                        const {
                            odds: [odds],
                        } = bet_odds_config[bet_type];
                        return (
                            <div
                                key={bet_type}
                                className={`${color}_con ${itemList.has(bet_type) ? "active" : ""}`}
                                onClick={() => itemListHandle.toggle(bet_type, { bet_type, bet_detail: "" })}
                            >
                                <h6>{name}</h6>
                                <div className="btntxt">{num.join(",")}</div>
                                <p>{_floorWithDigits(odds, { digits: 2 })}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
