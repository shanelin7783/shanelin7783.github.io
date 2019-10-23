import { useContext } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { NPC_CONFIG } from "@core/constants/ssc_n2/as5fcn2";
import { TWO_FACE_TYEP, TWO_FACE_VALUE } from "@core/constants/ssc_n2";
import { TWO_FACE_VALUE_DESC } from "@core/constants/ssc_n2/as5fcn2/dictionary";

export const TwoFace = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);

    const onToggleItem = ({ key, id, rule, value }) => () => {
        itemListHandle.toggle(key, { id, rule, value });
    };

    return (
        <article className="lhc_kind">
            {NPC_CONFIG.map(({ figure }, index) => {
                return (
                    <div key={figure} className="lhc_btn_box">
                        <div className="box_title">{figure}</div>
                        {TWO_FACE_VALUE.map((value) => {
                            const { id, rule } = TWO_FACE_TYEP[index];
                            const key = `${id}${rule}${value}`;
                            const isActive = itemList.has(key);
                            return (
                                <button key={key} className={`${isActive ? "active" : ""}`} onClick={onToggleItem({ key, id, rule, value })}>
                                    {TWO_FACE_VALUE_DESC[value]}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </article>
    );
};
