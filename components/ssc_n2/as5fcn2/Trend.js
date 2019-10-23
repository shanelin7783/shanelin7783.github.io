import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5fcn2Trend = () => {
    const image = useImage();
    const list = useSelector((state) => state.History.list);

    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu" onClick={onBack}>
                        <div />
                    </div>
                    <div className="right-menu"></div>
                </nav>
                <div className="inside_header_top" />
            </header>
        </LayoutContainer>
    );
};
