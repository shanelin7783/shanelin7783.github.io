import { useContext } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";

const TAIL_LIST = ["tail_0", "tail_1", "tail_2", "tail_3", "tail_4", "tail_5", "tail_6", "tail_7", "tail_8", "tail_9"];

export const Tail = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_n1);
    const { bet_odds_config } = config;
    return (
        <article className="lhc_kind">
            <h2>
                <span />
                正码尾数
            </h2>
            {chunk(TAIL_LIST, 5).map((block, index) => (
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
