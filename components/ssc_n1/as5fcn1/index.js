import { useState, useContext, useCallback } from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { As5fcn1Header } from "./Header";
import { As5fcn1Game } from "./GameCenter";
import { As5fcn1MultipleSelect } from "./MultipleSelect";
import { useImage } from "@core/hooks/useImage";
import { useHandleBet } from "../common/useHandleBet";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { As5fcn1BetInfo } from "./BetInfo";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { As5fcn1FirstTimeDialog } from "./FirstTimeDialog";

export const As5fcn1 = () => {
    const image = useImage();
    const showBadge = useSelector((state) => state.EarnInfo.showBadge);
    const onGoPage = useContext(GoPageContext);
    const { multipleHandle, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();

    return (
        <LayoutContainer>
            <As5fcn1Header />
            <As5fcn1BetInfo />
            <As5fcn1Game />
            <footer>
                <button onClick={() => onGoPage("betRecord")}>
                    <img src={image("bot_icon1.png")} />
                    <img src={image("star.png")} className="star" style={{ visibility: showBadge ? "visible" : "hidden" }} />
                </button>
                <button onClick={toggleMultipleMenu}>
                    <img src={image("bot_icon2.png")} />
                </button>
                <button onClick={multipleHandle.clean}>
                    <img src={image("bot_icon3.png")} />
                </button>
                <button onClick={onOpenCleanConfirm}>
                    <img src={image("bot_icon4.png")} />
                </button>
                <button onClick={onOpenBetConfirm}>
                    <img src={image("bot_icon5.png")} />
                </button>
            </footer>

            {showMultipleMenu && <As5fcn1MultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fcn1FirstTimeDialog />
        </LayoutContainer>
    );
};
