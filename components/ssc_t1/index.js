import { useSelector } from "react-redux";
import { As5fc } from "./as5fc";
import { GameSwitchProvider } from "./common/GameSwitchContext";

const Ssc_t1 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return (
        <GameSwitchProvider>
            {{
                as5fc: <As5fc />,
            }[game_code] || null}
        </GameSwitchProvider>
    );
};

export default Ssc_t1;
