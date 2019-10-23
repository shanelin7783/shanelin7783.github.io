import { useContext, forwardRef } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { MULTIPLE_MAP } from "@core/constants/custom";

export const As5f28MultipleSelect = forwardRef((props, ref) => {
    const { multiple, multipleHandle } = useContext(MultipleContext);
    const onSelect = (value) => () => {
        multipleHandle.change(value);
    };
    return (
        <nav ref={ref} className="active">
            <h3>单注金额</h3>
            <ol>
                {MULTIPLE_MAP.map((value) => {
                    const isActive = value === multiple;
                    return (
                        <li key={value} className={`${isActive ? "active" : ""}`} onClick={onSelect(value)}>
                            {value}
                        </li>
                    );
                })}
            </ol>
            <div className="btn_content">
                <button className="btn_repeat" onClick={multipleHandle.clean}>
                    重置
                </button>
                <div className="btn_mul">
                    <button onClick={multipleHandle.decrement}>-</button>
                    <div>{multiple}</div>
                    <button onClick={multipleHandle.increment}>+</button>
                </div>
            </div>
        </nav>
    );
});
