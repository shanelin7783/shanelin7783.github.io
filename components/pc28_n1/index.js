import { useSelector } from "react-redux";
import { Asff28 } from "./asff28";

const Pc28_n1 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        {
            asff28: <Asff28/>,
        }[game_code] || null
    );
};

export default Pc28_n1;
