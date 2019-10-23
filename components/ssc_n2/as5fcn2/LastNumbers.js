import { useLastNumbers } from "@core/hooks/useLastNumbers";
import { NPC_CONFIG } from "@core/constants/ssc_n2/as5fcn2";

export const As5fcn2LastNumbers = ({numbers}) => {
    return (
        <div className="num_btn">
            {numbers.map((value, index) => {
                const { color, figure } = NPC_CONFIG[index];
                return (
                    <button key={index}>
                        <div className={color}>{value}</div>
                        <div>{figure}</div>
                    </button>
                );
            })}
        </div>
    );
};
