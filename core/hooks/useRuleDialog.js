import { useState, useCallback } from "react";

export const useRuleDialog = () => {
    const [showRuleDialog, setState] = useState(false);

    const onOpenRuleDialog = useCallback(() => {
        setState(true);
    }, [showRuleDialog]);

    const onCloseRuleDialog = useCallback(() => {
        setState(false);
    }, [showRuleDialog]);
    return { showRuleDialog, onOpenRuleDialog, onCloseRuleDialog };
};
