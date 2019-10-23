import { useState, useContext, memo } from "react";
import { useSelector } from "react-redux";
import { useClickOutside } from "@core/hooks/useClickOutside";
import { useImage } from "@core/hooks/useImage";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { As5f28Clock } from "./Clock";

export const As5f28Menu = memo(() => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const currency = useSelector((state) => state.Query.currency);
    const balance = useSelector((state) => state.Auth.balance);
    const [showMenu, toggleMenu] = useState(false);
    const menuRef = useClickOutside(showMenu, toggleMenu);

    return (
        <div className="smenu">
            <img onClick={() => toggleMenu(!showMenu)} src={image("btn_smenu.png")} alt="选单" />
            <nav>
                <As5f28Clock />
                <div ref={menuRef} className={`smenucon ${showMenu ? "active" : ""}`}>
                    <h3>
                        余额：{balance} {currency}
                    </h3>
                    <ul>
                        <li>
                            <a onClick={() => onGoPage("rule")}>
                                <div>
                                    <img src={image("menu_guide.png")} alt="" />
                                </div>
                                <div>玩法介绍</div>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onGoPage("history")}>
                                <div>
                                    <img src={image("menu_numbers.png")} alt="" />
                                </div>
                                <div>开奖公告</div>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onGoPage("trend")}>
                                <div>
                                    <img src={image("menu_trend.png")} alt="" />
                                </div>
                                <div>开奖走势</div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a onClick={() => onGoPage("betRecord")}>
                                <div>
                                    <img src={image("menu_record.png")} alt="" />
                                </div>
                                <div>投注记录</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
});
