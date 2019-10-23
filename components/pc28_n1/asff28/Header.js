import { Fragment, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { Asff28Menu } from "./Menu";
import { Asff28Clock } from "./Clock";
import { Asff28LastNumbers } from "./LastNumbers";
import { useVersion } from "@core/hooks/useVersion";
import { Asff28Animation } from "./Animation";
import { useToggleMute } from "@core/hooks/useToggleMute";
import { useWebView } from "@core/hooks/useWebView";

export const Asff28Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const { mute, onToggleMute } = useToggleMute();
    const { betRate, totalBets, betResult } = useContext(MultipleContext);
    const game_name = useSelector((state) => state.BaseInfo.game_name);
    const currency = useSelector((state) => state.Query.currency);
    const currentExpect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    return (
        <Fragment>
            <header>
                <nav>
                    <div className="leftbox">
                        <img src={image("close.png")} alt="" onClick={backApp} />
                        <div className="volume" onClick={onToggleMute}>
                            {mute ? <img src={image("volume-mute.png")} alt="" /> : <img src={image("volume-down.png")} alt="" />}
                        </div>
                    </div>
                    <div className="ff28_tit" onClick={getVersion}>
                        {game_name}
                    </div>
                    <Asff28Menu />
                </nav>
                <div className="ff28_number">
                    <Asff28LastNumbers />
                    <Asff28Clock />
                </div>
                <Asff28Animation />
                <img src={image("header_bg.png")} alt="" />
                <article className="ff28_note_left">
                    <img src={getCurrencyImage(currency)} alt="" />
                    <span>1</span>注 = <span>{betRate}</span>
                    {currency}
                </article>
                <article className="ff28_note_right">
                    <p>
                        已选<span>{totalBets}</span>注
                    </p>
                    <span>{betResult}</span>
                    {currency}
                </article>
            </header>
            <div className="now">当期期号：{currentExpect}</div>
        </Fragment>
    );
};
