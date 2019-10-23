import { useSelector } from "react-redux";
import { As5fhk6n1 } from "./as5fhk6n1";
import { As5fhk6n2 } from "./as5fhk6n2";
import { GameSwitchProvider } from "./common/GameSwitchContext";

const Marksix_n1 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <GameSwitchProvider>
            {{
                as5fhk6n1: <As5fhk6n1 />,
                as5fhk6n2: <As5fhk6n2 />,
            }[game_code] || null}
        </GameSwitchProvider>
    );
};

export default Marksix_n1;
