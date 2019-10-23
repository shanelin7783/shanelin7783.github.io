import { Fragment } from "react";
import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5fcClock = () => {
    const countdown = useClock();
    const seconds = _pad(_transformMinutesToSeconds(countdown), 3);
    return (
        <Fragment>
            <div className="period">距下期投注截止还有</div>
            <ol>
                <li>
                    <span>{seconds}</span>秒
                </li>
            </ol>
        </Fragment>
    );
};
