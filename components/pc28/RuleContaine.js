import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5f28Rule } from "./as5f28/Rule";

const Pc28RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5f28: <As5f28Rule />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28RuleContainer;
