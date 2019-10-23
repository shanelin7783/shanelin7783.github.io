import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { As5fcn1Menu } from "./Menu";
import { As5fcn1LastNumbers } from "./LastNumbers";
import { useVersion } from "@core/hooks/useVersion";
import { As5fcn1Animation } from "./Animation";
import { useWebView } from "@core/hooks/useWebView";
import { As5fcn1Clock } from "./Clock";

export const As5fcn1Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    return (
        <header>
            <nav>
                <div className="left-menu">
                    <img src={image("closegame.png")} onClick={backApp} />
                </div>
                <As5fcn1Menu />
            </nav>
            <As5fcn1LastNumbers />
            <As5fcn1Clock />
            <As5fcn1Animation />
        </header>
    );
};
