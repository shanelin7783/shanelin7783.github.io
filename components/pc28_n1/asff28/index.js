import { useContext } from "react";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { useImage } from "@core/hooks/useImage";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { Asff28MultipleSelect } from "./MultipleSelect";
import { Asff28Header } from "./Header";
import { Asff28Game } from "./GameCenter";
import { useHandleBet } from "../common/useHandleBet";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { Asff28FirstTimeDialog } from "./FirstTimeDialog";

export const Asff28 = () => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const { multipleHandle, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();

    return (
        <LayoutContainer>
            <Asff28Header />
            <Asff28Game />
            <footer>
                <div className="bottom_btnbox">
                    <button onClick={() => onGoPage("betRecord")}>
                        <img src={image("bot_icon5.svg")} />
                        输赢
                        <span style={{ display: true ? "block" : "none" }}>
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
                    <button onClick={onOpenBetConfirm}>
                        <img src={image("bot_icon4.svg")} />
                        确认投注
                    </button>
                </div>
            </footer>
            {showMultipleMenu && <Asff28MultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <Asff28FirstTimeDialog />
        </LayoutContainer>
    );
};
