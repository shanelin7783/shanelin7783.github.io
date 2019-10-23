import { Fragment } from "react";
import { useSelector } from "react-redux";
import { As5fhk6BetRecord } from "./as5fhk6/BetRecord";

const Marksix_t1BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <Fragment>
            {{
                as5fhk6: <As5fhk6BetRecord />,
            }[game_code] || null}
        </Fragment>
    );
};

export default Marksix_t1BetRecordContainer;
