import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { pickBy } from "lodash";
import { ZOD_MAP } from "@core/constants/custom";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5fhk6History = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
    const {
        zodiac_config: { zodiac_numbers },
        numbers_config,
    } = useSelector((state) => state.Config.config.marksix_t1);
    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu">
                        <a onClick={onBack}>
                            <img src={image("backindex.png")} alt="" />
                        </a>
                    </div>
                    <div className="title">开奖公告</div>
                    <div className="right-menu" />
                </nav>
            </header>
            <main style={{ height: "100%", overflow: "auto" }}>
                <article className="lhc_kind2">
                    <div className="topborder" />
                    <article className="lhc_my_bets">
                        <div>
                            <dl>
                                <dt>
                                    <div>期次</div>
                                    <div>开奖号码</div>
                                    <div>开奖时间</div>
                                </dt>

                                {list.map((result, index) => {
                                    const { expect, open_date_time } = result;
                                    const [, time] = open_date_time.split(" ");
                                    const numbers = result.numbers.split(",");
                                    return (
                                        <dd key={index}>
                                            <div>{expect}</div>
                                            <div>
                                                {numbers.map((num, index) => {
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
                </article>
            </main>
        </LayoutContainer>
    );
};
