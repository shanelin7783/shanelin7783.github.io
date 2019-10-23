import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5fcn1History = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
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
                    <div className="title">开奖公告</div>
                    <div className="right-menu" />
                </nav>
            </header>
            <main style={{ marginTop: "5px", overflow: "auto" }}>
                <article className="lhc_my_bets">
                    <dl>
                        <dt>
                            <div>期次</div>
                            <div>开奖号码</div>
                            <div>开奖时间</div>
                        </dt>
                        {list.map(({ expect, numbers, open_date_time = "" }) => {
                            const [, time] = open_date_time.split(" ");
                            return (
                                <dd key={expect}>
                                    <div>{expect}</div>
                                    <div>{numbers}</div>
                                    <div>{time}</div>
                                </dd>
                            );
                        })}
                    </dl>
                </article>
            </main>
        </LayoutContainer>
    );
};
