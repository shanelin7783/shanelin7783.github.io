import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn1History } from "./as5fcn1/History";
import { As5fcn1_fHistory } from "./as5fcn1_f/History";

const Ssc_n1HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn1: <As5fcn1History />,
                as5fcn1_f: <As5fcn1_fHistory />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n1HistoryContainer;
