import { Fragment } from "react";
import { useLastNumbers } from "@core/hooks/useLastNumbers";
import { As5fcn1_fClock } from "./Clock";

export const As5fcn1_fLastNumbers = () => {
    const { numbers, expect } = useLastNumbers({ length: 5, delayTime: 5000 });
    const [n1, n2, n3, n4, n5] = numbers;
    return (
        <Fragment>
            <div className="ffc_number">
                <div className="ffc_numbercon">
                    <div className="ffc_numbertxt">
                        第{expect}
                        期开奖信息
                    </div>
                    <ul>
                        {numbers.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
                <As5fcn1_fClock />
            </div>
            <div className="sum_box">
                <ul>
                    <li>
                        前三位和值<span>{Number(n1 * 1 + n2 * 1 + n3 * 1) || 0}</span>
                    </li>
                    <li>
                        中三位和值<span>{Number(n2 * 1 + n3 * 1 + n4 * 1) || 0}</span>
                    </li>
                    <li>
                        后三位和值<span>{Number(n3 * 1 + n4 * 1 + n5 * 1) || 0}</span>
                    </li>
                    <li>
                        前二位和值<span>{Number(n1 * 1 + n2 * 1) || 0}</span>
                    </li>
                    <li>
                        后二位和值<span>{Number(n4 * 1 + n5 * 1) || 0}</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};
