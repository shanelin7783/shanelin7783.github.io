import { Fragment, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FreezeBackground } from "./FreezeBackground";
import { cleanBetList } from "@core/reducer/Bet";

export const BetResultDialog = () => {
    const dispatch = useDispatch();
    const code = useSelector((state) => state.Bet.code);
    const expect = useSelector((state) => state.Bet.expect);
    const bet_amount = useSelector((state) => state.Bet.bet_amount);

    const onClose = () => {
        dispatch(cleanBetList());
    };
    const isSuccess = code == 1;
    return (
        isSuccess && (
            <FreezeBackground>
                <div className="window">
                    <div className="window_con">
                        <div className="window_box">
                            <div className="window_success">
                                <h4>投注结果</h4>
                                <dl>
                                    <dt>
                                        <div>期号</div>
                                        <div>投注金额</div>
                                    </dt>
                                    <dd>
                                        <div>{expect}</div>
                                        <div>{bet_amount}</div>
                                    </dd>
                                </dl>
                                <button className="btn_confirm" onClick={onClose}>
                                    确认
                                </button>
                            </div>
                        </div>
                        <div className="window_con_bg" />
                    </div>
                </div>
            </FreezeBackground>
        )
    );
};
