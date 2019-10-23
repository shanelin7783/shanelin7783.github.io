import { Fragment, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { useFirstTimeDialog } from "@core/hooks/useFirstTimeDialog";
import { FreezeBackground } from "@components/common/FreezeBackground";
import { GoPageContext } from "@core/hooks/GoPageContext";

export const As5fcn1FirstTimeDialog = () => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const { showIntroduceDialog, onCloseIntroduceDialog, showRuleDialog, onCloseRuleDialog } = useFirstTimeDialog();

    return (
        <Fragment>
            {showIntroduceDialog && (
                <FreezeBackground>
                    <div class="new_window">
                        <div class="new_menubox">
                            <div class="new_menu_title">
                                <span>投注教学</span>
                                <span>投注教学</span>
                            </div>
                            <button onClick={onCloseIntroduceDialog}>
                                <img src={image("close.png")} />
                            </button>
                            <div class="new_menu_list">
                                <div class="step">
                                    <h6>
                                        <img src={image("step1.png")} />
                                    </h6>
                                    <p>点选欲投注的组合</p>
                                    <img src={image("new_step1.png")} />
                                </div>
                                <div class="step">
                                    <h6>
                                        <img src={image("step2.png")} />
                                    </h6>
                                    <p>确认投注倍率</p>
                                    <img src={image("new_step2.png")} />
                                </div>
                                <div class="step">
                                    <h6>
                                        <img src={image("step3.png")} />
                                    </h6>
                                    <p>确认投注直接下注</p>
                                    <img src={image("new_step3.png")} />
                                </div>
                                <div class="step">
                                    <h6>
                                        <img src={image("step4.png")} />
                                    </h6>
                                    <p>下注后确认投注结果</p>
                                    <img src={image("new_step4.png")} />
                                </div>
                                <div class="step">
                                    <h6>
                                        <img src={image("step5.png")} />
                                    </h6>
                                    <p>中奖结果可于投注记录查询</p>
                                    <img src={image("new_step5.png")} />
                                </div>
                            </div>
                        </div>
                        <div class="new_window_bg"></div>
                    </div>
                </FreezeBackground>
            )}
            {showRuleDialog && (
                <FreezeBackground>
                    <div className="window_con active">
                        <div className="window_box">
                            <div class="window_rules">
                                <h4>
                                    <span>玩法介绍</span>
                                    <span>玩法介绍</span>
                                </h4>
                                <p>亲，第一次进来游戏想必对玩法不清楚吧，是否需要观看玩法介绍呢？</p>
                                <div>
                                    <button onClick={() => onGoPage("rule")}>
                                        <img src={image("buttona.png")} />
                                    </button>
                                    <button class="close" onClick={onCloseRuleDialog}>
                                        <img src={image("buttonb.png")} />
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
