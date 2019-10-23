import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fhk6Trend } from "./as5fhk6/Trend";

const Marksix_t1TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fhk6: <As5fhk6Trend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Marksix_t1TrendContainer;
