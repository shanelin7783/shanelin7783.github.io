import { useContext, forwardRef } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { MULTIPLE_MAP } from "@core/constants/custom";

export const As5fcMultipleSelect = forwardRef((props, ref) => {
    const { multiple, multipleHandle } = useContext(MultipleContext);
    const onSelect = (value) => () => {
        multipleHandle.change(value);
    };
    return (
        <div ref={ref} className="bot_menu_popup active">
            <div className="bot_popuptxt">
                <div>投注倍率</div>
            </div>
            <div className="bot_menu_btn">
                {MULTIPLE_MAP.map((value) => {
                    const isActive = value === multiple;
                    return (
                        <div key={value} className={`${isActive ? "active" : ""}`} onClick={onSelect(value)}>
                            {value}
                        </div>
                    );
                })}
            </div>
            <div className="bot_menu_input">
                <button onClick={multipleHandle.decrement}>
                    <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
                <input value={multiple} type="tel" maxLength={5} onChange={multipleHandle.input} />
                <button onClick={multipleHandle.increment}>
                    <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                </button>
                <button onClick={multipleHandle.clean}>重置</button>
            </div>
        </div>
    );
});
