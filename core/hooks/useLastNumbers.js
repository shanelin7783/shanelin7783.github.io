import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEarnInfo } from "@core/reducer/EarnInfo";

export const useLastNumbers = ({ length = 4, delayTime = 5000 }) => {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [numbers, setNumbers] = useState(Array.from({ length }, () => "-"));
    const [expect, setExpect] = useState("数据获取中...");
    const dispatch = useDispatch();
    const previous = useSelector((state) => state.RecentInfo.previous);
    const lastHistory = useSelector((state) => state.History.list[0] || {});
    const clearBadge = useSelector((state) => state.EarnInfo.clearBadge);

    useEffect(() => {
        if (isFirstTime && previous.hasOwnProperty("winning_numbers") && lastHistory.numbers) {
            if (previous.winning_numbers) {
                setNumbers(previous.winning_numbers.split(","));
                setExpect(previous.expect);
                !clearBadge[previous.expect] && onFetchEarnInfo(previous.expect);
            } else {
                setNumbers(lastHistory.numbers.split(","));
                setExpect(lastHistory.expect);
                !clearBadge[lastHistory.expect] && onFetchEarnInfo(lastHistory.expect);
            }
            setIsFirstTime(false);
        }
    }, [isFirstTime, previous.winning_numbers, lastHistory.numbers]);

    useEffect(() => {
        if (!isFirstTime && previous.winning_numbers) {
            const timeout = setTimeout(() => {
                setNumbers(previous.winning_numbers.split(","));
                setExpect(previous.expect);
                onFetchEarnInfo(previous.expect);
            }, delayTime);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [previous.winning_numbers]);

    const onFetchEarnInfo = (expect) => {
        dispatch(fetchEarnInfo({ expect }));
    };

    return { numbers, expect };
};
