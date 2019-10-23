import { FreezeBackground } from "./FreezeBackground";
import { useImage } from "@core/hooks/useImage";

export const RuleDialog = ({ state, title = "", desc = "", close }) => {
    const image = useImage();
    return (
        state && (
            <FreezeBackground>
                <div className="infopop">
                    <div className="new_menubox">
                        <div className="new_menu_title">
                            <p className="new_menu_title_text">玩法介紹</p>
                        </div>
                        <button onClick={close}>
                            <img src={image("close.png")} />
                        </button>
                        <div className="new_menu_list">
                            <div className="step">
                                <h6>{title}</h6>
                                <p dangerouslySetInnerHTML={{ __html: desc }} />
                            </div>
                        </div>
                    </div>
                    <div className="new_window_bg"></div>
                </div>
            </FreezeBackground>
        )
    );
};
