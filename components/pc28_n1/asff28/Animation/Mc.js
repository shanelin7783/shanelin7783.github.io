import { getLink } from "@core/libraries/getLink";

var base = "pc28_n1/asff28/animation/";
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
            name: "diceMc_atlas_",
            frames: [
                [1590, 1847, 122, 118],
                [1838, 1875, 122, 118],
                [1714, 1875, 122, 118],
                [1707, 450, 341, 418],
                [0, 1441, 348, 424],
                [1654, 0, 383, 448],
                [0, 964, 432, 475],
                [1143, 0, 509, 497],
                [581, 0, 560, 502],
                [0, 0, 579, 491],
                [0, 493, 574, 469],
                [1143, 499, 562, 442],
                [576, 504, 552, 425],
                [496, 1925, 122, 118],
                [372, 1925, 122, 118],
                [970, 1847, 122, 118],
                [576, 931, 548, 420],
                [1578, 943, 450, 450],
                [1466, 1847, 122, 118],
                [620, 1925, 122, 118],
                [1790, 1755, 122, 118],
                [886, 1395, 450, 450],
                [248, 1925, 122, 118],
                [1914, 1755, 122, 118],
                [434, 1084, 122, 118],
                [434, 1353, 450, 450],
                [846, 1847, 122, 118],
                [1094, 1847, 122, 118],
                [1218, 1847, 122, 118],
                [1338, 1395, 450, 450],
                [1342, 1847, 122, 118],
                [434, 1204, 122, 118],
                [350, 1805, 122, 118],
                [1126, 943, 450, 450],
                [0, 1867, 122, 118],
                [434, 964, 122, 118],
                [124, 1867, 122, 118],
                [474, 1805, 122, 118],
                [598, 1805, 122, 118],
                [722, 1805, 122, 118],
                [1790, 1395, 122, 118],
                [1914, 1395, 122, 118],
                [1790, 1515, 122, 118],
                [1914, 1515, 122, 118],
                [1790, 1635, 122, 118],
                [1914, 1635, 122, 118],
            ],
        },
    ];

    // symbols:

    (lib._01 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib._02 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib._03 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib._00 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib._01_1 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib._02_1 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();

    (lib._03_1 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();

    (lib._04 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();

    (lib._05 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();

    (lib._06 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();

    (lib._07 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();

    (lib._08 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();

    (lib._09 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();

    (lib._11 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib._12 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib._13 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib._10 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();

    (lib._1s = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();

    (lib._21 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();

    (lib._22 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();

    (lib._23 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();

    (lib._2s = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();

    (lib._31 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();

    (lib._32 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();

    (lib._33 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();

    (lib._3s = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();

    (lib._41 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();

    (lib._42 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();

    (lib._43 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();

    (lib._4s = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();

    (lib._51 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();

    (lib._52 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();

    (lib._53 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();

    (lib._5s = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();

    (lib._61 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();

    (lib._62 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();

    (lib._63 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();

    (lib._71 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();

    (lib._72 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();

    (lib._73 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();

    (lib._81 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();

    (lib._82 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();

    (lib._83 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();

    (lib._91 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();

    (lib._92 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();

    (lib._93 = function() {
        this.spriteSheet = ss["diceMc_atlas_"];
        this.gotoAndStop(45);
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

    (lib.骰子影格動畫_左 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            d_0: 0,
            d_1: 1,
            d_2: 2,
            d_3: 3,
            d_4: 4,
            d_5: 5,
            d_6: 6,
            d_7: 7,
            d_8: 8,
            d_9: 9,
        });

        // 骰子2
        this.instance = new lib._02();
        this.instance.parent = this;
        this.instance.setTransform(-180, -45);

        this.instance_1 = new lib._12();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-180, -45);

        this.instance_2 = new lib._22();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-180, -45);

        this.instance_3 = new lib._32();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-180, -45);

        this.instance_4 = new lib._42();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-180, -45);

        this.instance_5 = new lib._52();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-180, -45);

        this.instance_6 = new lib._62();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-180, -45);

        this.instance_7 = new lib._72();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-180, -45);

        this.instance_8 = new lib._82();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-180, -45);

        this.instance_9 = new lib._92();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-180, -45);

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
    p.nominalBounds = new cjs.Rectangle(-180, -45, 122, 118);

    (lib.骰子影格動畫_右 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            d_0: 0,
            d_1: 1,
            d_2: 2,
            d_3: 3,
            d_4: 4,
            d_5: 5,
            d_6: 6,
            d_7: 7,
            d_8: 8,
            d_9: 9,
        });

        // 骰子2
        this.instance = new lib._03();
        this.instance.parent = this;
        this.instance.setTransform(60, -45);

        this.instance_1 = new lib._13();
        this.instance_1.parent = this;
        this.instance_1.setTransform(60, -45);

        this.instance_2 = new lib._23();
        this.instance_2.parent = this;
        this.instance_2.setTransform(60, -45);

        this.instance_3 = new lib._33();
        this.instance_3.parent = this;
        this.instance_3.setTransform(60, -45);

        this.instance_4 = new lib._43();
        this.instance_4.parent = this;
        this.instance_4.setTransform(60, -45);

        this.instance_5 = new lib._53();
        this.instance_5.parent = this;
        this.instance_5.setTransform(60, -45);

        this.instance_6 = new lib._63();
        this.instance_6.parent = this;
        this.instance_6.setTransform(60, -45);

        this.instance_7 = new lib._73();
        this.instance_7.parent = this;
        this.instance_7.setTransform(60, -45);

        this.instance_8 = new lib._83();
        this.instance_8.parent = this;
        this.instance_8.setTransform(60, -45);

        this.instance_9 = new lib._93();
        this.instance_9.parent = this;
        this.instance_9.setTransform(60, -45);

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
    p.nominalBounds = new cjs.Rectangle(60, -45, 122, 118);

    (lib.骰子影格動畫_中 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            d_0: 0,
            d_1: 1,
            d_2: 2,
            d_3: 3,
            d_4: 4,
            d_5: 5,
            d_6: 6,
            d_7: 7,
            d_8: 8,
            d_9: 9,
        });

        // 骰子2
        this.instance = new lib._01();
        this.instance.parent = this;
        this.instance.setTransform(-61, 21);

        this.instance_1 = new lib._11();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-61, 21);

        this.instance_2 = new lib._21();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-61, 21);

        this.instance_3 = new lib._31();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-61, 21);

        this.instance_4 = new lib._41();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-61, 21);

        this.instance_5 = new lib._51();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-61, 21);

        this.instance_6 = new lib._61();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-61, 21);

        this.instance_7 = new lib._71();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-61, 21);

        this.instance_8 = new lib._81();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-61, 21);

        this.instance_9 = new lib._91();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-61, 21);

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
    p.nominalBounds = new cjs.Rectangle(-61, 21, 122, 118);

    (lib.DiceCup = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib._10();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1.2, 1.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.DiceCup, new cjs.Rectangle(0, 0, 657.6, 504), null);

    (lib.元件1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib._00();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1.2, 1.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0, 0, 409.2, 501.6), null);

    (lib.場景_1_Layer_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2
        this.dice_left = new lib.骰子影格動畫_左();
        this.dice_left.name = "dice_left";
        this.dice_left.parent = this;
        this.dice_left.setTransform(532.1, 357.9, 1.27, 1.27, 0, 0, 0, -119, 14.1);

        this.dice_right = new lib.骰子影格動畫_右();
        this.dice_right.name = "dice_right";
        this.dice_right.parent = this;
        this.dice_right.setTransform(733.8, 360.8, 1.27, 1.27, 0, 0, 0, 121, 14);

        this.dice_center = new lib.骰子影格動畫_中();
        this.dice_center.name = "dice_center";
        this.dice_center.parent = this;
        this.dice_center.setTransform(628.2, 488.7, 1.27, 1.27, 0, 0, 0, 0.1, 80);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.dice_center }, { t: this.dice_right }, { t: this.dice_left }] })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_Layer_2, null, null);

    (lib.ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_1 = function() {
            //var event = new createjs.Event("HIDE_DICE_MC");
            //this.dispatchEvent(event);
            playSound("coin01");
        };
        this.frame_24 = function() {
            playSound("coin01");
        };
        this.frame_48 = function() {
            playSound("coin01");
        };
        this.frame_72 = function() {
            playSound("coin01");
        };
        this.frame_96 = function() {
            playSound("coin01");
        };
        this.frame_120 = function() {
            playSound("coin05");
        };
        this.frame_132 = function() {
            var event = new createjs.Event("HIDE_DICE_MC");
            this.dispatchEvent(event);
        };
        this.frame_134 = function() {
            playSound("yisell_sound_2014081921531716823_66366");
        };
        this.frame_150 = function() {
            playSound("yisell_sound_2014081921531716823_66366");
        };
        this.frame_167 = function() {
            playSound("yisell_sound_2014081921531716823_66366");
        };
        this.frame_182 = function() {
            var event = new createjs.Event("SHOW_DICE_MC");
            this.dispatchEvent(event);
        };
        this.frame_194 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(1)
                .call(this.frame_1)
                .wait(23)
                .call(this.frame_24)
                .wait(24)
                .call(this.frame_48)
                .wait(24)
                .call(this.frame_72)
                .wait(24)
                .call(this.frame_96)
                .wait(24)
                .call(this.frame_120)
                .wait(12)
                .call(this.frame_132)
                .wait(2)
                .call(this.frame_134)
                .wait(16)
                .call(this.frame_150)
                .wait(17)
                .call(this.frame_167)
                .wait(15)
                .call(this.frame_182)
                .wait(12)
                .call(this.frame_194)
                .wait(3),
        );

        // Clock
        this.instance = new lib._5s();
        this.instance.parent = this;
        this.instance.setTransform(-225, -199);

        this.instance_1 = new lib._4s();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-225, -199);

        this.instance_2 = new lib._3s();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-225, -199);

        this.instance_3 = new lib._2s();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-225, -199);

        this.instance_4 = new lib._1s();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-225, -199);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [] })
                .to({ state: [{ t: this.instance }] }, 1)
                .to({ state: [{ t: this.instance_1 }] }, 23)
                .to({ state: [{ t: this.instance_2 }] }, 24)
                .to({ state: [{ t: this.instance_3 }] }, 24)
                .to({ state: [{ t: this.instance_4 }] }, 24)
                .to({ state: [] }, 24)
                .wait(77),
        );

        // DiceCup_Shake
        this.instance_5 = new lib.元件1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, 1, 1, 0, 0, 0, 204.6, 250.8);
        this.instance_5._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_5)
                .wait(133)
                .to({ _off: false }, 0)
                .to(
                    {
                        guide: {
                            path: [0.1, -1.5, 92.1, -0.9, 186.9, -37.8, 360.4, -105.4, 442, -259.1, 453.9, -281.6, 462.8, -303.9],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [462.8, -303.9, 453.9, -281.6, 442, -259.1, 360.4, -105.4, 186.9, -37.8, 92.1, -0.9, 0.1, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0, -1.5, -76.4, -2, -150.9, -28.5, -314.9, -86.7, -373.2, -236.5, -384.9, -266.7, -391, -297],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [-391, -297, -384.9, -266.7, -373.2, -236.5, -314.9, -86.7, -150.9, -28.5, -76.4, -2, 0, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0.1, -1.5, 92.1, -0.9, 186.9, -37.8, 360.4, -105.4, 442, -259.1, 453.9, -281.6, 462.8, -303.9],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [462.8, -303.9, 453.9, -281.6, 442, -259.1, 360.4, -105.4, 186.9, -37.8, 92.1, -0.9, 0.1, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0, -1.5, -76.4, -2, -150.9, -28.5, -314.9, -86.7, -373.2, -236.5, -384.9, -266.7, -391, -297],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [-391, -297, -384.9, -266.7, -373.2, -236.5, -314.9, -86.7, -150.9, -28.5, -76.4, -2, 0, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0.1, -1.5, 92.1, -0.9, 186.9, -37.8, 360.4, -105.4, 442, -259.1, 453.9, -281.6, 462.8, -303.9],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [462.8, -303.9, 453.9, -281.6, 442, -259.1, 360.4, -105.4, 186.9, -37.8, 92.1, -0.9, 0.1, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0, -1.5, -76.4, -2, -150.9, -28.5, -314.9, -86.7, -373.2, -236.5, -384.9, -266.7, -391, -297],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [-391, -297, -384.9, -266.7, -373.2, -236.5, -314.9, -86.7, -150.9, -28.5, -76.4, -2, 0, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0.1, -1.5, 92.1, -0.9, 186.9, -37.8, 360.4, -105.4, 442, -259.1, 453.9, -281.6, 462.8, -303.9],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [462.8, -303.9, 453.9, -281.6, 442, -259.1, 360.4, -105.4, 186.9, -37.8, 92.1, -0.9, 0.1, -1.5],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [0, -1.5, -76.4, -2, -150.9, -28.5, -314.9, -86.7, -373.2, -236.5, -384.9, -266.7, -391, -297],
                        },
                    },
                    3,
                )
                .to(
                    {
                        guide: {
                            path: [-391, -297, -384.9, -266.7, -373.2, -236.5, -314.9, -86.7, -150.9, -28.5, -76.4, -2, 0, -1.5],
                        },
                    },
                    3,
                )
                .to({ _off: true }, 1)
                .wait(15),
        );

        // DiceCup_FadeIn
        this.instance_6 = new lib.DiceCup();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-939.1, -393, 1, 1, 0, 0, 0, 328.8, 252);
        this.instance_6._off = true;

        this.instance_7 = new lib._09();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-1038, -529, 1.2, 1.2);

        this.instance_8 = new lib._08();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-1008, -533, 1.2, 1.2);

        this.instance_9 = new lib._07();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-951, -538, 1.2, 1.2);

        this.instance_10 = new lib._06();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-859, -529, 1.2, 1.2);

        this.instance_11 = new lib._05();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-730, -498, 1.2, 1.2);

        this.instance_12 = new lib._04();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-572, -446, 1.2, 1.2);

        this.instance_13 = new lib._03_1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-404, -377, 1.2, 1.2);

        this.instance_14 = new lib._02_1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-294, -311, 1.2, 1.2);

        this.instance_15 = new lib._01_1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-223, -262, 1.2, 1.2);

        this.instance_16 = new lib._00();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-205, -251, 1.2, 1.2);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [] })
                .to({ state: [{ t: this.instance_6 }] }, 120)
                .to({ state: [{ t: this.instance_6 }] }, 2)
                .to({ state: [{ t: this.instance_7 }] }, 1)
                .to({ state: [{ t: this.instance_8 }] }, 1)
                .to({ state: [{ t: this.instance_9 }] }, 1)
                .to({ state: [{ t: this.instance_10 }] }, 1)
                .to({ state: [{ t: this.instance_11 }] }, 1)
                .to({ state: [{ t: this.instance_12 }] }, 1)
                .to({ state: [{ t: this.instance_13 }] }, 1)
                .to({ state: [{ t: this.instance_14 }] }, 1)
                .to({ state: [{ t: this.instance_15 }] }, 1)
                .to({ state: [{ t: this.instance_16 }] }, 1)
                .to({ state: [] }, 1)
                .wait(64),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_6)
                .wait(120)
                .to({ _off: false }, 0)
                .to({ x: -717.2, y: -276 }, 2)
                .to({ _off: true, regX: 0, regY: 0, scaleX: 1.2, scaleY: 1.2, x: -1038, y: -529 }, 1)
                .wait(74),
        );

        // DiceCup_FadeOut
        this.instance_17 = new lib._00();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-205, -251, 1.2, 1.2);

        this.instance_18 = new lib._01_1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-223, -262, 1.2, 1.2);

        this.instance_19 = new lib._02_1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-294, -311, 1.2, 1.2);

        this.instance_20 = new lib._03_1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-404, -377, 1.2, 1.2);

        this.instance_21 = new lib._04();
        this.instance_21.parent = this;
        this.instance_21.setTransform(-572, -446, 1.2, 1.2);

        this.instance_22 = new lib._05();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-730, -498, 1.2, 1.2);

        this.instance_23 = new lib._06();
        this.instance_23.parent = this;
        this.instance_23.setTransform(-859, -529, 1.2, 1.2);

        this.instance_24 = new lib._07();
        this.instance_24.parent = this;
        this.instance_24.setTransform(-951, -538, 1.2, 1.2);

        this.instance_25 = new lib._08();
        this.instance_25.parent = this;
        this.instance_25.setTransform(-1008, -533, 1.2, 1.2);

        this.instance_26 = new lib._09();
        this.instance_26.parent = this;
        this.instance_26.setTransform(-1038, -529, 1.2, 1.2);

        this.instance_27 = new lib.DiceCup();
        this.instance_27.parent = this;
        this.instance_27.setTransform(-717.2, -276, 1, 1, 0, 0, 0, 328.8, 252);
        this.instance_27._off = true;

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [] })
                .to({ state: [{ t: this.instance_17 }] }, 182)
                .to({ state: [{ t: this.instance_18 }] }, 1)
                .to({ state: [{ t: this.instance_19 }] }, 1)
                .to({ state: [{ t: this.instance_20 }] }, 1)
                .to({ state: [{ t: this.instance_21 }] }, 1)
                .to({ state: [{ t: this.instance_22 }] }, 1)
                .to({ state: [{ t: this.instance_23 }] }, 1)
                .to({ state: [{ t: this.instance_24 }] }, 1)
                .to({ state: [{ t: this.instance_25 }] }, 1)
                .to({ state: [{ t: this.instance_26 }] }, 1)
                .to({ state: [{ t: this.instance_27 }] }, 1)
                .to({ state: [{ t: this.instance_27 }] }, 2)
                .to({ state: [] }, 1)
                .wait(2),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_27)
                .wait(192)
                .to({ _off: false }, 0)
                .to({ x: -939.1, y: -393 }, 2)
                .to({ _off: true }, 1)
                .wait(2),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

    (lib.場景_1_layer_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // layer_3
        this.mainAnimationMc = new lib.ac();
        this.mainAnimationMc.name = "mainAnimationMc";
        this.mainAnimationMc.parent = this;
        this.mainAnimationMc.setTransform(621, 365);

        this.timeline.addTween(cjs.Tween.get(this.mainAnimationMc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_layer_3, null, null);

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
            this.mainAnimationMc = this.layer_3.mainAnimationMc;
            this.dice_center = this.Layer_2.dice_center;
            this.dice_right = this.Layer_2.dice_right;
            this.dice_left = this.Layer_2.dice_left;
            var _this = this;
            var _dice_1_num = 0;
            var _dice_2_num = 0;
            var _dice_3_num = 0;

            this.dice_left.visible = false;
            this.dice_center.visible = false;
            this.dice_right.visible = false;
            this.mainAnimationMc.visible = false;

            this.addEventListener("SET_NUMBER_DICE", clientSetDefaultNumber.bind(this));
            this.addEventListener("SHOW_MAIN_MC", showAnimation.bind(this));
            this.addEventListener("SHOW_DICE_RUN", setDiceRun.bind(this));

            this.mainAnimationMc.addEventListener("SHOW_DICE_MC", showDice.bind(this));
            this.mainAnimationMc.addEventListener("HIDE_DICE_MC", hideDice.bind(this));

            function clientSetDefaultNumber(e) {
                _dice_1_num = parseInt(e.d_0);
                _dice_2_num = parseInt(e.d_1);
                _dice_3_num = parseInt(e.d_2);

                setNumberOfDice();
                showDice();
            }

            function setNumberOfDice() {
                _this.dice_left.gotoAndStop("d_" + _dice_1_num);
                _this.dice_center.gotoAndStop("d_" + _dice_2_num);
                _this.dice_right.gotoAndStop("d_" + _dice_3_num);
            }

            function setDiceRun() {
                showDice();
                _this.dice_left.gotoAndPlay("d_0");
                _this.dice_center.gotoAndPlay("d_0");
                _this.dice_right.gotoAndPlay("d_0");
            }

            function showDice(e) {
                _this.dice_left.visible = true;
                _this.dice_center.visible = true;
                _this.dice_right.visible = true;
                setNumberOfDice();
            }

            function hideDice(e) {
                _this.dice_left.visible = false;
                _this.dice_center.visible = false;
                _this.dice_right.visible = false;
            }

            function showAnimation(e) {
                _this.mainAnimationMc.visible = true;
                _this.mainAnimationMc.gotoAndPlay(0);

                _dice_1_num = parseInt(e.d_0);
                _dice_2_num = parseInt(e.d_1);
                _dice_3_num = parseInt(e.d_2);

                setDiceRun();
            }
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(1),
        );

        // layer_3_obj_
        this.layer_3 = new lib.場景_1_layer_3();
        this.layer_3.name = "layer_3";
        this.layer_3.parent = this;
        this.layer_3.setTransform(621, 365, 1, 1, 0, 0, 0, 621, 365);
        this.layer_3.depth = 0;
        this.layer_3.isAttachedToCamera = 0;
        this.layer_3.isAttachedToMask = 0;
        this.layer_3.layerDepth = 0;
        this.layer_3.layerIndex = 0;
        this.layer_3.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.layer_3).wait(1));

        // Layer_2_obj_
        this.Layer_2 = new lib.場景_1_Layer_2();
        this.Layer_2.name = "Layer_2";
        this.Layer_2.parent = this;
        this.Layer_2.setTransform(632.9, 423.2, 1, 1, 0, 0, 0, 632.9, 423.2);
        this.Layer_2.depth = 0;
        this.Layer_2.isAttachedToCamera = 0;
        this.Layer_2.isAttachedToMask = 0;
        this.Layer_2.layerDepth = 0;
        this.Layer_2.layerIndex = 1;
        this.Layer_2.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1075.6, 647.9, 356.7, 280.8);
    // library properties:
    lib.properties = {
        id: "F2EFA74D153B854991C5E4B4B3506F98",
        width: 1242,
        height: 730,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [
            { src: tranURL("images/diceMc_atlas_.png"), id: "diceMc_atlas_" },
            { src: tranURL("sounds/coin01.mp3"), id: "coin01" },
            { src: tranURL("sounds/coin05.mp3"), id: "coin05" },
            { src: tranURL("sounds/yisell_sound_2014081921531716823_66366.mp3"), id: "yisell_sound_2014081921531716823_66366" },
        ],
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
    an.compositions["F2EFA74D153B854991C5E4B4B3506F98"] = {
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
