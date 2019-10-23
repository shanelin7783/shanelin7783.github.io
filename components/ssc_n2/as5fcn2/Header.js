import { useContext } from "react";
import { useSelector } from "react-redux";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { NPC_CONFIG } from "@core/constants/ssc_n2/as5fcn2";
import { useLastNumbers } from "@core/hooks/useLastNumbers";
import { As5fcn2GameSwitchMenu } from "./GameSwitchMenu";
import { As5fcn2Menu } from "./Menu";
import { As5fcn2Clock } from "./Clock";
import { As5fcn2LastNumbers } from "./LastNumbers";
import { useVersion } from "@core/hooks/useVersion";

export const As5fcn2Header = () => {
    const getVersion = useVersion();
    const { betRate, totalBets, betResult } = useContext(MultipleContext);
    const currency = useSelector((state) => state.Query.currency);
    const currentExpect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    const { numbers, expect } = useLastNumbers({ length: 5, delayTime: 5000 });
    return (
        <header >
            <As5fcn2Menu />
            <As5fcn2Clock expect={expect} />
            <div className="curtain">
                <div className="left_curtain" />
                <div className="right_curtain" />
            </div>
            <div className="animation">
                {NPC_CONFIG.map(({ npc }) => (
                    <div className={`npc${npc}`} key={`npc${npc}`} />
                ))}
                <As5fcn2LastNumbers numbers={numbers} />
            </div>
            <div className="header_bottom">
                <article className="nownum">当期期号：{currentExpect}</article>
                <article className="note">
                    <div className={currency} />1 注={betRate} {currency} / <span>{totalBets}</span> 注，<span>{betResult}</span>
                    {currency}
                </article>
            </div>
            <As5fcn2GameSwitchMenu />
        </header>
    );
};
