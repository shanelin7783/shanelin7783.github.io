import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { RULE_DICTIONARY } from "@core/constants/ssc_n1/as5fcn1/dictionary";

export const As5fcn1Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const onBack = useBackGame();
    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu">
                        <a onClick={onBack}>
                            <img src={image("backpage.png")} />
                        </a>
                    </div>
                    <div className="title">玩法介绍</div>
                    <div className="right-menu" />
                </nav>
            </header>
            <main style={{ marginTop: "5px", overflow: "auto" }}>
                <div className="lottery_rules">
                    <div className="introduction">
                        <h3>简介</h3>
                        <div className="content">
                            <div dangerouslySetInnerHTML={{ __html: introduction }} />
                        </div>
                    </div>
                    <div className="howtoplay">
                        <h3>玩法</h3>
                        <dl>
                            <dt>
                                <div>玩法</div>
                                <div>玩法说明</div>
                            </dt>
                            {Object.keys(RULE_DICTIONARY).map((type) => {
                                const { title, desc } = RULE_DICTIONARY[type];
                                return (
                                    <dd key={title}>
                                        <div>{title}</div>
                                        <div dangerouslySetInnerHTML={{ __html: desc }} />
                                    </dd>
                                );
                            })}
                        </dl>
                    </div>
                </div>
            </main>
        </LayoutContainer>
    );
};
