import { useSelector } from "react-redux";
import { As5fhk6n1History } from "./as5fhk6n1/History";
import { As5fhk6n2History } from "./as5fhk6n2/History";

const Marksix_n1HistoryContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        {
            as5fhk6n1: <As5fhk6n1History />,
            as5fhk6n2: <As5fhk6n2History />,
        }[game_code] || null
    );
};

export default Marksix_n1HistoryContainer;
