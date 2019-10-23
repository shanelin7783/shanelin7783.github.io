import { useDispatch, useSelector } from "react-redux";
import { toggleMute } from "@core/reducer/Query";

export const useToggleMute = () => {
    const dispatch = useDispatch();
    const mute = useSelector((state) => state.Query.mute);

    const onToggleMute = () => {
        dispatch(toggleMute());
    };
    return { mute, onToggleMute };
};
