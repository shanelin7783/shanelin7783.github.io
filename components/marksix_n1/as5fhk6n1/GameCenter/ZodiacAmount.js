import { useContext } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { ZODIAC_AMOUNT_LIST } from "@core/constants/marksix/oddConfig";

export const ZodiacAmount = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_n1);
    const { bet_odds_config } = config;

    return (
        <article className="lhc_kind head play_number">
            <h2>
                <span />
                总肖
            </h2>
            {chunk(ZODIAC_AMOUNT_LIST, 4).map((block, index) => (
                <div key={index} className="lhc_btn_box">
                    {block.map((bet_type) => {
                        const { odds = 0, bet_type_msg = "" } = bet_odds_config[bet_type] || {};
                        return (
                            <div
                                key={bet_type}
                                className={`numcon ${itemList.has(bet_type) ? "active" : ""}`}
                                onClick={() => itemListHandle.toggle(bet_type, { bet_type, bet_detail: "" })}
                            >
                                <h6>{bet_type_msg}</h6>
                                <p>{_floorWithDigits(odds, { digits: 2 })}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
