import { useMemo, useContext } from "react";
import { useSelector } from "react-redux";
import { REGULAR_LIST, COLOR_LIST } from "@core/constants/marksix_n1";
import { useImage } from "@core/hooks/useImage";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GameSwitchContext } from "../common/GameSwitchContext";
import { GAME_KIND } from "@core/constants/marksix_n1/as5fhk6n1";
import Big from "big.js";

export const As5fhk6n1Maximun = () => {
    const image = useImage();
    const { gameKind } = useContext(GameSwitchContext);
    const { totalBets } = useContext(MultipleContext);
    const bet_odds_config = useSelector((state) => {
        const { bet_odds_config = {} } = state.Config.config.marksix_n1 || {};
        return bet_odds_config;
    });

    const getMaxOdds = (list) => {
        return Math.max(...[...list].map((bet_type) => Math.max(...bet_odds_config[bet_type].odds)));
    };
    const maxRegularOdds = useMemo(() => getMaxOdds(REGULAR_LIST), [bet_odds_config]);

    const maxColorOdds = useMemo(() => getMaxOdds(COLOR_LIST), [bet_odds_config]);

    const maximun = useMemo(() => {
        const value = Big(gameKind == GAME_KIND.REGULAR ? maxRegularOdds : maxColorOdds);
        return value.mul(totalBets).toFixed(4);
    }, [totalBets, maxRegularOdds, maxColorOdds]);

    return (
        <div>
            <img src={image("header_disc.svg")} alt="" />
            最大收益金额 : {maximun}元
        </div>
    );
};
