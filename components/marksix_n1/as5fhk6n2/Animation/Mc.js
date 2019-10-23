import { getLink } from "@core/libraries/getLink";

var base = "marksix_n1/as5fhk6n2/animation/";
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
                [127, 1133, 45, 94],
                [221, 1167, 45, 94],
                [268, 1167, 45, 94],
                [315, 1167, 45, 94],
                [362, 1167, 45, 94],
                [409, 1167, 45, 94],
                [174, 1167, 45, 94],
                [0, 1260, 45, 94],
                [47, 1260, 45, 94],
                [94, 1260, 45, 94],
                [1244, 0, 110, 1200],
                [0, 0, 1242, 530],
                [889, 1040, 125, 125],
                [0, 1133, 125, 125],
                [0, 1006, 125, 125],
                [0, 532, 784, 472],
                [127, 1006, 125, 125],
                [254, 1006, 125, 125],
                [381, 1006, 125, 125],
                [508, 1006, 125, 125],
                [635, 1006, 125, 125],
                [762, 1006, 125, 125],
                [786, 532, 125, 125],
                [786, 659, 125, 125],
                [786, 786, 125, 125],
                [889, 913, 125, 125],
                [913, 532, 125, 125],
                [913, 659, 125, 125],
                [913, 786, 125, 125],
                [1016, 913, 14, 410],
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

    (lib.border = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();

    (lib.chicken = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();

    (lib.clock = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();

    (lib.cow = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();

    (lib.dog = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();

    (lib.dragon = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();

    (lib.green = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();

    (lib.horse = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();

    (lib.monkey = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();

    (lib.mouse = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();

    (lib.pig = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();

    (lib.rabbit = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();

    (lib.red = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();

    (lib.sheep = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();

    (lib.snake = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();

    (lib.tiger = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();

    (lib.tvborder = function() {
        this.spriteSheet = ss["slot_machine_forRD_atlas_"];
        this.gotoAndStop(29);
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
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAAdKxIAAi0IC1AAIAAC0gAjRKxIAAi0IC0AAIAAC0gAAdHDIAAi1IC1AAIAAC1gAjRHDIAAi1IC0AAIAAC1gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAAdkNIAAi0IC1AAIAAC0gAjRkNIAAi0IC0AAIAAC0gAAdn9IAAi1IC1AAIAAC1gAjRn9IAAi1IC0AAIAAC1gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAAdKxIAAi0IC1AAIAAC0gAjRKxIAAi0IC0AAIAAC0gAAdHDIAAi1IC1AAIAAC1gAjRHDIAAi1IC0AAIAAC1gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAAdkNIAAi0IC1AAIAAC0gAjRkNIAAi0IC0AAIAAC0gAAdn9IAAi1IC1AAIAAC1gAjRn9IAAi1IC0AAIAAC1gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAnBKxIAAi0IC1AAIAAC0gAqxKxIAAi0IC0AAIAAC0gAnBHDIAAi1IC1AAIAAC1gAqxHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAnBKxIAAi0IC1AAIAAC0gAqxKxIAAi0IC0AAIAAC0gAnBHDIAAi1IC1AAIAAC1gAqxHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);

    (lib.補間動畫4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);

    (lib.補間動畫3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_2
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);

    (lib.補間動畫2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_2
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g",
            );

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);

    (lib.場景_1_tvborder = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // tvborder
        this.instance = new lib.tvborder();
        this.instance.parent = this;
        this.instance.setTransform(989, 48);

        this.instance_1 = new lib.tvborder();
        this.instance_1.parent = this;
        this.instance_1.setTransform(833, 48);

        this.instance_2 = new lib.tvborder();
        this.instance_2.parent = this;
        this.instance_2.setTransform(679, 48);

        this.instance_3 = new lib.tvborder();
        this.instance_3.parent = this;
        this.instance_3.setTransform(527, 48);

        this.instance_4 = new lib.tvborder();
        this.instance_4.parent = this;
        this.instance_4.setTransform(376, 48);

        this.instance_5 = new lib.tvborder();
        this.instance_5.parent = this;
        this.instance_5.setTransform(225, 48);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_tvborder, null, null);

    (lib.場景_1_border = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // border
        this.instance = new lib.border();
        this.instance.parent = this;
        this.instance.setTransform(1018, 57);

        this.instance_1 = new lib.border();
        this.instance_1.parent = this;
        this.instance_1.setTransform(855, 57);

        this.instance_2 = new lib.border();
        this.instance_2.parent = this;
        this.instance_2.setTransform(700, 57);

        this.instance_3 = new lib.border();
        this.instance_3.parent = this;
        this.instance_3.setTransform(548, 57);

        this.instance_4 = new lib.border();
        this.instance_4.parent = this;
        this.instance_4.setTransform(396, 57);

        this.instance_5 = new lib.border();
        this.instance_5.parent = this;
        this.instance_5.setTransform(245, 57);

        this.instance_6 = new lib.border();
        this.instance_6.parent = this;
        this.instance_6.setTransform(95, 57);

        this.instance_7 = new lib.border();
        this.instance_7.parent = this;
        this.instance_7.setTransform(1018, 188);

        this.instance_8 = new lib.border();
        this.instance_8.parent = this;
        this.instance_8.setTransform(855, 188);

        this.instance_9 = new lib.border();
        this.instance_9.parent = this;
        this.instance_9.setTransform(700, 188);

        this.instance_10 = new lib.border();
        this.instance_10.parent = this;
        this.instance_10.setTransform(548, 188);

        this.instance_11 = new lib.border();
        this.instance_11.parent = this;
        this.instance_11.setTransform(396, 188);

        this.instance_12 = new lib.border();
        this.instance_12.parent = this;
        this.instance_12.setTransform(245, 188);

        this.instance_13 = new lib.border();
        this.instance_13.parent = this;
        this.instance_13.setTransform(95, 188);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.instance_13 },
                        { t: this.instance_12 },
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
    }).prototype = getMCSymbolPrototype(lib.場景_1_border, null, null);

    (lib.場景_1_bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // bg
        this.instance = new lib.bg();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.場景_1_bg, null, null);

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
    p.nominalBounds = new cjs.Rectangle(-24, -40, 45, 94);

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
    p.nominalBounds = new cjs.Rectangle(-24, -40, 45, 94);

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
    p.nominalBounds = new cjs.Rectangle(-41, -41, 125, 125);

    (lib.blurry = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層_1
        this.instance = new lib.ac();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.blurry, new cjs.Rectangle(0, 0, 110, 1200), null);

    (lib.animal = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            mouse: 0,
            cow: 1,
            tiger: 2,
            rabbit: 3,
            dragon: 4,
            snake: 5,
            horse: 6,
            sheep: 7,
            monkey: 8,
            chicken: 9,
            dog: 10,
            pig: 11,
        });

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

    (lib.場景_1_num = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // num
        this.num_6_1 = new lib.units();
        this.num_6_1.name = "num_6_1";
        this.num_6_1.parent = this;
        this.num_6_1.setTransform(1107.6, 111.1);

        this.num_6_0 = new lib.tens();
        this.num_6_0.name = "num_6_0";
        this.num_6_0.parent = this;
        this.num_6_0.setTransform(1055.6, 111.1);

        this.num_5_1 = new lib.units();
        this.num_5_1.name = "num_5_1";
        this.num_5_1.parent = this;
        this.num_5_1.setTransform(944.6, 111.1);

        this.num_5_0 = new lib.tens();
        this.num_5_0.name = "num_5_0";
        this.num_5_0.parent = this;
        this.num_5_0.setTransform(892.6, 111.1);

        this.num_4_1 = new lib.units();
        this.num_4_1.name = "num_4_1";
        this.num_4_1.parent = this;
        this.num_4_1.setTransform(789.6, 111.1);

        this.num_4_0 = new lib.tens();
        this.num_4_0.name = "num_4_0";
        this.num_4_0.parent = this;
        this.num_4_0.setTransform(737.6, 111.1);

        this.num_3_1 = new lib.units();
        this.num_3_1.name = "num_3_1";
        this.num_3_1.parent = this;
        this.num_3_1.setTransform(637.6, 111.1);

        this.num_3_0 = new lib.tens();
        this.num_3_0.name = "num_3_0";
        this.num_3_0.parent = this;
        this.num_3_0.setTransform(585.6, 111.1);

        this.num_2_1 = new lib.units();
        this.num_2_1.name = "num_2_1";
        this.num_2_1.parent = this;
        this.num_2_1.setTransform(485.6, 111.1);

        this.num_2_0 = new lib.tens();
        this.num_2_0.name = "num_2_0";
        this.num_2_0.parent = this;
        this.num_2_0.setTransform(433.6, 111.1);

        this.num_1_1 = new lib.units();
        this.num_1_1.name = "num_1_1";
        this.num_1_1.parent = this;
        this.num_1_1.setTransform(335.1, 111.1);

        this.num_1_0 = new lib.tens();
        this.num_1_0.name = "num_1_0";
        this.num_1_0.parent = this;
        this.num_1_0.setTransform(283.1, 111.1);

        this.num_0_1 = new lib.units();
        this.num_0_1.name = "num_0_1";
        this.num_0_1.parent = this;
        this.num_0_1.setTransform(185.6, 111.1);

        this.num_0_0 = new lib.tens();
        this.num_0_0.name = "num_0_0";
        this.num_0_0.parent = this;
        this.num_0_0.setTransform(133.6, 111.1);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.num_0_0 },
                        { t: this.num_0_1 },
                        { t: this.num_1_0 },
                        { t: this.num_1_1 },
                        { t: this.num_2_0 },
                        { t: this.num_2_1 },
                        { t: this.num_3_0 },
                        { t: this.num_3_1 },
                        { t: this.num_4_0 },
                        { t: this.num_4_1 },
                        { t: this.num_5_0 },
                        { t: this.num_5_1 },
                        { t: this.num_6_0 },
                        { t: this.num_6_1 },
                    ],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_num, null, null);

    (lib.場景_1_color = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // color
        this.color_6 = new lib.color();
        this.color_6.name = "color_6";
        this.color_6.parent = this;
        this.color_6.setTransform(1058.5, 361.6);

        this.color_5 = new lib.color();
        this.color_5.name = "color_5";
        this.color_5.parent = this;
        this.color_5.setTransform(895.5, 361.6);

        this.color_4 = new lib.color();
        this.color_4.name = "color_4";
        this.color_4.parent = this;
        this.color_4.setTransform(740.6, 361.6);

        this.color_3 = new lib.color();
        this.color_3.name = "color_3";
        this.color_3.parent = this;
        this.color_3.setTransform(588.5, 361.6);

        this.color_2 = new lib.color();
        this.color_2.name = "color_2";
        this.color_2.parent = this;
        this.color_2.setTransform(436.6, 361.6);

        this.color_1 = new lib.color();
        this.color_1.name = "color_1";
        this.color_1.parent = this;
        this.color_1.setTransform(286.1, 361.6);

        this.color_0 = new lib.color();
        this.color_0.name = "color_0";
        this.color_0.parent = this;
        this.color_0.setTransform(136.1, 361.6);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.color_0 }, { t: this.color_1 }, { t: this.color_2 }, { t: this.color_3 }, { t: this.color_4 }, { t: this.color_5 }, { t: this.color_6 }],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_color, null, null);

    (lib.場景_1_animal = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animal
        this.animal_6 = new lib.animal();
        this.animal_6.name = "animal_6";
        this.animal_6.parent = this;
        this.animal_6.setTransform(1080.5, 250.6);

        this.animal_5 = new lib.animal();
        this.animal_5.name = "animal_5";
        this.animal_5.parent = this;
        this.animal_5.setTransform(917.5, 250.6);

        this.animal_4 = new lib.animal();
        this.animal_4.name = "animal_4";
        this.animal_4.parent = this;
        this.animal_4.setTransform(762.6, 250.6);

        this.animal_3 = new lib.animal();
        this.animal_3.name = "animal_3";
        this.animal_3.parent = this;
        this.animal_3.setTransform(610.5, 250.6);

        this.animal_2 = new lib.animal();
        this.animal_2.name = "animal_2";
        this.animal_2.parent = this;
        this.animal_2.setTransform(458.6, 250.6);

        this.animal_1 = new lib.animal();
        this.animal_1.name = "animal_1";
        this.animal_1.parent = this;
        this.animal_1.setTransform(308.1, 250.6);

        this.animal_0 = new lib.animal();
        this.animal_0.name = "animal_0";
        this.animal_0.parent = this;
        this.animal_0.setTransform(158.1, 250.6);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.animal_0 },
                        { t: this.animal_1 },
                        { t: this.animal_2 },
                        { t: this.animal_3 },
                        { t: this.animal_4 },
                        { t: this.animal_5 },
                        { t: this.animal_6 },
                    ],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_animal, null, null);

    (lib.clock_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_5 = function() {
            playSound("c1");
        };
        this.frame_29 = function() {
            playSound("c1");
        };
        this.frame_53 = function() {
            playSound("c1");
        };
        this.frame_77 = function() {
            playSound("c1");
        };
        this.frame_101 = function() {
            playSound("c1");
        };
        this.frame_124 = function() {
            var event = new createjs.Event("COUNTDOWN_FINISH");
            this.dispatchEvent(event);
            playSound("c2");
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .wait(5)
                .call(this.frame_5)
                .wait(24)
                .call(this.frame_29)
                .wait(24)
                .call(this.frame_53)
                .wait(24)
                .call(this.frame_77)
                .wait(24)
                .call(this.frame_101)
                .wait(23)
                .call(this.frame_124)
                .wait(12),
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
                .wait(95)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(35),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_1)
                .wait(95)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 17)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .to({ _off: true }, 1)
                .wait(11),
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
                .wait(71)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(59),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(71)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .to({ _off: true }, 24)
                .wait(11),
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
                .wait(47)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, alpha: 1 }, 6)
                .wait(83),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_5)
                .wait(47)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 6)
                .to({ _off: true }, 48)
                .wait(11),
        );

        // num4
        this.instance_6 = new lib.補間動畫3("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, 1.2, 1.2);
        this.instance_6.alpha = 0;
        this.instance_6._off = true;

        this.instance_7 = new lib.補間動畫4("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-3, 0);
        this.instance_7._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_6)
                .wait(23)
                .to({ _off: false }, 0)
                .to({ _off: true, scaleX: 1, scaleY: 1, x: -3, alpha: 1 }, 6)
                .wait(107),
        );
        this.timeline.addTween(
            cjs.Tween.get(this.instance_7)
                .wait(23)
                .to({ _off: false }, 6)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, x: -2.9, alpha: 0 }, 6)
                .to({ _off: true }, 72)
                .wait(11),
        );

        // num5
        this.instance_8 = new lib.補間動畫2("synched", 0);
        this.instance_8.parent = this;
        this.instance_8._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_8)
                .wait(5)
                .to({ _off: false }, 0)
                .to({ startPosition: 0 }, 18)
                .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 6)
                .to({ _off: true }, 96)
                .wait(11),
        );

        // 圖層_1
        this.instance_9 = new lib.clock();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-392, -290);

        this.timeline.addTween(
            cjs.Tween.get(this.instance_9)
                .to({ _off: true }, 125)
                .wait(11),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-392, -290, 784, 472);

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

    (lib.場景_1_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ac
        this.loopmc_6 = new lib.ac_1();
        this.loopmc_6.name = "loopmc_6";
        this.loopmc_6.parent = this;
        this.loopmc_6.setTransform(1078.6, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_5 = new lib.ac_1();
        this.loopmc_5.name = "loopmc_5";
        this.loopmc_5.parent = this;
        this.loopmc_5.setTransform(917.2, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_4 = new lib.ac_1();
        this.loopmc_4.name = "loopmc_4";
        this.loopmc_4.parent = this;
        this.loopmc_4.setTransform(762.5, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_3 = new lib.ac_1();
        this.loopmc_3.name = "loopmc_3";
        this.loopmc_3.parent = this;
        this.loopmc_3.setTransform(609.4, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_2 = new lib.ac_1();
        this.loopmc_2.name = "loopmc_2";
        this.loopmc_2.parent = this;
        this.loopmc_2.setTransform(457.9, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_1 = new lib.ac_1();
        this.loopmc_1.name = "loopmc_1";
        this.loopmc_1.parent = this;
        this.loopmc_1.setTransform(306.9, 173, 1, 1, 0, 0, 0, 0, -599);

        this.loopmc_0 = new lib.ac_1();
        this.loopmc_0.name = "loopmc_0";
        this.loopmc_0.parent = this;
        this.loopmc_0.setTransform(158, 173, 1, 1, 0, 0, 0, 0, -599);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.loopmc_0 },
                        { t: this.loopmc_1 },
                        { t: this.loopmc_2 },
                        { t: this.loopmc_3 },
                        { t: this.loopmc_4 },
                        { t: this.loopmc_5 },
                        { t: this.loopmc_6 },
                    ],
                })
                .wait(1),
        );
    }).prototype = getMCSymbolPrototype(lib.場景_1_ac, null, null);

    (lib.clock_ac = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_131 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(131)
                .call(this.frame_131)
                .wait(1),
        );

        // clock
        this.clock = new lib.clock_1();
        this.clock.name = "clock";
        this.clock.parent = this;
        this.clock.setTransform(0, -501, 1, 1, 0, 0, 0, 0, -54);

        this.timeline.addTween(
            cjs.Tween.get(this.clock)
                .to({ y: -62 }, 5)
                .wait(120)
                .to({ y: -501 }, 6)
                .wait(1),
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-392, -737, 784, 472);

    (lib.場景_1_clock = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // clock
        this.clockMc = new lib.clock_ac();
        this.clockMc.name = "clockMc";
        this.clockMc.parent = this;
        this.clockMc.setTransform(621, -234.9, 1, 1, 0, 0, 0, 0, -501);

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
            this.color_0 = this.color.color_0;
            this.color_1 = this.color.color_1;
            this.color_2 = this.color.color_2;
            this.color_3 = this.color.color_3;
            this.color_4 = this.color.color_4;
            this.color_5 = this.color.color_5;
            this.color_6 = this.color.color_6;
            this.animal_0 = this.animal.animal_0;
            this.animal_1 = this.animal.animal_1;
            this.animal_2 = this.animal.animal_2;
            this.animal_3 = this.animal.animal_3;
            this.animal_4 = this.animal.animal_4;
            this.animal_5 = this.animal.animal_5;
            this.animal_6 = this.animal.animal_6;
            this.num_0_0 = this.num.num_0_0;
            this.num_0_1 = this.num.num_0_1;
            this.num_1_0 = this.num.num_1_0;
            this.num_1_1 = this.num.num_1_1;
            this.num_2_0 = this.num.num_2_0;
            this.num_2_1 = this.num.num_2_1;
            this.num_3_0 = this.num.num_3_0;
            this.num_3_1 = this.num.num_3_1;
            this.num_4_0 = this.num.num_4_0;
            this.num_4_1 = this.num.num_4_1;
            this.num_5_0 = this.num.num_5_0;
            this.num_5_1 = this.num.num_5_1;
            this.num_6_0 = this.num.num_6_0;
            this.num_6_1 = this.num.num_6_1;
            this.loopmc_0 = this.ac.loopmc_0;
            this.loopmc_1 = this.ac.loopmc_1;
            this.loopmc_2 = this.ac.loopmc_2;
            this.loopmc_3 = this.ac.loopmc_3;
            this.loopmc_4 = this.ac.loopmc_4;
            this.loopmc_5 = this.ac.loopmc_5;
            this.loopmc_6 = this.ac.loopmc_6;
            var _this = this;
            //number
            var _d_0_num = 1;
            var _d_1_num = 2;
            var _d_2_num = 3;
            var _d_3_num = 4;
            var _d_4_num = 5;
            var _d_5_num = 6;
            var _d_6_num = 7;
            //animal 0~11 = 鼠、牛、虎、兔、龍、蛇、馬、羊、猴、雞、狗、豬
            var _d_0_animal = 0;
            var _d_1_animal = 1;
            var _d_2_animal = 2;
            var _d_3_animal = 3;
            var _d_4_animal = 4;
            var _d_5_animal = 5;
            var _d_6_animal = 6;

            //color 0紅 1藍 2綠色
            var _d_0_color = 0;
            var _d_1_color = 1;
            var _d_2_color = 2;
            var _d_3_color = 0;
            var _d_4_color = 1;
            var _d_5_color = 2;
            var _d_6_color = 0;

            stop_clock_mc();

            //跑馬動畫
            this.addEventListener("RUN_LOOP", runLoop.bind(this));

            //完整動畫
            this.addEventListener("SHOW_MAIN_SLOT_MC", showMainSlotMc.bind(this));

            //指定數字
            this.addEventListener("SHOW_FINAL_NUM", showFinalNum.bind(this));

            //倒數結束
            this.clockMc.clock.addEventListener("COUNTDOWN_FINISH", countdownFinish.bind(this));

            function showFinalNum(e) {
                set_number_data(e);
                set_animal_data(e);
                set_color_data(e);

                stop_loop();
                show_number_mc(true);
            }

            function set_number_data(e) {
                //number
                _d_0_num = parseInt(e.d.n[0]);
                _d_1_num = parseInt(e.d.n[1]);
                _d_2_num = parseInt(e.d.n[2]);
                _d_3_num = parseInt(e.d.n[3]);
                _d_4_num = parseInt(e.d.n[4]);
                _d_5_num = parseInt(e.d.n[5]);
                _d_6_num = parseInt(e.d.n[6]);

                setFinalNum("0", _d_0_num);
                setFinalNum("1", _d_1_num);
                setFinalNum("2", _d_2_num);
                setFinalNum("3", _d_3_num);
                setFinalNum("4", _d_4_num);
                setFinalNum("5", _d_5_num);
                setFinalNum("6", _d_6_num);
            }

            function set_animal_data(e) {
                //animal
                _d_0_animal = parseInt(e.d.z[0]);
                _d_1_animal = parseInt(e.d.z[1]);
                _d_2_animal = parseInt(e.d.z[2]);
                _d_3_animal = parseInt(e.d.z[3]);
                _d_4_animal = parseInt(e.d.z[4]);
                _d_5_animal = parseInt(e.d.z[5]);
                _d_6_animal = parseInt(e.d.z[6]);

                setFinalAnimal("0", _d_0_animal);
                setFinalAnimal("1", _d_1_animal);
                setFinalAnimal("2", _d_2_animal);
                setFinalAnimal("3", _d_3_animal);
                setFinalAnimal("4", _d_4_animal);
                setFinalAnimal("5", _d_5_animal);
                setFinalAnimal("6", _d_6_animal);
            }

            function set_color_data(e) {
                //color
                _d_0_color = parseInt(e.d.c[0]);
                _d_1_color = parseInt(e.d.c[1]);
                _d_2_color = parseInt(e.d.c[2]);
                _d_3_color = parseInt(e.d.c[3]);
                _d_4_color = parseInt(e.d.c[4]);
                _d_5_color = parseInt(e.d.c[5]);
                _d_6_color = parseInt(e.d.c[6]);

                setFinalColor("0", _d_0_color);
                setFinalColor("1", _d_1_color);
                setFinalColor("2", _d_2_color);
                setFinalColor("3", _d_3_color);
                setFinalColor("4", _d_4_color);
                setFinalColor("5", _d_5_color);
                setFinalColor("6", _d_6_color);
            }

            function setFinalAnimal(p, v) {
                var pos = v;
                _this["animal_" + p].gotoAndStop(pos);
            }

            function setFinalColor(p, v) {
                var pos = v;
                _this["color_" + p].gotoAndStop(pos);
            }

            function setFinalNum(p, v) {
                var num_0_pos, num_1_pos;
                if (v < 10) {
                    num_0_pos = 0;
                    num_1_pos = v;
                } else {
                    num_0_pos = parseInt(v.toString().substr(0, 1));
                    num_1_pos = parseInt(v.toString().substr(1, 1));
                }

                _this["num_" + p + "_0"].gotoAndStop(num_0_pos);
                _this["num_" + p + "_1"].gotoAndStop(num_1_pos);
            }

            function show_number_mc(show) {
                //number
                _this["num_0_0"].visible = show;
                _this["num_0_1"].visible = show;
                _this["num_1_0"].visible = show;
                _this["num_1_1"].visible = show;
                _this["num_2_0"].visible = show;
                _this["num_2_1"].visible = show;
                _this["num_3_0"].visible = show;
                _this["num_3_1"].visible = show;
                _this["num_4_0"].visible = show;
                _this["num_4_1"].visible = show;
                _this["num_5_0"].visible = show;
                _this["num_5_1"].visible = show;
                _this["num_6_0"].visible = show;
                _this["num_6_1"].visible = show;
                //animal
                _this["animal_0"].visible = show;
                _this["animal_1"].visible = show;
                _this["animal_2"].visible = show;
                _this["animal_3"].visible = show;
                _this["animal_4"].visible = show;
                _this["animal_5"].visible = show;
                _this["animal_6"].visible = show;
                //color
                _this["color_0"].visible = show;
                _this["color_1"].visible = show;
                _this["color_2"].visible = show;
                _this["color_3"].visible = show;
                _this["color_4"].visible = show;
                _this["color_5"].visible = show;
                _this["color_6"].visible = show;
            }

            function show_loop_mc(show) {
                _this["loopmc_0"].visible = show;
                _this["loopmc_1"].visible = show;
                _this["loopmc_2"].visible = show;
                _this["loopmc_3"].visible = show;
                _this["loopmc_4"].visible = show;
                _this["loopmc_5"].visible = show;
                _this["loopmc_6"].visible = show;
            }

            function start_loop() {
                _this["loopmc_0"].gotoAndPlay(1);
                _this["loopmc_1"].gotoAndPlay(1);
                _this["loopmc_2"].gotoAndPlay(1);
                _this["loopmc_3"].gotoAndPlay(1);
                _this["loopmc_4"].gotoAndPlay(1);
                _this["loopmc_5"].gotoAndPlay(1);
                _this["loopmc_6"].gotoAndPlay(1);
            }

            function stop_loop() {
                _this["loopmc_0"].gotoAndStop(1);
                _this["loopmc_1"].gotoAndStop(1);
                _this["loopmc_2"].gotoAndStop(1);
                _this["loopmc_3"].gotoAndStop(1);
                _this["loopmc_4"].gotoAndStop(1);
                _this["loopmc_5"].gotoAndStop(1);
                _this["loopmc_6"].gotoAndStop(1);
            }

            function runLoop(e) {
                show_number_mc(false);
                start_loop();
                show_loop_mc(true);
            }

            function showMainSlotMc(e) {
                start_clock_mc();
                show_number_mc(false);
                start_loop();

                set_number_data(e);
                set_animal_data(e);
                set_color_data(e);
            }

            function start_clock_mc() {
                _this["clockMc"].visible = true;
                _this["clockMc"].gotoAndPlay(1);
                _this["clockMc"].clock.gotoAndPlay(1);
            }

            function stop_clock_mc() {
                _this["clockMc"].visible = false;
                _this["clockMc"].gotoAndStop(1);
                _this["clockMc"].clock.gotoAndStop(1);
            }

            function countdownFinish(e) {
                stop_clock_mc();
                stop_loop();
                show_number_mc(true);
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
        this.clock.setTransform(621, -235, 1, 1, 0, 0, 0, 621, -235);
        this.clock.depth = 0;
        this.clock.isAttachedToCamera = 0;
        this.clock.isAttachedToMask = 0;
        this.clock.layerDepth = 0;
        this.clock.layerIndex = 0;
        this.clock.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

        // color_obj_
        this.color = new lib.場景_1_color();
        this.color.name = "color";
        this.color.parent = this;
        this.color.setTransform(618.8, 383.1, 1, 1, 0, 0, 0, 618.8, 383.1);
        this.color.depth = 0;
        this.color.isAttachedToCamera = 0;
        this.color.isAttachedToMask = 0;
        this.color.layerDepth = 0;
        this.color.layerIndex = 1;
        this.color.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.color).wait(1));

        // animal_obj_
        this.animal = new lib.場景_1_animal();
        this.animal.name = "animal";
        this.animal.parent = this;
        this.animal.setTransform(618.8, 250.1, 1, 1, 0, 0, 0, 618.8, 250.1);
        this.animal.depth = 0;
        this.animal.isAttachedToCamera = 0;
        this.animal.isAttachedToMask = 0;
        this.animal.layerDepth = 0;
        this.animal.layerIndex = 2;
        this.animal.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.animal).wait(1));

        // num_obj_
        this.num = new lib.場景_1_num();
        this.num.name = "num";
        this.num.parent = this;
        this.num.setTransform(619.1, 118.1, 1, 1, 0, 0, 0, 619.1, 118.1);
        this.num.depth = 0;
        this.num.isAttachedToCamera = 0;
        this.num.isAttachedToMask = 0;
        this.num.layerDepth = 0;
        this.num.layerIndex = 3;
        this.num.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

        // border_obj_
        this.border = new lib.場景_1_border();
        this.border.name = "border";
        this.border.parent = this;
        this.border.setTransform(619, 185, 1, 1, 0, 0, 0, 619, 185);
        this.border.depth = 0;
        this.border.isAttachedToCamera = 0;
        this.border.isAttachedToMask = 0;
        this.border.layerDepth = 0;
        this.border.layerIndex = 4;
        this.border.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.border).wait(1));

        // tvborder_obj_
        this.tvborder = new lib.場景_1_tvborder();
        this.tvborder.name = "tvborder";
        this.tvborder.parent = this;
        this.tvborder.setTransform(614, 253, 1, 1, 0, 0, 0, 614, 253);
        this.tvborder.depth = 0;
        this.tvborder.isAttachedToCamera = 0;
        this.tvborder.isAttachedToMask = 0;
        this.tvborder.layerDepth = 0;
        this.tvborder.layerIndex = 5;
        this.tvborder.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.tvborder).wait(1));

        // mask_idn (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p(
            "EBB/Af9MAAAg/5IRlAAMAAAA/5gEAkMAf9MAAAg/5IRWAAMAAAA/5gALTf9MAAAg/5IRlAAMAAAA/5gAsuf9MAAAg/5IRgAAMAAAA/5gEgkYAf9MAAAg/5IRvAAMAAAA/5gEg7MAf9MAAAg/5IRMAAMAAAA/5gEhTjAf9MAAAg/5IRCAAMAAAA/5g",
        );
        mask.setTransform(623.8, 252.5);

        // ac_obj_
        this.ac = new lib.場景_1_ac();
        this.ac.name = "ac";
        this.ac.parent = this;
        this.ac.setTransform(618.3, -48.5, 1, 1, 0, 0, 0, 618.3, -48.5);
        this.ac.depth = 0;
        this.ac.isAttachedToCamera = 0;
        this.ac.isAttachedToMask = 0;
        this.ac.layerDepth = 0;
        this.ac.layerIndex = 6;
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
        this.bg.setTransform(621, 265, 1, 1, 0, 0, 0, 621, 265);
        this.bg.depth = 0;
        this.bg.isAttachedToCamera = 0;
        this.bg.isAttachedToMask = 0;
        this.bg.layerDepth = 0;
        this.bg.layerIndex = 7;
        this.bg.maskLayerName = 0;

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(621, -205.9, 1242, 1001);
    // library properties:
    lib.properties = {
        id: "DDEFDC54822C9F47888DDE01C32488E0",
        width: 1242,
        height: 530,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [
            { src: tranURL("images/slot_machine_forRD_atlas_.png?1550650087624"), id: "slot_machine_forRD_atlas_" },
            { src: tranURL("sounds/c1.mp3?1550650087716"), id: "c1" },
            { src: tranURL("sounds/c2.mp3?1550650087716"), id: "c2" },
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
