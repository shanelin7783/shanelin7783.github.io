import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { RULE_DICTIONARY } from "@core/constants/ssc_n2/as5fcn2/dictionary";

export const As5fcn2Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const onBack = useBackGame();
    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu" onClick={onBack}>
                        <div />
                    </div>
                    <div className="right-menu"></div>
                </nav>
                <div className="inside_header_top" />
            </header>
            <main style={{ overflow: "auto", marginTop: "unset", flex: 1 }}>
                <div className="lottery_rules">
                    <div className="introduction">
                        <h3>简介</h3>
                        <div dangerouslySetInnerHTML={{ __html: introduction }} />
                    </div>
                    <div className="howtoplay">
                        <h3>玩法</h3>
                        <dl>
                            <dt>
                                <div>玩法</div>
                                <div>玩法说明</div>
                            </dt>
                            {RULE_DICTIONARY.map(({ title, desc }) => (
                                <dd key={title}>
                                    <div>{title}</div>
                                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                                </dd>
                            ))}
                        </dl>
                    </div>
                </div>
            </main>
        </LayoutContainer>
    );
};
