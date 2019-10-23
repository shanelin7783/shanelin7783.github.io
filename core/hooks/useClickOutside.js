import { useRef, useEffect } from "react";

export const useClickOutside = (state, setState, callback = () => {}) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (state && ref.current && !ref.current.contains(event.target)) {
                setState(false);
                callback();
            }
        };
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [state]);

    return ref;
};
