import { Fragment, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { useFirstTimeDialog } from "@core/hooks/useFirstTimeDialog";
import { FreezeBackground } from "@components/common/FreezeBackground";
import { GoPageContext } from "@core/hooks/GoPageContext";

export const As5fhk6FirstTimeDialog = () => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const { showIntroduceDialog, onCloseIntroduceDialog, showRuleDialog, onCloseRuleDialog } = useFirstTimeDialog();

    return (
        <Fragment>
            {showIntroduceDialog && (
                <FreezeBackground>
                    <div className="new_window">
                        <div className="new_menubox">
                            <div className="new_menu_title">投注教学</div>
                            <button onClick={onCloseIntroduceDialog}>
                                <img src={image("closegame.png")} />
                            </button>
                            <div className="new_menu_list">
                                <div className="step">
                                    <h6>STEP 1</h6>
                                    <p>点选欲投注的玩法类别</p>
                                    <img src={image("new_step1.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 2</h6>
                                    <p>点选欲投注的座位</p>
                                    <img src={image("new_step2.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 3</h6>
                                    <p>点选投注项</p>
                                    <img src={image("new_step3.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 4</h6>
                                    <p>确认投注倍率</p>
                                    <img src={image("new_step4.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 5</h6>
                                    <p>投注并确认投注</p>
                                    <img src={image("new_step5.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 6</h6>
                                    <p>观看投注结果</p>
                                    <img src={image("new_step6.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP 7</h6>
                                    <p>历史投注与中奖结果可于投注记录查询</p>
                                    <img src={image("new_step7.png")} />
                                </div>
                            </div>
                        </div>
                        <div className="new_window_bg" />
                    </div>
                </FreezeBackground>
            )}
            {showRuleDialog && (
                <FreezeBackground>
                    <div className="window_con">
                        <div className="window_box">
                            <div className="window_rules">
                                <p>亲，第一次进来游戏想必对玩法不清楚吧，是否需要观看玩法介绍呢？</p>
                                <div>
                                    <button onClick={() => onGoPage("rule")}>是</button>
                                    <button className="close" onClick={onCloseRuleDialog}>
                                        否
                                    </button>
                                </div>
                                <img src={image("popbgbot.png")} />
                            </div>
                        </div>
                        <div className="window_con_bg" />
                    </div>
                </FreezeBackground>
            )}
        </Fragment>
    );
};
