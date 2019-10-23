import React, { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { _loadImage } from "@core/libraries/utils";

export const useAnimation = ({ image, id, mc, showFinal, showMain, showRunLoop }) => {
    const previous = useSelector((state) => state.RecentInfo.previous);
    const { expect = "", winning_numbers = "" } = previous;
    const mute = useSelector((state) => state.Query.mute);
    const [init, setInit] = useState(false);
    const [loading, setLoading] = useState(true);

    const canvasRef = useRef(null);
    const anim_containerRef = useRef(null);
    const dom_overlay_containerRef = useRef(null);

    const runningAnimationRef = useRef(true);
    const instanceRef = useRef(null);
    const exportRootRef = useRef(null);
    const muteRef = useRef(mute);

    useEffect(() => {
        const start = async () => {
            await _loadImage(image);
            var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
            let { AdobeAn, createjs } = mc(window.createjs || {}, {}, playSound);
            canvas = canvasRef.current;
            anim_container = anim_containerRef.current;
            dom_overlay_container = dom_overlay_containerRef.current;
            var comp = AdobeAn.getComposition(id);
            var lib = comp.getLibrary();
            window.createjs.MotionGuidePlugin.install();
            var loader = new createjs.LoadQueue(false);
            loader.installPlugin(window.createjs.Sound);
            loader.addEventListener("fileload", function(evt) {
                handleFileLoad(evt, comp);
            });
            loader.addEventListener("complete", function(evt) {
                handleComplete(evt, comp);
            });
            var lib = comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);

            function handleFileLoad(evt, comp) {
                var images = comp.getImages();
                if (evt && evt.item.type == "image") {
                    images[evt.item.id] = evt.result;
                }
            }
            function handleComplete(evt, comp) {
                //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
                var lib = comp.getLibrary();
                var ss = comp.getSpriteSheet();
                var queue = evt.target;
                var ssMetadata = lib.ssMetadata;
                for (var i = 0; i < ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                        images: [queue.getResult(ssMetadata[i].name)],
                        frames: ssMetadata[i].frames,
                    });
                }
                exportRoot = new lib.exportRoot();
                stage = new lib.Stage(canvas);
                exportRootRef.current = exportRoot;
                //Registers the "tick" event listener.
                fnStartAnimation = function() {
                    stage.addChild(exportRoot);
                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
                    createjs.Ticker.addEventListener("tick", stage);
                    let ready = false;
                    stage.addEventListener("tick", () => {
                        handleTick();
                        if (!ready) {
                            ready = true;
                            setInit(true);
                            setLoading(false);
                        }
                    });

                    function getProjectionMatrix(totalDepth) {
                        var focalLength = 528.25;
                        var projectionCenter = { x: lib.properties.width / 2, y: lib.properties.height / 2 };
                        var scale = (totalDepth + focalLength) / focalLength;
                        var scaleMat = new createjs.Matrix2D();
                        scaleMat.a = 1 / scale;
                        scaleMat.d = 1 / scale;
                        var projMat = new createjs.Matrix2D();
                        projMat.tx = -projectionCenter.x;
                        projMat.ty = -projectionCenter.y;
                        projMat = projMat.prependMatrix(scaleMat);
                        projMat.tx += projectionCenter.x;
                        projMat.ty += projectionCenter.y;
                        return projMat;
                    }
                    function removeEvent() {
                        createjs.Ticker.removeEventListener("tick", stage);
                        stage.removeEventListener("tick", handleTick);
                    }
                    function handleTick(event) {
                        if (runningAnimationRef.current) {
                            var focalLength = 528.25;
                            var cameraInstance = exportRoot.___camera___instance;
                            if (cameraInstance !== undefined && cameraInstance.pinToObject !== undefined) {
                                cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
                                cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
                                if (cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
                                    cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
                            }
                            for (var child in exportRoot.children) {
                                var layerObj = exportRoot.children[child];
                                if (layerObj == cameraInstance) continue;
                                if (layerObj.currentFrame != layerObj.parent.currentFrame) {
                                    layerObj.gotoAndPlay(layerObj.parent.currentFrame);
                                }
                                var matToApply = new createjs.Matrix2D();
                                var cameraMat = new createjs.Matrix2D();
                                var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
                                var cameraDepth = 0;
                                if (cameraInstance && !layerObj.isAttachedToCamera) {
                                    var stageCenter = { x: lib.properties.width / 2, y: lib.properties.height / 2 };
                                    var mat = cameraInstance.getMatrix();
                                    mat.tx -= stageCenter.x;
                                    mat.ty -= stageCenter.y;
                                    cameraMat = mat.invert();
                                    cameraMat.prependTransform(stageCenter.x, stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                                    cameraMat.appendTransform(-stageCenter.x, -stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                                    if (cameraInstance.depth) cameraDepth = cameraInstance.depth;
                                }
                                if (layerObj.depth) {
                                    totalDepth = layerObj.depth;
                                }
                                //Offset by camera depth
                                totalDepth -= cameraDepth;
                                if (totalDepth < -focalLength) {
                                    matToApply.a = 0;
                                    matToApply.d = 0;
                                } else {
                                    if (layerObj.layerDepth) {
                                        var sizeLockedMat = getProjectionMatrix(layerObj.layerDepth);
                                        if (sizeLockedMat) {
                                            sizeLockedMat.invert();
                                            matToApply.prependMatrix(sizeLockedMat);
                                        }
                                    }
                                    matToApply.prependMatrix(cameraMat);
                                    var projMat = getProjectionMatrix(totalDepth);
                                    if (projMat) {
                                        matToApply.prependMatrix(projMat);
                                    }
                                }
                                layerObj.transformMatrix = matToApply;
                            }
                        } else {
                            removeEvent();
                        }
                    }
                };
                //Code to support hidpi screens and responsive scaling.
                function makeResponsive(isResp, respDim, isScale, scaleType) {
                    var lastW,
                        lastH,
                        lastS = 1;
                    window.addEventListener("resize", resizeCanvas);
                    resizeCanvas();
                    function resizeCanvas() {
                        var w = lib.properties.width,
                            h = lib.properties.height;
                        var iw = window.innerWidth,
                            ih = window.innerHeight;
                        var pRatio = window.devicePixelRatio || 1,
                            xRatio = iw / w,
                            yRatio = ih / h,
                            sRatio = 1;
                        if (isResp) {
                            if ((respDim == "width" && lastW == iw) || (respDim == "height" && lastH == ih)) {
                                sRatio = lastS;
                            } else if (!isScale) {
                                if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                            } else if (scaleType == 1) {
                                sRatio = Math.min(xRatio, yRatio);
                            } else if (scaleType == 2) {
                                sRatio = Math.max(xRatio, yRatio);
                            }
                        }
                        canvas.width = w * pRatio * sRatio;
                        canvas.height = h * pRatio * sRatio;
                        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + "px";
                        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + "px";
                        stage.scaleX = pRatio * sRatio;
                        stage.scaleY = pRatio * sRatio;
                        lastW = iw;
                        lastH = ih;
                        lastS = sRatio;
                        stage.tickOnUpdate = false;
                        stage.update();
                        stage.tickOnUpdate = true;
                    }
                }
                makeResponsive(true, "both", false, 1);
                AdobeAn.compositionLoaded(lib.properties.id);
                fnStartAnimation();
            }
        };
        start();
        return () => {
            runningAnimationRef.current = false;
            instanceRef.current && (instanceRef.current.paused = true);
            window.createjs.Sound.stop();
        };
    }, []);

    useEffect(() => {
        if (init) {
            if (winning_numbers) {
                const numbers = winning_numbers.split(",");
                showFinal(numbers);
            } else {
                showRunLoop();
            }
        }
    }, [init]);

    useEffect(() => {
        if (init && expect) {
            showRunLoop();
        }
    }, [expect]);

    useEffect(() => {
        if (init && winning_numbers) {
            const numbers = winning_numbers.split(",");
            showMain(numbers);
        }
    }, [winning_numbers]);

    useEffect(() => {
        muteRef.current = mute;
        if (instanceRef.current) {
            instanceRef.current.volume = muteRef.current ? 0 : 1;
        }
    }, [mute]);

    const playSound = (id, loop) => {
        if (runningAnimationRef.current) {
            instanceRef.current = window.createjs.Sound.play(id, window.createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
            instanceRef.current.volume = muteRef.current ? 0 : 1;
            return instanceRef.current;
        }
    };

    return { loading, anim_containerRef, canvasRef, dom_overlay_containerRef, exportRootRef };
};
