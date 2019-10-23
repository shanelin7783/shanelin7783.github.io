import { useSelector } from "react-redux";
import { As5f28 } from "./as5f28";
import { GameSwitchProvider } from "./common/GameSwitchContext";

const Pc28 = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);

    return (
        <GameSwitchProvider>
            {{
                as5f28: <As5f28/>,
            }[game_code] || null}
        </GameSwitchProvider>
    );
};
export default Pc28;
