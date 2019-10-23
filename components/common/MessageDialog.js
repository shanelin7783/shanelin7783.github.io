import { Fragment, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FreezeBackground } from "./FreezeBackground";
import { useWebView } from "@core/hooks/useWebView";
import { hideDialog } from "@core/reducer/Dialog";

export const MessageDialog = () => {
    const dispatch = useDispatch();
    const code = useSelector((state) => state.Dialog.code);
    const isOpen = useSelector((state) => state.Dialog.isOpen);
    const message = useSelector((state) => state.Dialog.message);
    const { backApp, backAppRecharge } = useWebView();

    const onClose = useCallback(() => {
        dispatch(hideDialog());
        code == 5 && backApp();
        code == 49 && backAppRecharge();
    }, [code]);

    return (
        isOpen && (
            <FreezeBackground>
                <div className="window">
                    <div className="window_con">
                        <div className="window_box">
                            <div className="window_danger">
                                <h4 className="poptit">投注提醒</h4>
                                <p>{message}</p>
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
