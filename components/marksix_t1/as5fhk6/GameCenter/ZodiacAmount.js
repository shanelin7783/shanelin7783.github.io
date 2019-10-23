import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { ZODIAC_AMOUNT_LIST } from "@core/constants/marksix/oddConfig";
import { chunk } from "lodash";

export const ZodiacAmount = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_t1);
    const { bet_odds_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <main>
            <div className="main_number2">
                <h2 className="active">从8种组合中选择一个型态下注。如下注的型态，与开奖结果7个号码的所属型态相同，即为中奖。</h2>
                <article className="lhc_kind2">
                    <div className="topborder">
                        <div className="lhc_btn_title">
                            <span>肖数</span>
                        </div>
                    </div>
                    {chunk(ZODIAC_AMOUNT_LIST, 3).map((block, index) => (
                        <div className={"lhc_btn_box"} key={`box_${index}`}>
                            {block.map((key) => {
                                const {
                                    bet_type,
                                    bet_type_msg,
                                    odds: [odds],
                                } = bet_odds_config[key];
                                const isActive = itemList.has(bet_type);
                                return (
                                    <div key={key} className={`rcon ${isActive && "active"}`} onClick={onToggleItem(bet_type)}>
                                        {bet_type_msg}
                                        <br />
                                        <span>{_floorWithDigits(odds)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </article>
            </div>
        </main>
    );
};
