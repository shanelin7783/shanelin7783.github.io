import { useContext } from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { useImage } from "@core/hooks/useImage";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { useHandleBet } from "../common/useHandleBet";
import { useRandom } from "../common/useRandom";
import { As5fcn2Header } from "./Header";
import { As5fcn2Game } from "./GameCenter";
import { As5fcn2MultipleSelect } from "./MultipleSelect";
import { As5fcn2FirstTimeDialog } from "./FirstTimeDialog";

export const As5fcn2 = () => {
    const { itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();
    const handleRandom = useRandom();

    return (
        <LayoutContainer>
            <As5fcn2Header />
            <As5fcn2Game />
            <footer>
                <button onClick={toggleMultipleMenu}>
                    <div />
                    <span>投注倍率</span>
                </button>
                <button onClick={handleRandom}>
                    <div />
                    <span>机选</span>
                </button>
                <button onClick={onOpenCleanConfirm}>
                    <div />
                    <span>清空</span>
                </button>
                <button onClick={onOpenBetConfirm}>
                    <div />
                </button>
            </footer>
            {showMultipleMenu && <As5fcn2MultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fcn2FirstTimeDialog />
        </LayoutContainer>
    );
};
