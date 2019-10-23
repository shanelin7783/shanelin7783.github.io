import { Fragment, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { ZOD_MAP } from "@core/constants/custom";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";
import { COLOR_TEXT, WILD_CONFIG, WILD_TEXT } from "@core/constants/marksix_n1/dictionary";

export const As5fhk6n2Trend = () => {
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
                    {["彩球号码", "总合显示", "特码色波"].map((label, index) => (
                        <li key={label} className={`${view === index ? "active" : ""}`} onClick={onChangeView(index)}>
                            {label}
                        </li>
                    ))}
                </ul>
                {view === 0 && <BallView key={"ball"} list={list} {...config} />}
                {view === 1 && <SumView key={"sum"} list={list} />}
                {view === 2 && <SpecialView key={"special"} list={list} {...config} />}
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

const SumView = ({ list }) => (
    <Fragment>
        <dl className="lhcchart_totaltit">
            <dt>期号</dt>
            <dd>总合</dd>
            <dd>总大小</dd>
            <dd>总单双</dd>
        </dl>
        {list.map(({ numbers, expect }) => {
            const total = numbers.split(",").reduce((a, b) => a + Number(b), 0);
            const isBig = total >= 175;
            const isOdd = total % 2 === 1;
            return (
                <dl key={expect} className="lhcchart_total">
                    <dt>{expect}</dt>
                    <dd>{total}</dd>
                    <dd className={`lhc_font${isBig ? "blue" : "red"}`}>{`总${isBig ? "大" : "小"}`}</dd>
                    <dd className={`lhc_font${isOdd ? "red" : "blue"}`}>{`总${isOdd ? "单" : "双"}`}</dd>
                </dl>
            );
        })}
    </Fragment>
);

const SpecialView = ({ list, color, zodiac }) => (
    <Fragment>
        <dl className="lhcchart_specialtit">
            <dt>期号</dt>
            <dd>
                <div className="lhcchart_specialtxt">
                    <div className="lhc_fontblue">单双</div>
                    <div className="lhc_fontblue">大小</div>
                    <div className="lhc_fontblue">合单双</div>
                    <div className="lhc_fontred">合大小</div>
                    <div className="lhc_fontblue">合尾大小</div>
                    <div className="lhc_fontred">生肖</div>
                </div>
            </dd>
            <dd>色波</dd>
        </dl>
        {list.map(({ numbers, expect }) => {
            const special = numbers.split(",").pop();
            const sum = special.split("").reduce((a, b) => a + Number(b), 0);
            const tail = sum.toString().substr(-1);
            const type = WILD_CONFIG[zodiac[Number(special)]];

            const isSpecialOdd = special % 2 === 1;
            const isSpecialBig = special >= 25;
            const isSumOdd = sum % 2 === 1;
            const isSumBig = sum >= 7;
            const isTailBig = tail >= 5;
            const isWild = type === "wild";
            return (
                <dl key={expect} className="lhcchart_special">
                    <dt>{expect}</dt>
                    <dd>
                        <div className={`lhcchart_font${isSpecialOdd ? "red" : "blue"}`}>{isSpecialOdd ? "单" : "双"}</div>
                        <div className={`lhcchart_font${isSpecialBig ? "blue" : "red"}`}>{isSpecialBig ? "大" : "小"}</div>
                        <div className={`lhcchart_font${isSumOdd ? "red" : "blue"}`}>合{isSumOdd ? "单" : "双"}</div>
                        <div className={`lhcchart_font${isSumBig ? "red" : "blue"}`}>合{isSumBig ? "大" : "小"}</div>
                        <div className={`lhcchart_font${isTailBig ? "red" : "blue"}`}>合尾{isTailBig ? "大" : "小"}</div>
                        <div className={`lhcchart_font${isWild ? "red" : "blue"}`}>{WILD_TEXT[type]}</div>
                    </dd>
                    <dd className={`lhcchart_bg${color[Number(special)]}`}>{COLOR_TEXT[color[Number(special)]]}波</dd>
                </dl>
            );
        })}
    </Fragment>
);
