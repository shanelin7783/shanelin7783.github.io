import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5fcCommonHeader = ({ title = "" }) => {
    const image = useImage();
    const onBack = useBackGame();
    const countdown = useClock();
    const seconds = _pad(_transformMinutesToSeconds(countdown), 3);
    return (
        <header className="inside_header">
            <nav>
                <div className="left-menu">
                    <a onClick={onBack}>
                        <img src={image("backpage.png")} />
                    </a>
                </div>
                <div className="title">{title}</div>
                <div className="right-menu" />
            </nav>
            <div className="winning-info">
                <div className="winning-countdown">
                    <div className="period">距下期投注截止还有</div>
                    <ol>
                        <li>
                            <span>{seconds}</span>秒
                        </li>
                    </ol>
                </div>
            </div>
        </header>
    );
};
