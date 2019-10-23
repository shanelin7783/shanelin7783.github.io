import { Fragment } from "react";
import { useLastNumbers } from "@core/hooks/useLastNumbers";
import { useImage } from "@core/hooks/useImage";

export const As5fcn1LastNumbers = () => {
    const image = useImage();
    const { numbers, expect } = useLastNumbers({ length: 5, delayTime: 5000 });

    return (
        <Fragment>
            <div class="winning-info">
                <div class="winning-number">
                    <img src={image("slash.png")} />
                    {expect}期开奖
                </div>
            </div>
            <div class="winning-info2">
                <div class="winning-period">
                    {numbers.map((value, index) => (
                        <div key={index}>
                            <img src={value == "-" ? "" : image(`per${value}.png`)} />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};
