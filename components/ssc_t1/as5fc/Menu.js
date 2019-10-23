import { useState, useContext, memo } from "react";
import { useSelector } from "react-redux";
import { useClickOutside } from "@core/hooks/useClickOutside";
import { useImage } from "@core/hooks/useImage";
import { GoPageContext } from "@core/hooks/GoPageContext";

export const As5fcMenu = memo(() => {
    const image = useImage();
    const onGoPage = useContext(GoPageContext);
    const currency = useSelector((state) => state.Query.currency);
    const balance = useSelector((state) => state.Auth.balance);
    const [showMenu, toggleMenu] = useState(false);
    const menuRef = useClickOutside(showMenu, toggleMenu);

    return (
        <div className="right-menu">
            <div className="smenu-icon">
                <img src={image("menu_btn.png")} alt="选单" onClick={() => toggleMenu(!showMenu)} />
                <div ref={menuRef} className="smenu" style={{ display: showMenu ? "block" : "none" }}>
                    <p>
                        余额：{balance} {currency}
                    </p>
                    <ul>
                        <li>
                        <a onClick={() => onGoPage("rule")}>
                                <div>
                                    <img src={image("menu_icon1.png")} alt="icon" />
                                </div>
                                <div>玩法介绍</div>
                            </a>
                        </li>
                        <li>
                        <a onClick={() => onGoPage("history")}>
                                <div>
                                    <img src={image("menu_icon4.png")} alt="icon" />
                                </div>
                                <div>开奖公告</div>
                            </a>
                        </li>
                        <li>
                        <a onClick={() => onGoPage("trend")}>
                                <div>
                                    <img src={image("menu_icon3.png")} alt="icon" />
                                </div>
                                <div>开奖走势</div>
                            </a>
                        </li>
                        <li>
                        <a onClick={() => onGoPage("betRecord")}>
                                <div>
                                    <img src={image("menu_icon2.png")} alt="icon" />
                                </div>
                                <div>投注记录</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
});
