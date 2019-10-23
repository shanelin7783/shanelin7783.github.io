import { useState, useCallback } from "react";
import { useClickOutside } from "./useClickOutside";

export const useMultipleMenu = () => {
    const [showMultipleMenu, setShowMultiple] = useState(false);
    const multipleMenuRef = useClickOutside(showMultipleMenu, setShowMultiple);
    const toggleMultipleMenu = useCallback(() => {
        setShowMultiple(!showMultipleMenu);
    }, [showMultipleMenu]);
    return {showMultipleMenu, toggleMultipleMenu, multipleMenuRef};
};
