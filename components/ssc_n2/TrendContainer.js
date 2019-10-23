import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn2Trend } from "./as5fcn2/Trend";

const Ssc_n2TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn2: <As5fcn2Trend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n2TrendContainer;
