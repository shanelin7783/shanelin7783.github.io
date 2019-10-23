import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Asff28History } from "./asff28/History";

const Pc28_n1HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                asff28: <Asff28History />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28_n1HistoryContainer;
