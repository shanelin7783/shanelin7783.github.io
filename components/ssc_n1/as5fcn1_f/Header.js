import { useContext } from "react";
import { useSelector } from "react-redux";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { As5fcn1_fMenu } from "./Menu";
import { As5fcn1_fLastNumbers } from "./LastNumbers";
import { useVersion } from "@core/hooks/useVersion";
import { As5fcn1_fAnimation } from "./Animation";
import { useToggleMute } from "@core/hooks/useToggleMute";
import { useWebView } from "@core/hooks/useWebView";

export const As5fcn1_fHeader = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const { betRate, totalBets, betResult } = useContext(MultipleContext);
    const { mute, onToggleMute } = useToggleMute();
    const game_name = useSelector((state) => state.BaseInfo.game_name);
    const currency = useSelector((state) => state.Query.currency);

    return (
        <header>
            <nav>
                <div className="leftbox">
                    <img src={image("close.png")} alt="goback" onClick={backApp} />
                    <div className="volume" onClick={onToggleMute}>
                        {mute ? <img src={image("volume-mute.png")} alt="" /> : <img src={image("volume-down.png")} alt="" />}
                    </div>
                </div>
                <div className="ffc_tit" onClick={getVersion}>
                    {game_name}
                </div>
                <As5fcn1_fMenu></As5fcn1_fMenu>
            </nav>
            <As5fcn1_fLastNumbers />
            <As5fcn1_fAnimation />
            <img src={image("header_bg.png")} alt="" />
            <article className="ffc_note">
                <div>
                    <img src={getCurrencyImage(currency)} />
                    <span>1</span>注 = <span>{betRate}</span>
                    {currency}
                </div>
                <div>
                    已选<span>{totalBets}</span>注，<span>{betResult}</span>
                    {currency}
                </div>
            </article>
        </header>
    );
};
