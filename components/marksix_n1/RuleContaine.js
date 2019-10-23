import { useSelector } from "react-redux";
import { As5fhk6n1Rule } from "./as5fhk6n1/Rule";
import { As5fhk6n2Rule } from "./as5fhk6n2/Rule";

const Marksix_n1RuleContainer = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        {
            as5fhk6n1: <As5fhk6n1Rule />,
            as5fhk6n2: <As5fhk6n2Rule />,
        }[game_code] || null
    );
};

export default Marksix_n1RuleContainer;
