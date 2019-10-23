import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const Asff28History = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);
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
                <div className="ff28_tit">开奖公告</div>
            </div>
            <article className="ffc_my_bets">
                <div id="bets">
                    <dl>
                        <dt>
                            <div>期次</div>
                            <div>开奖号码</div>
                            <div>开奖时间</div>
                        </dt>
                        {list.map(({ expect, numbers, open_date_time }) => {
                            const [, time] = open_date_time.split(" ");
                            return (
                                <dd key={expect}>
                                    <div>{expect}</div>
                                    <div>
                                        {numbers
                                            .split(",")
                                            .slice(0, 3)
                                            .join(",")}
                                    </div>
                                    <div>{time}</div>
                                </dd>
                            );
                        })}
                    </dl>
                </div>
            </article>
        </LayoutContainer>
    );
};
