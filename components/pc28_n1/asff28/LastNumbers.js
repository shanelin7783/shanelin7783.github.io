import { useSelector } from "react-redux";
import { useLastNumbers } from "@core/hooks/useLastNumbers";
import { useImage } from "@core/hooks/useImage";

export const Asff28LastNumbers = () => {
    const image = useImage();
    const { numbers, expect } = useLastNumbers({ length: 4, delayTime: 5000 });

    return (
        <div className="ff28_numbercon">
            <div className="ff28_numbertxt">
                第{expect}
                期开奖信息
            </div>
            <ul>
                {numbers.map((value, index) => {
                    const isLast = index == numbers.length - 1;
                    return (
                        <li key={index}>
                            {value}
                            <img src={image(isLast ? "header_num_bg2.png" : "header_num_bg.png")} alt="" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
