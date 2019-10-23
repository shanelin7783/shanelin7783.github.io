import { useContext } from "react";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { FUN_MAP } from "@core/constants/custom";

export const Dxds = ({ data }) => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const { id, odds, name, rule } = data;
    return (
        <article className="ffc_kind">
            <h2>
                <span>赔率：{odds}</span>
                {name}
            </h2>
            <div className="btn_box_all">
                {Object.keys(rule).map((category) => {
                    const { name, num } = rule[category];
                    return (
                        <div key={category} className="ffc_btn_box">
                            <h4>{name}</h4>
                            {num.map((value) => {
                                const key = `${category}${value}${id}`;
                                const isActive = itemList.has(key);
                                return (
                                    <div
                                        key={key}
                                        className={`numcon mix_con ${isActive ? "active" : ""}`}
                                        onClick={() => itemListHandle.toggle(key, { rule, id, category, value, odds })}
                                    >
                                        <h6>{FUN_MAP[value]}</h6>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </article>
    );
};
