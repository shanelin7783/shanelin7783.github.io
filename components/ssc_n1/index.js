import { useSelector } from "react-redux";
import { As5fcn1_f } from "./as5fcn1_f";
import { As5fcn1 } from "./as5fcn1";

const Ssc_n1 = () => {
    const BaseInfo = useSelector((state) => state.BaseInfo);
    const { game_code } = BaseInfo;
    return (
        {
            as5fcn1: <As5fcn1/>,
            as5fcn1_f: <As5fcn1_f/>,
        }[game_code] || null
    );
};

export default Ssc_n1;
