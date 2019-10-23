import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Asff28Rule } from "./asff28/Rule";

const Pc28_n1RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                asff28: <Asff28Rule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28_n1RuleContainer;
