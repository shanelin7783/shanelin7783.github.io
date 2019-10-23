import { useContext } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { UNDERWEAR_TYPE, UNDERWEAR_VALUE } from "@core/constants/ssc_n2";
import { UNDERWEAR_VALUE_DESC } from "@core/constants/ssc_n2/as5fcn2/dictionary";
import { NPC_CONFIG } from "@core/constants/ssc_n2/as5fcn2";

export const UnderwearColor = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);

    const onToggleItem = ({ key, id, rule, value }) => () => {
        itemListHandle.toggle(key, { id, rule, value });
    };

    return (
        <article className="lhc_kind">
            {NPC_CONFIG.map(({ figure }, index) => (
                <div key={`${figure}`} className="lhc_btn_box4">
                    <div className="box_title">{figure}</div>
                    {UNDERWEAR_VALUE.map((value) => {
                        const { id, rule } = UNDERWEAR_TYPE[index];
                        const key = `${id}${rule}${value}`;
                        const isActive = itemList.has(key);
                        return (
                            <button key={value} className={`${isActive ? "active" : ""}`} onClick={onToggleItem({ key, id, rule, value })}>
                                {UNDERWEAR_VALUE_DESC[value]}
                            </button>
                        );
                    })}
                </div>
            ))}
        </article>
    );
};
