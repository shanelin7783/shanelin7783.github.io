import { getLink } from "@core/libraries/getLink";

var base = "ssc_n1/as5fcn1_f/animation/";
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
            name: "japan_rotary_table_FOR_RD_atlas_",
            frames: [
                [1873, 494, 29, 27],
                [0, 0, 1242, 703],
                [1171, 1611, 309, 161],
                [1797, 0, 178, 267],
                [1797, 436, 74, 58],
                [1618, 1254, 316, 398],
                [1873, 436, 39, 56],
                [1659, 549, 260, 350],
                [1921, 436, 15, 410],
                [0, 705, 551, 547],
                [553, 705, 551, 547],
                [0, 1254, 450, 450],
                [452, 1254, 450, 450],
                [904, 1254, 355, 355],
                [1261, 1254, 355, 355],
                [1659, 901, 265, 265],
                [904, 1611, 265, 265],
                [1797, 269, 165, 165],
                [1482, 1654, 165, 165],
                [1106, 705, 551, 547],
                [1244, 0, 551, 547],
            ],
        },
    ];

    // symbols:

    (lib.bell = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib.bg = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib.border = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib.cat = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib.cat_hand = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib.fox = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();

    (lib.fox_hard = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();

    (lib.lantern = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();

    (lib.rope = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();

    (lib.rt1 = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();

    (lib.rt1_bly = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();

    (lib.rt2 = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();

    (lib.rt2_bly = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();

    (lib.rt3 = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib.rt3_bly = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib.rt4 = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib.rt4_bly = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();

    (lib.rt5 = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();

    (lib.rt5_bly = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();

    (lib.rt_mask = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();

    (lib.rt_mask_rf = function() {
        this.spriteSheet = ss["japan_rotary_table_FOR_RD_atlas_"];
        this.gotoAndStop(20);
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

    (lib.補間動畫10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p("ABfJbQgSgjAAhKIAAsIQjgCshKAAQgoAAgcgcQgagaAAguQAAg4BpgzQDZhrBbiLQAng6AOgOQAXgXAnAAQBnAAAACcIAAPZQAACwh3AAQhMAAgag4g");
        this.shape.setTransform(-9.2, -5.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-40.8, -71.2, 63.3, 131.9);

    (lib.補間動畫9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p("ABfJbQgSgjAAhKIAAsIQjgCshKAAQgoAAgcgcQgagaAAguQAAg4BpgzQDZhrBbiLQAng6AOgOQAXgXAnAAQBnAAAACcIAAPZQAACwh3AAQhMAAgag4g");
        this.shape.setTransform(-9.2, -5.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-40.8, -71.2, 63.3, 131.9);

    (lib.補間動畫8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "AklKJQhAgBgfgRQg+geAAhIQAAhbB9iHQBGhMCriPQCbiCAzg8QBDhTAAhUQAAhchBg2Qg6gshOAAQhTAAg7AyQgpAkgOArQghBcgSAbQgeAqg1AAQgqAAgcgaQgjgcAAg1QAAh5BdhqQB4iMDiAAQChgBBhA3QBSAwAwBUQAxBUAABhQAABxhBBjQhEBsiiCDQiOBzgmAmQguAsg2BJIGtAAQCpABAABlQAABDgxAYQgbAOg6ABg",
            );
        this.shape.setTransform(2.6, -6.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.4, -71.2, 90.2, 129.7);

    (lib.補間動畫7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "AklKJQhAgBgfgRQg+geAAhIQAAhbB9iHQBGhMCriPQCbiCAzg8QBDhTAAhUQAAhchBg2Qg6gshOAAQhTAAg7AyQgpAkgOArQghBcgSAbQgeAqg1AAQgqAAgcgaQgjgcAAg1QAAh5BdhqQB4iMDiAAQChgBBhA3QBSAwAwBUQAxBUAABhQAABxhBBjQhEBsiiCDQiOBzgmAmQguAsg2BJIGtAAQCpABAABlQAABDgxAYQgbAOg6ABg",
            );
        this.shape.setTransform(2.6, -6.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.4, -71.2, 90.2, 129.7);

    (lib.補間動畫6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "AlkH8QhbhvAAhfQAAgqAhggQAegdAxAAQBGAAAgBgQBBDACdAAQBMAAA/gzQBRhBAAhyQAAhlg4g7Qg3g6hfAAIg5ADIg0AEQhjAAAAhZQAAhhB4AAQBlAAA2gcQBVguAAhnQAAhHgugxQgwgvhPAAQiNAAg1COQgeBUhEAAQgwAAgaghQgZgaAAgqQAAhhBjhcQB5huC9AAQC4AABsBiQBgBYAACGQAACZiTB3QDPBxAADJQAACghyB1QiECGjVAAQjZAAiAiXg",
            );
        this.shape.setTransform(1.3, -5.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43.5, -71.2, 89.7, 131.9);

    (lib.補間動畫5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "AlkH8QhbhvAAhfQAAgqAhggQAegdAxAAQBGAAAgBgQBBDACdAAQBMAAA/gzQBRhBAAhyQAAhlg4g7Qg3g6hfAAIg5ADIg0AEQhjAAAAhZQAAhhB4AAQBlAAA2gcQBVguAAhnQAAhHgugxQgwgvhPAAQiNAAg1COQgeBUhEAAQgwAAgaghQgZgaAAgqQAAhhBjhcQB5huC9AAQC4AABsBiQBgBYAACGQAACZiTB3QDPBxAADJQAACghyB1QiECGjVAAQjZAAiAiXg",
            );
        this.shape.setTransform(1.3, -5.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43.5, -71.2, 89.7, 131.9);

    (lib.補間動畫4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "ACFJ7QgggdgBh7IAAhzIl8AAQhaAAgagDQgogHgZgZQgugsAAg8QAAgqBThvIHTptQAxhDAYgTQAhggAuAAQA+AAAmAyQAZAfAACBIAAJwIAnAAQBeAAAbAeQAcAcAAArQAAAmgeAeQgcAchLAAIg3AAIAABzQAAB5geAaQglAigqAAQguAAgggdgAkVCrIF5AAIAAn+g",
            );
        this.shape.setTransform(0.6, -5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.2, -72.1, 101.6, 132.8);

    (lib.補間動畫3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "ACFJ7QgggdgBh7IAAhzIl8AAQhaAAgagDQgogHgZgZQgugsAAg8QAAgqBThvIHTptQAxhDAYgTQAhggAuAAQA+AAAmAyQAZAfAACBIAAJwIAnAAQBeAAAbAeQAcAcAAArQAAAmgeAeQgcAchLAAIg3AAIAABzQAAB5geAaQglAigqAAQguAAgggdgAkVCrIF5AAIAAn+g",
            );
        this.shape.setTransform(0.6, -5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.2, -72.1, 101.6, 132.8);

    (lib.補間動畫2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#5A3517")
            .s()
            .p(
                "AlYIPQhrhtAAhdQAAgeAZgcQAeglAvAAQA+AAAvBTQAuBUAoAjQA6AzBTAAQBzAAA8hiQAvhMAAhnQAAiChIhHQg9g5hbAAQhGAAg4AgQggARg6AyQggAdgvAAQgpAAgjgeQghggAAgmQAAgIAJg1IBJmkQAQhdAugdQAhgVBVAAIGjAAQBEAAAUAHQBDAXAABIQAABoiUAAImQAAIgxEbQB0hDBxAAQCgAAB2BxQB9B2AAC7QAAC2h2CEQiCCPjUAAQjcAAh0h6g",
            );
        this.shape.setTransform(2.4, -4.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.8, -69.1, 90.4, 129.8);

    (lib.場景_1_bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // bg
        this.instance = new lib.bg();
        this.instance.parent = this;
        this.instance.setTransform(1, 1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_bg, null, null);

    (lib.rt5_bly_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt5_bly();
        this.instance.parent = this;
        this.instance.setTransform(-83, -83);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt5_bly_1, new cjs.Rectangle(-83, -83, 165, 165), null);

    (lib.rt5_1 = function(mode, startPosition, loop) {
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

        // 圖層_1
        this.instance = new lib.rt5();
        this.instance.parent = this;
        this.instance.setTransform(-83, -83);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(1)
                .to({ rotation: 36, x: -18.2, y: -115.2 }, 0)
                .wait(1)
                .to({ rotation: 72, x: 53, y: -103.9 }, 0)
                .wait(1)
                .to({ rotation: 108, x: 104, y: -52.9 }, 0)
                .wait(1)
                .to({ rotation: 144, x: 115.3, y: 18.3 }, 0)
                .wait(1)
                .to({ rotation: 180, x: 82, y: 82 }, 0)
                .wait(1)
                .to({ rotation: 216, x: 18.3, y: 115.3 }, 0)
                .wait(1)
                .to({ rotation: 252, x: -52.9, y: 104 }, 0)
                .wait(1)
                .to({ rotation: 288, x: -103.9, y: 53 }, 0)
                .wait(1)
                .to({ rotation: 324, x: -115.2, y: -18.2 }, 0)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-83, -83, 165, 165);

    (lib.rt4_bly_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt4_bly();
        this.instance.parent = this;
        this.instance.setTransform(-133, -133);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt4_bly_1, new cjs.Rectangle(-133, -133, 265, 265), null);

    (lib.rt4_1 = function(mode, startPosition, loop) {
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

        // num
        this.instance = new lib.rt4();
        this.instance.parent = this;
        this.instance.setTransform(-133, -133);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(1)
                .to({ rotation: 36, x: -29.3, y: -185.1 }, 0)
                .wait(1)
                .to({ rotation: 72, x: 85.1, y: -167 }, 0)
                .wait(1)
                .to({ rotation: 108, x: 167, y: -85.1 }, 0)
                .wait(1)
                .to({ rotation: 144, x: 185.1, y: 29.4 }, 0)
                .wait(1)
                .to({ rotation: 180, x: 132, y: 132 }, 0)
                .wait(1)
                .to({ rotation: 216, x: 29.4, y: 185.1 }, 0)
                .wait(1)
                .to({ rotation: 252, x: -85.1, y: 167 }, 0)
                .wait(1)
                .to({ rotation: 288, x: -167, y: 85.1 }, 0)
                .wait(1)
                .to({ rotation: 324, x: -185.1, y: -29.3 }, 0)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-133, -133, 265, 265);

    (lib.rt3_bly_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt3_bly();
        this.instance.parent = this;
        this.instance.setTransform(-178, -178);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt3_bly_1, new cjs.Rectangle(-178, -178, 355, 355), null);

    (lib.rt3_1 = function(mode, startPosition, loop) {
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

        // num
        this.instance = new lib.rt3();
        this.instance.parent = this;
        this.instance.setTransform(-178, -178);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(1)
                .to({ rotation: 36, x: -39.3, y: -247.9 }, 0)
                .wait(1)
                .to({ rotation: 72, x: 114, y: -223.6 }, 0)
                .wait(1)
                .to({ rotation: 108, x: 223.7, y: -113.9 }, 0)
                .wait(1)
                .to({ rotation: 144, x: 248, y: 39.3 }, 0)
                .wait(1)
                .to({ rotation: 180, x: 177, y: 177 }, 0)
                .wait(1)
                .to({ rotation: 216, x: 39.3, y: 248 }, 0)
                .wait(1)
                .to({ rotation: 252, x: -113.9, y: 223.7 }, 0)
                .wait(1)
                .to({ rotation: 288, x: -223.6, y: 114 }, 0)
                .wait(1)
                .to({ rotation: 324, x: -247.9, y: -39.3 }, 0)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-178, -178, 355, 355);

    (lib.rt2_bly_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt2_bly();
        this.instance.parent = this;
        this.instance.setTransform(-225, -225);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt2_bly_1, new cjs.Rectangle(-225, -225, 450, 450), null);

    (lib.rt2_1 = function(mode, startPosition, loop) {
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

        // num
        this.instance = new lib.rt2();
        this.instance.parent = this;
        this.instance.setTransform(-225, -225);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(1)
                .to({ rotation: 36, x: -49.8, y: -314.3 }, 0)
                .wait(1)
                .to({ rotation: 72, x: 144.5, y: -283.5 }, 0)
                .wait(1)
                .to({ rotation: 108, x: 283.5, y: -144.4 }, 0)
                .wait(1)
                .to({ rotation: 144, x: 314.3, y: 49.8 }, 0)
                .wait(1)
                .to({ rotation: 180, x: 225, y: 225 }, 0)
                .wait(1)
                .to({ rotation: 216, x: 49.8, y: 314.3 }, 0)
                .wait(1)
                .to({ rotation: 252, x: -144.4, y: 283.5 }, 0)
                .wait(1)
                .to({ rotation: 288, x: -283.5, y: 144.5 }, 0)
                .wait(1)
                .to({ rotation: 324, x: -314.3, y: -49.8 }, 0)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-225, -225, 450, 450);

    (lib.rt1_bly_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt1_bly();
        this.instance.parent = this;
        this.instance.setTransform(-276, -274);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt1_bly_1, new cjs.Rectangle(-276, -274, 551, 547), null);

    (lib.rt1_1 = function(mode, startPosition, loop) {
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

        // num
        this.instance = new lib.rt1();
        this.instance.parent = this;
        this.instance.setTransform(-276, -274);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(1)
                .to({ rotation: 36, x: -62.1, y: -383.2 }, 0)
                .wait(1)
                .to({ rotation: 72, x: 175, y: -346.5 }, 0)
                .wait(1)
                .to({ rotation: 108, x: 345.2, y: -177.5 }, 0)
                .wait(1)
                .to({ rotation: 144, x: 383.6, y: 59.4 }, 0)
                .wait(1)
                .to({ rotation: 180, x: 275, y: 273 }, 0)
                .wait(1)
                .to({ rotation: 216, x: 62.1, y: 383.2 }, 0)
                .wait(1)
                .to({ rotation: 252, x: -175, y: 346.6 }, 0)
                .wait(1)
                .to({ rotation: 288, x: -345.2, y: 177.5 }, 0)
                .wait(1)
                .to({ rotation: 324, x: -383.6, y: -59.3 }, 0)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-276, -274, 551, 547);

    (lib.rt_mask_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.rt_mask();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.rt_mask_1, new cjs.Rectangle(0, 0, 551, 547), null);

    (lib.light = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.lantern();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0, 0, 260, 350), null);

    (lib.fox_hand = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.fox_hard();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.fox_hand, new cjs.Rectangle(0, 0, 39, 56), null);

    (lib.cat_hand_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_2
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFBF3")
            .s()
            .p(
                "AhECTIgCgCQgHAAgGgFQgHgFgDgIQgCgHACgPQAEgWALghIARg2QAFgYAFgNQAJgWAbgjQAPgVALgKQAOgOAPgHIAAADQADAJAIAEIAIADIAFADIAOADIAGACIAAAAIAAAGQAGADACAFQAFAJgFARQgHAVgRAfIgcAxIgIATIgTAuQgJASgaAjIgBABIgFAAIgIADIgaALIgBAAIgFgEg",
            );
        this.shape.setTransform(6.1, 34.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 圖層_1
        this.instance = new lib.cat_hand();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.cat_hand_1, new cjs.Rectangle(-3.4, 0, 77.4, 58), null);

    (lib.bell_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.bell();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.bell_1, new cjs.Rectangle(0, 0, 29, 27), null);

    (lib.場景_1_rt5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rt5
        this.cycle_0 = new lib.rt5_1();
        this.cycle_0.name = "cycle_0";
        this.cycle_0.parent = this;
        this.cycle_0.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.cycle_0).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_rt5, null, null);

    (lib.場景_1_rt4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rt4
        this.cycle_1 = new lib.rt4_1();
        this.cycle_1.name = "cycle_1";
        this.cycle_1.parent = this;
        this.cycle_1.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.cycle_1).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_rt4, null, null);

    (lib.場景_1_rt3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rt3
        this.cycle_2 = new lib.rt3_1();
        this.cycle_2.name = "cycle_2";
        this.cycle_2.parent = this;
        this.cycle_2.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.cycle_2).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_rt3, null, null);

    (lib.場景_1_rt2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rt2
        this.cycle_3 = new lib.rt2_1();
        this.cycle_3.name = "cycle_3";
        this.cycle_3.parent = this;
        this.cycle_3.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.cycle_3).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_rt2, null, null);

    (lib.場景_1_rt1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rt1
        this.cycle_4 = new lib.rt1_1();
        this.cycle_4.name = "cycle_4";
        this.cycle_4.parent = this;
        this.cycle_4.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.cycle_4).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_rt1, null, null);

    (lib.clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_11 = function() {
            playSound("coin01");
        };
        this.frame_35 = function() {
            playSound("coin01");
        };
        this.frame_59 = function() {
            playSound("coin01");
        };
        this.frame_83 = function() {
            playSound("coin01");
        };
        this.frame_107 = function() {
            playSound("coin01");
        };
        this.frame_130 = function() {
            this.stop();
            playSound("coin05");
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(11)
                .call(this.frame_11)
                .wait(24)
                .call(this.frame_35)
                .wait(24)
                .call(this.frame_59)
                .wait(24)
                .call(this.frame_83)
                .wait(24)
                .call(this.frame_107)
                .wait(23)
                .call(this.frame_130)
                .wait(1),
        );

        // num1
        this.instance = new lib.補間動畫9("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-2.9, 0, 1.2, 1.2);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.instance_1 = new lib.補間動畫10("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-3, 0);
        this.instance_1._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(101)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(24),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .wait(101)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 17)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(1),
        );

        // num2
        this.instance_2 = new lib.補間動畫7("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-2.9, 0, 1.2, 1.2);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.instance_3 = new lib.補間動畫8("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-3, 0);
        this.instance_3._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_2)
                .wait(77)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(48),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(77)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(24),
        );

        // num3
        this.instance_4 = new lib.補間動畫5("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, 1.2, 1.2);
        this.instance_4.alpha = 0;
        this.instance_4._off = true;

        this.instance_5 = new lib.補間動畫6("synched", 0);
        this.instance_5.parent = this;
        this.instance_5._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_4)
                .wait(53)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, alpha: 1 }, 6)
                .wait(72),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_5)
                .wait(53)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 6)
                .wait(48),
        );

        // num4
        this.instance_6 = new lib.補間動畫3("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-2.9, 0, 1.2, 1.2);
        this.instance_6.alpha = 0;
        this.instance_6._off = true;

        this.instance_7 = new lib.補間動畫4("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-3, 0);
        this.instance_7._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_6)
                .wait(29)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(96),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_7)
                .wait(29)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(72),
        );

        // num5
        this.instance_8 = new lib.補間動畫2("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-3, 0);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_8)
                .wait(11)
                .to({ startPosition: 0 }, 0)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(96),
        );

        // light
        this.instance_9 = new lib.light();
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, 1, 1, 0, 0, 0, 130, 175);
        this.instance_9.shadow = new cjs.Shadow("rgba(255,255,204,1)", 0, 0, 26);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131));

        // rope
        this.instance_10 = new lib.rope();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-6, -460, 0.7, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-158, -460, 320, 667);

    (lib.ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { loopFlag: 138 });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_138 = function() {
            playSound("sound");
        };
        this.frame_206 = function() {
            this.gotoAndPlay("loopFlag");
        };
        this.frame_207 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(138)
                .call(this.frame_138)
                .wait(68)
                .call(this.frame_206)
                .wait(1)
                .call(this.frame_207)
                .wait(1),
        );

        // fox
        this.instance = new lib.fox();
        this.instance.parent = this;
        this.instance.setTransform(305, -58.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

        // fox_hand
        this.instance_1 = new lib.fox_hand();
        this.instance_1.parent = this;
        this.instance_1.setTransform(460.5, -20.5, 1, 1, 0, 0, 0, 19.5, 28);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .wait(136)
                .to({ x: 466.3, y: -9.5 }, 7)
                .to({ x: 460.5, y: -20.5 }, 6)
                .wait(59),
        );

        // bell
        this.instance_2 = new lib.bell_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-97.5, 133, 1, 1, 0, 0, 0, 14.5, 13.5);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_2)
                .wait(143)
                .to({ regX: 14.6, regY: 13.6, rotation: -11.7, x: -97.4, y: 133.1 }, 3)
                .to({ regX: 14.5, regY: 13.5, rotation: 10.5, x: -97.5, y: 133 }, 3)
                .to({ rotation: 0 }, 3)
                .wait(56),
        );

        // cat_eye
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#000000")
            .s()
            .p(
                "AisBQQgSgRAAgZQAAgYASgRQARgRAZAAQAYAAASARQARARAAAYQAAAZgRARQgSASgYAAQgZAAgRgSgACPgIQgQgIgJgSQgJgSADgRQAEgRAOgHQAOgHAPAIQAQAHAJASQAJASgDASQgEARgOAHQgGADgHAAQgIAAgIgEg",
            );
        this.shape.setTransform(-113, 84.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#000000")
            .s()
            .p(
                "AiwA7QgOgLABgKQABgLAJgEQAIgEALADIARAKQAKAFAVgDQAIgBADgCQADgCAFgFIAHgJQAGgGAIAAQAIAAAFAHQAFAHgBAIQgBALgOAQQgLALgIADQgKAFgPAAIgEAAQgjAAgXgSgAB0gZQgLgFgBgHQgBgHAFgEQAEgEAIAAIAMAEQAIABANgGIAHgDIADgGIAEgIQACgFAGgBQAFgCAFAFQAEADABAFQABAIgGANQgFAJgFADQgGAGgJACQgMAEgKAAQgMAAgKgFg",
            );
        this.shape_1.setTransform(-113.9, 84.7);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.shape }] })
                .to({ state: [{ t: this.shape_1 }] }, 148)
                .to({ state: [{ t: this.shape }] }, 4)
                .wait(56),
        );

        // cat_hand
        this.instance_3 = new lib.cat_hand_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-93.8, 153.3, 1, 1, 0, 0, 0, 35.3, 29);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(138)
                .to({ regY: 29.1, rotation: -8.2, y: 146 }, 5)
                .to({ regY: 29, rotation: 0, y: 153.3 }, 14)
                .wait(51),
        );

        // cat
        this.instance_4 = new lib.cat();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-221, 42.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208));

        // border
        this.instance_5 = new lib.border();
        this.instance_5.parent = this;
        this.instance_5.setTransform(175, -15.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208));

        // rt_mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p(
            "EgrCAqvMAAAhVdMBWFAAAMAAABVdgEAiUAJfQALACAUAFQAVAFAkgCIBbAAQAQAAAHgDQAPgGgBgMQAAgGgEgFQgEgEgGgCQgHgDgQAAIgQAAIAIgEQARgIAZgOIAHgFIAhgBQAVAAAFgJQAEgGgCgHQADgIABgNIADg8QAEgwAAgnIADhQQABgTAFgfIAIgyQADgbACgiQAIiggQh4IgEgYQACgHAAgMQAAgggBgPIgNhQIgGgZIgFgWIgIgtQgDgNgFgFQgFgGgHgBIgFgUIgjgeIgMADQgCgFgCgCQgJgJgWgBQgegEhIgSQhBgQgmgBQgbAAgKgCIgOgEQgJgDgGAAQgTAAgKAPQgHAJgBATIAAAEQgQAGgGAFIgNALIgNANQgHAJAEAKQAFALAKABIAGAAQgOAPgGAJIgQACQgYgEgdgSQgzgegPgFQgKgEgMgCIgFgDQgHgCgJABIgJACQgVgBgYAFQgTAEgdAJIgwAOQgXAGgMAIQgRAMgMAdIgBAFIgEAKQgEALgFAEQgEADgKAAIgpABQgYABgQAFIgVAFQgMAEgJgCQgHgBgKgFIgSgHQgJgDgJADQgKAEgCAHIgBAHQgPABgLADIgnAMIgiAGQgUAFggALQgtARgWAKQgNAHgEAFIgDADIusCsIACAAIgBAQQgSgtglglQhJhKhnABQhogBhKBKQhJBJAABnQAABoBJBJQBKBJBoAAQBnAABJhJQAYgYAQgbIgBATIIpBZIAEAFQAGAFAUACQAQABALAGIAOAGIAOAGIAUACQAnADA0ATQARAFAIAAQAQABAHgLQADgFgBgFICiAaIAAAFQACAMAKANQALAMAHAHQALAIAQAIIAdANIAjAQQAOAEAiAEQAyAHAnALQAUAHAKgFQAHgDADgJIAAgHQArALAVADIArAHQAXAFAPAJQABANANAEQAIADAPAAQADARASAHQAJAEAWABQgDAMAMAIQAGAEAPAEIBWAPQAvAHAnABQAcAAAdgDQAWgCAEgNQADgNAFADQgBAHAEAHQAFAFAGACQgHAEAAALQABAKAHAGQAKAIAYABQAZAAAKAIQAAALAMAFQAIADAOAAIA2gBQAcAAAKACgEAjrAJBIAGgBIABABgEAghgHQIABAAIgCABIABgBgEAh2gH/QgNAAgHgFQAgACANACIACABIgbAAg",
        );
        mask.setTransform(206.5, 64);

        // rt_mask
        this.instance_6 = new lib.rt_mask_1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(206.5, 64, 1, 1, 0, 0, 0, 275.5, 273.5);

        var maskedShapeInstanceList = [this.instance_6];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(
            cjs.Tween.get(this.instance_6)
                .wait(138)
                .to({ rotation: 360 }, 69)
                .wait(1),
        );

        // rt5_bly
        this.instance_7 = new lib.rt5_bly_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(206.5, 65, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.instance_7._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_7)
                .wait(138)
                .to({ _off: false }, 0)
                .to({ rotation: 1800, y: 64 }, 68)
                .wait(2),
        );

        // rt4_bly
        this.instance_8 = new lib.rt4_bly_1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(206.5, 65, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.instance_8._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_8)
                .wait(138)
                .to({ _off: false }, 0)
                .to({ rotation: 1440, y: 64 }, 68)
                .wait(2),
        );

        // rt3_bly
        this.instance_9 = new lib.rt3_bly_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(206.5, 65, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.instance_9._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_9)
                .wait(138)
                .to({ _off: false }, 0)
                .to({ rotation: 1080, y: 64 }, 68)
                .wait(2),
        );

        // rt2_bly
        this.instance_10 = new lib.rt2_bly_1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(207, 65.5);
        this.instance_10._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_10)
                .wait(138)
                .to({ _off: false }, 0)
                .to({ rotation: 720, y: 64.5 }, 68)
                .wait(2),
        );

        // rt1_bly
        this.instance_11 = new lib.rt1_bly_1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(206.5, 65, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.instance_11._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_11)
                .wait(138)
                .to({ _off: false }, 0)
                .to({ rotation: 360, y: 64 }, 68)
                .wait(2),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-221, -209.5, 842, 549);

    (lib.場景_1_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ac
        this.topMainMc = new lib.ac();
        this.topMainMc.name = "topMainMc";
        this.topMainMc.parent = this;
        this.topMainMc.setTransform(823.5, 415.5, 1, 1, 0, 0, 0, 200, 65);

        this.timeline.addTween(cjs.Tween.get(this.topMainMc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_ac, null, null);

    (lib.clock_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_138 = function() {
            var event = new createjs.Event("SHOW_OPEN_NUMBER");
            this.dispatchEvent(event);

            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(138)
                .call(this.frame_138)
                .wait(1),
        );

        // clock
        this.clock = new lib.clock();
        this.clock.name = "clock";
        this.clock.parent = this;
        this.clock.setTransform(209, -674, 1, 1, 0, 0, 0, 0, -142.5);
        this.clock.alpha = 0;

        this.timeline.addTween(
            cjs.Tween.get(this.clock)
                .to({ x: 207, y: -57.5, alpha: 1 }, 10)
                .wait(119)
                .to({ x: 209, y: -674, alpha: 0 }, 9)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(51, -991.5, 320, 667);

    (lib.場景_1_clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // clock
        this.clockMc = new lib.clock_ac();
        this.clockMc.name = "clockMc";
        this.clockMc.parent = this;
        this.clockMc.setTransform(825, -346.9, 1, 1, 0, 0, 0, 209, -674);

        this.timeline.addTween(cjs.Tween.get(this.clockMc).wait(1));
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
            this.clockMc = this.clock.clockMc;
            this.topMainMc = this.ac.topMainMc;
            this.cycle_0 = this.rt5.cycle_0;
            this.cycle_1 = this.rt4.cycle_1;
            this.cycle_2 = this.rt3.cycle_2;
            this.cycle_3 = this.rt2.cycle_3;
            this.cycle_4 = this.rt1.cycle_4;
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
            this.clockMc.addEventListener("SHOW_OPEN_NUMBER", showOpenNum.bind(this));

            this.topMainMc.stop();
            this.clockMc.stop();
            this.clockMc.clock.stop();

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

            function stopSoundPlay() {
                createjs.Sound.stop();
            }

            function displayFinalNum() {
                setFinalNum("0", _d_0_num);
                setFinalNum("1", _d_1_num);
                setFinalNum("2", _d_2_num);
                setFinalNum("3", _d_3_num);
                setFinalNum("4", _d_4_num);

                _this.topMainMc.gotoAndStop(1);
                _this.clockMc.gotoAndStop(1);
                _this.clockMc.clock.gotoAndStop(1);

                stopSoundPlay();
            }

            function setFinalNum(p, v) {
                var pos = v;

                _this["cycle_" + p].gotoAndStop(pos);
            }

            function runLoop(e) {
                _this.clockMc.visible = false;
                _this.clockMc.gotoAndStop(1);
                _this.clockMc.clock.gotoAndStop(1);

                _this.topMainMc.visible = true;
                _this.topMainMc.gotoAndPlay("loopFlag");
            }

            function showMainSlotMc(e) {
                setOpenNumData(e);

                _this.clockMc.visible = true;
                _this.clockMc.gotoAndPlay(1);
                _this.clockMc.clock.gotoAndPlay(1);

                _this.topMainMc.visible = true;
                _this.topMainMc.gotoAndPlay("loopFlag");
            }

            function showOpenNum(e) {
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
        this.clock.setTransform(825, -346.9, 1, 1, 0, 0, 0, 825, -346.9);
        this.clock.depth = 0;
        this.clock.isAttachedToCamera = 0;
        this.clock.isAttachedToMask = 0;
        this.clock.layerDepth = 0;
        this.clock.layerIndex = 0;
        this.clock.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

        // ac_obj_
        this.ac = new lib.場景_1_ac();
        this.ac.name = "ac";
        this.ac.parent = this;
        this.ac.setTransform(823.5, 415.5, 1, 1, 0, 0, 0, 823.5, 415.5);
        this.ac.depth = 0;
        this.ac.isAttachedToCamera = 0;
        this.ac.isAttachedToMask = 0;
        this.ac.layerDepth = 0;
        this.ac.layerIndex = 1;
        this.ac.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.ac).wait(1));

        // rt5_obj_
        this.rt5 = new lib.場景_1_rt5();
        this.rt5.name = "rt5";
        this.rt5.parent = this;
        this.rt5.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, 829.5, 415.5);
        this.rt5.depth = 0;
        this.rt5.isAttachedToCamera = 0;
        this.rt5.isAttachedToMask = 0;
        this.rt5.layerDepth = 0;
        this.rt5.layerIndex = 2;
        this.rt5.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.rt5).wait(1));

        // rt4_obj_
        this.rt4 = new lib.場景_1_rt4();
        this.rt4.name = "rt4";
        this.rt4.parent = this;
        this.rt4.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, 829.5, 415.5);
        this.rt4.depth = 0;
        this.rt4.isAttachedToCamera = 0;
        this.rt4.isAttachedToMask = 0;
        this.rt4.layerDepth = 0;
        this.rt4.layerIndex = 3;
        this.rt4.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.rt4).wait(1));

        // rt3_obj_
        this.rt3 = new lib.場景_1_rt3();
        this.rt3.name = "rt3";
        this.rt3.parent = this;
        this.rt3.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, 829.5, 415.5);
        this.rt3.depth = 0;
        this.rt3.isAttachedToCamera = 0;
        this.rt3.isAttachedToMask = 0;
        this.rt3.layerDepth = 0;
        this.rt3.layerIndex = 4;
        this.rt3.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.rt3).wait(1));

        // rt2_obj_
        this.rt2 = new lib.場景_1_rt2();
        this.rt2.name = "rt2";
        this.rt2.parent = this;
        this.rt2.setTransform(830, 416, 1, 1, 0, 0, 0, 830, 416);
        this.rt2.depth = 0;
        this.rt2.isAttachedToCamera = 0;
        this.rt2.isAttachedToMask = 0;
        this.rt2.layerDepth = 0;
        this.rt2.layerIndex = 5;
        this.rt2.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.rt2).wait(1));

        // rt1_obj_
        this.rt1 = new lib.場景_1_rt1();
        this.rt1.name = "rt1";
        this.rt1.parent = this;
        this.rt1.setTransform(829.5, 415.5, 1, 1, 0, 0, 0, 829.5, 415.5);
        this.rt1.depth = 0;
        this.rt1.isAttachedToCamera = 0;
        this.rt1.isAttachedToMask = 0;
        this.rt1.layerDepth = 0;
        this.rt1.layerIndex = 6;
        this.rt1.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.rt1).wait(1));

        // bg_obj_
        this.bg = new lib.場景_1_bg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(622, 352.5, 1, 1, 0, 0, 0, 622, 352.5);
        this.bg.depth = 0;
        this.bg.isAttachedToCamera = 0;
        this.bg.isAttachedToMask = 0;
        this.bg.layerDepth = 0;
        this.bg.layerIndex = 7;
        this.bg.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(622, -313, 1243.5, 1368.5);
    // library properties:
    lib.properties = {
        id: "87D6A28E49CB4340BEC18A9D15E61D3C",
        width: 1242,
        height: 703,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [
            {
                src: tranURL("images/japan_rotary_table_FOR_RD_atlas_.png?1550051760240"),
                id: "japan_rotary_table_FOR_RD_atlas_",
            },
            { src: tranURL("sounds/coin01.mp3?1550051760360"), id: "coin01" },
            { src: tranURL("sounds/coin05.mp3?1550051760360"), id: "coin05" },
            { src: tranURL("sounds/sound.mp3?1550051760360"), id: "sound" },
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
    an.compositions["87D6A28E49CB4340BEC18A9D15E61D3C"] = {
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
