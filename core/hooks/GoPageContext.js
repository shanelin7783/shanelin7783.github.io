import { useState, useContext, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import { MultipleContext } from "./MultipleContext";
import { CONFIRM_TYPE } from "@core/constants/confirmMessage";
import { ConfirmDialog } from "@components/common/ConfirmDialog";

const GoPageContext = React.createContext();

const GoPageProvider = (props) => {
    const { totalBets, itemListHandle } = useContext(MultipleContext);
    const game_code = useSelector((state) => state.BaseInfo.game_code);
    const [show, setShow] = useState(false);
    const page = useRef("");

    const onGoPage = useCallback(
        (target) => {
            page.current = target;
            if (totalBets > 0) {
                setShow(true);
            } else {
                onRoute();
            }
        },
        [totalBets, game_code],
    );

    const onConfirm = () => {
        setShow(false);
        itemListHandle.clean();
        onRoute();
    };

    const onClose = () => {
        setShow(false);
    };

    const onRoute = () => {
        Router.replace(`/${page.current}`, `/${page.current}/${game_code}`);
    };

    return (
        <GoPageContext.Provider value={onGoPage}>
            {props.children}
            <ConfirmDialog state={show} type={CONFIRM_TYPE.PAGE} callback={onConfirm} close={onClose} />
        </GoPageContext.Provider>
    );
};

export { GoPageContext, GoPageProvider };
