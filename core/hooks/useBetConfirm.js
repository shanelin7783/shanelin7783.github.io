import { useState, useContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MultipleContext } from "./MultipleContext";
import { showDialog } from "@core/reducer/Dialog";

export const useBetConfirm = () => {
    const dispatch = useDispatch();
    const { totalBets } = useContext(MultipleContext);
    const [showBetConfirm, setState] = useState(false);

    const onOpenBetConfirm = useCallback(() => {
        if (totalBets > 0) {
            setState(true);
        } else {
            dispatch(showDialog({ message: "请至少选择一注" }));
        }
    }, [totalBets]);

    const onCloseBetConfirm = useCallback(() => {
        setState(false);
    }, [showBetConfirm]);
    return { showBetConfirm, onOpenBetConfirm, onCloseBetConfirm };
};
