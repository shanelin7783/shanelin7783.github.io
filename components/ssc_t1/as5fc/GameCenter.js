import { useContext, useEffect } from "react";
import { FUN_MAP } from "@core/constants/custom";
import { useImage } from "@core/hooks/useImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { chunk } from "lodash";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { Map } from "immutable";
import { useRuleDialog } from "@core/hooks/useRuleDialog";
import { RuleDialog } from "@components/common/RuleDialog";

export const As5fcGameCenter = () => {
    const image = useImage();
    const { showRuleDialog, onOpenRuleDialog, onCloseRuleDialog } = useRuleDialog();
    const { multiple, totalBets, itemList, itemListHandle, setMaximun } = useContext(MultipleContext);
    const { game } = useContext(GameSwitchContext);

    useEffect(() => {
        setMaximun(game.odds);
    }, [totalBets, multiple]);

    const onSelectFun = ({ category, num, type }) => () => {
        const list = {
            sa: () => num,
            b: () => num.filter((val) => val > 4),
            s: () => num.filter((val) => val < 5),
            sn: () => num.filter((val) => val % 2 != 0),
            dn: () => num.filter((val) => val % 2 == 0),
            ca: () => [],
        }[type]();

        const itemList = list.reduce((prev, number) => {
            const key = `${game.id}${category}${number}`;
            prev = prev.set(key, { [category]: number });
            return prev;
        }, Map());

        itemListHandle.set(itemList);
    };

    const onToggle = (key, category, number) => () => {
        itemListHandle.toggle(key, { [category]: number });
    };
    return (
        <main className="main-container">
            <div className="main_number">
                {Object.keys(game.rule).map((category) => {
                    const { fun, name, num } = game.rule[category];
                    return (
                        <article key={category} className="lhc_kind">
                            <div className="topborder">
                                <h2>赔率：{game.odds}</h2>
                                <div>
                                    <img src={image("info_btn.png")} className="info_btn" onClick={onOpenRuleDialog}/>
                                </div>
                            </div>
                            {name && (
                                <div className="lhc_btn_title">
                                    <span>{name}</span>
                                </div>
                            )}
                            {chunk(fun, 3).map((block, index) => (
                                <div key={index} className="lhc_sbtn">
                                    {block.map((type) => (
                                        <div key={type} onClick={onSelectFun({ category, num, type })}>
                                            <h6>{FUN_MAP[type]}</h6>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {chunk(num, 5).map((block, index) => (
                                <div key={index} className="lhc_btn_box">
                                    {block.map((number) => {
                                        const key = `${game.id}${category}${number}`;
                                        const isActive = itemList.has(key);
                                        return (
                                            <div key={number} className={`${isActive ? "active" : ""}`} onClick={onToggle(key, category, number)}>
                                                <h6>
                                                    <img src={image(`${number}w.png`)} />
                                                </h6>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </article>
                    );
                })}
            </div>
            <RuleDialog state={showRuleDialog} close={onCloseRuleDialog} desc={game.desc}/>
        </main>
    );
};
