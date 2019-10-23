import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fhk6History } from "./as5fhk6/History";

const Marksix_t1HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fhk6: <As5fhk6History />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Marksix_t1HistoryContainer;
