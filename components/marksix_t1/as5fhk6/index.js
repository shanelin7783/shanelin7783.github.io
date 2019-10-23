import { useContext } from "react";
import LayoutContainer from "@components/common/LayoutContainer";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useCleaningConfirm } from "@core/hooks/useCleaningConfirm";
import { ConfirmDialog } from "@components/common/ConfirmDialog";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { useBetConfirm } from "@core/hooks/useBetConfirm";
import { useImage } from "@core/hooks/useImage";
import { As5fhk6Header } from "./Header";
import { useMultipleMenu } from "@core/hooks/useMultipleMenu";
import { As5fhk6GameCategoryMenu } from "./GameCategoryMenu";
import { As5fhk6MultipleSelect } from "./MultipleSelect";
import { As5fhk6Game } from "./GameCenter";
import { useHandleBet } from "../common/useHandleBet";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { useRandom } from "../common/useRandom";
import { As5fhk6FirstTimeDialog } from "./FirstTimeDialog";

export const As5fhk6 = () => {
    const image = useImage();
    const { showGameCategoryMenu } = useContext(GameSwitchContext);
    const { multiple, multipleHandle, itemList, totalBets, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const handleBet = useHandleBet();
    const handleRandom = useRandom();

    return (
        <LayoutContainer>
            <As5fhk6Header />
            <As5fhk6Game />
            <footer>
                <button onClick={toggleMultipleMenu}>
                    <img src={image("bot_icon1.png")} alt="" />
                    <span>投注倍率</span>
                </button>
                <button onClick={handleRandom}>
                    <img src={image(`bot_icon2.png`)} alt="" />
                    <span>机选</span>
                </button>
                <button onClick={onOpenCleanConfirm}>
                    <img src={image(`bot_icon3.png`)} alt="" />
                    <span>清空</span>
                </button>
                <button onClick={onOpenBetConfirm}>
                    <img src={image(`bot_icon4.png`)} alt="" />
                </button>
            </footer>
            {showGameCategoryMenu && <As5fhk6GameCategoryMenu />}
            {showMultipleMenu && <As5fhk6MultipleSelect ref={multipleMenuRef} />}
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
            <As5fhk6FirstTimeDialog />
        </LayoutContainer>
    );
};
