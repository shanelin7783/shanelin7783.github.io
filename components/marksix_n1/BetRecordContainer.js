import { useSelector } from "react-redux";
import { As5fhk6n1BetRecord } from "./as5fhk6n1/BetRecord";
import { As5fhk6n2BetRecord } from "./as5fhk6n2/BetRecord";

const Marksix_n1BetRecordContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        {
            as5fhk6n1: <As5fhk6n1BetRecord />,
            as5fhk6n2: <As5fhk6n2BetRecord />,
        }[game_code] || null
    );
};

export default Marksix_n1BetRecordContainer;
