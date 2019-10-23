import { useContext } from "react";
import { useSelector } from "react-redux";
import { _transformMinutesToSeconds, _pad } from "@core/libraries/utils";
import { getCurrencyImage } from "@core/libraries/getCurrencyImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { useFairLink } from "@core/hooks/useFairLink";

export const As5fcn1BetInfo = () => {
    const image = useImage();
    const onOpenFairLink = useFairLink();
    const { betRate, totalBets, betResult, maximun } = useContext(MultipleContext);
    const currency = useSelector((state) => state.Query.currency);
    return (
        <article className="note">
            <div>
                <img src={getCurrencyImage(currency)} />
                <span>1</span> 注=<span>{betRate}</span> {currency} <span>/</span>
                <span>{totalBets}</span>注，共<span>{betResult}</span>
                {currency}
            </div>
            <div className="verify_fairness">
                <div>最大收益金额 : {maximun}{currency}</div>
                <div>
                    <img src={image("Verify_fairness.png")} onClick={onOpenFairLink}/>
                </div>
            </div>
        </article>
    );
};
