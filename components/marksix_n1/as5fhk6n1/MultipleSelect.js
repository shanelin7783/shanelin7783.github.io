import { useContext, forwardRef } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { MULTIPLE_MAP } from "@core/constants/custom";

export const As5fhk6n1MultipleSelect = forwardRef((props, ref) => {
    const { multiple, multipleHandle } = useContext(MultipleContext);
    return (
        <div ref={ref} className={`bot_menu_popup active`}>
            <div className="bot_menu_btn">
                {MULTIPLE_MAP.map((value) => {
                    const isActive = value === multiple;
                    return (
                        <div key={value} className={`${isActive ? "active" : ""}`} onClick={() => multipleHandle.change(value)}>
                            {value}
                        </div>
                    );
                })}
            </div>
            <div className="bot_menu_input">
                倍数
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
            </div>
        </div>
    );
});
