import { Fragment } from "react";
import { useClock } from "@core/hooks/useClock";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5f28Clock = () => {
    const countdown = useClock();
    const seconds = _pad(_transformMinutesToSeconds(countdown), 3);
    return (
        <Fragment>
            <div className="next_tit">距离下期</div>
            <h2>{seconds}</h2>
            <div className="next_sec">秒</div>
        </Fragment>
    );
};
