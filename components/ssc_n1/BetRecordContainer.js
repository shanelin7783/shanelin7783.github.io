import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn1BetRecord } from "./as5fcn1/BetRecord";
import { As5fcn1_fBetRecord } from "./as5fcn1_f/BetRecord";

const Ssc_n1BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn1: <As5fcn1BetRecord />,
                as5fcn1_f: <As5fcn1_fBetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n1BetRecordContainer;
