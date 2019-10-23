import { useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "@components/common/LayoutContainer";
import { As5fcCommonHeader } from "./CommonHeader";
import { _rangeArr } from "@core/libraries/utils";

const VIEWWIDTH = 375;
const CONTAINERWIDTH = 345;
const XSPACE = 25.19;
const YSPACE = 41.81;
const STEP = (XSPACE / CONTAINERWIDTH) * 100;

export const As5fcTrend = () => {
    const [digit, setDigit] = useState(0);
    const memoLine = useRef({});
    const memoCheck = useRef({
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
    });
    const list = useSelector((state) => state.History.list);
    const digits = useMemo(
        () =>
            list.reduce(
                (prev, cur) => {
                    prev[0] = prev[0] + cur.numbers.split(",")[0];
                    prev[1] = prev[1] + cur.numbers.split(",")[1];
                    prev[2] = prev[2] + cur.numbers.split(",")[2];
                    prev[3] = prev[3] + cur.numbers.split(",")[3];
                    prev[4] = prev[4] + cur.numbers.split(",")[4];
                    return prev;
                },
                {
                    0: "",
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                },
            ),
        [list],
    );

    const getLineProps = (diff) => {
        if (memoLine.current[diff]) return memoLine.current[diff];
        else {
            memoLine.current[diff] = {
                length: Math.sqrt(YSPACE * YSPACE + XSPACE * diff * (XSPACE * diff)),
                rotate: `rotate(${(Math.atan((XSPACE * diff) / YSPACE) + -(Math.PI / 2)) * (180 / Math.PI)}deg)`,
            };
            return memoLine.current[diff];
        }
    };

    const getBoxProps = (num, index, digit) => {
        const number = digits[digit][index];
        const missingData = memoCheck.current[digit];
        if (index === 0) {
            missingData[num] = 0;
        }
        if (number == num) {
            missingData[num] = 0;
            return {
                value: num,
                missing: false,
            };
        } else {
            if (!missingData[num]) missingData[num] = 1;
            else missingData[num] = missingData[num] + 1;
            return {
                value: missingData[num],
                missing: true,
            };
        }
    };

    const getMissingAverage = (digit, num) => {
        const chunks = digits[digit].split(num);
        const sum = chunks.reduce((a, b) => a + b.length, 0);
        return Math.floor(sum / chunks.length);
    };
    const getLargest = (digit, num) => {
        const chunks = digits[digit].split(num);
        const max = chunks.reduce((a, b) => (b.length > a ? b.length : a), 0);
        return max;
    };

    const onSetDigit = (digit) => () => {
        setDigit(digit);
    };

    return (
        <LayoutContainer>
            <As5fcCommonHeader title="走势图" />
            <main className="main-container">
                <article className="chart">
                    <ul>
                        <li onClick={onSetDigit(0)} className={`${digit === 0 ? "active" : ""}`}>
                            木
                        </li>
                        <li onClick={onSetDigit(1)} className={`${digit === 1 ? "active" : ""}`}>
                            火
                        </li>
                        <li onClick={onSetDigit(2)} className={`${digit === 2 ? "active" : ""}`}>
                            土
                        </li>
                        <li onClick={onSetDigit(3)} className={`${digit === 3 ? "active" : ""}`}>
                            金
                        </li>
                        <li onClick={onSetDigit(4)} className={`${digit === 4 ? "active" : ""}`}>
                            水
                        </li>
                    </ul>
                    <dl className="chart_tit">
                        <dt>期号</dt>
                        {_rangeArr(0, 9).map((number) => (
                            <dd key={number}>
                                <span>{number}</span>
                            </dd>
                        ))}
                    </dl>
                    {list.map((item, index) => (
                        <dl key={index} className={`chart_list expect ${index % 2 === 1 ? "bg_gray" : ""}`}>
                            <dt>{item.expect}</dt>
                            {digits[digit][index + 1] && (
                                <LineTo {...getLineProps(digits[digit][index] - digits[digit][index + 1])} start={digits[digit][index]} />
                            )}
                            {_rangeArr(0, 9).map((number) => (
                                <Box {...getBoxProps(number, index, digit)} key={number} />
                            ))}
                        </dl>
                    ))}
                    <dl className="chart_list chart_red">
                        <dt>平均遗漏</dt>
                        {_rangeArr(0, 9).map((number) => (
                            <dd key={number}>
                                <span>{getMissingAverage(digit, number)}</span>
                            </dd>
                        ))}
                    </dl>
                    <dl className="chart_list bg_gray">
                        <dt>最大遗漏</dt>
                        {_rangeArr(0, 9).map((number) => (
                            <dd key={number}>
                                <span>{getLargest(digit, number)}</span>
                            </dd>
                        ))}
                    </dl>
                </article>
            </main>
        </LayoutContainer>
    );
};

const Box = ({ value, missing }) => (
    <dd>
        <span className={!missing ? "red" : ""}>{value}</span>
    </dd>
);

const LineTo = ({ start, length, rotate }) => (
    <div
        style={{
            borderTop: `2px solid #ef0000`,
            position: "absolute",
            top: "50%",
            right: `calc(${STEP / 2 + STEP * (9 - start)}%)`,
            width: `calc(100vw / ${VIEWWIDTH} * ${length})`,
            zIndex: 1,
            transform: rotate,
            transformOrigin: "100% 0px 0px",
        }}
    />
);
