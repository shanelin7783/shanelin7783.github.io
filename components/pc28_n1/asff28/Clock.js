import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const Asff28Clock = () => {
    const countdown = useClock();
    const seconds = _transformMinutesToSeconds(countdown);
    const [hundred_sec, ten_sec, sec] = _pad(seconds, 3);
    return (
        <div className="ff28_numbercon">
            <div className="ff28_numbertxt ff28_jend">距下期投注截止还有</div>
            <ol>
                <li>{hundred_sec}</li>
                <li>{ten_sec}</li>
                <li>{sec}</li>
                <li>秒</li>
            </ol>
        </div>
    );
};
