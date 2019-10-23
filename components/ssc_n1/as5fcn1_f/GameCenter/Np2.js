import React, { Fragment } from "react";
import { useContext } from "react";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";

export const Np2 = ({ data }) => {
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
                    const { num } = rule[category];
                    return (
                        <Fragment key={category}>
                            {chunk(num, 6).map((block, index) => (
                                <div key={index} className="ffc_btn_box twocon">
                                    {block.map((value) => {
                                        const [first, last] = String(value).split("+");
                                        const key = `${category}${value}${id}`;
                                        const isActive = itemList.has(key);
                                        return (
                                            <div
                                                key={key}
                                                className={`numcon mix_con ${isActive ? "active" : ""}`}
                                                onClick={() => itemListHandle.toggle(key, { rule, id, category, value, odds })}
                                            >
                                                <div>
                                                    <span>{first}</span>
                                                    <span>{last}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </Fragment>
                    );
                })}
            </div>
        </article>
    );
};
