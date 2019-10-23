import { useContext } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { GROUP_RULE_TYPE } from "@core/constants/ssc_n2";
import { GROUP_RULE_TYPE_DESC } from "@core/constants/ssc_n2/as5fcn2/dictionary";

export const GroupRule = () => {
    const { itemList, itemListHandle } = useContext(MultipleContext);

    const onToggleItem = ({key, id, rule, value}) => () => {
        itemListHandle.toggle(key, { id, rule, value });
    };

    return (
        <article className="lhc_kind">
            {GROUP_RULE_TYPE.map(({ id, rule, group, value }, index) => {
                const key = `${id}${rule}${value}`;
                const isActive = itemList.has(key);
                return (
                    <div key={group} className="lhc_btn_box2">
                        <div className="box_title">{group}</div>
                        <button className={`${isActive ? "active" : ""}`} onClick={onToggleItem({ key, id, rule, value })}>
                            {GROUP_RULE_TYPE_DESC[value]}
                        </button>
                    </div>
                );
            })}
        </article>
    );
};
