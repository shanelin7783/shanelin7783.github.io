import { Fragment } from "react";
import { useClock } from "@core/hooks/useClock";
import { useImage } from "@core/hooks/useImage";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";

export const As5fcn1Clock = () => {
    const image = useImage();
    const countdown = useClock();
    const seconds = _transformMinutesToSeconds(countdown);
    const [hundred_sec, ten_sec, sec] = _pad(seconds, 3);
    return (
        <Fragment>
            <div class="winning-info" style={{ marginTop: "2vw" }}>
                <div class="winning-countdown">
                    <div class="rec">
                        <img src={image("slash.png")} />
                        距下期投注截止还有
                    </div>
                </div>
            </div>
            <div class="winning-info2">
                <div class="nexttime">
                    <div>
                        <img src={image(`next-time${hundred_sec}.png`)} />
                    </div>
                    <div>
                        <img src={image(`next-time${ten_sec}.png`)} />
                    </div>
                    <div>
                        <img src={image(`next-time${sec}.png`)} />
                    </div>
                    <div>
                        <img src={image("next-time-sec.png")} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
