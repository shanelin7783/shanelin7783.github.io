import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5f28History } from "./as5f28/History";

const Pc28HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5f28: <As5f28History />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28HistoryContainer;
