import { getLink } from "@core/libraries/getLink";

var base = "marksix_n1/as5fhk6n1/animation/";
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
            name: "slot_machine_forRD_atlas_",
            frames: [
                [419, 490, 48, 80],
                [419, 572, 48, 80],
                [419, 654, 48, 80],
                [419, 736, 48, 80],
                [381, 818, 48, 80],
                [381, 900, 48, 80],
                [338, 1120, 48, 80],
                [388, 1120, 48, 80],
                [431, 818, 48, 80],
                [469, 490, 48, 80],
                [1244, 0, 110, 1200],
                [0, 0, 1242, 488],
                [254, 1036, 82, 82],
                [0, 782, 125, 125],
                [0, 490, 290, 290],
                [0, 909, 125, 125],
                [0, 1036, 125, 125],
                [0, 1163, 125, 125],
                [254, 1120, 82, 82],
                [127, 782, 125, 125],
                [127, 909, 125, 125],
                [127, 1036, 125, 125],
                [127, 1163, 125, 125],
                [254, 782, 125, 125],
                [338, 1036, 82, 82],
                [292, 490, 125, 125],
                [292, 617, 125, 125],
                [254, 909, 125, 125],
            ],
        },
    ];

    // symbols:

    (lib._0 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib._1 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib._2 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib._3 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib._4 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib._5 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();

    (lib._6 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();

    (lib._7 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();

    (lib._8 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();

    (lib._9 = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();

    (lib.ac = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();

    (lib.bg = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();

    (lib.blue = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();

    (lib.chicken = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib.clock_bg = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib.cow = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib.dog = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();

    (lib.dragon = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();

    (lib.green = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();

    (lib.horse = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();

    (lib.monkey = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();

    (lib.mouse = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();

    (lib.pig = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();

    (lib.rabbit = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();

    (lib.red = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();

    (lib.sheep = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();

    (lib.snake = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();

    (lib.tiger = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(27);
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

    (lib.units = function(mode, startPosition, loop) {
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

        // pic
        this.instance = new lib._0();
        this.instance.parent = this;
        this.instance.setTransform(-24, -40);

        this.instance_1 = new lib._1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-24, -40);

        this.instance_2 = new lib._2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-24, -40);

        this.instance_3 = new lib._3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-24, -40);

        this.instance_4 = new lib._4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-24, -40);

        this.instance_5 = new lib._5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-24, -40);

        this.instance_6 = new lib._6();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-24, -40);

        this.instance_7 = new lib._7();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-24, -40);

        this.instance_8 = new lib._8();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-24, -40);

        this.instance_9 = new lib._9();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-24, -40);

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
    p.nominalBounds = new cjs.Rectangle(-24, -40, 48, 80);

    (lib.tens = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4 });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(5),
        );

        // pic
        this.instance = new lib._0();
        this.instance.parent = this;
        this.instance.setTransform(-24, -40);

        this.instance_1 = new lib._1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-24, -40);

        this.instance_2 = new lib._2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-24, -40);

        this.instance_3 = new lib._3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-24, -40);

        this.instance_4 = new lib._4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-24, -40);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.instance }] })
                .to({ state: [{ t: this.instance_1 }] }, 1)
                .to({ state: [{ t: this.instance_2 }] }, 1)
                .to({ state: [{ t: this.instance_3 }] }, 1)
                .to({ state: [{ t: this.instance_4 }] }, 1)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24, -40, 48, 80);

    (lib.halo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .rf(["#FEE2AA", "rgba(254,226,170,0)"], [0.773, 1], 0, 0, 0, 0, 0, 237.9)
            .s()
            .p("A6BaBQqxqxAAvQQAAvPKxqyQKyqxPPAAQPQAAKxKxQKyKyAAPPQAAPQqyKxQqxKyvQAAQvPAAqyqyg");
        this.shape.setTransform(235.5, 235.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.halo, new cjs.Rectangle(0, 0, 471, 471), null);

    (lib.color = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { red: 0, green: 1, blue: 2 });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(3),
        );

        // pic
        this.instance = new lib.red();
        this.instance.parent = this;
        this.instance.setTransform(-41, -41);

        this.instance_1 = new lib.green();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-41, -41);

        this.instance_2 = new lib.blue();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-41, -41);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.instance }] })
                .to({ state: [{ t: this.instance_1 }] }, 1)
                .to({ state: [{ t: this.instance_2 }] }, 1)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41, -41, 82, 82);

    (lib.clock_bg_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.clock_bg();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.clock_bg_1, new cjs.Rectangle(0, 0, 290, 290), null);

    (lib.chinese_zodiac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.pig();
        this.instance.parent = this;
        this.instance.setTransform(-179.3, -180.5, 1, 1, -30);

        this.instance_1 = new lib.dog();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-250.9, -73.6, 1, 1, -60);

        this.instance_2 = new lib.chicken();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-242, 62, 1, 1, -90);

        this.instance_3 = new lib.monkey();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-175.9, 177.9, 1, 1, -120);

        this.instance_4 = new lib.sheep();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-67.6, 238, 1, 1, -150);

        this.instance_5 = new lib.horse();
        this.instance_5.parent = this;
        this.instance_5.setTransform(62, 242, 1, 1, 180);

        this.instance_6 = new lib.snake();
        this.instance_6.parent = this;
        this.instance_6.setTransform(171.3, 175.5, 1, 1, 150);

        this.instance_7 = new lib.dragon();
        this.instance_7.parent = this;
        this.instance_7.setTransform(230.3, 60.1, 1, 1, 120);

        this.instance_8 = new lib.rabbit();
        this.instance_8.parent = this;
        this.instance_8.setTransform(241, -63, 1, 1, 90);

        this.instance_9 = new lib.tiger();
        this.instance_9.parent = this;
        this.instance_9.setTransform(180.1, -176, 1, 1, 60);

        this.instance_10 = new lib.cow();
        this.instance_10.parent = this;
        this.instance_10.setTransform(66.6, -242.8, 1, 1, 30);

        this.instance_11 = new lib.mouse();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-63, -243);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.instance_11 },
                        { t: this.instance_10 },
                        { t: this.instance_9 },
                        { t: this.instance_8 },
                        { t: this.instance_7 },
                        { t: this.instance_6 },
                        { t: this.instance_5 },
                        { t: this.instance_4 },
                        { t: this.instance_3 },
                        { t: this.instance_2 },
                        { t: this.instance_1 },
                        { t: this.instance },
                    ],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.chinese_zodiac, new cjs.Rectangle(-250.9, -243, 493.5, 485), null);

    (lib.blurry = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.ac();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.blurry, new cjs.Rectangle(0, 0, 110, 1200), null);

    (lib.animal = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(12),
        );

        // pic
        this.instance = new lib.mouse();
        this.instance.parent = this;
        this.instance.setTransform(-63, -63);

        this.instance_1 = new lib.cow();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-63, -63);

        this.instance_2 = new lib.tiger();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-63, -63);

        this.instance_3 = new lib.rabbit();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-63, -63);

        this.instance_4 = new lib.dragon();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-63, -63);

        this.instance_5 = new lib.snake();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-63, -63);

        this.instance_6 = new lib.horse();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-63, -63);

        this.instance_7 = new lib.sheep();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-63, -63);

        this.instance_8 = new lib.monkey();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-63, -63);

        this.instance_9 = new lib.chicken();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-63, -63);

        this.instance_10 = new lib.dog();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-63, -63);

        this.instance_11 = new lib.pig();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-63, -63);

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
                .to({ state: [{ t: this.instance_10 }] }, 1)
                .to({ state: [{ t: this.instance_11 }] }, 1)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63, -63, 125, 125);

    (lib.Symbol1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.cmc = new lib.color();
        this.cmc.name = "cmc";
        this.cmc.parent = this;
        this.cmc.setTransform(62.5, 222.5);

        this.zmc = new lib.animal();
        this.zmc.name = "zmc";
        this.zmc.parent = this;
        this.zmc.setTransform(63, 132.5);

        this.num_1 = new lib.units();
        this.num_1.name = "num_1";
        this.num_1.parent = this;
        this.num_1.setTransform(87.7, 40.1);

        this.num_0 = new lib.tens();
        this.num_0.name = "num_0";
        this.num_0.parent = this;
        this.num_0.setTransform(43.4, 40);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.num_0 }, { t: this.num_1 }, { t: this.zmc }, { t: this.cmc }] })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0, 0, 125, 263.5), null);

    (lib.clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_1 = function() {
            // playSound("coin01");
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
        this.frame_119 = function() {
            this.stop();

            var event = new createjs.Event("CLOCK_RUN_END");
            this.dispatchEvent(event);
            playSound("coin07");
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
                .wait(23)
                .call(this.frame_119)
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
                .wait(90)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(24),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .wait(90)
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
                .wait(66)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(48),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(66)
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
                .wait(42)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, alpha: 1 }, 6)
                .wait(72),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_5)
                .wait(42)
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
                .wait(18)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(96),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_7)
                .wait(18)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(72),
        );

        // num5
        this.instance_8 = new lib.補間動畫2("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-3, 0);
        this.instance_8._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_8)
                .wait(1)
                .to({ _off: false }, 0)
                .to({ startPosition: 0 }, 17)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .wait(96),
        );

        // clock_bg
        this.instance_9 = new lib.clock_bg_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, 1, 1, 0, 0, 0, 145, 145);
        this.instance_9._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_9)
                .wait(1)
                .to({ _off: false }, 0)
                .to({ x: 0.1, y: 0.1 }, 17)
                .to({ rotation: 90, x: -4, y: 2.1 }, 6)
                .to({ y: 2 }, 18)
                .to({ rotation: 180, x: -7, y: -1 }, 6)
                .wait(18)
                .to({ rotation: 270, x: -3, y: -3 }, 6)
                .wait(18)
                .to({ rotation: 360, x: 0, y: 0 }, 6)
                .wait(17)
                .to({ alpha: 0 }, 6)
                .wait(1),
        );

        // chinese_zodiac
        this.instance_10 = new lib.chinese_zodiac();
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.instance_10._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_10)
                .wait(1)
                .to({ _off: false }, 0)
                .to({ regY: -0.4 }, 17)
                .to({ regY: -0.5, rotation: -90, y: 0.1 }, 6)
                .to({ regX: -0.4, y: 0 }, 18)
                .to({ regX: -0.5, rotation: -180, x: 0.1, y: 0.1 }, 6)
                .to({ regX: -0.4, regY: -0.4, x: 0, y: 0 }, 18)
                .to({ regX: -0.5, rotation: -270 }, 6)
                .to({ regX: -0.4, x: 0.1 }, 18)
                .to({ rotation: -360, x: 0 }, 6)
                .wait(17)
                .to({ alpha: 0 }, 6)
                .wait(1),
        );

        // 圖層_3
        this.instance_11 = new lib.halo();
        this.instance_11.parent = this;
        this.instance_11.setTransform(0, 0.1, 1, 1, 0, 0, 0, 235.5, 235.5);
        this.instance_11._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_11)
                .wait(1)
                .to({ _off: false }, 0)
                .wait(112)
                .to({ alpha: 0 }, 6)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

    (lib.ac_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // blurry
        this.instance = new lib.blurry();
        this.instance.parent = this;
        this.instance.setTransform(0, -820.5, 1, 1, 0, 0, 0, 55, 600);

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .to({ y: -283.5 }, 4)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55, -1420.5, 110, 1200);

    (lib.場景_1_resultMc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // resultMc
        this.main_mc_6 = new lib.Symbol1();
        this.main_mc_6.name = "main_mc_6";
        this.main_mc_6.parent = this;
        this.main_mc_6.setTransform(1109.1, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_5 = new lib.Symbol1();
        this.main_mc_5.name = "main_mc_5";
        this.main_mc_5.parent = this;
        this.main_mc_5.setTransform(905.7, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_4 = new lib.Symbol1();
        this.main_mc_4.name = "main_mc_4";
        this.main_mc_4.parent = this;
        this.main_mc_4.setTransform(747, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_3 = new lib.Symbol1();
        this.main_mc_3.name = "main_mc_3";
        this.main_mc_3.parent = this;
        this.main_mc_3.setTransform(599.4, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_2 = new lib.Symbol1();
        this.main_mc_2.name = "main_mc_2";
        this.main_mc_2.parent = this;
        this.main_mc_2.setTransform(447.3, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_1 = new lib.Symbol1();
        this.main_mc_1.name = "main_mc_1";
        this.main_mc_1.parent = this;
        this.main_mc_1.setTransform(295.4, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.main_mc_0 = new lib.Symbol1();
        this.main_mc_0.name = "main_mc_0";
        this.main_mc_0.parent = this;
        this.main_mc_0.setTransform(140.9, 291.9, 1, 1, 0, 0, 0, 62.5, 131.8);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.main_mc_0 },
                        { t: this.main_mc_1 },
                        { t: this.main_mc_2 },
                        { t: this.main_mc_3 },
                        { t: this.main_mc_4 },
                        { t: this.main_mc_5 },
                        { t: this.main_mc_6 },
                    ],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_resultMc, null, null);

    (lib.場景_1_clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // clock
        this.clockMc = new lib.clock();
        this.clockMc.name = "clockMc";
        this.clockMc.parent = this;
        this.clockMc.setTransform(621, 244);

        this.timeline.addTween(cjs.Tween.get(this.clockMc).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_clock, null, null);

    (lib.場景_1_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ac
        this.run_mc_6 = new lib.ac_1();
        this.run_mc_6.name = "run_mc_6";
        this.run_mc_6.parent = this;
        this.run_mc_6.setTransform(1108.6, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_5 = new lib.ac_1();
        this.run_mc_5.name = "run_mc_5";
        this.run_mc_5.parent = this;
        this.run_mc_5.setTransform(910.2, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_4 = new lib.ac_1();
        this.run_mc_4.name = "run_mc_4";
        this.run_mc_4.parent = this;
        this.run_mc_4.setTransform(752.5, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_3 = new lib.ac_1();
        this.run_mc_3.name = "run_mc_3";
        this.run_mc_3.parent = this;
        this.run_mc_3.setTransform(597.4, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_2 = new lib.ac_1();
        this.run_mc_2.name = "run_mc_2";
        this.run_mc_2.parent = this;
        this.run_mc_2.setTransform(445.9, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_1 = new lib.ac_1();
        this.run_mc_1.name = "run_mc_1";
        this.run_mc_1.parent = this;
        this.run_mc_1.setTransform(298.9, 173, 1, 1, 0, 0, 0, 0, -599);

        this.run_mc_0 = new lib.ac_1();
        this.run_mc_0.name = "run_mc_0";
        this.run_mc_0.parent = this;
        this.run_mc_0.setTransform(142, 173, 1, 1, 0, 0, 0, 0, -599);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.run_mc_0 },
                        { t: this.run_mc_1 },
                        { t: this.run_mc_2 },
                        { t: this.run_mc_3 },
                        { t: this.run_mc_4 },
                        { t: this.run_mc_5 },
                        { t: this.run_mc_6 },
                    ],
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
            this.main_mc_0 = this.resultMc.main_mc_0;
            this.main_mc_1 = this.resultMc.main_mc_1;
            this.main_mc_2 = this.resultMc.main_mc_2;
            this.main_mc_3 = this.resultMc.main_mc_3;
            this.main_mc_4 = this.resultMc.main_mc_4;
            this.main_mc_5 = this.resultMc.main_mc_5;
            this.main_mc_6 = this.resultMc.main_mc_6;
            this.run_mc_0 = this.ac.run_mc_0;
            this.run_mc_1 = this.ac.run_mc_1;
            this.run_mc_2 = this.ac.run_mc_2;
            this.run_mc_3 = this.ac.run_mc_3;
            this.run_mc_4 = this.ac.run_mc_4;
            this.run_mc_5 = this.ac.run_mc_5;
            this.run_mc_6 = this.ac.run_mc_6;
            var _this = this;
            var _dataObj = {};
            this.clockMc.visible = false;
            this.clockMc.gotoAndStop(1);

            this.clockMc.addEventListener("CLOCK_RUN_END", endCountdown.bind(this));

            this.addEventListener("SHOW_COUNTDOWN", showCountdown.bind(this));
            this.addEventListener("SET_RESULT_VALUE", externalSetResultValue.bind(this));
            this.addEventListener("RUN_SLOT", runSlotMc.bind(this));

            hideRunMc();

            function showCountdown(e) {
                hideResultMc();
                showRunMc();

                _this.clockMc.visible = true;
                _this.clockMc.gotoAndPlay(1);
                _dataObj = e;
            }

            function endCountdown(e) {
                externalSetResultValue(_dataObj);
                hideRunMc();
                showResultMc();
            }

            function runSlotMc(e) {
                showRunMc();
                hideResultMc();
            }

            function hideRunMc() {
                _this.run_mc_0.visible = false;
                _this.run_mc_1.visible = false;
                _this.run_mc_2.visible = false;
                _this.run_mc_3.visible = false;
                _this.run_mc_4.visible = false;
                _this.run_mc_5.visible = false;
                _this.run_mc_6.visible = false;
            }

            function showRunMc() {
                _this.run_mc_0.visible = true;
                _this.run_mc_1.visible = true;
                _this.run_mc_2.visible = true;
                _this.run_mc_3.visible = true;
                _this.run_mc_4.visible = true;
                _this.run_mc_5.visible = true;
                _this.run_mc_6.visible = true;
            }

            function hideResultMc() {
                _this.main_mc_0.visible = false;
                _this.main_mc_1.visible = false;
                _this.main_mc_2.visible = false;
                _this.main_mc_3.visible = false;
                _this.main_mc_4.visible = false;
                _this.main_mc_5.visible = false;
                _this.main_mc_6.visible = false;
            }

            function showResultMc() {
                _this.main_mc_0.visible = true;
                _this.main_mc_1.visible = true;
                _this.main_mc_2.visible = true;
                _this.main_mc_3.visible = true;
                _this.main_mc_4.visible = true;
                _this.main_mc_5.visible = true;
                _this.main_mc_6.visible = true;
            }

            function externalSetResultValue(e) {
                hideRunMc();
                var k;

                for (k in e.d.n) {
                    setNumValue(_this["main_mc_" + k], e.d.n[k]);
                    _this["main_mc_" + k].zmc.gotoAndStop(e.d.z[k]);
                    _this["main_mc_" + k].cmc.gotoAndStop(e.d.c[k]);
                }

                showResultMc();

                var event = new createjs.Event("STOP_BG_MUSIC");

                _this.dispatchEvent(event);
            }

            function setNumValue(mc, num) {
                switch (true) {
                    case num <= 9:
                        mc.num_0.gotoAndStop(0);
                        break;
                    case num <= 19:
                        mc.num_0.gotoAndStop(1);
                        break;
                    case num <= 29:
                        mc.num_0.gotoAndStop(2);
                        break;
                    case num <= 39:
                        mc.num_0.gotoAndStop(3);
                        break;
                    case num <= 49:
                        mc.num_0.gotoAndStop(4);
                        break;
                }

                mc.num_1.gotoAndStop(num % 10);
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
        this.clock.setTransform(621, 244, 1, 1, 0, 0, 0, 621, 244);
        this.clock.depth = 0;
        this.clock.isAttachedToCamera = 0;
        this.clock.isAttachedToMask = 0;
        this.clock.layerDepth = 0;
        this.clock.layerIndex = 0;
        this.clock.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

        // resultMc_obj_
        this.resultMc = new lib.場景_1_resultMc();
        this.resultMc.name = "resultMc";
        this.resultMc.parent = this;
        this.resultMc.setTransform(625, 291.9, 1, 1, 0, 0, 0, 625, 291.9);
        this.resultMc.depth = 0;
        this.resultMc.isAttachedToCamera = 0;
        this.resultMc.isAttachedToMask = 0;
        this.resultMc.layerDepth = 0;
        this.resultMc.layerIndex = 1;
        this.resultMc.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.resultMc).wait(1));

        // mask_idn (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p(
            "A4tWaIgEAAInOgBIgGgBIgEgCIgBgBIgEgBIgEgCIgDgBIgBgCIgBAAIAAAAIgEgCIgDgCIgBgBIgCgCIgGAAIgGgBIgEgCIAAgBIgRAAIkcjlMgAKgmfIAIgEQADgLAPgMQAYgTAfgQQAUgKAegMQAWgKAMgEIAIgBIABgCIABgBIACgCIACgCIACgCIAEgBIAFgBIAFAAIAAgBIMeABIAEAAIAIAAQAPABAIAGIAOAKIARAIQAVAHAoAbIAYAQQAMAIAOAKIASAQQAMALAdAiQAGAIACAGIADACQAFAjAAAjQAHToADTpIgFADIgCAFQgEAFgKAFQgXAKgyAJIg2AJQgsAHgWACIgpACIgNAAIgFAAIgBACIgBACIgDACIgEABIgGABIhyABIgEAAIgGgBIAAABIgDABIgDACIgDACIgEAAIgDAAgEBCXATvQgMgggBghQgTqRgCqQQgBn8AFn7ICbkNIADgBIAAAAIACgCIACgCIACgCIAEgBIAGgBIAAAAIAkAAIABgBIACgCIABgCIADgCIADgBIAHgBIAAAAIA6AAIACgCIACgBIAEgCIAGgCIIrAAIAEAAIAAgBIAHABIAEACIAEACIACACIACABIC1AAIAGABIADABIADACIACACIABACIABABIA7AAIAAAAIAGAAIAGABIAEACIACACIADACIABABIAZABQAeA9AIBBQAbDUAADWQAAP3guP2QgEBXgnBXIAAAAQAAAGgFAEIgBABIgBAAQgHAFgPABIktAdQiJANhOADQhdAFhQgDIhZAHgEhHPAWRIkQAAIgHgBIgDgCIgDgCIgtAAIgRgFQgGgDgUgBIg7gCIgCAAIgBAAIAAgCIgBgBIAAgCIAAgCIAAgCIAAAAIgKAAIgHgBIAAAAIg2gCIgPgeIgDgDIgMgNIgBgDIgzgbQgIgCgIgDIgEgCIgtACIgHADQgOAOgLAQQgLAPgHARIhjgJQgwhYgZhdQgahgAEhmQACgzAFgzQAIhJgChLQgBgpgJgpQgFgWAAgWQgGttANtvQAChWAbhQQAMghAUgfIABgGQAEgHAIgGIACAAIAAgBIABgBIABgCIACgCIACgCIACgBIABgCIACgBIACgCIACgCIADgBIABgBIAEgCIAGAAIAAgBIAJAAIADgBIAGAAIAAgBIATAAIACAAIAEAAIBFAAIABgCIAEgBIADgBIAEAAIAAgBIAFABIL6AAIAHABIADACIADACIACACIABABIAoAAIAGABIAEACIAAAAIADgBIAGgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAGABAFAEQAFADACAFQBGB4A/B7QALAWABAbQAGHEgDHEQgEJ/gMJ+QgCBVgEBUIgEAFIAAADQgCAMgNAKIgXANIgcARQgOAJgTAIIgbANIgTAJIgCABIgEADIgEACIgIAEQgHAEgLAIQgNAHgVAFIgXAHQgJAEgLADQgYALgQAFIgBADIgBABIgBACIgBABIgCACIgDACIgDACIgGABIgEAAgAV+WGQh/gCiNgIIiBgIQhIgGgYgDQgcgFg3gLQgOgEgHgEIhhgGQgyhbgHhgQgyprACptQABouARotQAChIAWhFQAQgxAbgsICVgBIAAgCIADgBIAEgCIAGgBIAAAAIBPAAIACAAIABAAIACgCIACgCIAEgCIAGAAIAAgBIJbAAIAGABIAEACIADACIABACIABABIABABIAxAAIADgBIAFAAIAAgBIAGABIAEACIADACIADACIABACIABABIACACIABABIAAACIBCACQBNCLAHCPQA6SegNSkQgZAageARIgCAFQgDAHgPAHQgUAKghANIgpARIgcANIgaAPIgUAKQgoASgaAHQgRAEgMgDQgIAGgSAAgEg4DAV/QgTgBgHgEQgEgCgEgDIiXABIiBizMgAPgm+QAbgmAigdQArglAygeIgKgFIAUgBIABgBIAAgCIABgBIABgCIACgCIACgCIACgBIAEgCIAGAAIAAgBIFRAAIAGABIAEACIEwAAIAGABIAEACIABAAIAAAAIADADIADABIACACIABABIABACIABABIBtAAIAGACIADABIADACIABAAIAZABQARABAEABIAGACIAZACQANABAkAIIACgBQAFgBAPACQASADAGACQAGADARAMQATAOAFAKIABADIAGABQAcBFARBJQANA0AAA3QgFSugISwIg1BJQgEAMgYADQgrAGg1ADIhgAEQi+AFi8AAQiHAAiGgCgEAlUAV9IgGgCIgEgCIgCgBIgCgCIgBgBIgCgCIAAgBIgpgCIhtipMgAPgnCQAlg0AtgtQAbgcAjgTIAHAAIACgCIACgCIADgCIAEgBIAEAAIAAAAIAFAAIACAAIJhAAIAGABIADACIB5AAIARADQAWACAKADIAcAGIAUABIATAAIAbAIQAGAAAJAAIAOAAIAOAAIACAAIAOACIADADIAKAGIgBABIADAFIAHACQAaANAdApQAQAXAGARIAHAVIAJAPQAHAOACATQABAMgBAXIAAAEIABACQACAGAAAMIAAALQAGAbAAAeQAASlgkSmQgCAvgiAvIhBADIAAACIAAABIgBACIAAABIgBACIgBACIgBACIgBABIgCACIgDABIgDACIgGACIuNAAgAmnV1IgGgCIgEgCIgCgBIgCgCIgCgBIAAgBIiHAAIgGgCIgEgCIgCgBIgCgCIgCgBIAAgBIgDgBIgGgDIgGAAQgQgCgLgDQgMgDgMgGIgFgCQgFACgHAAQgSAAgRgFIgZgIIgZgHIgQgIIgPgJIgcgMQgIgDgUgPQgJgHgCgEIgOgFQgHpnABpmQABnyAKnyQADh8Aeh2QAdhxA6hrIApAAIAAgBIACgCIABgCIACgCIACgBIAEgCIAGAAIAAgBIHzAAIAGABIAEACIADABIABACIABABIBSAAIAGACIAEABIACACIACABIBrAAIAGABIADACIADACIACACIABABIABACIABABIABABIAfAAIAGACIADABIABAAIAAAAQAGgCAGACQAHACADAGIACACIANAEQAWAGAnAUQAfARAMAKIAOAOIAOAOQAIAGAXAMQAUAKAJAJIALANIALANIAJAGQAHAFABAGIARALQgDRtgSRsQgBBogdBmQgQA5gcA4Ig9ACIgBABIgCACIgDABIgDACIgGACIg6AAIgBAAIgBABIgBABIgBACIgDABIgEACIgGACIonAAg",
        );
        mask.setTransform(626.2, 293.9);

        // ac_obj_
        this.ac = new lib.場景_1_ac();
        this.ac.name = "ac";
        this.ac.parent = this;
        this.ac.setTransform(625.3, -48.5, 1, 1, 0, 0, 0, 625.3, -48.5);
        this.ac.depth = 0;
        this.ac.isAttachedToCamera = 0;
        this.ac.isAttachedToMask = 0;
        this.ac.layerDepth = 0;
        this.ac.layerIndex = 2;
        this.ac.maskLayerName = 0;

        var maskedShapeInstanceList = [this.ac];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.ac).wait(1));

        // bg_obj_
        this.bg = new lib.場景_1_bg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(621, 244, 1, 1, 0, 0, 0, 621, 244);
        this.bg.depth = 0;
        this.bg.isAttachedToCamera = 0;
        this.bg.isAttachedToMask = 0;
        this.bg.layerDepth = 0;
        this.bg.layerIndex = 3;
        this.bg.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(621, 244, 1242, 488);
    // library properties:
    lib.properties = {
        id: "DDEFDC54822C9F47888DDE01C32488E0",
        width: 1242,
        height: 488,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [
            { src: tranURL("images/slot_machine_forRD_atlas_.png?1548319615483"), id: "slot_machine_forRD_atlas_" },
            { src: tranURL("sounds/coin01.mp3?1548319615574"), id: "coin01" },
            { src: tranURL("sounds/coin07.mp3?1548319615574"), id: "coin07" },
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
    an.compositions["DDEFDC54822C9F47888DDE01C32488E0"] = {
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
