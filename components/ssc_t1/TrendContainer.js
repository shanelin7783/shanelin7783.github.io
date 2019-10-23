import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcTrend } from "./as5fc/Trend";

const Ssc_t1TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fc: <As5fcTrend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_t1TrendContainer;
