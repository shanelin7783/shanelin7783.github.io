import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcBetRecord } from "./as5fc/BetRecord";

const Ssc_t1BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fc: <As5fcBetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_t1BetRecordContainer;
