import { Fragment, useMemo } from "react";
import { _loadImage } from "@core/libraries/utils";
import { useAnimation } from "@core/hooks/useAnimation";
import { useAnimationImage } from "@core/hooks/useImage";

export const Asff28Animation = () => {
    const mc = useMemo(() => require("./Mc").default, []);

    const animationImage = useAnimationImage();
    const { loading, anim_containerRef, canvasRef, dom_overlay_containerRef, exportRootRef } = useAnimation({
        mc,
        image: animationImage("diceMc_atlas_.png"),
        id: "F2EFA74D153B854991C5E4B4B3506F98",
        showFinal: (numbers) => {
            const event = new Event("SET_NUMBER_DICE");
            const [dice1, dice2, dice3] = numbers;
            event.d_0 = dice1;
            event.d_1 = dice2;
            event.d_2 = dice3;
            exportRootRef.current.dispatchEvent(event);
        },
        showMain: (numbers) => {
            let event = new Event("SHOW_MAIN_MC");
            const [dice1, dice2, dice3] = numbers;
            event.d_0 = dice1;
            event.d_1 = dice2;
            event.d_2 = dice3;
            exportRootRef.current.dispatchEvent(event);
        },
        showRunLoop: () => {
            const event = new Event("SHOW_DICE_RUN");
            exportRootRef.current.dispatchEvent(event);
        },
    });

    return (
        <Fragment>
            {loading && (
                <div style={{ position: "relative", textAlign: "center", top: "5vw" }}>
                    <div className="meter">
                        <span />
                    </div>
                </div>
            )}

            <div ref={anim_containerRef} className="animation_frame">
                <canvas ref={canvasRef} />
                <div
                    ref={dom_overlay_containerRef}
                    style={{
                        pointerEvents: "none",
                        overflow: "hidden",
                        width: "550px",
                        height: "400px",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        display: "block",
                    }}
                />
            </div>
        </Fragment>
    );
};
