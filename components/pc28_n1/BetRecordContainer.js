import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Asff28BetRecord } from "./asff28/BetRecord";

const Pc28_n1BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                asff28: <Asff28BetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Pc28_n1BetRecordContainer;
