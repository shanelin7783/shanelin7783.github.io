import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5fhk6Clock = () => {
    const countdown = useClock();
    const seconds = _transformMinutesToSeconds(countdown);
    const [hundred_sec, ten_sec, sec] = _pad(seconds, 3);
    return (
        <div className="winning-countdown">
            <div className="period">距下期投注截止还有</div>
            <ol>
                <li>
                    <span>
                        {hundred_sec}
                        {ten_sec}
                        {sec}
                    </span>
                    秒
                </li>
            </ol>
        </div>
    );
};
