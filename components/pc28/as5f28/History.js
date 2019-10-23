import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5f28History = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
    const numbers_config = useSelector((state) => state.Config.config.pc28.numbers_config);
    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <nav className="top_menu">
                <div className="return">
                    <a onClick={onBack}>
                        <img src={image("btn_back.png")} alt="返回" />
                    </a>
                </div>
                <h1>开奖公告</h1>
            </nav>
            <article className="history">
                <h2>北京28开奖公告</h2>
                <dl className="history_tit">
                    <dt className="history_w1">期号</dt>
                    <dd className="history_w2">开奖号码</dd>
                    <dd className="history_w1">开奖时间</dd>
                </dl>

                {list.map(({ expect, numbers, open_date_time }) => {
                    const [, time] = open_date_time.split(" ");
                    numbers = numbers.split(",");
                    return (
                        <dl key={expect} className="history_list">
                            <dt className="history_w1">{expect}</dt>
                            <dd className="history_w2">
                                {numbers.map((num, index) => {
                                    if (index == 3) {
                                        return <span key={index} className={`${numbers_config[num]}`}>{num}</span>;
                                    } else {
                                        return (
                                            <Fragment key={index}>
                                                <span>{num}</span>
                                                <span>{index < 2 ? "+" : "="}</span>
                                            </Fragment>
                                        );
                                    }
                                })}
                            </dd>
                            <dd className="history_w1">{time}</dd>
                        </dl>
                    );
                })}
            </article>
        </LayoutContainer>
    );
};
