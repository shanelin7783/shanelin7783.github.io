import { useSelector } from "react-redux";
import { useLastNumbers } from "@core/hooks/useLastNumbers";

export const As5fhk6n1LastNumbers = () => {
    const numbers_config = useSelector((state) => {
        const { numbers_config = {} } = state.Config.config.marksix_n1 || {};
        return numbers_config;
    });

    const { numbers, expect } = useLastNumbers({ length: 7, delayTime: 6000 });

    return (
        <div className="lhc_numbercon">
            <div className="lhc_numbertxt">
                第{expect}
                期开奖信息
            </div>
            <ul>
                {numbers.map((value, index) => {
                    const color = numbers_config[Number(value)];
                    return (
                        <li key={index} className={`num${color}`}>
                            {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
