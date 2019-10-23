import { useSelector } from "react-redux";
import { getLink } from "@core/libraries/getLink";

export const useImage = () => {
    const BaseInfo = useSelector((state) => state.BaseInfo);
    const { game_code, game_group } = BaseInfo;
    return (name = '') => getLink(`${game_group}/${game_code}/mobile/images/${name}`);
};

export const useAnimationImage = () => {
    const BaseInfo = useSelector((state) => state.BaseInfo);
    const { game_code, game_group } = BaseInfo;
    return (name = '') => getLink(`${game_group}/${game_code}/animation/images/${name}`);
};

export const useAnimationSound = () => {
    const BaseInfo = useSelector((state) => state.BaseInfo);
    const { game_code, game_group } = BaseInfo;
    return (name = '') => getLink(`${game_group}/${game_code}/animation/sounds/${name}`);
};