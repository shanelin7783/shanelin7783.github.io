import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { version } from "../../package";
import { showDialog } from "@core/reducer/Dialog";

export const useVersion = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const getVirsion = () => {
        setCount((prevCount) => prevCount + 1);
    };
    useEffect(() => {
        if (count > 5) {
            dispatch(showDialog({ message: `版號: ${version} \n當前環境:${window.location.href}` }));
            setCount(0);
        }
    }, [count]);
    return getVirsion;
};
