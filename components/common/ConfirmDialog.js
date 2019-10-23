import { CONFIRM_MESSAGE_TYPE, CONFIRM_TITLE_TYPE } from "@core/constants/confirmMessage";
import { FreezeBackground } from "./FreezeBackground";

export const ConfirmDialog = ({ state, close, type, callback }) =>
    state && (
        <FreezeBackground>
            <div className="window">
                <div className="window_con">
                    <div className="window_box">
                        <div className="window_clear">
                            <h4>{CONFIRM_TITLE_TYPE[type]}</h4>
                            <p>{CONFIRM_MESSAGE_TYPE[type]}</p>
                            <div className="button-container">
                                <button className="btn_confirm" onClick={close}>
                                    取消
                                </button>
                                <button
                                    className="btn_confirm"
                                    onClick={() => {
                                        callback();
                                        close();
                                    }}
                                >
                                    确认
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="window_con_bg" />
                </div>
            </div>
        </FreezeBackground>
    );
