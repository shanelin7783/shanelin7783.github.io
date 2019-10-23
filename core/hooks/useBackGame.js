import Router from "next/router";
import { useSelector } from "react-redux";

export const useBackGame = () => {
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    return () => Router.replace(`/game`, `/game/${game_code}`);
};
