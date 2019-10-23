import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcHistory } from "./as5fc/History";

const Ssc_t1HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fc: <As5fcHistory />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_t1HistoryContainer;
