import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { pickBy } from "lodash";
import { ZOD_MAP } from "@core/constants/custom";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5fhk6n1History = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
    const {
        zodiac_config: { zodiac_numbers },
        numbers_config,
    } = useSelector((state) => state.Config.config.marksix_n1);
    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <div className="inside_header">
                <a className="lhc_back" onClick={onBack}>
                    <span>
                        <img src={image("angle.png")} alt="" />
                        返回
                    </span>
                </a>
                <div className="lhc_tit">开奖公告</div>
            </div>
            <article className="lhc_my_bets">
                <div id="bets">
                    <dl>
                        <dt>
                            <div>期次</div>
                            <div>开奖号码</div>
                            <div>开奖时间</div>
                        </dt>
                        {list.map(({ expect = "", open_date_time = "", numbers = "" }) => {
                            const [, time] = open_date_time.split(" ");
                            return (
                                <dd key={expect}>
                                    <div>{expect}</div>
                                    <div>
                                        {numbers.split(",").map((num, index) => {
                                            const [animalIndex] = Object.keys(
                                                pickBy(zodiac_numbers, (result) => result.find((value) => value == num)),
                                            );
                                            return (
                                                <div key={index} className={`num_${numbers_config[Number(num)]}`}>
                                                    <span>{num}</span>
                                                    <p>{ZOD_MAP[animalIndex]}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div>{time}</div>
                                </dd>
                            );
                        })}
                    </dl>
                </div>
            </article>
        </LayoutContainer>
    );
};
