import { useState, useContext, useCallback } from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { As5fhk6n1Header } from "./Header";
import { As5fhk6n1MultipleSelect } from "./MultipleSelect";
import { As5fhk6n1Game } from "./GameCenter";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { useImage } from "@core/hooks/useImage";
import { useHandleBet } from "../common/useHandleBet";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { As5fhk6n1FirstTimeDialog } from "./FirstTimeDialog";

export const As5fhk6n1 = () => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const showBadge = useSelector((state) => state.EarnInfo.showBadge);
    const { multipleHandle, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();

    return (
        <LayoutContainer>
            <As5fhk6n1Header />
            <As5fhk6n1Game />
            <footer>
                <div className="bottom_btnbox">
                    <button onClick={() => onGoPage("betRecord")}>
                        <img src={image("bot_icon5.svg")} />
                        输赢
                        <span style={{ display: showBadge ? "visibility" : "hidden" }}>
                            <img src={image("star.png")} />
                        </span>
                    </button>
                    <button className="ss" onClick={toggleMultipleMenu}>
                        <img src={image("bot_icon1.svg")} />
                        投注倍率
                    </button>
                    <button onClick={multipleHandle.clean}>
                        <img src={image("bot_icon2.svg")} />
                        倍率撤销
                    </button>
                    <button onClick={onOpenCleanConfirm}>
                        <img src={image("bot_icon3.svg")} />
                        清空
                    </button>
                    <button id="onBet" onClick={onOpenBetConfirm}>
                        <img src={image("bot_icon4.svg")} />
                        确认投注
                    </button>
                </div>
            </footer>

            {showMultipleMenu && <As5fhk6n1MultipleSelect ref={multipleMenuRef} />}

            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fhk6n1FirstTimeDialog />
        </LayoutContainer>
    );
};
