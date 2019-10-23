import { useContext, forwardRef } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { MULTIPLE_MAP } from "@core/constants/custom";

export const As5fcn2MultipleSelect = forwardRef((props, ref) => {
    const { multiple, multipleHandle } = useContext(MultipleContext);
    return (
        <div ref={ref} className="bot_menu_popup">
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
                <button onClick={multipleHandle.decrement} data-id="handleMin" />
                <input value={multiple} type="tel" maxLength={5} onChange={multipleHandle.input} />
                <button onClick={multipleHandle.increment} />
                <button onClick={multipleHandle.clean} />
            </div>
        </div>
    );
});
