import { Fragment, useContext } from "react";
import { useImage } from "@core/hooks/useImage";
import { useFirstTimeDialog } from "@core/hooks/useFirstTimeDialog";
import { FreezeBackground } from "@components/common/FreezeBackground";
import { GoPageContext } from "@core/hooks/GoPageContext";

export const As5fhk6n1FirstTimeDialog = () => {
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
                                    <h6>STEP.1 点选欲投注的组合</h6>
                                    <img src={image("new_step1.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP.2 选择投注的位数</h6>
                                    <div>
                                        <span>
                                            <img src={image("new_step2.png")} />
                                        </span>
                                        <ol>
                                            <li>正码全为不分位置</li>
                                            <li>正—码为落球第—位</li>
                                            <li>正二码为落球第二位</li>
                                            <li>正三码为落球第三位</li>
                                            <li>正四码为落球第四位</li>
                                            <li>正五码为落球第五位</li>
                                            <li>正六码为落球第六位</li>
                                            <li>特码为落球特别号</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="step">
                                    <h6>STEP.3 确认投注倍率</h6>
                                    <img src={image("new_step3.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP.4 确认投注直接下注</h6>
                                    <img src={image("new_step4.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP.5 下注后确认投注结果</h6>
                                    <img src={image("new_step5.png")} />
                                </div>
                                <div className="step">
                                    <h6>STEP.6 中奖结果可于投注记录查询</h6>
                                    <img src={image("new_step6.png")} />
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
