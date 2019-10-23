import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { RULE_DICTIONARY } from "@core/constants/pc28_n1/asff28/dictionary";

export const Asff28Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const onBack = useBackGame();
    return (
        <LayoutContainer>
            <div className="inside_header">
                <a onClick={onBack} className="ff28_back">
                    <span>
                        <img src={image("angle.svg")} alt="" />
                    </span>
                    返回
                </a>
                <div className="ff28_tit">玩法介绍</div>
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
