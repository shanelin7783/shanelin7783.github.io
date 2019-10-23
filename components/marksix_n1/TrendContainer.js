import { useSelector } from "react-redux";
import { As5fhk6n1Trend } from "./as5fhk6n1/Trend";
import { As5fhk6n2Trend } from "./as5fhk6n2/Trend";

const Marksix_n1TrendContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        {
            as5fhk6n1: <As5fhk6n1Trend />,
            as5fhk6n2: <As5fhk6n2Trend />,
        }[game_code] || null
    );
};

export default Marksix_n1TrendContainer;
