import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interval } from "rxjs";
import { mapTo, scan, takeWhile } from "rxjs/operators";
import { _transformSpanTime } from "@core/libraries/utils";
import { currentFinished } from "@core/reducer/RecentInfo";

export const useClock = () => {
    const [countdown, setCountdown] = useState(0);
    const dispatch = useDispatch();
    const last_sell_date_time = useSelector((state) => {
        const { last_sell_date_time = "" } = state.RecentInfo.current || {};
        return last_sell_date_time;
    });

    useEffect(() => {
        if (last_sell_date_time) {
            const time = _transformSpanTime(Date.now(), last_sell_date_time);
            const timer$ = interval(1000)
                .pipe(
                    mapTo(-1),
                    scan((acc, curr) => (curr ? curr + acc : acc), time),
                    takeWhile((v) => v >= 0),
                )
                .subscribe({
                    next: (time) => {
                        setCountdown(time);
                    },
                    complete: () => {
                        dispatch(currentFinished());
                    },
                });

            return () => {
                timer$.unsubscribe();
            };
        }
    }, [last_sell_date_time]);

    return countdown;
};
