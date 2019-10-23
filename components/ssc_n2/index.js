import { useSelector } from "react-redux";
import { As5fcn2 } from "./as5fcn2";
import { GameSwitchProvider } from "./common/GameSwitchContext";

const Ssc_n2 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);

    return (
        <GameSwitchProvider>
            {{
                as5fcn2: <As5fcn2></As5fcn2>,
            }[game_code] || null}
        </GameSwitchProvider>
    );
};

export default Ssc_n2;
