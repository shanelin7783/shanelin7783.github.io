import { Fragment, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { fetchBetRecordDetail } from "@core/reducer/BetRecord";
import { _floorWithDigits } from "@core/libraries/utils";

export const As5f28BetRecord = () => {
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
            <nav className="top_menu">
                <div className="return">
                    <a onClick={handleBack}>
                        <img src={image("btn_back.png")} alt="返回" />
                    </a>
                </div>
                <h1>{showDetail ? "注单详情" : "投注记录"}</h1>
            </nav>
            <article className="bets">
                <p className="bet-notes">※ 点选可看详情</p>
                <dl className="bets_list">
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
                            <div className="bets_bg">
                                {{
                                    1: <span className="bets_gray">{result.status_text}</span>,
                                    2: <span className="bets_pink">{result.status_text}</span>,
                                    3: <span className="bets_green">{result.status_text}</span>,
                                }[result.status] || null}
                            </div>
                        </dd>
                    ))}
                </dl>
                <div className={`detail_container ${showDetail ? "active" : ""}`}>{order && <Detail order={order} />}</div>
            </article>
        </LayoutContainer>
    );
};

const Detail = ({ order }) => {
    const detail = useSelector((state) => state.BetRecord.detail);
    const loading = useSelector((state) => state.BetRecord.loading);
    const numbers_config = useSelector((state) => state.Config.config.pc28.numbers_config);
    const { code, list, win_numbers } = detail;
    const isSuccess = code == 1;
    return (
        <ol>
            <li>
                <dl>
                    <dt>投注期号</dt>
                    <dd>{order.expect}</dd>
                    <dt>开奖号码</dt>
                    <dd>
                        {loading
                            ? "載入中"
                            : isSuccess
                            ? !!win_numbers
                                ? win_numbers.split("|").map((num, index) => {
                                      if (index == 3) {
                                          return (
                                              <span key={index} className={`${numbers_config[num]}`}>
                                                  {num}
                                              </span>
                                          );
                                      } else {
                                          return (
                                              <Fragment key={index}>
                                                  <span>{num}</span>
                                                  <span>{index < 2 ? "+" : "="}</span>
                                              </Fragment>
                                          );
                                      }
                                  })
                                : "未开奖"
                            : "載入失敗"}
                    </dd>
                    <dt>投注单号</dt>
                    <dd>{order.order_id}</dd>
                    <dt>投注时间</dt>
                    <dd>{order.bet_date_time}</dd>
                    {isSuccess &&
                        list.map(
                            ({ id, bet_type, bet_detail, bets, bet_currency_amount, currency, status, status_text, win_currency_amount, odds }) => (
                                <dl key={id} className="bets_note">
                                    <dt>玩法名称</dt>
                                    <dd>{bet_type}</dd>
                                    <dt>投注內容</dt>
                                    <dd>{bet_detail}</dd>
                                    <dt>投注金额</dt>
                                    <dd>
                                        {bets}注 / {_floorWithDigits(bet_currency_amount, { comma: true })}
                                        {currency}
                                    </dd>
                                    <dt>投注赔率</dt>
                                    <dd>{_floorWithDigits(odds)}</dd>
                                    <dt>中奖状态</dt>
                                    <dd className="bets_bg">
                                        {{
                                            1: <span className="bets_gray">{status_text}</span>,
                                            2: (
                                                <span className="bets_pink">
                                                    已中奖{_floorWithDigits(win_currency_amount, { comma: true })}
                                                    {currency}
                                                </span>
                                            ),
                                            3: <span className="bets_green">{status_text}</span>,
                                        }[status] || null}
                                    </dd>
                                </dl>
                            ),
                        )}
                    <dt>总投注金额</dt>
                    <dd>
                        {_floorWithDigits(order.bet_currency_amount, { comma: true })}
                        {order.currency}
                    </dd>
                    <dt>总中奖金额</dt>
                    <dd>
                        {_floorWithDigits(order.win_currency_amount, { comma: true })}
                        {order.currency}
                    </dd>
                </dl>
                {{
                    1: <div className="bets_gray">{order.status_text}</div>,
                    2: <div className="bets_pink">{order.status_text}</div>,
                    3: <div className="bets_green">{order.status_text}</div>,
                }[order.status] || null}
            </li>
        </ol>
    );
};
