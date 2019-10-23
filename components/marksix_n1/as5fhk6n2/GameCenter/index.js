import { useSelector } from "react-redux";
import { ZodiacAmount } from "./ZodiacAmount";
import { Tail } from "./Tail";
import { HeadTail } from "./HeadTail";
import { Color } from "./Color";
import { Regular } from "./Regular";

export const As5fhk6n2Game = () => {
    const expect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    return (
        <article style={{ flex: 1, overflow: "auto" }}>
            <article className="popupbg">当期期号：{expect}</article>
            <Regular></Regular>
            <ZodiacAmount></ZodiacAmount>
            <Tail></Tail>
            <HeadTail></HeadTail>
            <Color></Color>
        </article>
    );
};
