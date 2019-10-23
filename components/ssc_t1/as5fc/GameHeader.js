import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { As5fcMenu } from "./Menu";
import { As5fcClock } from "./Clock";
import { As5fcAnimation } from "./Animation";
import { useToggleMute } from "@core/hooks/useToggleMute";
import { useVersion } from "@core/hooks/useVersion";
import { As5fcBetInfo } from "./BetInfo";
import { useWebView } from "@core/hooks/useWebView";

export const As5fcGameHeader = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    const { mute, onToggleMute } = useToggleMute();
    const game_name = useSelector((state) => state.BaseInfo.game_name);
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
                    <img src={image("closegame.png")} onClick={backApp} />
                    <img onClick={onToggleMute} src={image(mute ? "closesound.png" : "closesounda.png")} />
                </div>
                <div className="title" onClick={getVersion}>
                    {game_name}
                </div>
                <As5fcMenu />
            </nav>
            <div className="winning-info">
                <div className="winning-number">{previousExpect}期开奖</div>
                <div className="winning-countdown">
                    <As5fcClock />
                </div>
            </div>
            <As5fcAnimation />
            <As5fcBetInfo />
            <article className="nownum">当期期号：{currentExpect}</article>
        </header>
    );
};
