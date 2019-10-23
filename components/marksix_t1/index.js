import { useSelector } from "react-redux";
import { As5fhk6 } from "./as5fhk6";
import { GameSwitchProvider } from "./common/GameSwitchContext";

const Marksix_t1 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <GameSwitchProvider>
            {{
                as5fhk6: <As5fhk6/>,
            }[game_code] || null}
        </GameSwitchProvider>
    );
};

export default Marksix_t1;
