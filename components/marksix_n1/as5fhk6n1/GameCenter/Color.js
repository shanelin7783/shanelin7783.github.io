import { useMemo, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useRuleDialog } from "@core/hooks/useRuleDialog";
import { useImage } from "@core/hooks/useImage";
import { GAME_KIND } from "@core/constants/marksix_n1/as5fhk6n1";
import { RULE_DICTIONARY } from "@core/constants/marksix_n1/as5fhk6n1/dictionary";
import { RuleDialog } from "@components/common/RuleDialog";
import Big from "big.js";

const odd = (arr) => arr.filter((n) => n % 2 == 1);
const even = (arr) => arr.filter((n) => n % 2 == 0);
const bigThen = (arr, num) => arr.filter((n) => n >= num);
const smallThen = (arr, num) => arr.filter((n) => n < num);

export const Color = () => {
    const image = useImage();
    const { totalBets, multiple, itemList, itemListHandle, setMaximun } = useContext(MultipleContext);
    const { showRuleDialog, onOpenRuleDialog, onCloseRuleDialog } = useRuleDialog();
    const config = useSelector((state) => state.Config.config.marksix_n1);

    const {
        bet_odds_config,
        color_config: { red_numbers: red, blue_numbers: blue, green_numbers: green },
    } = config;
    const getOdds = (bet_type) => {
        return bet_odds_config[bet_type].odds[0];
    };
    const COLOR_MAP = useMemo(
        () => [
            { name: "全", color: "red", bet_type: "special_red", num: red, odds: getOdds("special_red") },
            { name: "全", color: "blue", bet_type: "special_blue", num: blue, odds: getOdds("special_blue") },
            { name: "全", color: "green", bet_type: "special_green", num: green, odds: getOdds("special_green") },
            { name: "大", color: "red", bet_type: "special_red_big", num: bigThen(red, 27), odds: getOdds("special_red_big") },
            { name: "大", color: "blue", bet_type: "special_blue_big", num: bigThen(blue, 25), odds: getOdds("special_blue_big") },
            { name: "大", color: "green", bet_type: "special_green_big", num: bigThen(green, 27), odds: getOdds("special_green_big") },
            { name: "小", color: "red", bet_type: "special_red_small", num: smallThen(red, 27), odds: getOdds("special_red_small") },
            { name: "小", color: "blue", bet_type: "special_blue_small", num: smallThen(blue, 25), odds: getOdds("special_blue_small") },
            { name: "小", color: "green", bet_type: "special_green_small", num: smallThen(green, 27), odds: getOdds("special_green_small") },
            { name: "单", color: "red", bet_type: "special_red_odd", num: odd(red), odds: getOdds("special_red_odd") },
            { name: "单", color: "blue", bet_type: "special_blue_odd", num: odd(blue), odds: getOdds("special_blue_odd") },
            { name: "单", color: "green", bet_type: "special_green_odd", num: odd(green), odds: getOdds("special_green_odd") },
            { name: "双", color: "red", bet_type: "special_red_even", num: even(red), odds: getOdds("special_red_even") },
            { name: "双", color: "blue", bet_type: "special_blue_even", num: even(blue), odds: getOdds("special_blue_even") },
            { name: "双", color: "green", bet_type: "special_green_even", num: even(green), odds: getOdds("special_green_even") },
        ],
        [red, blue, green],
    );

    useEffect(() => {
        function getMaximum(color) {
            const list = [...itemList.values()].filter((result) => result.color == color);
            const all = Math.max(...list.filter(({ name }) => name == "全").map(({ odds }) => odds), 0);
            const bigSmall = Math.max(...list.filter(({ name }) => name == "大" || name == "小").map(({ odds }) => odds), 0);
            const parity = Math.max(...list.filter(({ name }) => name == "单" || name == "双").map(({ odds }) => odds), 0);
            return Big(all)
                .plus(bigSmall)
                .plus(parity)
                .toFixed(4);
        }
        const maxRed = getMaximum("red");
        const maxBlue = getMaximum("blue");
        const maxGreen = getMaximum("green");
        const maximum = Math.max(maxRed, maxBlue, maxGreen);
        setMaximun(maximum, 1);
    }, [totalBets, multiple]);

    return (
        <article className="lhc_kind color">
            <h2></h2>
            <span></span>
            <img src={image("info_btn.png")} className="info_btn" onClick={onOpenRuleDialog} />
            <div className="lhc_btn_title">
                <div>红波</div>
                <div>蓝波</div>
                <div>绿波</div>
            </div>
            {chunk(COLOR_MAP, 3).map((block, index) => (
                <div key={index} className="lhc_btn_box">
                    {block.map(({ bet_type, color, name, num, odds }) => {
                        return (
                            <div
                                key={bet_type}
                                className={`${color}_con ${itemList.has(bet_type) ? "active" : ""}`}
                                onClick={() => itemListHandle.toggle(bet_type, { bet_type, bet_detail: "", name, color, odds })}
                            >
                                <h6>{name}</h6>
                                <div className="btntxt">{num.join(",")}</div>
                                <p>{_floorWithDigits(odds, { digits: 2 })}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
            <RuleDialog
                state={showRuleDialog}
                close={onCloseRuleDialog}
                title={RULE_DICTIONARY[GAME_KIND.COLOR].title}
                desc={RULE_DICTIONARY[GAME_KIND.COLOR].desc}
            />
        </article>
    );
};
