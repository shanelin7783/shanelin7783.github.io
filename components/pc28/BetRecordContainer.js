import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5f28BetRecord } from "./as5f28/BetRecord";

const Pc28BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5f28: <As5f28BetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28BetRecordContainer;
