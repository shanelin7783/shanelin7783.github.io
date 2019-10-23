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
import { As5f28MultipleSelect } from "./MultipleSelect";
import { As5f28Header } from "./Header";
import { As5f28Game } from "./GameCenter";
import { useHandleBet } from "../common/useHandleBet";
import { useRandom } from "../common/useRandom";

export const As5f28 = () => {
    const image = useImage();
    const { betRate, totalBets, betResult, itemList, itemListHandle } = useContext(MultipleContext);
    const { showMultipleMenu, toggleMultipleMenu, multipleMenuRef } = useMultipleMenu();
    const { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm } = useCleaningConfirm();
    const { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm } = useBetConfirm();
    const currency = useSelector((state) => state.Query.currency);
    const handleBet = useHandleBet();
    const handleRandom = useRandom();

    return (
        <LayoutContainer>
            <As5f28Header />
            <As5f28Game />
            <aside>
                <div className="number_confirm">
                    <div>
                        <img src={getCurrencyImage(currency)} alt="eth" />1 注 ≈ {betRate} {currency}
                    </div>
                    <div>|</div>
                    <div>
                        <span>{totalBets}</span>注，共
                        <span>{betResult}</span>
                        {currency}
                    </div>
                </div>
                <ul>
                    <li onClick={toggleMultipleMenu}>
                        <img src={image("btn_price.png")} alt="" />
                        <p>单注金额</p>
                    </li>
                    <li onClick={handleRandom}>
                        <img src={image("btn_random.png")} alt="" />
                        <p>机选</p>
                    </li>
                    <li onClick={onOpenCleanConfirm}>
                        <img src={image(`${itemList.size > 0 ? "btn_clear.png" : "btn_clear_non.png"}`)} alt="" />
                        <p>清空投注</p>
                    </li>
                    <li onClick={onOpenBetConfirm}>
                        <img src={image("btn_check.png")} alt="" />
                        <p>投注</p>
                    </li>
                </ul>
                {showMultipleMenu && <As5f28MultipleSelect ref={multipleMenuRef} />}
            </aside>
            <ConfirmDialog state={showCleanConfirm} type={CONFIRM_TYPE.CLEAN_BET} callback={itemListHandle.clean} close={onCloseCleanConfirm} />
            <ConfirmDialog state={showBetConfirm} type={CONFIRM_TYPE.BET} callback={handleBet} close={onCloseBetConfirm} />
        </LayoutContainer>
    );
};
