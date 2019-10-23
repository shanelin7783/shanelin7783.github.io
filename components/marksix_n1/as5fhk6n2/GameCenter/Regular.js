import { useContext, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { _floorWithDigits, _rangeArr, _pad } from "@core/libraries/utils";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { FreezeBackground } from "@components/common/FreezeBackground";
import { useImage } from "@core/hooks/useImage";

const REGULAR_ITEM = chunk(_rangeArr(1, 49), 5);

const REGULAR_LIST = [
    { name: "正碼全", subName: "全", bet_type: "regular_number" },
    { name: "正一碼", subName: "一", bet_type: "regular_1" },
    { name: "正二碼", subName: "二", bet_type: "regular_2" },
    { name: "正三码", subName: "三", bet_type: "regular_3" },
    { name: "正四码", subName: "四", bet_type: "regular_4" },
    { name: "正五码", subName: "五", bet_type: "regular_5" },
    { name: "正六码", subName: "六", bet_type: "regular_6" },
    { name: "特码", subName: "特", bet_type: "special_number" },
];

export const Regular = () => {
    const image = useImage();
    const { itemList, itemListHandle } = useContext(MultipleContext);

    const config = useSelector((state) => state.Config.config.marksix_n1);
    const { bet_odds_config, numbers_config } = config;

    const [showPopup, togglePopup] = useState(false);
    const [selectNumber, setSelectNumber] = useState(null);

    const oddsRange = useMemo(() => {
        const data = REGULAR_LIST.reduce((prev, curr) => {
            const odds = bet_odds_config[curr.bet_type].odds.map((value) => Number(value));
            prev.push(...odds);
            return prev;
        }, []);
        const max = _floorWithDigits(Math.max(...data));
        const min = _floorWithDigits(Math.min(...data));
        return `${min}${data.length > 1 && " - " + max}`;
    }, [bet_odds_config]);

    const onSelectNumber = (number) => {
        togglePopup(true);
        setSelectNumber(number);
    };

    return (
        <article className="lhc_kind positive play_number">
            <h2>
                <span>赔率： {oddsRange}</span>
                正码
            </h2>
            {REGULAR_ITEM.map((block, index) => (
                <div className="lhc_btn_box" key={index}>
                    {block.map((number) => {
                        const color = numbers_config[number];
                        const isActive = REGULAR_LIST.find(({ bet_type }) => itemList.has(`${bet_type}${number}`));
                        return (
                            <div key={number} className={`${color}_con ${isActive ? "active" : ""}`} onClick={() => onSelectNumber(number)}>
                                <h6>{_pad(number, 2)}</h6>
                                <div className="btnicon">
                                    {REGULAR_LIST.map(
                                        ({ bet_type, subName }) => itemList.has(`${bet_type}${number}`) && <span key={subName}>{subName}</span>,
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
            {showPopup && (
                <FreezeBackground>
                    <div className="kind_popup">
                        <div className="kind_menubox">
                            <div className="kind_menu_title">
                                <img src={image("star_icon.svg")} />
                                投注号码：<span>{selectNumber}</span>
                            </div>
                            <button onClick={() => togglePopup(false)}>
                                <img src={image("close.png")} />
                            </button>
                            <div className="kind_menu_list">
                                <h6>您要投注的位码是</h6>
                                <ol>
                                    {REGULAR_LIST.map(({ name, bet_type }) => {
                                        const { odds = 0 } = bet_odds_config[bet_type] || {};
                                        const itemKey = `${bet_type}${selectNumber}`;
                                        return (
                                            <li
                                                key={bet_type}
                                                className={`${itemList.has(itemKey) ? "active" : ""}`}
                                                onClick={() => itemListHandle.toggle(itemKey, { bet_type, bet_detail: String(selectNumber) })}
                                            >
                                                {name}
                                                <span>{_floorWithDigits(odds)}</span>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="kind_window_bg" onClick={() => togglePopup(false)} />
                    </div>
                </FreezeBackground>
            )}
        </article>
    );
};
