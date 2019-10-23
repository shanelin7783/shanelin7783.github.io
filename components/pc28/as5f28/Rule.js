import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { KIND_TYPE } from "@core/constants/pc28";
import { DICTIONARY, KINDS_NAME } from "@core/constants/pc28/dictionary";
const RULE_DICTIONARY = Object.keys(KIND_TYPE).map((type) => {
    return {
        title: KINDS_NAME[type],
        desc: DICTIONARY[type].desc.replace(/[^。]*odds.*/g, ""),
    };
});

export const As5f28Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const onBack = useBackGame();
    return (
        <LayoutContainer>
            <nav className="top_menu">
                <div className="return">
                    <a onClick={onBack}>
                        <img src={image("btn_back.png")} alt="返回" />
                    </a>
                </div>
                <h1>玩法介绍</h1>
            </nav>
            <article className="rules">
                <section>
                    <h2>简介</h2>
                    <div dangerouslySetInnerHTML={{ __html: introduction }} />
                </section>
                <dl className="rules_tit">
                    <dt>玩法</dt>
                    <dd>玩法说明</dd>
                </dl>
                {RULE_DICTIONARY.map(({ title, desc }) => (
                    <dl className="rules_txt" key={title}>
                        <dt>{title}</dt>
                        <dd>{desc}</dd>
                    </dl>
                ))}
            </article>
        </LayoutContainer>
    );
};
