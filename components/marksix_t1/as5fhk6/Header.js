import { useContext } from "react";
import { useSelector } from "react-redux";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { useVersion } from "@core/hooks/useVersion";
import { As5fhk6Menu } from "./Menu";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { As5fhk6Clock } from "./Clock";
import { As5fhk6Animation } from "./Animation";
import { useWebView } from "@core/hooks/useWebView";

export const As5fhk6Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const { gameCategory, toggleGameCategoryMenu } = useContext(GameSwitchContext);
    const { betRate, totalBets, betResult } = useContext(MultipleContext);
    const game_name = useSelector((state) => state.BaseInfo.game_name);
    const currency = useSelector((state) => state.Query.currency);
    const previousExpect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.previous || {};
        return expect;
    });
    const currentExpect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });

    return (
        <header>
            <nav>
                <div className="left-menu">
                    <img src={image("closegame.png")} alt="" onClick={backApp} />
                </div>
                <div className="title" onClick={getVersion}>
                    {game_name}
                </div>
                <As5fhk6Menu />
            </nav>
            <div className="winning-info">
                <div className="winning-number">{previousExpect}期开奖</div>
                <As5fhk6Clock />
            </div>
            <As5fhk6Animation />
            <article className="note">
                <img src={getCurrencyImage(currency)} />
                <div>
                    <span>1</span> 注=<span>{betRate}</span> {currency} <span>/</span>
                    <span>{totalBets}</span>注，共<span>{betResult}</span>
                    {currency}
                </div>
            </article>
            <article className="nownum">当期期号：{currentExpect}</article>
            <button className="type" onClick={() => toggleGameCategoryMenu(true)}>
                <img src={image(`type-${gameCategory}.png`)} alt="" />
            </button>
        </header>
    );
};
