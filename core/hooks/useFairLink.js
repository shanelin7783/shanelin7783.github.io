import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDialog } from "@core/reducer/Dialog";
import { fetchFair } from "@core/reducer/Fair";

export const useFairLink = () => {
    const dispatch = useDispatch();
    const fairLink = useSelector((state) => state.Fair.url);
    const expect = useSelector((state) => {
        const [first = {}] = state.History.list;
        const { expect = "" } = first;
        return expect;
    });

    useEffect(() => {
        if (expect) {
            dispatch(fetchFair());
        }
    }, [expect]);

    const onOpenFairLink = useCallback(() => {
        if (fairLink) {
            window.open(fairLink, "_blank");
        } else {
            dispatch(showDialog({ message: "验证网页开启失败 请重试，谢谢" }));
        }
    }, [fairLink]);

    return onOpenFairLink;
};
