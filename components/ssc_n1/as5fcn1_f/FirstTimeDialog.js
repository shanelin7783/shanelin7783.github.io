import { Fragment, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { useFirstTimeDialog } from "@core/hooks/useFirstTimeDialog";
import { FreezeBackground } from "@components/common/FreezeBackground";
import { GoPageContext } from "@core/hooks/GoPageContext";

export const As5fcn1_fFirstTimeDialog = () => {
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
                                <img src={image("close.png")} />
                            </button>
                            <div className="new_menu_list">
                                <div className="step">
                                    <h6>Step.1</h6>
                                    <p>点选欲投注的组合</p>
                                    <img src={image("new_step1.png")} />
                                </div>
                                <div className="step">
                                    <h6>Step.2</h6>
                                    <p>确认投注倍率</p>
                                    <img src={image("new_step2.png")} />
                                </div>
                                <div className="step">
                                    <h6>Step.3</h6>
                                    <p>确认投注直接下注</p>
                                    <img src={image("new_step3.png")} />
                                </div>
                                <div className="step">
                                    <h6>Step.4</h6>
                                    <p>下注后确认投注结果</p>
                                    <img src={image("new_step4.png")} />
                                </div>
                                <div className="step">
                                    <h6>Step.5</h6>
                                    <p>中奖结果可于投注记录查询</p>
                                    <img src={image("new_step5.png")} />
                                </div>
                            </div>
                        </div>
                        <div className="new_window_bg" />
                    </div>
                </FreezeBackground>
            )}
            {showRuleDialog && (
                <FreezeBackground>
                    <div className="window_con active">
                        <div className="window_box">
                            <div className="window_rules">
                                <p>亲，第一次进来游戏想必对玩法不清楚吧，是否需要观看玩法介绍呢？</p>
                                <div>
                                    <button onClick={() => onGoPage("rule")}>是</button>
                                    <button className="close" onClick={onCloseRuleDialog}>
                                        否
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="window_con_bg" />
                    </div>
                </FreezeBackground>
            )}
        </Fragment>
    );
};
