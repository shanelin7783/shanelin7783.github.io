import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { COLOR_TEXT, ZOD_NUMBER } from "@core/constants/marksix_t1/as5fhk6/dictionary";

export const As5fhk6Trend = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
    const { numbers_config } = useSelector((state) => state.Config.config.marksix_t1);

    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu">
                        <a onClick={onBack}>
                            <span>
                                <img src={image("backindex.png")} alt="" />
                                返回
                            </span>
                        </a>
                    </div>
                    <div className="title">走势图</div>
                    <div className="right-menu" />
                </nav>
            </header>
            <main style={{ height: "100%", overflow: "auto" }}>
                <article className="lhc_kind2">
                    <div className="topborder" />
                    <article className="lhc_my_bets chart">
                        <div>
                            <dl>
                                <dt>
                                    <div>期次</div>
                                    <div>特码大小/单双</div>
                                    <div>肖数</div>
                                    <div>场景</div>
                                </dt>
                                {list.map((item) => {
                                    const special = item.numbers.split(",").pop();
                                    const isSumOdd = special % 2 === 1;
                                    const isSumBig = special >= 25;
                                    return (
                                        <dd key={item.expect}>
                                            <div>{item.expect}</div>
                                            <div>
                                                {isSumBig ? "大" : "小"} / {isSumOdd ? "单" : "双"}
                                            </div>
                                            <div>{ZOD_NUMBER[item.zodiac_num]}肖</div>
                                            <div>
                                                <span className={`${numbers_config[Number(special)]}`}>
                                                    {COLOR_TEXT[numbers_config[Number(special)]]}
                                                </span>
                                            </div>
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
