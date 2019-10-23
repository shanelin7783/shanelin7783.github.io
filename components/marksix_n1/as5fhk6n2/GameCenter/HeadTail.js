import { useContext } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";

const HEAD_TAIL_LIST = [
    "special_head_0",
    "special_head_1",
    "special_head_2",
    "special_head_3",
    "special_head_4",
    "special_tail_1",
    "special_tail_2",
    "special_tail_3",
    "special_tail_4",
    "special_tail_5",
    "special_tail_6",
    "special_tail_7",
    "special_tail_8",
    "special_tail_9",
    "special_tail_0",
];

export const HeadTail = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_n1);
    const { bet_odds_config } = config;
    return (
        <article className="lhc_kind">
            <h2>
                <span />
                特码头尾数
            </h2>
            {chunk(HEAD_TAIL_LIST, 5).map((block, index) => (
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
