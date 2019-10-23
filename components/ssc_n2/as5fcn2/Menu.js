import { Fragment, useState, useContext, memo } from "react";
import { useSelector } from "react-redux";
import { useClickOutside } from "@core/hooks/useClickOutside";
import { GoPageContext } from "@core/hooks/GoPageContext";
import { useWebView } from "@core/hooks/useWebView";

export const As5fcn2Menu = memo(() => {
    const { backApp } = useWebView();
    const onGoPage = useContext(GoPageContext);
    const currency = useSelector((state) => state.Query.currency);
    const balance = useSelector((state) => state.Auth.balance);
    const [showMenu, toggleMenu] = useState(false);
    const menuRef = useClickOutside(showMenu, toggleMenu);

    return (
        <Fragment>
            <div ref={menuRef} className={`smenu ${showMenu ? "smenu-active" : ""}`}>
                <p>
                    余额：<span>{balance}</span>
                    {currency}
                </p>
                <ul>
                    <li>
                        <a onClick={() => onGoPage("rule")}>
                            <div />
                            <p>玩法介绍</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => onGoPage("history")}>
                            <div />
                            <p>开奖公告</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => onGoPage("trend")}>
                            <div />
                            <p>开奖走势</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => onGoPage("betRecord")}>
                            <div />
                            <p>投注记录</p>
                        </a>
                    </li>
                </ul>
            </div>
            <nav>
                <div className="left-menu">
                    <div onClick={backApp} />
                    <div />
                    <div />
                </div>
                <div className="right-menu">
                    <div className="smenu-btn" onClick={() => toggleMenu(!showMenu)} />
                </div>
            </nav>
        </Fragment>
    );
});
