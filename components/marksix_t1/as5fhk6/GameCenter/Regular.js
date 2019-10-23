import { Fragment, useContext, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { REGULAR_KIND } from "@core/constants/marksix_t1";
import { GameSwitchContext } from "../../common/GameSwitchContext";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";
import { REGULAR_KIND_DESC, REGULAR_DICTIONARY } from "@core/constants/marksix_t1/as5fhk6/dictionary";

const colorClass = {
    red: "rcon",
    blue: "bcon",
    green: "gcon",
};

export const Regular = () => {
    const { gameKind, setGameKind } = useContext(GameSwitchContext);
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_t1);
    const { bet_odds_config, numbers_config } = config;

    useEffect(() => {
        setGameKind(REGULAR_KIND.regular_number);
    }, []);

    const odds = useMemo(() => {
        const { odds: [odds = 0] = [] } = bet_odds_config[gameKind] || {};
        return odds;
    }, [bet_odds_config, gameKind]);

    const onToggleItem = (key, bet_type, bet_detail) => () => {
        itemListHandle.toggle(key, { bet_type, bet_detail });
    };

    return (
        <Fragment>
            <section className="left-select">
                <div className="left-select-title" />
                <ul>
                    {Object.keys(REGULAR_KIND).map((kind) => (
                        <li
                            key={kind}
                            className={`${gameKind === REGULAR_KIND[kind] ? "active" : ""}`}
                            onClick={() => setGameKind(REGULAR_KIND[kind])}
                        >
                            {REGULAR_KIND_DESC[kind]}
                        </li>
                    ))}
                </ul>
                <div className="left-select-bottom" />
            </section>
            <main>
                <div className="main_number">
                    <h2 className="active">
                        {REGULAR_DICTIONARY[gameKind]}赔率{_floorWithDigits(odds)}
                    </h2>
                    <article className="lhc_kind">
                        <div className="topborder">
                            <div className="lhc_btn_title">
                                <span>臣座</span>
                            </div>
                        </div>
                        <div className="lhc_btn_box">
                            {Object.keys(numbers_config).map((number) => {
                                const color = numbers_config[number];
                                const key = `${gameKind}${number}`;
                                const isActive = itemList.has(key);
                                return (
                                    <div
                                        key={key}
                                        className={`${colorClass[color]} ${isActive ? "active" : ""}`}
                                        onClick={onToggleItem(key, gameKind, String(number))}
                                    >
                                        {number}
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </main>
        </Fragment>
    );
};
