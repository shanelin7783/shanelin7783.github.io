import { useContext } from "react";
import { useSelector } from "react-redux";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { As5fhk6n2Menu } from "./Menu";
import { useImage } from "@core/hooks/useImage";
import { As5fhk6n2Clock } from "./Clock";
import { As5fhk6n2LastNumbers } from "./LastNumbers";
import { As5fhk6n1Animation } from "../as5fhk6n1/Animation";
import { As5fhk6n2Animation } from "../as5fhk6n2/Animation";
import { useVersion } from "@core/hooks/useVersion";
import { useToggleMute } from "@core/hooks/useToggleMute";
import { useWebView } from "@core/hooks/useWebView";

export const As5fhk6n2Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const { mute, onToggleMute } = useToggleMute();
    const { betRate, totalBets, betResult } = useContext(MultipleContext);
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    const game_name = useSelector((state) => state.BaseInfo.game_name);
    const currency = useSelector((state) => state.Query.currency);
    const currency_rate = useSelector((state) => state.Query.currency_rate);

    return (
        <header>
            <nav>
                <div className="leftbox">
                    <img src={image("close.png")} onClick={backApp} />
                    <div className="volume">
                        <img src={image(mute ? "volume-mute.png" : "volume-down.png")} onClick={onToggleMute} />
                    </div>
                </div>
                <div className="lhc_tit" onClick={getVersion}>
                    {game_name}
                </div>
                <As5fhk6n2Menu />
            </nav>
            <div className="lhc_number">
                <As5fhk6n2LastNumbers />
                <As5fhk6n2Clock />
            </div>
            {{
                as5fhk6n1: <As5fhk6n1Animation />,
                as5fhk6n2: <As5fhk6n2Animation />,
            }[game_code] || null}
            <img src={image("header_bg.png")} alt="" />
            <article className="lhc_note">
                <div className="now">
                    <img src={getCurrencyImage(currency)} alt="" />
                    <span>
                        {betRate}
                        {currency}
                    </span>
                    /注
                </div>
                <div>
                    已选:<span>{totalBets}</span>注，
                    <span>{betResult} </span>
                    {currency}
                </div>
            </article>
        </header>
    );
};
