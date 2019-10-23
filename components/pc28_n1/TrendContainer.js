import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Asff28Trend } from "./asff28/Trend";

const Pc28_n1TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                asff28: <Asff28Trend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28_n1TrendContainer;
