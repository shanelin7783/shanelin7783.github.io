import { Fragment, useContext } from "react";
import { chunk } from "lodash";
import { MultipleContext } from "@core/hooks/MultipleContext";
import { _floorWithDigits } from "@core/libraries/utils";

export const Sum = ({ col, example, data }) => {
    const { itemList, itemListHandle } = useContext(MultipleContext);
    const { id, name, rule, odds } = data;
    return (
        <article className="ffc_kind">
            <h2>{name}</h2>
            <div className="right_num">
                {example.map((status, index) => (
                    <span key={index} className={status ? "active" : ""}>
                        7
                    </span>
                ))}
            </div>
            <div className="btn_box_all">
                {Object.keys(rule).map((category) => {
                    const { num, num_odds } = rule[category];
                    return (
                        <Fragment key={category}>
                            {chunk(num, col).map((block, index) => (
                                <div key={index} className="ffc_btn_box sum_con">
                                    {block.map((value) => {
                                        const key = `${category}${value}${id}`;
                                        const isActive = itemList.has(key);
                                        return (
                                            <div
                                                key={key}
                                                className={`numcon ${isActive ? "active" : ""}`}
                                                onClick={() => itemListHandle.toggle(key, { rule, id, category, value, odds })}
                                            >
                                                <h6>{value}</h6>
                                                <p>{_floorWithDigits(num_odds[value])}</p>
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
