import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn2Rule } from "./as5fcn2/Rule";

const Ssc_n2RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn2: <As5fcn2Rule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n2RuleContainer;
