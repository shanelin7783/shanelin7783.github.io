import { Fragment, useMemo } from "react";
import { _loadImage } from "@core/libraries/utils";
import { useAnimation } from "@core/hooks/useAnimation";
import { useAnimationImage } from "@core/hooks/useImage";

export const As5fcn1_fAnimation = () => {
    const mc = useMemo(() => require("./Mc").default, []);

    const animationImage = useAnimationImage();
    const { loading, anim_containerRef, canvasRef, dom_overlay_containerRef, exportRootRef } = useAnimation({
        mc,
        image: animationImage("japan_rotary_table_FOR_RD_atlas_.png"),
        id: "87D6A28E49CB4340BEC18A9D15E61D3C",
        showFinal: (numbers) => {
            const event = new Event("SHOW_FINAL_NUM");
            const [num1, num2, num3, num4, num5] = numbers;
            event.d_0 = num1;
            event.d_1 = num2;
            event.d_2 = num3;
            event.d_3 = num4;
            event.d_4 = num5;
            exportRootRef.current.dispatchEvent(event);
        },
        showMain: (numbers) => {
            const event = new Event("SHOW_MAIN_SLOT_MC");
            const [num1, num2, num3, num4, num5] = numbers;
            event.d_0 = num1;
            event.d_1 = num2;
            event.d_2 = num3;
            event.d_3 = num4;
            event.d_4 = num5;
            exportRootRef.current.dispatchEvent(event);
        },
        showRunLoop: () => {
            const event = new Event("RUN_LOOP");
            exportRootRef.current.dispatchEvent(event);
        },
    });

    return (
        <Fragment>
            {loading && (
                <div className="animation_loading">
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
