import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { cleanFirstTime } from "@core/reducer/Query";

export const useFirstTimeDialog = () => {
    const dispatch = useDispatch();
    const first_time = useSelector((state) => state.Query.first_time);
    const [showRuleDialog, setShowRuleDialog] = useState(false);
    const [showIntroduceDialog, setShowIntroduceDialog] = useState(first_time);

    useEffect(() => {
        dispatch(cleanFirstTime());
    }, []);

    const onCloseIntroduceDialog = () => {
        setShowIntroduceDialog(false);
        setShowRuleDialog(true);
    };

    const onCloseRuleDialog = () => {
        setShowRuleDialog(false);
    };

    return { showIntroduceDialog, onCloseIntroduceDialog, showRuleDialog, onCloseRuleDialog };
};
