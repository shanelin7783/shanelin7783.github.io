import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5fcn2Clock = ({expect}) => {
    const countdown = useClock();
    const seconds = _transformMinutesToSeconds(countdown);
    const [hundred_sec, ten_sec, sec] = _pad(seconds, 3);
    return (
        <div className="winning-info">
            <div className="winning-number">{expect}期开奖</div>
            <div className="winning-countdown">
                <div className="period">
                    <div></div>
                    距下期投注截止还有
                </div>
                <ol>
                    <li>
                        <span>{hundred_sec}</span>
                        <span>{ten_sec}</span>
                        <span>{sec}</span>秒
                    </li>
                </ol>
            </div>
        </div>
    );
};
