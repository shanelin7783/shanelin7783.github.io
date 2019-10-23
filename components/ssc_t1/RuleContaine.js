import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fcRule } from "./as5fc/Rule";

const Ssc_t1RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fc: <As5fcRule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Ssc_t1RuleContainer;
