import { Fragment, useMemo, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { _loadImage } from "@core/libraries/utils";
import { useAnimation } from "@core/hooks/useAnimation";
import { useAnimationImage, useAnimationSound } from "@core/hooks/useImage";

const COLOR = {
    red: 0,
    green: 1,
    blue: 2,
};

export const As5fhk6n1Animation = () => {
    const mc = useMemo(() => require("./Mc").default, []);
    const mute = useSelector((state) => state.Query.mute);
    const backgroundMusic = useRef(null);
    const {
        zodiac_config: { zodiac_numbers },
        numbers_config,
    } = useSelector((state) => state.Config.config.marksix_n1);
    const zodiac_config = useMemo(
        () =>
            Object.keys(zodiac_numbers).reduce((prev, key) => {
                zodiac_numbers[key].forEach((num) => {
                    prev[num] = key;
                });
                return prev;
            }, {}),
        [],
    );

    const transformZodia = useCallback(
        (numbers) => {
            return numbers.reduce((prev, value) => {
                const { zodiac = [], color = [] } = prev;
                zodiac.push(zodiac_config[Number(value)] - 1);
                color.push(COLOR[numbers_config[Number(value)]]);
                prev.zodiac = zodiac;
                prev.color = color;
                return prev;
            }, {});
        },
        [zodiac_config, numbers_config],
    );

    const animationImage = useAnimationImage();
    const animationSound = useAnimationSound();
    const { loading, anim_containerRef, canvasRef, dom_overlay_containerRef, exportRootRef } = useAnimation({
        mc,
        image: animationImage("slot_machine_forRD_atlas_.png"),
        id: "DDEFDC54822C9F47888DDE01C32488E0",
        showFinal: (numbers) => {
            const event = new Event("SET_RESULT_VALUE");
            //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
            //c 0:紅 1:綠 2:藍

            const { zodiac, color } = transformZodia(numbers);
            event.d = {};
            event.d.n = numbers; //數字 由左到右
            event.d.z = zodiac; //生肖 由左到右
            event.d.c = color; //紅綠藍 由左到右
            exportRootRef.current.addEventListener("STOP_BG_MUSIC", stopBackgroundMusic);
            exportRootRef.current.dispatchEvent(event);
        },
        showMain: (numbers) => {
            const event = new Event("SHOW_COUNTDOWN");
            const { zodiac, color } = transformZodia(numbers);

            //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
            //c 1:紅 2:綠 3:藍
            event.d = {};
            event.d.n = numbers; //數字 由左到右
            event.d.z = zodiac; //生肖 由左到右
            event.d.c = color; //紅綠藍 由左到右
            exportRootRef.current.addEventListener("STOP_BG_MUSIC", stopBackgroundMusic);
            exportRootRef.current.dispatchEvent(event);
        },
        showRunLoop: () => {
            const event = new Event("RUN_SLOT");
            exportRootRef.current.dispatchEvent(event);
            backgroundMusic.current = window.createjs.Sound.play("sound1", { loop: -1 });
            backgroundMusic.current.volume = mute ? 0 : 1;
        },
    });

    const stopBackgroundMusic = () => {
        window.createjs.Sound.stop("sound1");
    };
    useEffect(() => {
        var sounds = [
            {
                src: "bg.mp3",
                data: {
                    audioSprite: [
                        {
                            id: "sound1",
                            startTime: 0,
                        },
                    ],
                },
            },
        ];

        window.createjs.Sound.alternateExtensions = ["mp3"];
        window.createjs.Sound.registerSounds(sounds, animationSound());
    }, []);

    useEffect(() => {
        if (backgroundMusic.current) {
            backgroundMusic.current.volume = mute ? 0 : 1;
        }
    }, [mute]);

    return (
        <Fragment>
            {loading && (
                <div style={{ position: "relative", textAlign: "center", top: "18vw" }}>
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
