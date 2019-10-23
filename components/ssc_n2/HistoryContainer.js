import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn2History } from "./as5fcn2/History";

const Ssc_n2HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn2: <As5fcn2History />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n2HistoryContainer;
