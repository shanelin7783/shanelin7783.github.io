import { getLink } from "@core/libraries/getLink";

var base = "ssc_n1/as5fcn1/animation/";
var tranURL = (url) => getLink(`${base}${url}`);

export default (function(cjs, an) {
    var createjs = cjs;
    var AdobeAn = an;
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "slot_forRD_atlas_",
            frames: [
                [804, 2340, 130, 190],
                [804, 2148, 130, 190],
                [804, 1572, 130, 190],
                [804, 1956, 130, 190],
                [804, 1764, 130, 190],
                [804, 1188, 130, 190],
                [804, 1380, 130, 190],
                [804, 996, 130, 190],
                [804, 612, 130, 190],
                [804, 804, 130, 190],
                [0, 0, 967, 610],
                [252, 612, 550, 550],
                [252, 1164, 550, 550],
                [252, 1716, 550, 550],
                [252, 2268, 550, 550],
                [0, 2820, 550, 550],
                [0, 612, 250, 2200],
            ],
        },
    ];

    // symbols:

    (lib._0 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib._1 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib._2 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib._3 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib._4 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib._5 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();

    (lib._6 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();

    (lib._7 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();

    (lib._8 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();

    (lib._9 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();

    (lib.bg = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();

    (lib.clock1 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();

    (lib.clock2 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();

    (lib.clock3 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib.clock4 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib.clock5 = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib.numberblur = function() {
        this.spriteSheet = ss["slot_forRD_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }

    (lib.場景_1_bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // bg
        this.instance = new lib.bg();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_bg, null, null);

    (lib.sim_move = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.numberblur();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.sim_move, new cjs.Rectangle(0, 0, 250, 2200), null);

    (lib.number_top = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            num0: 0,
            num1: 1,
            num2: 2,
            num3: 3,
            num4: 4,
            num5: 5,
            num6: 6,
            num7: 7,
            num8: 8,
            num9: 9,
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(10),
        );

        // number_idn
        this.instance = new lib._0();
        this.instance.parent = this;
        this.instance.setTransform(-100, -105);

        this.instance_1 = new lib._1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-100, -105);

        this.instance_2 = new lib._2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-100, -105);

        this.instance_3 = new lib._3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-100, -105);

        this.instance_4 = new lib._4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-100, -105);

        this.instance_5 = new lib._5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-100, -105);

        this.instance_6 = new lib._6();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-100, -105);

        this.instance_7 = new lib._7();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-100, -105);

        this.instance_8 = new lib._8();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-100, -105);

        this.instance_9 = new lib._9();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-100, -105);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.instance }] })
                .to({ state: [{ t: this.instance_1 }] }, 1)
                .to({ state: [{ t: this.instance_2 }] }, 1)
                .to({ state: [{ t: this.instance_3 }] }, 1)
                .to({ state: [{ t: this.instance_4 }] }, 1)
                .to({ state: [{ t: this.instance_5 }] }, 1)
                .to({ state: [{ t: this.instance_6 }] }, 1)
                .to({ state: [{ t: this.instance_7 }] }, 1)
                .to({ state: [{ t: this.instance_8 }] }, 1)
                .to({ state: [{ t: this.instance_9 }] }, 1)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-100, -105, 130, 190);

    (lib.clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_120 = function() {
            var event = new createjs.Event("COUNT_DOWN_FINISH");
            this.dispatchEvent(event);

            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(120)
                .call(this.frame_120)
                .wait(1),
        );

        // clock
        this.instance = new lib.clock5();
        this.instance.parent = this;
        this.instance.setTransform(-274.5, -275);

        this.instance_1 = new lib.clock4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-274.5, -275);

        this.instance_2 = new lib.clock3();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-274.5, -275);

        this.instance_3 = new lib.clock2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-274.5, -275);

        this.instance_4 = new lib.clock1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-274.5, -275);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.instance }] })
                .to({ state: [{ t: this.instance_1 }] }, 24)
                .to({ state: [{ t: this.instance_2 }] }, 25)
                .to({ state: [{ t: this.instance_3 }] }, 23)
                .to({ state: [{ t: this.instance_4 }] }, 24)
                .to({ state: [{ t: this.instance_4 }] }, 24)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-274.5, -275, 550, 550);

    (lib.場景_1_result = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // result
        this.num_4 = new lib.number_top();
        this.num_4.name = "num_4";
        this.num_4.parent = this;
        this.num_4.setTransform(848.2, 331.5, 1, 1, 0, 0, 0, 0.1, 0);

        this.num_3 = new lib.number_top();
        this.num_3.name = "num_3";
        this.num_3.parent = this;
        this.num_3.setTransform(683.4, 331.5, 1, 1, 0, 0, 0, 0.1, 0);

        this.num_2 = new lib.number_top();
        this.num_2.name = "num_2";
        this.num_2.parent = this;
        this.num_2.setTransform(518.5, 331.5, 1, 1, 0, 0, 0, 0.1, 0);

        this.num_1 = new lib.number_top();
        this.num_1.name = "num_1";
        this.num_1.parent = this;
        this.num_1.setTransform(353.8, 331.5, 1, 1, 0, 0, 0, 0.1, 0);

        this.num_0 = new lib.number_top();
        this.num_0.name = "num_0";
        this.num_0.parent = this;
        this.num_0.setTransform(188.9, 331.5, 1, 1, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.num_0 }, { t: this.num_1 }, { t: this.num_2 }, { t: this.num_3 }, { t: this.num_4 }],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_result, null, null);

    (lib.場景_1_clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // clock
        this.clockMc = new lib.clock();
        this.clockMc.name = "clockMc";
        this.clockMc.parent = this;
        this.clockMc.setTransform(483.5, 305, 1, 1, 0, 0, 0, 0.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.clockMc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_clock, null, null);

    (lib.sim_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { loopFlag: 0 });

        // timeline functions:
        this.frame_9 = function() {
            this.gotoAndPlay("loopFlag");
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .wait(9)
                .call(this.frame_9)
                .wait(1),
        );

        // 圖層_3
        this.instance = new lib.sim_move();
        this.instance.parent = this;
        this.instance.setTransform(2, -1859.8, 1, 1, 0, 0, 0, 125, 1100);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .to({ y: -4.7 }, 9)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-123, -2959.8, 250, 2200);

    (lib.場景_1_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ac
        this.loop_1 = new lib.sim_ac();
        this.loop_1.name = "loop_1";
        this.loop_1.parent = this;
        this.loop_1.setTransform(316.1, 299.1, 1, 1, 0, 0, 0, 0.1, -944.9);
        this.loop_1.shadow = new cjs.Shadow("rgba(68,252,255,1)", 0, 0, 30);

        this.loop_2 = new lib.sim_ac();
        this.loop_2.name = "loop_2";
        this.loop_2.parent = this;
        this.loop_2.setTransform(482, 299.1, 1, 1, 0, 0, 0, 0, -944.9);
        this.loop_2.shadow = new cjs.Shadow("rgba(68,252,255,1)", 0, 0, 30);

        this.loop_3 = new lib.sim_ac();
        this.loop_3.name = "loop_3";
        this.loop_3.parent = this;
        this.loop_3.setTransform(645.7, 299.1, 1, 1, 0, 0, 0, 0, -944.9);
        this.loop_3.shadow = new cjs.Shadow("rgba(68,252,255,1)", 0, 0, 30);

        this.loop_4 = new lib.sim_ac();
        this.loop_4.name = "loop_4";
        this.loop_4.parent = this;
        this.loop_4.setTransform(810.9, 299.1, 1, 1, 0, 0, 0, 0.1, -944.9);
        this.loop_4.shadow = new cjs.Shadow("rgba(68,252,255,1)", 0, 0, 30);

        this.loop_0 = new lib.sim_ac();
        this.loop_0.name = "loop_0";
        this.loop_0.parent = this;
        this.loop_0.setTransform(152.4, 299.1, 1, 1, 0, 0, 0, 0, -944.9);
        this.loop_0.shadow = new cjs.Shadow("rgba(68,252,255,1)", 0, 0, 30);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.loop_0 }, { t: this.loop_4 }, { t: this.loop_3 }, { t: this.loop_2 }, { t: this.loop_1 }],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_ac, null, null);

    // stage content:
    (lib.exportRoot = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        this.___GetDepth___ = function(obj) {
            var depth = obj.depth;
            var cameraObj = this.___camera___instance;
            if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
                depth += depth + cameraObj.depth;
            }
            return depth;
        };
        this.___needSorting___ = function() {
            for (var i = 0; i < this.getNumChildren() - 1; i++) {
                var prevDepth = this.___GetDepth___(this.getChildAt(i));
                var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
                if (prevDepth < nextDepth) return true;
            }
            return false;
        };
        this.___sortFunction___ = function(obj1, obj2) {
            return this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1);
        };
        this.on("tick", function(event) {
            var curTimeline = event.currentTarget;
            if (curTimeline.___needSorting___()) {
                this.sortChildren(curTimeline.___sortFunction___);
            }
        });

        // timeline functions:
        this.frame_0 = function() {
            this.clockMc = this.clock.clockMc;
            this.loop_0 = this.ac.loop_0;
            this.loop_4 = this.ac.loop_4;
            this.loop_3 = this.ac.loop_3;
            this.loop_2 = this.ac.loop_2;
            this.loop_1 = this.ac.loop_1;
            this.num_0 = this.result.num_0;
            this.num_1 = this.result.num_1;
            this.num_2 = this.result.num_2;
            this.num_3 = this.result.num_3;
            this.num_4 = this.result.num_4;
            var _this = this;
            var _d_0_num = 0;
            var _d_1_num = 1;
            var _d_2_num = 2;
            var _d_3_num = 3;
            var _d_4_num = 4;

            //跑馬動畫
            this.addEventListener("RUN_LOOP", runLoop.bind(this));

            //完整動畫
            this.addEventListener("SHOW_MAIN_SLOT_MC", showMainSlotMc.bind(this));

            //指定數字
            this.addEventListener("SHOW_FINAL_NUM", showFinalNum.bind(this));

            //大獎動畫播完之後接收事件
            this.clockMc.addEventListener("COUNT_DOWN_FINISH", countDownFinish.bind(this));

            runLoop(null);

            function setOpenNumData(e) {
                _d_0_num = parseInt(e.d_0);
                _d_1_num = parseInt(e.d_1);
                _d_2_num = parseInt(e.d_2);
                _d_3_num = parseInt(e.d_3);
                _d_4_num = parseInt(e.d_4);
            }

            function showFinalNum(e) {
                setOpenNumData(e);
                displayFinalNum();
            }

            function showClockMc(flag) {
                _this.clockMc.visible = flag;
                if (flag == true) {
                    _this.clockMc.gotoAndPlay(1);
                } else {
                    _this.clockMc.gotoAndStop(1);
                }
            }

            function displayFinalNum() {
                showLoopMc(false);
                showClockMc(false);

                setFinalNum("0", _d_0_num);
                setFinalNum("1", _d_1_num);
                setFinalNum("2", _d_2_num);
                setFinalNum("3", _d_3_num);
                setFinalNum("4", _d_4_num);
            }

            function setFinalNum(p, v) {
                var pos = v;

                _this["num_" + p].gotoAndStop(pos);
                _this["num_" + p].visible = true;
            }

            function runLoop(e) {
                showClockMc(false);
                showLoopMc(true);
            }

            function showLoopMc(flag) {
                for (var i = 0; i <= 4; i++) {
                    _this["loop_" + i].visible = flag;

                    //show and play
                    if (flag == true) {
                        _this["loop_" + i].gotoAndPlay(1);
                        _this["num_" + i].visible = false;
                    } else {
                        //stop and hide
                        _this["loop_" + i].gotoAndStop(1);
                    }
                }
            }

            function showMainSlotMc(e) {
                setOpenNumData(e);

                showClockMc(true);

                showLoopMc(true);
            }

            function countDownFinish(e) {
                showLoopMc(false);
                displayFinalNum();
            }
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(1),
        );

        // clock_obj_
        this.clock = new lib.場景_1_clock();
        this.clock.name = "clock";
        this.clock.parent = this;
        this.clock.setTransform(483.5, 305, 1, 1, 0, 0, 0, 483.5, 305);
        this.clock.depth = 0;
        this.clock.isAttachedToCamera = 0;
        this.clock.isAttachedToMask = 0;
        this.clock.layerDepth = 0;
        this.clock.layerIndex = 0;
        this.clock.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

        // mask_idn (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Eg/tAYTMAAAgwlMB/bAAAMAAAAwlg");
        mask.setTransform(484.4, 330.8);

        // ac_obj_
        this.ac = new lib.場景_1_ac();
        this.ac.name = "ac";
        this.ac.parent = this;
        this.ac.setTransform(483.6, -615.9, 1, 1, 0, 0, 0, 483.6, -615.9);
        this.ac.depth = 0;
        this.ac.isAttachedToCamera = 0;
        this.ac.isAttachedToMask = 0;
        this.ac.layerDepth = 0;
        this.ac.layerIndex = 1;
        this.ac.maskLayerName = 0;

        var maskedShapeInstanceList = [this.ac];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.ac).wait(1));

        // result_obj_
        this.result = new lib.場景_1_result();
        this.result.name = "result";
        this.result.parent = this;
        this.result.setTransform(483.4, 321.5, 1, 1, 0, 0, 0, 483.4, 321.5);
        this.result.depth = 0;
        this.result.isAttachedToCamera = 0;
        this.result.isAttachedToMask = 0;
        this.result.layerDepth = 0;
        this.result.layerIndex = 2;
        this.result.maskLayerName = 0;

        var maskedShapeInstanceList = [this.result];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.result).wait(1));

        // bg_obj_
        this.bg = new lib.場景_1_bg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(483.5, 305, 1, 1, 0, 0, 0, 483.5, 305);
        this.bg.depth = 0;
        this.bg.isAttachedToCamera = 0;
        this.bg.isAttachedToMask = 0;
        this.bg.layerDepth = 0;
        this.bg.layerIndex = 3;
        this.bg.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(483.5, 305, 967, 610);
    // library properties:
    lib.properties = {
        id: "060CBD02390ACE4BA7F875D744541938",
        width: 967,
        height: 610,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [{ src: tranURL("images/slot_forRD_atlas_.png?1554087052093"), id: "slot_forRD_atlas_" }],
        preloads: [],
    };

    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    };
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
    };
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    };
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
    };
    p.getDuration = function() {
        return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
    };

    p.getTimelinePosition = function() {
        return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
    };

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions["060CBD02390ACE4BA7F875D744541938"] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        },
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    };

    an.getComposition = function(id) {
        return an.compositions[id];
    };

    // Layer depth API :

    AdobeAn.Layer = new function() {
        this.getLayerZDepth = function(timeline, layerName) {
            if (layerName === "Camera") layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
            return eval(script);
        };
        this.setLayerZDepth = function(timeline, layerName, zDepth) {
            const MAX_zDepth = 10000;
            const MIN_zDepth = -5000;
            if (zDepth > MAX_zDepth) zDepth = MAX_zDepth;
            else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth;
            if (layerName === "Camera") layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
            eval(script);
        };
        this.removeLayer = function(timeline, layerName) {
            if (layerName === "Camera") layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
            eval(script);
        };
        this.addNewLayer = function(timeline, layerName, zDepth) {
            if (layerName === "Camera") layerName = "___camera___instance";
            zDepth = typeof zDepth !== "undefined" ? zDepth : 0;
            var layer = new createjs.MovieClip();
            layer.name = layerName;
            layer.depth = zDepth;
            layer.layerIndex = 0;
            timeline.addChild(layer);
        };
    }();

    return { AdobeAn, createjs };
});
