import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn1Trend } from "./as5fcn1/Trend";
import { As5fcn1_fTrend } from "./as5fcn1_f/Trend";

const Ssc_n1TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn1: <As5fcn1Trend />,
                as5fcn1_f: <As5fcn1_fTrend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n1TrendContainer;
