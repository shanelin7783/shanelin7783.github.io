import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn2BetRecord } from "./as5fcn2/BetRecord";

const Ssc_n2BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn2: <As5fcn2BetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n2BetRecordContainer;
