import { Fragment, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { REGULAR_ZODIAC_KIND, ZODIAC_TAIL_LIST } from "@core/constants/marksix_t1";
import { GameSwitchContext } from "../../common/GameSwitchContext";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { useImage } from "@core/hooks/useImage";
import { REGULAR_ZODIAC_KIND_DESC, ZODIAC_DICTIONARY } from "@core/constants/marksix_t1/as5fhk6/dictionary";

export const Zodiac = () => {
    const image = useImage();
    const { gameKind, setGameKind } = useContext(GameSwitchContext);
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const config = useSelector((state) => state.Config.config.marksix_t1);
    const { bet_odds_config } = config;

    useEffect(() => {
        setGameKind(REGULAR_ZODIAC_KIND.regular_zodiac);
    }, []);

    const onToggleItem = (bet_type) => () => {
        itemListHandle.toggle(bet_type, { bet_type });
    };

    return (
        <Fragment>
            <section className="left-select">
                <div className="left-select-title" />
                <ul>
                    {Object.keys(REGULAR_ZODIAC_KIND).map((value, index) => (
                        <li
                            key={value}
                            className={`${gameKind === REGULAR_ZODIAC_KIND[value] ? "active" : ""}`}
                            onClick={() => setGameKind(REGULAR_ZODIAC_KIND[value])}
                        >
                            {REGULAR_ZODIAC_KIND_DESC[value]}
                        </li>
                    ))}
                </ul>
                <div className="left-select-bottom" />
            </section>
            <main>
                <div className="main_number">
                    <h2 className="active">{ZODIAC_DICTIONARY[gameKind]}</h2>
                    <article className="lhc_kind">
                        <div className="topborder">
                            <div className="lhc_btn_title">
                                <span>生肖</span>
                            </div>
                        </div>
                        <div className="lhc_btn_box2">
                            {ZODIAC_TAIL_LIST.ZODIAC.map((_, index) => {
                                const { bet_type = "", bet_type_msg = "" } = bet_odds_config[`${gameKind}_${index + 1}`] || {};
                                if (bet_type) {
                                    const msg = bet_type_msg.replace(REGULAR_ZODIAC_KIND_DESC[gameKind], "");
                                    const isActive = itemList.has(bet_type);
                                    return (
                                        <div key={bet_type} className={`${isActive ? "active" : ""}`} onClick={onToggleItem(bet_type)}>
                                            <img alt="icon" src={image(`z${index + 1}.png`)} />
                                            <br />
                                            {msg}
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </article>
                </div>
            </main>
        </Fragment>
    );
};
