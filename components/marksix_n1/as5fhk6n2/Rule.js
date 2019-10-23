import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { RULE_DICTIONARY } from "@core/constants/marksix_n1/as5fhk6n2/dictionary";

export const As5fhk6n2Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
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
                <div className="lhc_tit">玩法介绍</div>
            </div>

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
        </LayoutContainer>
    );
};
