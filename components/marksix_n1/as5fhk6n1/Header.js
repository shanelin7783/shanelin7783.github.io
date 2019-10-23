import { useContext } from "react";
import { useSelector } from "react-redux";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { As5fhk6n1Menu } from "./Menu";
import { useImage } from "@core/hooks/useImage";
import { As5fhk6n1Clock } from "./Clock";
import { As5fhk6n1LastNumbers } from "./LastNumbers";
import { As5fhk6n1Animation } from "../as5fhk6n1/Animation";
import { As5fhk6n2Animation } from "../as5fhk6n2/Animation";
import { useVersion } from "@core/hooks/useVersion";
import { useToggleMute } from "@core/hooks/useToggleMute";
import { useFairLink } from "@core/hooks/useFairLink";
import { useWebView } from "@core/hooks/useWebView";

export const As5fhk6n1Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const onOpenFairLink = useFairLink();
    const { mute, onToggleMute } = useToggleMute();
    const { betRate, totalBets, betResult, maximun } = useContext(MultipleContext);
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    const game_name = useSelector((state) => state.BaseInfo.game_name);
    const currency = useSelector((state) => state.Query.currency);

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
                <As5fhk6n1Menu />
            </nav>
            <div className="lhc_number">
                <As5fhk6n1LastNumbers />
                <As5fhk6n1Clock />
            </div>
            {{
                as5fhk6n1: <As5fhk6n1Animation />,
                as5fhk6n2: <As5fhk6n2Animation />,
            }[game_code] || null}
            <img src={image("header_bg.png")} alt="" />
            <article className="lhc_note">
                <div>
                    <img src={getCurrencyImage(currency)} />
                    <span>1</span>注 = <span>{betRate}</span>
                    {currency} / 已选:<span>{totalBets}</span>注，共<span>{betResult}</span>
                    {currency}
                </div>
                <div>
                    <img src={image("header_disc.svg")} alt="" />
                    最大收益金额 : {maximun}
                    {currency}
                </div>
                <img src={image("Verify_fairness.png")} alt="" onClick={onOpenFairLink} />
            </article>
        </header>
    );
};
