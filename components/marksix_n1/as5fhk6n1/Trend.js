import { Fragment, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { ZOD_MAP } from "@core/constants/custom";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { COLOR_TEXT, WILD_CONFIG, WILD_TEXT } from "@core/constants/marksix_n1/dictionary";

export const As5fhk6n1Trend = () => {
    const image = useImage();
    const [view, setView] = useState(0);
    const list = useSelector((state) => state.History.list);
    const {
        zodiac_config: { zodiac_numbers },
        numbers_config,
    } = useSelector((state) => state.Config.config.marksix_n1);
    const zodiac_config = useMemo(
        () =>
            Object.keys(zodiac_numbers).reduce((prev, key) => {
                zodiac_numbers[key].forEach((num) => {
                    prev[num] = key;
                });
                return prev;
            }, {}),
        [],
    );
    const config = {
        color: numbers_config,
        zodiac: zodiac_config,
    };
    const onBack = useBackGame();

    const onChangeView = (index) => () => {
        setView(index);
    };

    return (
        <LayoutContainer>
            <div className="inside_header">
                <a className="lhc_back" onClick={onBack}>
                    <span>
                        <img src={image("angle.png")} alt="" />
                        返回
                    </span>
                </a>
                <div className="lhc_tit">走势图</div>
            </div>
            <article className="chart">
                <h2>六合彩走势图</h2>
                <ul>
                    {["彩球号码", "特码色波"].map((label, index) => (
                        <li key={label} className={`${view === index ? "active" : ""}`} onClick={onChangeView(index)}>
                            {label}
                        </li>
                    ))}
                </ul>
                {view === 0 && <BallView key={"ball"} list={list} {...config} />}
                {view === 1 && <SpecialView key={"special"} list={list} {...config} />}
            </article>
        </LayoutContainer>
    );
};

const BallView = ({ list, color, zodiac }) => (
    <Fragment>
        <dl className="lhcchart_tit">
            <dt>期号</dt>
            <dd>
                <div className="lhcchart_txt1">彩球号码</div>
                <div className="lhcchart_txt2">
                    <div>正码1</div>
                    <div>正码2</div>
                    <div>正码3</div>
                    <div>正码4</div>
                    <div>正码5</div>
                    <div>正码6</div>
                    <div>特码</div>
                </div>
            </dd>
        </dl>
        {list.map(({ expect, numbers }) => (
            <dl key={expect} className="lhcchart_number">
                <dt>{expect}</dt>
                <dd>
                    {numbers.split(",").map((num) => (
                        <div key={num}>
                            <div className={`lhc_${color[Number(num)]}num`}>{num}</div>
                            <span>{ZOD_MAP[zodiac[Number(num)]]}</span>
                        </div>
                    ))}
                </dd>
            </dl>
        ))}
    </Fragment>
);

const SpecialView = ({ list, color }) => (
    <Fragment>
        <dl className="lhcchart_specialtit">
            <dt>期号</dt>
            <dd>色波</dd>
        </dl>
        {list.map(({ numbers, expect }) => {
            const special = numbers.split(",").pop();
            return (
                <dl key={expect} className="lhcchart_special">
                    <dt>{expect}</dt>
                    <dd className={`lhcchart_bg${color[Number(special)]}`}>{COLOR_TEXT[color[Number(special)]]}波</dd>
                </dl>
            );
        })}
    </Fragment>
);
