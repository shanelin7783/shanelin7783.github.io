import { Fragment } from "react";
import { useLastNumbers } from "@core/hooks/useLastNumbers";

export const As5f28LastNumbers = () => {
    const { numbers, expect } = useLastNumbers({ length: 4, delayTime: 0 });
    return (
        <div className="number_now">
            <h2>{expect}期开奖</h2>
            <div className="number_nowcon">
                {numbers.map((value, index) => {
                    const isLast = index == numbers.length - 1;
                    return (
                        <Fragment key={index}>
                            <div>{value}</div>
                            {!isLast && <div>{index < 2 ? "+" : "="}</div>}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};
