import { useState, useContext, useCallback } from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { As5fcn1_fHeader } from "./Header";
import { As5fcn1_fGame } from "./GameCenter";
import { As5fcn1_fMultipleSelect } from "./MultipleSelect";
import { useImage } from "@core/hooks/useImage";
import { useHandleBet } from "../common/useHandleBet";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { As5fcn1_fFirstTimeDialog } from "./FirstTimeDialog";

export const As5fcn1_f = () => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const { multipleHandle, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();

    return (
        <LayoutContainer>
            <As5fcn1_fHeader />
            <As5fcn1_fGame />
            <footer>
                <div className="bottom_btnbox">
                    <button onClick={() => onGoPage("betRecord")}>
                        <img src={image("bot_icon5.png")} />
                        输赢
                        <span style={{ display: true ? "block" : "none" }}>
                            <img src={image("star.png")} />
                        </span>
                    </button>
                    <button className="ss" onClick={toggleMultipleMenu}>
                        <img src={image("bot_icon1.png")} />
                        投注倍率
                    </button>
                    <button onClick={multipleHandle.clean}>
                        <img src={image("bot_icon2.png")} />
                        倍率撤销
                    </button>
                    <button onClick={onOpenCleanConfirm}>
                        <img src={image("bot_icon3.png")} />
                        清空
                    </button>
                    <button onClick={onOpenBetConfirm}>
                        <img src={image("bot_icon4.png")} />
                        确认投注
                    </button>
                </div>
            </footer>
            {showMultipleMenu && <As5fcn1_fMultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fcn1_fFirstTimeDialog />
        </LayoutContainer>
    );
};
