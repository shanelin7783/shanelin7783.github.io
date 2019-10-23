import { useContext } from "react";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";

export const Np1 = ({ data }) => {
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
                        <div key={category} className="ffc_btn_box onecon">
                            <h4>{name}</h4>
                            <div className="sconbox">
                                {chunk(num, 5).map((block, index) => (
                                    <div key={index}>
                                        {block.map((value) => {
                                            const key = `${category}${value}${id}`;
                                            const isActive = itemList.has(key);
                                            return (
                                                <div
                                                    key={key}
                                                    className={`numcon mix_con ${isActive ? "active" : ""}`}
                                                    onClick={() => itemListHandle.toggle(key, { rule, id, category, value, odds })}
                                                >
                                                    <div>
                                                        <span>{value}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};
