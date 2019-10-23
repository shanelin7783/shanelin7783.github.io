import { Mix } from "./Mix";
import { GuessNumber } from "./GuessNumber";
import { TwoDifferent } from "./TwoDifferent";
import { ThreeSerialAll } from "./ThreeSerialAll";
import { TwoIdentical } from "./TwoIdentical";
import { Sum } from "./Sum";
import { Leopard } from "./Leopard";
import { DivisorThree } from "./DivisorThree";

export const Asff28Game = () => {
    return (
        <article style={{ flex: 1, overflow: "auto" }}>
            <Mix />
            <GuessNumber />
            <TwoDifferent />
            <ThreeSerialAll />
            <TwoIdentical />
            <Sum />
            <Leopard />
            <DivisorThree />
        </article>
    );
};
