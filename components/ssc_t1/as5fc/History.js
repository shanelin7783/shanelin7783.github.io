import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { As5fcCommonHeader } from "./CommonHeader";

const zeroTrans = (num) => {
    if(num==0){
        return "白板";
    }else{
        return `${num}萬`;
    }
}

export const As5fcHistory = () => {
    const list = useSelector((state) => state.History.list);
    return (
        <LayoutContainer>
            <As5fcCommonHeader title="开奖公告" />
            <main className="main-container">
                <article className="lhc_my_bets">
                    <div id="bets">
                        <dl>
                            <dt>
                                <div>期次</div>
                                <div>开奖号码</div>
                                <div>开奖时间</div>
                            </dt>
                            {list.map(({ expect, numbers, open_date_time }) => {
                                const [, time] = open_date_time.split(" ");
                                const [n1, n2, n3, n4, n5] = numbers.split(",");
                                return (
                                    <dd key={expect}>
                                        <div>{expect}</div>
                                        <div>
                                            <div className="num_green">
                                                <span>木</span>
                                                <p>{zeroTrans(n1)}</p>
                                            </div>
                                            <div className="num_red">
                                                <span>火</span>
                                                <p>{zeroTrans(n2)}</p>
                                            </div>
                                            <div className="num_brown">
                                                <span>土</span>
                                                <p>{zeroTrans(n3)}</p>
                                            </div>
                                            <div className="num_yellow">
                                                <span>金</span>
                                                <p>{zeroTrans(n4)}</p>
                                            </div>
                                            <div className="num_blue">
                                                <span>水</span>
                                                <p>{zeroTrans(n5)}</p>
                                            </div>
                                        </div>
                                        <div>{time}</div>
                                    </dd>
                                );
                            })}
                        </dl>
                    </div>
                </article>
            </main>
        </LayoutContainer>
    );
};
