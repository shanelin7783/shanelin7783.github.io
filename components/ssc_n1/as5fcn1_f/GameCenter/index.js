import { useSelector } from "react-redux";
import { Dxds } from "./Dxds";
import { Np1 } from "./Np1";
import { Np2 } from "./Np2";
import { Sum } from "./Sum";

export const As5fcn1_fGame = () => {
    const config = useSelector((state) => state.Config.config.ssc_n1);
    const [
        {
            list: [{ game }],
        },
    ] = config;
    const expect = useSelector((state) => {
        const { expect = "" } = state.RecentInfo.current || {};
        return expect;
    });
    return (
        <main>
            {game.map((result) => {
                return <GameModule key={result.id} data={result}></GameModule>;
            })}
            <div className="now">当期期号：{expect}</div>
        </main>
    );
};

const GameModule = ({ data }) =>
    ({
        ssc_n1_dxds: <Dxds data={data} />,
        ssc_n1_np_np1: <Np1 data={data} />,
        ssc_n1_np_np2: <Np2 data={data} />,
        ssc_n1_front_three_sum: <Sum col={6} example={[true, true, true, false, false]} data={data} />,
        ssc_n1_middle_three_sum: <Sum col={6} example={[false, true, true, true, false]} data={data} />,
        ssc_n1_last_three_sum: <Sum col={6} example={[false, false, true, true, true]} data={data} />,
        ssc_n1_front_two_sum: <Sum col={5} example={[true, true, false, false, false]} data={data} />,
        ssc_n1_last_two_sum: <Sum col={5} example={[false, false, false, true, true]} data={data} />,
    }[data.id] || null);
