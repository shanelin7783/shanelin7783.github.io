import { useContext, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { useRuleDialog } from "@core/hooks/useRuleDialog";
import { RuleDialog } from "@components/common/RuleDialog";
import { GAME_KIND } from "@core/constants/ssc_n1";
import { RULE_DIALOG_DICTIONARY } from "@core/constants/ssc_n1/as5fcn1/dictionary";
import { useVersion } from "@core/hooks/useVersion";

export const As5fcn1Game = () => {
    const image = useImage();
    const getVersion = useVersion();
    const { showRuleDialog, onOpenRuleDialog, onCloseRuleDialog } = useRuleDialog();
    const { totalBets, multiple, itemList, itemListHandle, setMaximun } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.ssc_n1);
    const [
        {
            list: [{ game }],
        },
    ] = config;
    const expect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    const { id, odds, rule } = useMemo(() => game.find(({ id }) => id == "ssc_n1_dxds") || {}, [game]);

    useEffect(() => {
        setMaximun(odds);
    }, [totalBets, multiple]);

    return (
        <div style={{ flex: 1, overflow: "auto", width: "90%", padding: "0 5vw", position: "relative" }}>
            <div className="now-period" onClick={getVersion}>
                当期期号:
                <span>{expect}</span>
            </div>
            <article className="lhc_kind">
                <div className="topborder">
                    <span>赔率：{odds}</span>
                    <img src={image(`${id}.png`)} />
                </div>
                <img src={image("info_btn.png")} className="info_btn" onClick={onOpenRuleDialog} />
                {Object.keys(rule).map((category, index) => {
                    const { num } = rule[category];
                    return (
                        <div key={category} className="lhc_btn_box">
                            <div>
                                <img src={image(`module_stab${index + 1}.png`)} />
                            </div>
                            {num.map((value) => {
                                const key = `${category}${value}${id}`;
                                const isActive = itemList.has(key);
                                return (
                                    <div key={key} onClick={() => itemListHandle.toggle(key, { rule, id, category, value, odds })}>
                                        <div className={`${isActive ? "active" : ""}`}>
                                            <img src={image(`module-btn1-txt${value}.png`)} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </article>
            <RuleDialog state={showRuleDialog} close={onCloseRuleDialog} desc={RULE_DIALOG_DICTIONARY[GAME_KIND.DXDS].desc} />
        </div>
    );
};
