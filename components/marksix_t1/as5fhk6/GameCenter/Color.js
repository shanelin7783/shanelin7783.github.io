import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { SPECIAL_RED_DESC, SPECIAL_BLUE_DESC, SPECIAL_GREEN_DESC } from "@core/constants/marksix_t1/as5fhk6/dictionary";

const Tab = ["", "_big", "_small", "_odd", "_even"];

export const Color = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_t1);
    const { bet_odds_config } = config;

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <main>
            <div className="main_number2">
                <h2 className="active">分为「红婚礼、蓝异鬼、绿苔原」三个场景，从中选择一注，所选型态与开奖结果相同即为中奖。</h2>
                <article className="lhc_kind2">
                    <div className="topborder">
                        <div className="lhc_btn_title">
                            <span>场景</span>
                        </div>
                    </div>
                    <div className="lhc_btn_stit">
                        <div className="rcon">红婚礼</div>
                        <div className="bcon">蓝异鬼</div>
                        <div className="gcon">绿苔原</div>
                    </div>

                    {Tab.map((value) => {
                        const redBetType = `special_red${value}`;
                        const blueBetType = `special_blue${value}`;
                        const greenBetType = `special_green${value}`;

                        const blue_odds = [bet_odds_config[blueBetType].odds];
                        const red_odds = [bet_odds_config[redBetType].odds];
                        const green_odds = [bet_odds_config[greenBetType].odds];
                        return (
                            <div className={`lhc_btn_box`} key={value}>
                                <div className={`rcon ${itemList.has(redBetType) && "active"}`} onClick={onToggleItem(redBetType)}>
                                    {SPECIAL_RED_DESC[redBetType]}
                                    <br />
                                    <span>{_floorWithDigits(red_odds)}</span>
                                </div>
                                <div className={`bcon ${itemList.has(blueBetType) && "active"}`} onClick={onToggleItem(blueBetType)}>
                                    {SPECIAL_BLUE_DESC[blueBetType]}
                                    <br />
                                    <span>{_floorWithDigits(blue_odds)}</span>
                                </div>
                                <div className={`gcon ${itemList.has(greenBetType) && "active"}`} onClick={onToggleItem(greenBetType)}>
                                    {SPECIAL_GREEN_DESC[greenBetType]}
                                    <br />
                                    <span>{_floorWithDigits(green_odds)}</span>
                                </div>
                            </div>
                        );
                    })}
                </article>
            </div>
        </main>
    );
};
