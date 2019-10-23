import { useImage } from "@core/hooks/useImage";
import { As5f28Menu } from "./Menu";
import { As5f28GameKindMenu } from "./GameKindMenu";
import { As5f28LastNumbers } from "./LastNumbers";
import { useVersion } from "@core/hooks/useVersion";
import { useWebView } from "@core/hooks/useWebView";

export const As5f28Header = () => {
    const image = useImage();
    const { backApp } = useWebView();
    const getVersion = useVersion();
    return (
        <header>
            <div className="close">
                <img src={image("btn_close.png")} alt="关闭" onClick={backApp}/>
                <As5f28GameKindMenu />
            </div>
            <div className="logo">
                <h1 onClick={getVersion}>
                    <img src={image("logo.png")} alt="北京28" />
                </h1>
                <As5f28LastNumbers />
            </div>
            <As5f28Menu />
        </header>
    );
};
