import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits, _rangeArr, _pad } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useRuleDialog } from "@core/hooks/useRuleDialog";
import { useImage } from "@core/hooks/useImage";
import { GAME_KIND } from "@core/constants/marksix_n1/as5fhk6n1";
import { RULE_DICTIONARY } from "@core/constants/marksix_n1/as5fhk6n1/dictionary";
import { RuleDialog } from "@components/common/RuleDialog";

const REGULAR_ITEM = chunk(_rangeArr(1, 49), 5);

const BET_TYPE = "regular_number";

export const Regular = () => {
    const image = useImage();
    const { multiple, totalBets, itemList, itemListHandle, setMaximun } = useContext(MultipleContext);
    const { showRuleDialog, onOpenRuleDialog, onCloseRuleDialog } = useRuleDialog();
    const config = useSelector((state) => state.Config.config.marksix_n1);
    const { bet_odds_config, numbers_config } = config;
    const [odds = 0] = bet_odds_config[BET_TYPE].odds;

    const onToggleItem = (key, number) => () => {
        itemListHandle.toggle(key, { bet_type: BET_TYPE, bet_detail: String(number) });
    };

    useEffect(() => {
        setMaximun(odds);
    }, [totalBets, multiple]);

    return (
        <article className="lhc_kind positive">
            <h2></h2>
            <span>赔率：{Number(odds).toFixed(4)}</span>
            <img src={image("info_btn.png")} className="info_btn" onClick={onOpenRuleDialog}/>
            {REGULAR_ITEM.map((block, index) => (
                <div className="lhc_btn_box" key={index}>
                    {block.map((number) => {
                        const color = numbers_config[number];
                        const key = `${BET_TYPE}${number}`;
                        const isActive = itemList.has(key);
                        return (
                            <div key={key} className={`${color}_con ${isActive ? "active" : ""}`} onClick={onToggleItem(key, number)}>
                                <h6>{_pad(number, 2)}</h6>
                            </div>
                        );
                    })}
                </div>
            ))}
            <RuleDialog state={showRuleDialog} close={onCloseRuleDialog} title={RULE_DICTIONARY[GAME_KIND.REGULAR].title} desc={RULE_DICTIONARY[GAME_KIND.REGULAR].desc}/>
        </article>
    );
};
