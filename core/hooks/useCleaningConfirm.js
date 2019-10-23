import { useState, useContext, useCallback } from "react";
import { MultipleContext } from "./MultipleContext";

export const useCleaningConfirm = () => {
    const { totalBets } = useContext(MultipleContext);
    const [showCleanConfirm, setState] = useState(false);
    const onOpenCleanConfirm = useCallback(() => {
        if (totalBets > 0) {
            setState(true);
        }
    }, [totalBets]);
    const onCloseCleanConfirm = useCallback(() => {
        setState(false);
    }, [showCleanConfirm]);
    return { showCleanConfirm, onOpenCleanConfirm, onCloseCleanConfirm };
};
