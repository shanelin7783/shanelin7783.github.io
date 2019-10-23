import { Fragment, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { fetchBetRecordDetail } from "@core/reducer/BetRecord";
import { _floorWithDigits } from "@core/libraries/utils";

export const As5fhk6n1BetRecord = () => {
    const image = useImage();
    const dispatch = useDispatch();
    const [showDetail, setShowDetail] = useState(false);
    const [order, setOrder] = useState(null);
    const betRecordList = useSelector((state) => state.BetRecord.list);
    const onBack = useBackGame();

    const onFetchDetail = (result) => () => {
        setShowDetail(true);
        setOrder(result);
        dispatch(fetchBetRecordDetail(result.order_id));
    };

    const handleBack = useCallback(() => {
        showDetail ? setShowDetail(false) : onBack();
    }, [showDetail]);

    return (
        <LayoutContainer>
            <div className="inside_header">
                <a className="lhc_back" onClick={handleBack}>
                    <span>
                        <img src={image("angle.png")} alt="" />
                        返回
                    </span>
                </a>
                <div className="lhc_tit">{showDetail ? "注单详情" : "投注记录"}</div>
            </div>
            <article className="lhc_my_bets">
                <p>※ 点选可看详情</p>
                <div id="bets">
                    <dl>
                        <dt>
                            <div>期号</div>
                            <div>投注金额</div>
                            <div>中奖状态</div>
                        </dt>
                        {betRecordList.map((result) => (
                            <dd key={result.order_id} onClick={onFetchDetail(result)}>
                                <div>{result.expect}</div>
                                <div>
                                    {_floorWithDigits(result.bet_currency_amount, { comma: true })}({result.currency})
                                </div>
                                <div>
                                    {{
                                        1: <span className="gray_sta">{result.status_text}</span>,
                                        2: <span className="red_sta">{result.status_text}</span>,
                                        3: <span className="green_sta">{result.status_text}</span>,
                                    }[result.status] || null}
                                </div>
                            </dd>
                        ))}
                    </dl>
                </div>
            </article>
            <div className={`detail_container ${showDetail ? "active" : ""}`}>{order && <Detail order={order} />}</div>
        </LayoutContainer>
    );
};

const Detail = ({ order }) => {
    const detail = useSelector((state) => state.BetRecord.detail);
    const loading = useSelector((state) => state.BetRecord.loading);
    const { code, list, win_numbers } = detail;
    const isSuccess = code == 1;
    return (
        <div className="detail">
            <Fragment>
                <dl>
                    <dd>
                        <div>期号：</div>
                        <div>{order.expect}</div>
                    </dd>
                    <dd>
                        <div>开奖号码：</div>
                        <div>{loading ? "載入中" : isSuccess ? win_numbers : "載入失敗"}</div>
                    </dd>
                    <dd>
                        <div>投注单号：</div>
                        <div>{order.order_id}</div>
                    </dd>
                    <dd>
                        <div>投注时间：</div>
                        <div>{order.bet_date_time}</div>
                    </dd>
                </dl>
                {isSuccess &&
                    list.map(
                        ({
                            id,
                            bet_type,
                            bet_detail,
                            bets,
                            bet_currency_amount,
                            currency,
                            multiple,
                            status,
                            status_text,
                            win_currency_amount,
                            odds,
                        }) => (
                            <dl key={id}>
                                <dd className="tit">
                                    <div>玩法名称</div>
                                    <div>{bet_type}</div>
                                </dd>
                                <dd>
                                    <div>投注内容</div>
                                    <div>{bet_detail}</div>
                                </dd>
                                <dd>
                                    <div>投注金额</div>
                                    <div>
                                        {bets}注 / {_floorWithDigits(bet_currency_amount, { comma: true })}
                                        {currency}
                                    </div>
                                </dd>
                                <dd>
                                    <div>玩法赔率</div>
                                    <div>{_floorWithDigits(odds)}</div>
                                </dd>
                                <dd>
                                    <div>中奖状态</div>
                                    <div>
                                        {{
                                            1: <span className="gray_sta">{status_text}</span>,
                                            2: (
                                                <span className="red_sta">
                                                    已中奖{_floorWithDigits(win_currency_amount, { comma: true })}
                                                    {currency}
                                                </span>
                                            ),
                                            3: <span className="green_sta">{status_text}</span>,
                                        }[status] || null}
                                    </div>
                                </dd>
                            </dl>
                        ),
                    )}
                <dl>
                    <dd className="total">
                        <div>总投注金额</div>
                        <div>
                            {_floorWithDigits(order.bet_currency_amount, { comma: true })}
                            {order.currency}
                        </div>
                    </dd>
                    <dd className="total">
                        <div>总中奖金额</div>
                        <div>
                            {_floorWithDigits(order.win_currency_amount, { comma: true })}
                            {order.currency}
                        </div>
                    </dd>
                </dl>
            </Fragment>
        </div>
    );
};
