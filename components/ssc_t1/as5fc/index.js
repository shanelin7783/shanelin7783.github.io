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
import { As5fcMultipleSelect } from "./MultipleSelect";
import { As5fcGameHeader } from "./GameHeader";
import { As5fcGameCenter } from "./GameCenter";
import { useHandleBet } from "../common/useHandleBet";
import { useRandom } from "../common/useRandom";
import { useCheckOrder } from "../common/useCheckOrder";
import { As5fcFirstTimeDialog } from "./FirstTimeDialog";

export const As5fc = () => {
    const image = useImage();
    const { itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();
    const handleRandom = useRandom();
    useCheckOrder();

    return (
        <LayoutContainer>
            <As5fcGameHeader />
            <As5fcGameCenter />
            <footer>
                <button onClick={toggleMultipleMenu}>
                    <img src={image("bot_icon1.png")} alt="icon" />
                    <span>投注倍率</span>
                </button>
                <button onClick={handleRandom}>
                    <img src={image("bot_icon2.png")} alt="icon" />
                    <span>机选</span>
                </button>
                <button onClick={onOpenCleanConfirm}>
                    <img src={image("bot_icon3.png")} alt="icon" />
                    <span>清空</span>
                </button>
                <button onClick={onOpenBetConfirm}>
                    <img src={image("bot_icon4.png")} alt="icon" />
                </button>
            </footer>
            {showMultipleMenu && <As5fcMultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fcFirstTimeDialog />
        </LayoutContainer>
    );
};
