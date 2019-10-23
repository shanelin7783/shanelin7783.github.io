import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcn1Rule } from "./as5fcn1/Rule";
import { As5fcn1_fRule } from "./as5fcn1_f/Rule";

const Ssc_n1RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fcn1: <As5fcn1Rule />,
                as5fcn1_f: <As5fcn1_fRule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_n1RuleContainer;
