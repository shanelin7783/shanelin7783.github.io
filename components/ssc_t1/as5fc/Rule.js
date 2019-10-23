import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import LayoutContainer from "@components/common/LayoutContainer";
import { As5fcCommonHeader } from "./CommonHeader";
import { GAME_KIND } from "@core/constants/ssc_t1";

export const As5fcRule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const config = useSelector((state) => state.Config.config.ssc_t1) || [];
    const RULE_DICTIONARY = useMemo(() => {
        return config.reduce((prev, curr) => {
            const list = curr.list.reduce((prev, curr) => {
                curr.game
                    .filter(({ id }) => GAME_KIND.has(id))
                    .forEach(({ id, full_name, desc = "" }) => {
                        prev.push({
                            id,
                            full_name,
                            desc,
                        });
                    });
                return prev;
            }, []);
            prev.push(...list);
            return prev;
        }, []);
    }, [config]);
    return (
        <LayoutContainer>
            <As5fcCommonHeader title="玩法介绍" />
            <main>
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
                            {RULE_DICTIONARY.map(({ id, full_name, desc }) => (
                                <dd key={id}>
                                    <div>{full_name}</div>
                                    <div>{desc}</div>
                                </dd>
                            ))}
                        </dl>
                    </div>
                </div>
            </main>
        </LayoutContainer>
    );
};
