import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5f28Trend } from "./as5f28/Trend";

const Pc28TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5f28: <As5f28Trend />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28TrendContainer;
