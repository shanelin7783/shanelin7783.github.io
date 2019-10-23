import { getLink } from "@core/libraries/getLink";

var base = "ssc_t1/as5fc/animation/";
var tranURL = (url) => getLink(`${base}${url}`);

export default (function(cjs, an, playSound) {
    var createjs = cjs;
    var AdobeAn = an;
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "mj_forRD_atlas_",
            frames: [
                [794, 787, 110, 150],
                [935, 639, 110, 150],
                [1047, 639, 110, 150],
                [1696, 738, 110, 150],
                [1808, 738, 110, 150],
                [1920, 738, 110, 150],
                [906, 791, 110, 150],
                [1018, 791, 110, 150],
                [1130, 791, 110, 150],
                [1696, 890, 110, 150],
                [0, 0, 1242, 637],
                [1244, 0, 790, 440],
                [1244, 442, 450, 637],
                [0, 639, 395, 400],
                [397, 639, 395, 400],
                [1696, 442, 139, 146],
                [1837, 442, 139, 146],
                [1696, 590, 139, 146],
                [1837, 590, 139, 146],
                [794, 639, 139, 146],
            ],
        },
    ];

    // symbols:

    (lib._0 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib._1 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib._2 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib._3 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib._4 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib._5 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();

    (lib._6 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();

    (lib._7 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();

    (lib._8 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();

    (lib._9 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();

    (lib.bg = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();

    (lib.billboard = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();

    (lib.gong = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();

    (lib.leftlight = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib.rightlight = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib.t1 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib.t2 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();

    (lib.t3 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();

    (lib.t4 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();

    (lib.t5 = function() {
        this.spriteSheet = ss["mj_forRD_atlas_"];
        this.gotoAndStop(19);
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

    (lib.t5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.t5();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.t5_1, new cjs.Rectangle(0, 0, 139, 146), null);

    (lib.t4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.t4();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(0, 0, 139, 146), null);

    (lib.t3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.t3();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(0, 0, 139, 146), null);

    (lib.t2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.t2();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(0, 0, 139, 146), null);

    (lib.t1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.t1();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(0, 0, 139, 146), null);

    (lib.rightlight_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rightlight();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rightlight_1, new cjs.Rectangle(0, 0, 395, 400), null);

    (lib.mj = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
        });

        // 圖層_1
        this.instance = new lib._0();
        this.instance.parent = this;
        this.instance.setTransform(-55, -75);

        this.instance_1 = new lib._1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-55, -75);

        this.instance_2 = new lib._2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-55, -75);

        this.instance_3 = new lib._3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-55, -75);

        this.instance_4 = new lib._4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-55, -75);

        this.instance_5 = new lib._5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-55, -75);

        this.instance_6 = new lib._6();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-55, -75);

        this.instance_7 = new lib._7();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-55, -75);

        this.instance_8 = new lib._8();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-55, -75);

        this.instance_9 = new lib._9();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-55, -75);

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
    p.nominalBounds = new cjs.Rectangle(-55, -75, 110, 150);

    (lib.leftlight_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.leftlight();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.leftlight_1, new cjs.Rectangle(0, 0, 395, 400), null);

    (lib.gong_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.gong();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.gong_1, new cjs.Rectangle(0, 0, 450, 637), null);

    (lib.billboard_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.billboard();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.billboard_1, new cjs.Rectangle(0, 0, 790, 440), null);

    (lib.time = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            playSound("mj_sound", 2);
        };
        this.frame_210 = function() {
            this.stop();
            var event = new createjs.Event("COUNT_DOWN_FINISH");
            this.dispatchEvent(event);
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(210)
                .call(this.frame_210)
                .wait(1),
        );

        // t1
        this.instance = new lib.t1_1();
        this.instance.parent = this;
        this.instance.setTransform(-0.5, 0, 2, 2, 0, 0, 0, 69.5, 73);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(168)
                .to({ _off: false }, 0)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 9)
                .wait(24)
                .to({ scaleX: 2, scaleY: 2, alpha: 0 }, 9)
                .wait(1),
        );

        // t2
        this.instance_1 = new lib.t2_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.5, 0, 2, 2, 0, 0, 0, 69.5, 73);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .wait(126)
                .to({ _off: false }, 0)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 9)
                .wait(24)
                .to({ scaleX: 2, scaleY: 2, alpha: 0 }, 9)
                .to({ _off: true }, 1)
                .wait(42),
        );

        // t3
        this.instance_2 = new lib.t3_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-0.5, 0, 2, 2, 0, 0, 0, 69.5, 73);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_2)
                .wait(84)
                .to({ _off: false }, 0)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 9)
                .wait(24)
                .to({ scaleX: 2, scaleY: 2, alpha: 0 }, 9)
                .to({ _off: true }, 1)
                .wait(84),
        );

        // t4
        this.instance_3 = new lib.t4_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-0.5, 0, 2, 2, 0, 0, 0, 69.5, 73);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(42)
                .to({ _off: false }, 0)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 9)
                .wait(24)
                .to({ scaleX: 2, scaleY: 2, alpha: 0 }, 9)
                .to({ _off: true }, 1)
                .wait(126),
        );

        // t5
        this.instance_4 = new lib.t5_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-0.5, 0, 2, 2, 0, 0, 0, 69.5, 73);
        this.instance_4.alpha = 0;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_4)
                .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 9)
                .wait(24)
                .to({ scaleX: 2, scaleY: 2, alpha: 0 }, 9)
                .to({ _off: true }, 1)
                .wait(168),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-139.5, -146, 278, 292);

    (lib.mj_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_9 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(9)
                .call(this.frame_9)
                .wait(1),
        );

        // 圖層_6 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Eg3gAP9IAA/5MBvBAAAIAAf5g");
        mask.setTransform(1.6, 5.7);

        // m5
        this.mj_4 = new lib.mj();
        this.mj_4.name = "mj_4";
        this.mj_4.parent = this;
        this.mj_4.setTransform(280, -188.1);
        this.mj_4.alpha = 0;

        var maskedShapeInstanceList = [this.mj_4];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.mj_4)
                .to({ y: 0, alpha: 1 }, 9)
                .wait(1),
        );

        // m4
        this.mj_3 = new lib.mj();
        this.mj_3.name = "mj_3";
        this.mj_3.parent = this;
        this.mj_3.setTransform(140, -188.1);
        this.mj_3.alpha = 0;

        var maskedShapeInstanceList = [this.mj_3];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.mj_3)
                .to({ y: 0, alpha: 1 }, 9)
                .wait(1),
        );

        // m3
        this.mj_2 = new lib.mj();
        this.mj_2.name = "mj_2";
        this.mj_2.parent = this;
        this.mj_2.setTransform(0, -188.1);
        this.mj_2.alpha = 0;

        var maskedShapeInstanceList = [this.mj_2];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.mj_2)
                .to({ y: 0, alpha: 1 }, 9)
                .wait(1),
        );

        // m2
        this.mj_1 = new lib.mj();
        this.mj_1.name = "mj_1";
        this.mj_1.parent = this;
        this.mj_1.setTransform(-140, -188.1);
        this.mj_1.alpha = 0;

        var maskedShapeInstanceList = [this.mj_1];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.mj_1)
                .to({ y: 0, alpha: 1 }, 9)
                .wait(1),
        );

        // m1
        this.mj_0 = new lib.mj();
        this.mj_0.name = "mj_0";
        this.mj_0.parent = this;
        this.mj_0.setTransform(-280, -188.1);
        this.mj_0.alpha = 0;

        var maskedShapeInstanceList = [this.mj_0];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.mj_0)
                .to({ y: 0, alpha: 1 }, 9)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

    (lib.light = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // right
        this.instance = new lib.rightlight_1();
        this.instance.parent = this;
        this.instance.setTransform(380.6, 0, 1, 1, -10, 0, 0, 197.5, 200);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .to({ rotation: 10, x: 364.6, y: 0.1 }, 29)
                .to({ rotation: -10, x: 380.6, y: 0 }, 30)
                .wait(1),
        );

        // left
        this.instance_1 = new lib.leftlight_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-410.7, 0.1, 1, 1, 10, 0, 0, 197.4, 200);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .to({ regX: 197.5, rotation: -10, x: -394.6, y: 0 }, 29)
                .to({ regX: 197.4, rotation: 10, x: -410.7, y: 0.1 }, 30)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-639.8, -231.2, 1249.7, 462.6);

    (lib.clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_231 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(231)
                .call(this.frame_231)
                .wait(1),
        );

        // time
        this.time = new lib.time();
        this.time.name = "time";
        this.time.parent = this;
        this.time.setTransform(0, 403.3, 1, 1, 0, 0, 0, -0.5, 0);
        this.time._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.time)
                .wait(10)
                .to({ _off: false }, 0)
                .to({ _off: true }, 211)
                .wait(11),
        );

        // gong
        this.instance = new lib.gong_1();
        this.instance.parent = this;
        this.instance.setTransform(0, -243.9, 1, 1, 0, 0, 0, 225, 318.5);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .to({ y: 318.5 }, 9)
                .wait(212)
                .to({ y: -243.9 }, 10)
                .wait(1),
        );

        // 圖層_8 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhArAiFMAAAhEJMCBXAAAMAAABEJg");
        mask.setTransform(0, 358.1);

        // billboard
        this.instance_1 = new lib.billboard_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 830.9, 1, 1, 0, 0, 0, 395, 220);

        var maskedShapeInstanceList = [this.instance_1];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .to({ y: 360 }, 9)
                .wait(212)
                .to({ y: 830.9 }, 10)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-225, -562.4, 450, 637);

    (lib.場景_1_mj = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mj
        this.mj_mc = new lib.mj_ac();
        this.mj_mc.name = "mj_mc";
        this.mj_mc.parent = this;
        this.mj_mc.setTransform(605, 464.1);

        this.timeline.addTween(cjs.Tween.get(this.mj_mc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_mj, null, null);

    (lib.場景_1_light = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // light
        this.instance = new lib.light();
        this.instance.parent = this;
        this.instance.setTransform(621.1, 318.5, 1, 1, 0, 0, 0, 9.8, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_light, null, null);

    (lib.場景_1_clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // clock
        this.clock_mc = new lib.clock();
        this.clock_mc.name = "clock_mc";
        this.clock_mc.parent = this;
        this.clock_mc.setTransform(605.5, 244.2, 1, 1, 0, 0, 0, 0, 244.2);

        this.timeline.addTween(cjs.Tween.get(this.clock_mc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_clock, null, null);

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
            this.mj_mc = this.mj.mj_mc;
            this.clock_mc = this.clock.clock_mc;
            var _this = this;
            var _d_0_num = 0;
            var _d_1_num = 1;
            var _d_2_num = 2;
            var _d_3_num = 3;
            var _d_4_num = 4;

            this.addEventListener("SHOW_FINAL_NUM", showFinalNum.bind(this));
            this.addEventListener("SHOW_MAIN_SLOT_MC", showMainSlotMc.bind(this));
            this.addEventListener("RUN_LOOP", runLoop.bind(this));

            //內部用
            this.clock_mc.time.addEventListener("COUNT_DOWN_FINISH", countDownFinish.bind(this));

            this.mj_mc["mj_0"].gotoAndStop(1);
            this.mj_mc["mj_1"].gotoAndStop(1);
            this.mj_mc["mj_2"].gotoAndStop(1);
            this.mj_mc["mj_3"].gotoAndStop(1);
            this.mj_mc["mj_4"].gotoAndStop(1);

            function runLoop(e) {
                _this.mj_mc.gotoAndStop(9);
                _this.mj_mc.visible = true;

                _this.mj_mc["mj_0"].gotoAndPlay(7);
                _this.mj_mc["mj_0"].visible = true;
                _this.mj_mc["mj_1"].gotoAndPlay(4);
                _this.mj_mc["mj_1"].visible = true;
                _this.mj_mc["mj_2"].gotoAndPlay(5);
                _this.mj_mc["mj_2"].visible = true;
                _this.mj_mc["mj_3"].gotoAndPlay(3);
                _this.mj_mc["mj_3"].visible = true;
                _this.mj_mc["mj_4"].gotoAndPlay(8);
                _this.mj_mc["mj_4"].visible = true;

                _this.clock_mc.gotoAndStop(1);
                _this.clock_mc.visible = false;

                _this.clock_mc.time.gotoAndStop(1);
                _this.clock_mc.time.visible = false;
            }

            function showMainSlotMc(e) {
                _d_0_num = parseInt(e.d_0);
                _d_1_num = parseInt(e.d_1);
                _d_2_num = parseInt(e.d_2);
                _d_3_num = parseInt(e.d_3);
                _d_4_num = parseInt(e.d_4);

                _this.mj_mc.gotoAndStop(1);
                _this.mj_mc.visible = false;

                _this.clock_mc.gotoAndPlay(1);
                _this.clock_mc.visible = true;

                _this.clock_mc.time.gotoAndPlay(1);
                _this.clock_mc.time.visible = true;
            }

            function countDownFinish(e) {
                setFinalNum("0", _d_0_num);
                setFinalNum("1", _d_1_num);
                setFinalNum("2", _d_2_num);
                setFinalNum("3", _d_3_num);
                setFinalNum("4", _d_4_num);

                _this.mj_mc.gotoAndPlay(1);
                _this.mj_mc.visible = true;

                _this.clock_mc.gotoAndStop(1);
                _this.clock_mc.visible = false;

                _this.clock_mc.time.gotoAndStop(1);
                _this.clock_mc.time.visible = false;
            }

            function showFinalNum(e) {
                _d_0_num = parseInt(e.d_0);
                _d_1_num = parseInt(e.d_1);
                _d_2_num = parseInt(e.d_2);
                _d_3_num = parseInt(e.d_3);
                _d_4_num = parseInt(e.d_4);

                setFinalNum("0", _d_0_num);
                setFinalNum("1", _d_1_num);
                setFinalNum("2", _d_2_num);
                setFinalNum("3", _d_3_num);
                setFinalNum("4", _d_4_num);

                _this.clock_mc.gotoAndStop(1);
                _this.clock_mc.visible = false;

                _this.clock_mc.time.gotoAndStop(1);
                _this.clock_mc.time.visible = false;

                _this.mj_mc.gotoAndPlay(1);
                _this.mj_mc.visible = true;
            }

            function setFinalNum(p, v) {
                _this.mj_mc["mj_" + p].gotoAndStop(v);
                _this.mj_mc["mj_" + p].visible = true;
            }
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(1),
        );

        // mj_obj_
        this.mj = new lib.場景_1_mj();
        this.mj.name = "mj";
        this.mj.parent = this;
        this.mj.setTransform(606.6, 386.4, 1, 1, 0, 0, 0, 606.6, 386.4);
        this.mj.depth = 0;
        this.mj.isAttachedToCamera = 0;
        this.mj.isAttachedToMask = 0;
        this.mj.layerDepth = 0;
        this.mj.layerIndex = 0;
        this.mj.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.mj).wait(1));

        // clock_obj_
        this.clock = new lib.場景_1_clock();
        this.clock.name = "clock";
        this.clock.parent = this;
        this.clock.setTransform(605.5, 244.2, 1, 1, 0, 0, 0, 605.5, 244.2);
        this.clock.depth = 0;
        this.clock.isAttachedToCamera = 0;
        this.clock.isAttachedToMask = 0;
        this.clock.layerDepth = 0;
        this.clock.layerIndex = 1;
        this.clock.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

        // light_obj_
        this.light = new lib.場景_1_light();
        this.light.name = "light";
        this.light.parent = this;
        this.light.setTransform(596.2, 318.5, 1, 1, 0, 0, 0, 596.2, 318.5);
        this.light.depth = 0;
        this.light.isAttachedToCamera = 0;
        this.light.isAttachedToMask = 0;
        this.light.layerDepth = 0;
        this.light.layerIndex = 2;
        this.light.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

        // bg_obj_
        this.bg = new lib.場景_1_bg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(621, 318.5, 1, 1, 0, 0, 0, 621, 318.5);
        this.bg.depth = 0;
        this.bg.isAttachedToCamera = 0;
        this.bg.isAttachedToMask = 0;
        this.bg.layerDepth = 0;
        this.bg.layerIndex = 3;
        this.bg.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(592.4, -244, 1270.6, 1613.3);
    // library properties:
    lib.properties = {
        id: "6343482650C4A845814AC97BB7DF4D40",
        width: 1242,
        height: 637,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [{ src: tranURL("images/mj_forRD_atlas_.png?1557798236506"), id: "mj_forRD_atlas_" }, { src: tranURL("sounds/mj_sound.mp3?1557798236556"), id: "mj_sound" }],
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
    an.compositions["6343482650C4A845814AC97BB7DF4D40"] = {
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
