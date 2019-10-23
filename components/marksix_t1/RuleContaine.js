import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fhk6Rule } from "./as5fhk6/Rule";

const Marksix_t1RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fhk6: <As5fhk6Rule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Marksix_t1RuleContainer;
