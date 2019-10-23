(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/common/LayoutContainer.js":
/*!**********************************************!*\
  !*** ./components/common/LayoutContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LayoutContainer__Container",
  componentId: "sc-1dylci8-0"
})(["display:flex;flex-direction:column;height:100%;position:relative;overflow:hidden;"]);

var LayoutContainer = function LayoutContainer(_ref) {
  var children = _ref.children;
  return __jsx(Container, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutContainer);

/***/ }),

/***/ "./components/common/RuleDialog.js":
/*!*****************************************!*\
  !*** ./components/common/RuleDialog.js ***!
  \*****************************************/
/*! exports provided: RuleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleDialog", function() { return RuleDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FreezeBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreezeBackground */ "./components/common/FreezeBackground.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var RuleDialog = function RuleDialog(_ref) {
  var state = _ref.state,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$desc = _ref.desc,
      desc = _ref$desc === void 0 ? "" : _ref$desc,
      close = _ref.close;
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_2__["useImage"])();
  return state && __jsx(_FreezeBackground__WEBPACK_IMPORTED_MODULE_1__["FreezeBackground"], null, __jsx("div", {
    className: "infopop"
  }, __jsx("div", {
    className: "new_menubox"
  }, __jsx("div", {
    className: "new_menu_title"
  }, __jsx("p", {
    className: "new_menu_title_text"
  }, "\u73A9\u6CD5\u4ECB\u7D39")), __jsx("button", {
    onClick: close
  }, __jsx("img", {
    src: image("close.png")
  })), __jsx("div", {
    className: "new_menu_list"
  }, __jsx("div", {
    className: "step"
  }, __jsx("h6", null, title), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: desc
    }
  })))), __jsx("div", {
    className: "new_window_bg"
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/Animation/Mc.js":
/*!*********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/Animation/Mc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libraries_getLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libraries/getLink */ "./core/libraries/getLink.js");

var base = "marksix_n1/as5fhk6n1/animation/";

var tranURL = function tranURL(url) {
  return Object(_core_libraries_getLink__WEBPACK_IMPORTED_MODULE_0__["getLink"])("".concat(base).concat(url));
};

/* harmony default export */ __webpack_exports__["default"] = (function (cjs, an, playSound) {
  var createjs = cjs;
  var AdobeAn = an;
  var p; // shortcut to reference prototypes

  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [{
    name: "slot_machine_forRD_atlas_",
    frames: [[419, 490, 48, 80], [419, 572, 48, 80], [419, 654, 48, 80], [419, 736, 48, 80], [381, 818, 48, 80], [381, 900, 48, 80], [338, 1120, 48, 80], [388, 1120, 48, 80], [431, 818, 48, 80], [469, 490, 48, 80], [1244, 0, 110, 1200], [0, 0, 1242, 488], [254, 1036, 82, 82], [0, 782, 125, 125], [0, 490, 290, 290], [0, 909, 125, 125], [0, 1036, 125, 125], [0, 1163, 125, 125], [254, 1120, 82, 82], [127, 782, 125, 125], [127, 909, 125, 125], [127, 1036, 125, 125], [127, 1163, 125, 125], [254, 782, 125, 125], [338, 1036, 82, 82], [292, 490, 125, 125], [292, 617, 125, 125], [254, 909, 125, 125]]
  }]; // symbols:

  (lib._0 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  (lib._1 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
  (lib._2 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  (lib._3 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  (lib._4 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();
  (lib._5 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();
  (lib._6 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();
  (lib._7 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();
  (lib._8 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();
  (lib._9 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();
  (lib.ac = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();
  (lib.bg = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();
  (lib.blue = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();
  (lib.chicken = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();
  (lib.clock_bg = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();
  (lib.cow = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();
  (lib.dog = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(16);
  }).prototype = p = new cjs.Sprite();
  (lib.dragon = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(17);
  }).prototype = p = new cjs.Sprite();
  (lib.green = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(18);
  }).prototype = p = new cjs.Sprite();
  (lib.horse = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(19);
  }).prototype = p = new cjs.Sprite();
  (lib.monkey = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(20);
  }).prototype = p = new cjs.Sprite();
  (lib.mouse = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(21);
  }).prototype = p = new cjs.Sprite();
  (lib.pig = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(22);
  }).prototype = p = new cjs.Sprite();
  (lib.rabbit = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(23);
  }).prototype = p = new cjs.Sprite();
  (lib.red = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(24);
  }).prototype = p = new cjs.Sprite();
  (lib.sheep = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(25);
  }).prototype = p = new cjs.Sprite();
  (lib.snake = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(26);
  }).prototype = p = new cjs.Sprite();
  (lib.tiger = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(27);
  }).prototype = p = new cjs.Sprite(); // helper functions:

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

  (lib.場景_1_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // bg

    this.instance = new lib.bg();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_bg, null, null);
  (lib.補間動畫10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("ABfJbQgSgjAAhKIAAsIQjgCshKAAQgoAAgcgcQgagaAAguQAAg4BpgzQDZhrBbiLQAng6AOgOQAXgXAnAAQBnAAAACcIAAPZQAACwh3AAQhMAAgag4g");
    this.shape.setTransform(-9.2, -5.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-40.8, -71.2, 63.3, 131.9);
  (lib.補間動畫9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("ABfJbQgSgjAAhKIAAsIQjgCshKAAQgoAAgcgcQgagaAAguQAAg4BpgzQDZhrBbiLQAng6AOgOQAXgXAnAAQBnAAAACcIAAPZQAACwh3AAQhMAAgag4g");
    this.shape.setTransform(-9.2, -5.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-40.8, -71.2, 63.3, 131.9);
  (lib.補間動畫8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("AklKJQhAgBgfgRQg+geAAhIQAAhbB9iHQBGhMCriPQCbiCAzg8QBDhTAAhUQAAhchBg2Qg6gshOAAQhTAAg7AyQgpAkgOArQghBcgSAbQgeAqg1AAQgqAAgcgaQgjgcAAg1QAAh5BdhqQB4iMDiAAQChgBBhA3QBSAwAwBUQAxBUAABhQAABxhBBjQhEBsiiCDQiOBzgmAmQguAsg2BJIGtAAQCpABAABlQAABDgxAYQgbAOg6ABg");
    this.shape.setTransform(2.6, -6.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-42.4, -71.2, 90.2, 129.7);
  (lib.補間動畫7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("AklKJQhAgBgfgRQg+geAAhIQAAhbB9iHQBGhMCriPQCbiCAzg8QBDhTAAhUQAAhchBg2Qg6gshOAAQhTAAg7AyQgpAkgOArQghBcgSAbQgeAqg1AAQgqAAgcgaQgjgcAAg1QAAh5BdhqQB4iMDiAAQChgBBhA3QBSAwAwBUQAxBUAABhQAABxhBBjQhEBsiiCDQiOBzgmAmQguAsg2BJIGtAAQCpABAABlQAABDgxAYQgbAOg6ABg");
    this.shape.setTransform(2.6, -6.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-42.4, -71.2, 90.2, 129.7);
  (lib.補間動畫6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("AlkH8QhbhvAAhfQAAgqAhggQAegdAxAAQBGAAAgBgQBBDACdAAQBMAAA/gzQBRhBAAhyQAAhlg4g7Qg3g6hfAAIg5ADIg0AEQhjAAAAhZQAAhhB4AAQBlAAA2gcQBVguAAhnQAAhHgugxQgwgvhPAAQiNAAg1COQgeBUhEAAQgwAAgaghQgZgaAAgqQAAhhBjhcQB5huC9AAQC4AABsBiQBgBYAACGQAACZiTB3QDPBxAADJQAACghyB1QiECGjVAAQjZAAiAiXg");
    this.shape.setTransform(1.3, -5.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-43.5, -71.2, 89.7, 131.9);
  (lib.補間動畫5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("AlkH8QhbhvAAhfQAAgqAhggQAegdAxAAQBGAAAgBgQBBDACdAAQBMAAA/gzQBRhBAAhyQAAhlg4g7Qg3g6hfAAIg5ADIg0AEQhjAAAAhZQAAhhB4AAQBlAAA2gcQBVguAAhnQAAhHgugxQgwgvhPAAQiNAAg1COQgeBUhEAAQgwAAgaghQgZgaAAgqQAAhhBjhcQB5huC9AAQC4AABsBiQBgBYAACGQAACZiTB3QDPBxAADJQAACghyB1QiECGjVAAQjZAAiAiXg");
    this.shape.setTransform(1.3, -5.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-43.5, -71.2, 89.7, 131.9);
  (lib.補間動畫4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("ACFJ7QgggdgBh7IAAhzIl8AAQhaAAgagDQgogHgZgZQgugsAAg8QAAgqBThvIHTptQAxhDAYgTQAhggAuAAQA+AAAmAyQAZAfAACBIAAJwIAnAAQBeAAAbAeQAcAcAAArQAAAmgeAeQgcAchLAAIg3AAIAABzQAAB5geAaQglAigqAAQguAAgggdgAkVCrIF5AAIAAn+g");
    this.shape.setTransform(0.6, -5.7);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-50.2, -72.1, 101.6, 132.8);
  (lib.補間動畫3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("ACFJ7QgggdgBh7IAAhzIl8AAQhaAAgagDQgogHgZgZQgugsAAg8QAAgqBThvIHTptQAxhDAYgTQAhggAuAAQA+AAAmAyQAZAfAACBIAAJwIAnAAQBeAAAbAeQAcAcAAArQAAAmgeAeQgcAchLAAIg3AAIAABzQAAB5geAaQglAigqAAQguAAgggdgAkVCrIF5AAIAAn+g");
    this.shape.setTransform(0.6, -5.7);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-50.2, -72.1, 101.6, 132.8);
  (lib.補間動畫2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A3517").s().p("AlYIPQhrhtAAhdQAAgeAZgcQAeglAvAAQA+AAAvBTQAuBUAoAjQA6AzBTAAQBzAAA8hiQAvhMAAhnQAAiChIhHQg9g5hbAAQhGAAg4AgQggARg6AyQggAdgvAAQgpAAgjgeQghggAAgmQAAgIAJg1IBJmkQAQhdAugdQAhgVBVAAIGjAAQBEAAAUAHQBDAXAABIQAABoiUAAImQAAIgxEbQB0hDBxAAQCgAAB2BxQB9B2AAC7QAAC2h2CEQiCCPjUAAQjcAAh0h6g");
    this.shape.setTransform(2.4, -4.2);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-42.8, -69.1, 90.4, 129.8);
  (lib.units = function (mode, startPosition, loop) {
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
      "9": 9
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).to({
      state: [{
        t: this.instance_5
      }]
    }, 1).to({
      state: [{
        t: this.instance_6
      }]
    }, 1).to({
      state: [{
        t: this.instance_7
      }]
    }, 1).to({
      state: [{
        t: this.instance_8
      }]
    }, 1).to({
      state: [{
        t: this.instance_9
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-24, -40, 48, 80);
  (lib.tens = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-24, -40, 48, 80);
  (lib.halo = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.rf(["#FEE2AA", "rgba(254,226,170,0)"], [0.773, 1], 0, 0, 0, 0, 0, 237.9).s().p("A6BaBQqxqxAAvQQAAvPKxqyQKyqxPPAAQPQAAKxKxQKyKyAAPPQAAPQqyKxQqxKyvQAAQvPAAqyqyg");
    this.shape.setTransform(235.5, 235.5);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.halo, new cjs.Rectangle(0, 0, 471, 471), null);
  (lib.color = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      red: 0,
      green: 1,
      blue: 2
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3)); // pic

    this.instance = new lib.red();
    this.instance.parent = this;
    this.instance.setTransform(-41, -41);
    this.instance_1 = new lib.green();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-41, -41);
    this.instance_2 = new lib.blue();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-41, -41);
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-41, -41, 82, 82);
  (lib.clock_bg_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.instance = new lib.clock_bg();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.clock_bg_1, new cjs.Rectangle(0, 0, 290, 290), null);
  (lib.chinese_zodiac = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_11
      }, {
        t: this.instance_10
      }, {
        t: this.instance_9
      }, {
        t: this.instance_8
      }, {
        t: this.instance_7
      }, {
        t: this.instance_6
      }, {
        t: this.instance_5
      }, {
        t: this.instance_4
      }, {
        t: this.instance_3
      }, {
        t: this.instance_2
      }, {
        t: this.instance_1
      }, {
        t: this.instance
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.chinese_zodiac, new cjs.Rectangle(-250.9, -243, 493.5, 485), null);
  (lib.blurry = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.instance = new lib.ac();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.blurry, new cjs.Rectangle(0, 0, 110, 1200), null);
  (lib.animal = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).to({
      state: [{
        t: this.instance_5
      }]
    }, 1).to({
      state: [{
        t: this.instance_6
      }]
    }, 1).to({
      state: [{
        t: this.instance_7
      }]
    }, 1).to({
      state: [{
        t: this.instance_8
      }]
    }, 1).to({
      state: [{
        t: this.instance_9
      }]
    }, 1).to({
      state: [{
        t: this.instance_10
      }]
    }, 1).to({
      state: [{
        t: this.instance_11
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-63, -63, 125, 125);
  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // Layer_1

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.num_0
      }, {
        t: this.num_1
      }, {
        t: this.zmc
      }, {
        t: this.cmc
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0, 0, 125, 263.5), null);
  (lib.clock = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    };

    this.frame_1 = function () {// playSound("coin01");
    };

    this.frame_24 = function () {
      playSound("coin01");
    };

    this.frame_48 = function () {
      playSound("coin01");
    };

    this.frame_72 = function () {
      playSound("coin01");
    };

    this.frame_96 = function () {
      playSound("coin01");
    };

    this.frame_119 = function () {
      this.stop();
      var event = new createjs.Event("CLOCK_RUN_END");
      this.dispatchEvent(event);
      playSound("coin07");
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(24).call(this.frame_48).wait(24).call(this.frame_72).wait(24).call(this.frame_96).wait(23).call(this.frame_119).wait(1)); // num1

    this.instance = new lib.補間動畫9("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(-2.9, 0, 1.2, 1.2);
    this.instance.alpha = 0;
    this.instance._off = true;
    this.instance_1 = new lib.補間動畫10("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-3, 0);
    this.instance_1._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(24));
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 17).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).wait(1)); // num2

    this.instance_2 = new lib.補間動畫7("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-2.9, 0, 1.2, 1.2);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;
    this.instance_3 = new lib.補間動畫8("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-3, 0);
    this.instance_3._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(48));
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).wait(24)); // num3

    this.instance_4 = new lib.補間動畫5("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(0, 0, 1.2, 1.2);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;
    this.instance_5 = new lib.補間動畫6("synched", 0);
    this.instance_5.parent = this;
    this.instance_5._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      alpha: 1
    }, 6).wait(72));
    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      alpha: 0
    }, 6).wait(48)); // num4

    this.instance_6 = new lib.補間動畫3("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(-2.9, 0, 1.2, 1.2);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;
    this.instance_7 = new lib.補間動畫4("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(-3, 0);
    this.instance_7._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(96));
    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).wait(72)); // num5

    this.instance_8 = new lib.補間動畫2("synched", 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(-3, 0);
    this.instance_8._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({
      _off: false
    }, 0).to({
      startPosition: 0
    }, 17).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).wait(96)); // clock_bg

    this.instance_9 = new lib.clock_bg_1();
    this.instance_9.parent = this;
    this.instance_9.setTransform(0, 0, 1, 1, 0, 0, 0, 145, 145);
    this.instance_9._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({
      _off: false
    }, 0).to({
      x: 0.1,
      y: 0.1
    }, 17).to({
      rotation: 90,
      x: -4,
      y: 2.1
    }, 6).to({
      y: 2
    }, 18).to({
      rotation: 180,
      x: -7,
      y: -1
    }, 6).wait(18).to({
      rotation: 270,
      x: -3,
      y: -3
    }, 6).wait(18).to({
      rotation: 360,
      x: 0,
      y: 0
    }, 6).wait(17).to({
      alpha: 0
    }, 6).wait(1)); // chinese_zodiac

    this.instance_10 = new lib.chinese_zodiac();
    this.instance_10.parent = this;
    this.instance_10.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
    this.instance_10._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({
      _off: false
    }, 0).to({
      regY: -0.4
    }, 17).to({
      regY: -0.5,
      rotation: -90,
      y: 0.1
    }, 6).to({
      regX: -0.4,
      y: 0
    }, 18).to({
      regX: -0.5,
      rotation: -180,
      x: 0.1,
      y: 0.1
    }, 6).to({
      regX: -0.4,
      regY: -0.4,
      x: 0,
      y: 0
    }, 18).to({
      regX: -0.5,
      rotation: -270
    }, 6).to({
      regX: -0.4,
      x: 0.1
    }, 18).to({
      rotation: -360,
      x: 0
    }, 6).wait(17).to({
      alpha: 0
    }, 6).wait(1)); // 圖層_3

    this.instance_11 = new lib.halo();
    this.instance_11.parent = this;
    this.instance_11.setTransform(0, 0.1, 1, 1, 0, 0, 0, 235.5, 235.5);
    this.instance_11._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({
      _off: false
    }, 0).wait(112).to({
      alpha: 0
    }, 6).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;
  (lib.ac_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // blurry

    this.instance = new lib.blurry();
    this.instance.parent = this;
    this.instance.setTransform(0, -820.5, 1, 1, 0, 0, 0, 55, 600);
    this.timeline.addTween(cjs.Tween.get(this.instance).to({
      y: -283.5
    }, 4).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-55, -1420.5, 110, 1200);
  (lib.場景_1_resultMc = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // resultMc

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.main_mc_0
      }, {
        t: this.main_mc_1
      }, {
        t: this.main_mc_2
      }, {
        t: this.main_mc_3
      }, {
        t: this.main_mc_4
      }, {
        t: this.main_mc_5
      }, {
        t: this.main_mc_6
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_resultMc, null, null);
  (lib.場景_1_clock = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // clock

    this.clockMc = new lib.clock();
    this.clockMc.name = "clockMc";
    this.clockMc.parent = this;
    this.clockMc.setTransform(621, 244);
    this.timeline.addTween(cjs.Tween.get(this.clockMc).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_clock, null, null);
  (lib.場景_1_ac = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // ac

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.run_mc_0
      }, {
        t: this.run_mc_1
      }, {
        t: this.run_mc_2
      }, {
        t: this.run_mc_3
      }, {
        t: this.run_mc_4
      }, {
        t: this.run_mc_5
      }, {
        t: this.run_mc_6
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_ac, null, null); // stage content:

  (lib.exportRoot = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    this.___GetDepth___ = function (obj) {
      var depth = obj.depth;
      var cameraObj = this.___camera___instance;

      if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
        depth += depth + cameraObj.depth;
      }

      return depth;
    };

    this.___needSorting___ = function () {
      for (var i = 0; i < this.getNumChildren() - 1; i++) {
        var prevDepth = this.___GetDepth___(this.getChildAt(i));

        var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));

        if (prevDepth < nextDepth) return true;
      }

      return false;
    };

    this.___sortFunction___ = function (obj1, obj2) {
      return this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1);
    };

    this.on("tick", function (event) {
      var curTimeline = event.currentTarget;

      if (curTimeline.___needSorting___()) {
        this.sortChildren(curTimeline.___sortFunction___);
      }
    }); // timeline functions:

    this.frame_0 = function () {
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
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1)); // clock_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.clock).wait(1)); // resultMc_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.resultMc).wait(1)); // mask_idn (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A4tWaIgEAAInOgBIgGgBIgEgCIgBgBIgEgBIgEgCIgDgBIgBgCIgBAAIAAAAIgEgCIgDgCIgBgBIgCgCIgGAAIgGgBIgEgCIAAgBIgRAAIkcjlMgAKgmfIAIgEQADgLAPgMQAYgTAfgQQAUgKAegMQAWgKAMgEIAIgBIABgCIABgBIACgCIACgCIACgCIAEgBIAFgBIAFAAIAAgBIMeABIAEAAIAIAAQAPABAIAGIAOAKIARAIQAVAHAoAbIAYAQQAMAIAOAKIASAQQAMALAdAiQAGAIACAGIADACQAFAjAAAjQAHToADTpIgFADIgCAFQgEAFgKAFQgXAKgyAJIg2AJQgsAHgWACIgpACIgNAAIgFAAIgBACIgBACIgDACIgEABIgGABIhyABIgEAAIgGgBIAAABIgDABIgDACIgDACIgEAAIgDAAgEBCXATvQgMgggBghQgTqRgCqQQgBn8AFn7ICbkNIADgBIAAAAIACgCIACgCIACgCIAEgBIAGgBIAAAAIAkAAIABgBIACgCIABgCIADgCIADgBIAHgBIAAAAIA6AAIACgCIACgBIAEgCIAGgCIIrAAIAEAAIAAgBIAHABIAEACIAEACIACACIACABIC1AAIAGABIADABIADACIACACIABACIABABIA7AAIAAAAIAGAAIAGABIAEACIACACIADACIABABIAZABQAeA9AIBBQAbDUAADWQAAP3guP2QgEBXgnBXIAAAAQAAAGgFAEIgBABIgBAAQgHAFgPABIktAdQiJANhOADQhdAFhQgDIhZAHgEhHPAWRIkQAAIgHgBIgDgCIgDgCIgtAAIgRgFQgGgDgUgBIg7gCIgCAAIgBAAIAAgCIgBgBIAAgCIAAgCIAAgCIAAAAIgKAAIgHgBIAAAAIg2gCIgPgeIgDgDIgMgNIgBgDIgzgbQgIgCgIgDIgEgCIgtACIgHADQgOAOgLAQQgLAPgHARIhjgJQgwhYgZhdQgahgAEhmQACgzAFgzQAIhJgChLQgBgpgJgpQgFgWAAgWQgGttANtvQAChWAbhQQAMghAUgfIABgGQAEgHAIgGIACAAIAAgBIABgBIABgCIACgCIACgCIACgBIABgCIACgBIACgCIACgCIADgBIABgBIAEgCIAGAAIAAgBIAJAAIADgBIAGAAIAAgBIATAAIACAAIAEAAIBFAAIABgCIAEgBIADgBIAEAAIAAgBIAFABIL6AAIAHABIADACIADACIACACIABABIAoAAIAGABIAEACIAAAAIADgBIAGgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAGABAFAEQAFADACAFQBGB4A/B7QALAWABAbQAGHEgDHEQgEJ/gMJ+QgCBVgEBUIgEAFIAAADQgCAMgNAKIgXANIgcARQgOAJgTAIIgbANIgTAJIgCABIgEADIgEACIgIAEQgHAEgLAIQgNAHgVAFIgXAHQgJAEgLADQgYALgQAFIgBADIgBABIgBACIgBABIgCACIgDACIgDACIgGABIgEAAgAV+WGQh/gCiNgIIiBgIQhIgGgYgDQgcgFg3gLQgOgEgHgEIhhgGQgyhbgHhgQgyprACptQABouARotQAChIAWhFQAQgxAbgsICVgBIAAgCIADgBIAEgCIAGgBIAAAAIBPAAIACAAIABAAIACgCIACgCIAEgCIAGAAIAAgBIJbAAIAGABIAEACIADACIABACIABABIABABIAxAAIADgBIAFAAIAAgBIAGABIAEACIADACIADACIABACIABABIACACIABABIAAACIBCACQBNCLAHCPQA6SegNSkQgZAageARIgCAFQgDAHgPAHQgUAKghANIgpARIgcANIgaAPIgUAKQgoASgaAHQgRAEgMgDQgIAGgSAAgEg4DAV/QgTgBgHgEQgEgCgEgDIiXABIiBizMgAPgm+QAbgmAigdQArglAygeIgKgFIAUgBIABgBIAAgCIABgBIABgCIACgCIACgCIACgBIAEgCIAGAAIAAgBIFRAAIAGABIAEACIEwAAIAGABIAEACIABAAIAAAAIADADIADABIACACIABABIABACIABABIBtAAIAGACIADABIADACIABAAIAZABQARABAEABIAGACIAZACQANABAkAIIACgBQAFgBAPACQASADAGACQAGADARAMQATAOAFAKIABADIAGABQAcBFARBJQANA0AAA3QgFSugISwIg1BJQgEAMgYADQgrAGg1ADIhgAEQi+AFi8AAQiHAAiGgCgEAlUAV9IgGgCIgEgCIgCgBIgCgCIgBgBIgCgCIAAgBIgpgCIhtipMgAPgnCQAlg0AtgtQAbgcAjgTIAHAAIACgCIACgCIADgCIAEgBIAEAAIAAAAIAFAAIACAAIJhAAIAGABIADACIB5AAIARADQAWACAKADIAcAGIAUABIATAAIAbAIQAGAAAJAAIAOAAIAOAAIACAAIAOACIADADIAKAGIgBABIADAFIAHACQAaANAdApQAQAXAGARIAHAVIAJAPQAHAOACATQABAMgBAXIAAAEIABACQACAGAAAMIAAALQAGAbAAAeQAASlgkSmQgCAvgiAvIhBADIAAACIAAABIgBACIAAABIgBACIgBACIgBACIgBABIgCACIgDABIgDACIgGACIuNAAgAmnV1IgGgCIgEgCIgCgBIgCgCIgCgBIAAgBIiHAAIgGgCIgEgCIgCgBIgCgCIgCgBIAAgBIgDgBIgGgDIgGAAQgQgCgLgDQgMgDgMgGIgFgCQgFACgHAAQgSAAgRgFIgZgIIgZgHIgQgIIgPgJIgcgMQgIgDgUgPQgJgHgCgEIgOgFQgHpnABpmQABnyAKnyQADh8Aeh2QAdhxA6hrIApAAIAAgBIACgCIABgCIACgCIACgBIAEgCIAGAAIAAgBIHzAAIAGABIAEACIADABIABACIABABIBSAAIAGACIAEABIACACIACABIBrAAIAGABIADACIADACIACACIABABIABACIABABIABABIAfAAIAGACIADABIABAAIAAAAQAGgCAGACQAHACADAGIACACIANAEQAWAGAnAUQAfARAMAKIAOAOIAOAOQAIAGAXAMQAUAKAJAJIALANIALANIAJAGQAHAFABAGIARALQgDRtgSRsQgBBogdBmQgQA5gcA4Ig9ACIgBABIgCACIgDABIgDACIgGACIg6AAIgBAAIgBABIgBABIgBACIgDABIgEACIgGACIonAAg");
    mask.setTransform(626.2, 293.9); // ac_obj_

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

    this.timeline.addTween(cjs.Tween.get(this.ac).wait(1)); // bg_obj_

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
  p.nominalBounds = new cjs.Rectangle(621, 244, 1242, 488); // library properties:

  lib.properties = {
    id: "DDEFDC54822C9F47888DDE01C32488E0",
    width: 1242,
    height: 488,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [{
      src: tranURL("images/slot_machine_forRD_atlas_.png?1548319615483"),
      id: "slot_machine_forRD_atlas_"
    }, {
      src: tranURL("sounds/coin01.mp3?1548319615574"),
      id: "coin01"
    }, {
      src: tranURL("sounds/coin07.mp3?1548319615574"),
      id: "coin07"
    }],
    preloads: []
  }; // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };

  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };

  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };

  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  };

  p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  };

  p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];

  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);

    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["DDEFDC54822C9F47888DDE01C32488E0"] = {
    getStage: function getStage() {
      return exportRoot.getStage();
    },
    getLibrary: function getLibrary() {
      return lib;
    },
    getSpriteSheet: function getSpriteSheet() {
      return ss;
    },
    getImages: function getImages() {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);

    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  }; // Layer depth API :


  AdobeAn.Layer = new function () {
    this.getLayerZDepth = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
      return eval(script);
    };

    this.setLayerZDepth = function (timeline, layerName, zDepth) {
      var MAX_zDepth = 10000;
      var MIN_zDepth = -5000;
      if (zDepth > MAX_zDepth) zDepth = MAX_zDepth;else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth;
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
      eval(script);
    };

    this.removeLayer = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
      eval(script);
    };

    this.addNewLayer = function (timeline, layerName, zDepth) {
      if (layerName === "Camera") layerName = "___camera___instance";
      zDepth = typeof zDepth !== "undefined" ? zDepth : 0;
      var layer = new createjs.MovieClip();
      layer.name = layerName;
      layer.depth = zDepth;
      layer.layerIndex = 0;
      timeline.addChild(layer);
    };
  }();
  return {
    AdobeAn: AdobeAn,
    createjs: createjs
  };
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/Animation/index.js":
/*!************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/Animation/index.js ***!
  \************************************************************/
/*! exports provided: As5fhk6n1Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1Animation", function() { return As5fhk6n1Animation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/useAnimation */ "./core/hooks/useAnimation.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var COLOR = {
  red: 0,
  green: 1,
  blue: 2
};
var As5fhk6n1Animation = function As5fhk6n1Animation() {
  var mc = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __webpack_require__(/*! ./Mc */ "./components/marksix_n1/as5fhk6n1/Animation/Mc.js")["default"];
  }, []);
  var mute = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Query.mute;
  });
  var backgroundMusic = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  }),
      zodiac_numbers = _useSelector.zodiac_config.zodiac_numbers,
      numbers_config = _useSelector.numbers_config;

  var zodiac_config = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(zodiac_numbers).reduce(function (prev, key) {
      zodiac_numbers[key].forEach(function (num) {
        prev[num] = key;
      });
      return prev;
    }, {});
  }, []);
  var transformZodia = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (numbers) {
    return numbers.reduce(function (prev, value) {
      var _prev$zodiac = prev.zodiac,
          zodiac = _prev$zodiac === void 0 ? [] : _prev$zodiac,
          _prev$color = prev.color,
          color = _prev$color === void 0 ? [] : _prev$color;
      zodiac.push(zodiac_config[Number(value)] - 1);
      color.push(COLOR[numbers_config[Number(value)]]);
      prev.zodiac = zodiac;
      prev.color = color;
      return prev;
    }, {});
  }, [zodiac_config, numbers_config]);
  var animationImage = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useAnimationImage"])();
  var animationSound = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useAnimationSound"])();

  var _useAnimation = Object(_core_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])({
    mc: mc,
    image: animationImage("slot_machine_forRD_atlas_.png"),
    id: "DDEFDC54822C9F47888DDE01C32488E0",
    showFinal: function showFinal(numbers) {
      var event = new Event("SET_RESULT_VALUE"); //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
      //c 0:紅 1:綠 2:藍

      var _transformZodia = transformZodia(numbers),
          zodiac = _transformZodia.zodiac,
          color = _transformZodia.color;

      event.d = {};
      event.d.n = numbers; //數字 由左到右

      event.d.z = zodiac; //生肖 由左到右

      event.d.c = color; //紅綠藍 由左到右

      exportRootRef.current.addEventListener("STOP_BG_MUSIC", stopBackgroundMusic);
      exportRootRef.current.dispatchEvent(event);
    },
    showMain: function showMain(numbers) {
      var event = new Event("SHOW_COUNTDOWN");

      var _transformZodia2 = transformZodia(numbers),
          zodiac = _transformZodia2.zodiac,
          color = _transformZodia2.color; //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
      //c 1:紅 2:綠 3:藍


      event.d = {};
      event.d.n = numbers; //數字 由左到右

      event.d.z = zodiac; //生肖 由左到右

      event.d.c = color; //紅綠藍 由左到右

      exportRootRef.current.addEventListener("STOP_BG_MUSIC", stopBackgroundMusic);
      exportRootRef.current.dispatchEvent(event);
    },
    showRunLoop: function showRunLoop() {
      var event = new Event("RUN_SLOT");
      exportRootRef.current.dispatchEvent(event);
      backgroundMusic.current = window.createjs.Sound.play("sound1", {
        loop: -1
      });
      backgroundMusic.current.volume = mute ? 0 : 1;
    }
  }),
      loading = _useAnimation.loading,
      anim_containerRef = _useAnimation.anim_containerRef,
      canvasRef = _useAnimation.canvasRef,
      dom_overlay_containerRef = _useAnimation.dom_overlay_containerRef,
      exportRootRef = _useAnimation.exportRootRef;

  var stopBackgroundMusic = function stopBackgroundMusic() {
    window.createjs.Sound.stop("sound1");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var sounds = [{
      src: "bg.mp3",
      data: {
        audioSprite: [{
          id: "sound1",
          startTime: 0
        }]
      }
    }];
    window.createjs.Sound.alternateExtensions = ["mp3"];
    window.createjs.Sound.registerSounds(sounds, animationSound());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (backgroundMusic.current) {
      backgroundMusic.current.volume = mute ? 0 : 1;
    }
  }, [mute]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, loading && __jsx("div", {
    style: {
      position: "relative",
      textAlign: "center",
      top: "18vw"
    }
  }, __jsx("div", {
    className: "meter"
  }, __jsx("span", null))), __jsx("div", {
    ref: anim_containerRef,
    className: "animation_frame"
  }, __jsx("canvas", {
    ref: canvasRef
  }), __jsx("div", {
    ref: dom_overlay_containerRef,
    style: {
      pointerEvents: "none",
      overflow: "hidden",
      width: "550px",
      height: "400px",
      position: "absolute",
      left: "0px",
      top: "0px",
      display: "block"
    }
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/Clock.js":
/*!**************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/Clock.js ***!
  \**************************************************/
/*! exports provided: As5fhk6n1Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1Clock", function() { return As5fhk6n1Clock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hooks_useClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useClock */ "./core/hooks/useClock.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var As5fhk6n1Clock = function As5fhk6n1Clock() {
  var countdown = Object(_core_hooks_useClock__WEBPACK_IMPORTED_MODULE_2__["useClock"])();

  var seconds = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_transformMinutesToSeconds"])(countdown);

  var _pad2 = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_pad"])(seconds, 3),
      _pad3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_pad2, 3),
      hundred_sec = _pad3[0],
      ten_sec = _pad3[1],
      sec = _pad3[2];

  return __jsx("div", {
    className: "lhc_numbercon"
  }, __jsx("div", {
    className: "lhc_numbertxt lhc_jend"
  }, "\u8DDD\u4E0B\u671F\u6295\u6CE8\u622A\u6B62\u8FD8\u6709"), __jsx("ol", null, __jsx("li", null, hundred_sec), __jsx("li", null, ten_sec), __jsx("li", null, sec), __jsx("li", null, "\u79D2")));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/FirstTimeDialog.js":
/*!************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/FirstTimeDialog.js ***!
  \************************************************************/
/*! exports provided: As5fhk6n1FirstTimeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1FirstTimeDialog", function() { return As5fhk6n1FirstTimeDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_useFirstTimeDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useFirstTimeDialog */ "./core/hooks/useFirstTimeDialog.js");
/* harmony import */ var _components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/FreezeBackground */ "./components/common/FreezeBackground.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var As5fhk6n1FirstTimeDialog = function As5fhk6n1FirstTimeDialog() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__["GoPageContext"]);

  var _useFirstTimeDialog = Object(_core_hooks_useFirstTimeDialog__WEBPACK_IMPORTED_MODULE_2__["useFirstTimeDialog"])(),
      showIntroduceDialog = _useFirstTimeDialog.showIntroduceDialog,
      onCloseIntroduceDialog = _useFirstTimeDialog.onCloseIntroduceDialog,
      showRuleDialog = _useFirstTimeDialog.showRuleDialog,
      onCloseRuleDialog = _useFirstTimeDialog.onCloseRuleDialog;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showIntroduceDialog && __jsx(_components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__["FreezeBackground"], null, __jsx("div", {
    className: "new_window"
  }, __jsx("div", {
    className: "new_menubox"
  }, __jsx("div", {
    className: "new_menu_title"
  }, "\u6295\u6CE8\u6559\u5B66"), __jsx("button", {
    onClick: onCloseIntroduceDialog
  }, __jsx("img", {
    src: image("close.png")
  })), __jsx("div", {
    className: "new_menu_list"
  }, __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.1 \u70B9\u9009\u6B32\u6295\u6CE8\u7684\u7EC4\u5408"), __jsx("img", {
    src: image("new_step1.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.2 \u9009\u62E9\u6295\u6CE8\u7684\u4F4D\u6570"), __jsx("div", null, __jsx("span", null, __jsx("img", {
    src: image("new_step2.png")
  })), __jsx("ol", null, __jsx("li", null, "\u6B63\u7801\u5168\u4E3A\u4E0D\u5206\u4F4D\u7F6E"), __jsx("li", null, "\u6B63\u2014\u7801\u4E3A\u843D\u7403\u7B2C\u2014\u4F4D"), __jsx("li", null, "\u6B63\u4E8C\u7801\u4E3A\u843D\u7403\u7B2C\u4E8C\u4F4D"), __jsx("li", null, "\u6B63\u4E09\u7801\u4E3A\u843D\u7403\u7B2C\u4E09\u4F4D"), __jsx("li", null, "\u6B63\u56DB\u7801\u4E3A\u843D\u7403\u7B2C\u56DB\u4F4D"), __jsx("li", null, "\u6B63\u4E94\u7801\u4E3A\u843D\u7403\u7B2C\u4E94\u4F4D"), __jsx("li", null, "\u6B63\u516D\u7801\u4E3A\u843D\u7403\u7B2C\u516D\u4F4D"), __jsx("li", null, "\u7279\u7801\u4E3A\u843D\u7403\u7279\u522B\u53F7")))), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.3 \u786E\u8BA4\u6295\u6CE8\u500D\u7387"), __jsx("img", {
    src: image("new_step3.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.4 \u786E\u8BA4\u6295\u6CE8\u76F4\u63A5\u4E0B\u6CE8"), __jsx("img", {
    src: image("new_step4.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.5 \u4E0B\u6CE8\u540E\u786E\u8BA4\u6295\u6CE8\u7ED3\u679C"), __jsx("img", {
    src: image("new_step5.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.6 \u4E2D\u5956\u7ED3\u679C\u53EF\u4E8E\u6295\u6CE8\u8BB0\u5F55\u67E5\u8BE2"), __jsx("img", {
    src: image("new_step6.png")
  })))), __jsx("div", {
    className: "new_window_bg"
  }))), showRuleDialog && __jsx(_components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__["FreezeBackground"], null, __jsx("div", {
    className: "window_con active"
  }, __jsx("div", {
    className: "window_box"
  }, __jsx("div", {
    className: "window_rules"
  }, __jsx("p", null, "\u4EB2\uFF0C\u7B2C\u4E00\u6B21\u8FDB\u6765\u6E38\u620F\u60F3\u5FC5\u5BF9\u73A9\u6CD5\u4E0D\u6E05\u695A\u5427\uFF0C\u662F\u5426\u9700\u8981\u89C2\u770B\u73A9\u6CD5\u4ECB\u7ECD\u5462\uFF1F"), __jsx("div", null, __jsx("button", {
    onClick: function onClick() {
      return onGoPage("rule");
    }
  }, "\u662F"), __jsx("button", {
    className: "close",
    onClick: onCloseRuleDialog
  }, "\u5426")))), __jsx("div", {
    className: "window_con_bg"
  }))));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/GameCenter/Color.js":
/*!*************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/GameCenter/Color.js ***!
  \*************************************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_hooks_useRuleDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/hooks/useRuleDialog */ "./core/hooks/useRuleDialog.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1 */ "./core/constants/marksix_n1/as5fhk6n1/index.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1/dictionary */ "./core/constants/marksix_n1/as5fhk6n1/dictionary.js");
/* harmony import */ var _components_common_RuleDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/common/RuleDialog */ "./components/common/RuleDialog.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_11__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var odd = function odd(arr) {
  return arr.filter(function (n) {
    return n % 2 == 1;
  });
};

var even = function even(arr) {
  return arr.filter(function (n) {
    return n % 2 == 0;
  });
};

var bigThen = function bigThen(arr, num) {
  return arr.filter(function (n) {
    return n >= num;
  });
};

var smallThen = function smallThen(arr, num) {
  return arr.filter(function (n) {
    return n < num;
  });
};

var Color = function Color() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__["MultipleContext"]),
      totalBets = _useContext.totalBets,
      multiple = _useContext.multiple,
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle,
      setMaximun = _useContext.setMaximun;

  var _useRuleDialog = Object(_core_hooks_useRuleDialog__WEBPACK_IMPORTED_MODULE_6__["useRuleDialog"])(),
      showRuleDialog = _useRuleDialog.showRuleDialog,
      onOpenRuleDialog = _useRuleDialog.onOpenRuleDialog,
      onCloseRuleDialog = _useRuleDialog.onCloseRuleDialog;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config,
      _config$color_config = config.color_config,
      red = _config$color_config.red_numbers,
      blue = _config$color_config.blue_numbers,
      green = _config$color_config.green_numbers;

  var getOdds = function getOdds(bet_type) {
    return bet_odds_config[bet_type].odds[0];
  };

  var COLOR_MAP = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return [{
      name: "全",
      color: "red",
      bet_type: "special_red",
      num: red,
      odds: getOdds("special_red")
    }, {
      name: "全",
      color: "blue",
      bet_type: "special_blue",
      num: blue,
      odds: getOdds("special_blue")
    }, {
      name: "全",
      color: "green",
      bet_type: "special_green",
      num: green,
      odds: getOdds("special_green")
    }, {
      name: "大",
      color: "red",
      bet_type: "special_red_big",
      num: bigThen(red, 27),
      odds: getOdds("special_red_big")
    }, {
      name: "大",
      color: "blue",
      bet_type: "special_blue_big",
      num: bigThen(blue, 25),
      odds: getOdds("special_blue_big")
    }, {
      name: "大",
      color: "green",
      bet_type: "special_green_big",
      num: bigThen(green, 27),
      odds: getOdds("special_green_big")
    }, {
      name: "小",
      color: "red",
      bet_type: "special_red_small",
      num: smallThen(red, 27),
      odds: getOdds("special_red_small")
    }, {
      name: "小",
      color: "blue",
      bet_type: "special_blue_small",
      num: smallThen(blue, 25),
      odds: getOdds("special_blue_small")
    }, {
      name: "小",
      color: "green",
      bet_type: "special_green_small",
      num: smallThen(green, 27),
      odds: getOdds("special_green_small")
    }, {
      name: "单",
      color: "red",
      bet_type: "special_red_odd",
      num: odd(red),
      odds: getOdds("special_red_odd")
    }, {
      name: "单",
      color: "blue",
      bet_type: "special_blue_odd",
      num: odd(blue),
      odds: getOdds("special_blue_odd")
    }, {
      name: "单",
      color: "green",
      bet_type: "special_green_odd",
      num: odd(green),
      odds: getOdds("special_green_odd")
    }, {
      name: "双",
      color: "red",
      bet_type: "special_red_even",
      num: even(red),
      odds: getOdds("special_red_even")
    }, {
      name: "双",
      color: "blue",
      bet_type: "special_blue_even",
      num: even(blue),
      odds: getOdds("special_blue_even")
    }, {
      name: "双",
      color: "green",
      bet_type: "special_green_even",
      num: even(green),
      odds: getOdds("special_green_even")
    }];
  }, [red, blue, green]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getMaximum(color) {
      var list = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(itemList.values()).filter(function (result) {
        return result.color == color;
      });

      var all = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list.filter(function (_ref) {
        var name = _ref.name;
        return name == "全";
      }).map(function (_ref2) {
        var odds = _ref2.odds;
        return odds;
      })).concat([0]));
      var bigSmall = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list.filter(function (_ref3) {
        var name = _ref3.name;
        return name == "大" || name == "小";
      }).map(function (_ref4) {
        var odds = _ref4.odds;
        return odds;
      })).concat([0]));
      var parity = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list.filter(function (_ref5) {
        var name = _ref5.name;
        return name == "单" || name == "双";
      }).map(function (_ref6) {
        var odds = _ref6.odds;
        return odds;
      })).concat([0]));
      return big_js__WEBPACK_IMPORTED_MODULE_11___default()(all).plus(bigSmall).plus(parity).toFixed(4);
    }

    var maxRed = getMaximum("red");
    var maxBlue = getMaximum("blue");
    var maxGreen = getMaximum("green");
    var maximum = Math.max(maxRed, maxBlue, maxGreen);
    setMaximun(maximum, 1);
  }, [totalBets, multiple]);
  return __jsx("article", {
    className: "lhc_kind color"
  }, __jsx("h2", null), __jsx("span", null), __jsx("img", {
    src: image("info_btn.png"),
    className: "info_btn",
    onClick: onOpenRuleDialog
  }), __jsx("div", {
    className: "lhc_btn_title"
  }, __jsx("div", null, "\u7EA2\u6CE2"), __jsx("div", null, "\u84DD\u6CE2"), __jsx("div", null, "\u7EFF\u6CE2")), lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(COLOR_MAP, 3).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "lhc_btn_box"
    }, block.map(function (_ref7) {
      var bet_type = _ref7.bet_type,
          color = _ref7.color,
          name = _ref7.name,
          num = _ref7.num,
          odds = _ref7.odds;
      return __jsx("div", {
        key: bet_type,
        className: "".concat(color, "_con ").concat(itemList.has(bet_type) ? "active" : ""),
        onClick: function onClick() {
          return itemListHandle.toggle(bet_type, {
            bet_type: bet_type,
            bet_detail: "",
            name: name,
            color: color,
            odds: odds
          });
        }
      }, __jsx("h6", null, name), __jsx("div", {
        className: "btntxt"
      }, num.join(",")), __jsx("p", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds, {
        digits: 2
      })));
    }));
  }), __jsx(_components_common_RuleDialog__WEBPACK_IMPORTED_MODULE_10__["RuleDialog"], {
    state: showRuleDialog,
    close: onCloseRuleDialog,
    title: _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__["RULE_DICTIONARY"][_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__["GAME_KIND"].COLOR].title,
    desc: _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__["RULE_DICTIONARY"][_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__["GAME_KIND"].COLOR].desc
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/GameCenter/Regular.js":
/*!***************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/GameCenter/Regular.js ***!
  \***************************************************************/
/*! exports provided: Regular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Regular", function() { return Regular; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_hooks_useRuleDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/hooks/useRuleDialog */ "./core/hooks/useRuleDialog.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1 */ "./core/constants/marksix_n1/as5fhk6n1/index.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1/dictionary */ "./core/constants/marksix_n1/as5fhk6n1/dictionary.js");
/* harmony import */ var _components_common_RuleDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/common/RuleDialog */ "./components/common/RuleDialog.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var REGULAR_ITEM = lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_rangeArr"])(1, 49), 5);

var BET_TYPE = "regular_number";
var Regular = function Regular() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__["MultipleContext"]),
      multiple = _useContext.multiple,
      totalBets = _useContext.totalBets,
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle,
      setMaximun = _useContext.setMaximun;

  var _useRuleDialog = Object(_core_hooks_useRuleDialog__WEBPACK_IMPORTED_MODULE_6__["useRuleDialog"])(),
      showRuleDialog = _useRuleDialog.showRuleDialog,
      onOpenRuleDialog = _useRuleDialog.onOpenRuleDialog,
      onCloseRuleDialog = _useRuleDialog.onCloseRuleDialog;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config,
      numbers_config = config.numbers_config;

  var _bet_odds_config$BET_ = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bet_odds_config[BET_TYPE].odds, 1),
      _bet_odds_config$BET_2 = _bet_odds_config$BET_[0],
      odds = _bet_odds_config$BET_2 === void 0 ? 0 : _bet_odds_config$BET_2;

  var onToggleItem = function onToggleItem(key, number) {
    return function () {
      itemListHandle.toggle(key, {
        bet_type: BET_TYPE,
        bet_detail: String(number)
      });
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setMaximun(odds);
  }, [totalBets, multiple]);
  return __jsx("article", {
    className: "lhc_kind positive"
  }, __jsx("h2", null), __jsx("span", null, "\u8D54\u7387\uFF1A", Number(odds).toFixed(4)), __jsx("img", {
    src: image("info_btn.png"),
    className: "info_btn",
    onClick: onOpenRuleDialog
  }), REGULAR_ITEM.map(function (block, index) {
    return __jsx("div", {
      className: "lhc_btn_box",
      key: index
    }, block.map(function (number) {
      var color = numbers_config[number];
      var key = "".concat(BET_TYPE).concat(number);
      var isActive = itemList.has(key);
      return __jsx("div", {
        key: key,
        className: "".concat(color, "_con ").concat(isActive ? "active" : ""),
        onClick: onToggleItem(key, number)
      }, __jsx("h6", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_pad"])(number, 2)));
    }));
  }), __jsx(_components_common_RuleDialog__WEBPACK_IMPORTED_MODULE_10__["RuleDialog"], {
    state: showRuleDialog,
    close: onCloseRuleDialog,
    title: _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__["RULE_DICTIONARY"][_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__["GAME_KIND"].REGULAR].title,
    desc: _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_9__["RULE_DICTIONARY"][_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_8__["GAME_KIND"].REGULAR].desc
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/GameCenter/index.js":
/*!*************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/GameCenter/index.js ***!
  \*************************************************************/
/*! exports provided: As5fhk6n1Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1Game", function() { return As5fhk6n1Game; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./components/marksix_n1/as5fhk6n1/GameCenter/Color.js");
/* harmony import */ var _Regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regular */ "./components/marksix_n1/as5fhk6n1/GameCenter/Regular.js");
/* harmony import */ var _components_marksix_n1_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/marksix_n1/common/GameSwitchContext */ "./components/marksix_n1/common/GameSwitchContext.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1 */ "./core/constants/marksix_n1/as5fhk6n1/index.js");
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1/dictionary */ "./core/constants/marksix_n1/as5fhk6n1/dictionary.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var As5fhk6n1Game = function As5fhk6n1Game() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_marksix_n1_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_5__["GameSwitchContext"]),
      gameKind = _useContext.gameKind,
      setGameKind = _useContext.setGameKind;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_8__["MultipleContext"]),
      itemListHandle = _useContext2.itemListHandle;

  var expect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _ref = state.RecentInfo.current || {},
        _ref$expect = _ref.expect,
        expect = _ref$expect === void 0 ? "" : _ref$expect;

    return expect;
  });

  var onSelected = function onSelected(kind) {
    return function () {
      if (kind != gameKind) {
        itemListHandle.clean();
        setGameKind(kind);
      }
    };
  };

  return __jsx("main", {
    style: {
      position: "relative",
      flex: 1,
      overflow: "auto",
      margin: "unset"
    }
  }, __jsx("div", {
    className: "now"
  }, "\u5F53\u671F\u671F\u53F7\uFF1A", expect), __jsx("div", {
    className: "lhc_tab"
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_6__["GAME_KIND"]).map(function (kind) {
    return __jsx("h6", {
      key: kind,
      className: gameKind == kind ? "active" : "",
      onClick: onSelected(kind)
    }, _core_constants_marksix_n1_as5fhk6n1_dictionary__WEBPACK_IMPORTED_MODULE_7__["GAME_KIND_DESC"][kind]);
  })), gameKind == _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_6__["GAME_KIND"].REGULAR && __jsx(_Regular__WEBPACK_IMPORTED_MODULE_4__["Regular"], null), gameKind == _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_6__["GAME_KIND"].COLOR && __jsx(_Color__WEBPACK_IMPORTED_MODULE_3__["Color"], null));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/Header.js":
/*!***************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/Header.js ***!
  \***************************************************/
/*! exports provided: As5fhk6n1Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1Header", function() { return As5fhk6n1Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libraries/getCurrencyImage */ "./core/libraries/getCurrencyImage.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/marksix_n1/as5fhk6n1/Menu.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clock */ "./components/marksix_n1/as5fhk6n1/Clock.js");
/* harmony import */ var _LastNumbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LastNumbers */ "./components/marksix_n1/as5fhk6n1/LastNumbers.js");
/* harmony import */ var _as5fhk6n1_Animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../as5fhk6n1/Animation */ "./components/marksix_n1/as5fhk6n1/Animation/index.js");
/* harmony import */ var _as5fhk6n2_Animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../as5fhk6n2/Animation */ "./components/marksix_n1/as5fhk6n2/Animation/index.js");
/* harmony import */ var _core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/hooks/useVersion */ "./core/hooks/useVersion.js");
/* harmony import */ var _core_hooks_useToggleMute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/hooks/useToggleMute */ "./core/hooks/useToggleMute.js");
/* harmony import */ var _core_hooks_useFairLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/hooks/useFairLink */ "./core/hooks/useFairLink.js");
/* harmony import */ var _core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/hooks/useWebView */ "./core/hooks/useWebView.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var As5fhk6n1Header = function As5fhk6n1Header() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useImage"])();

  var _useWebView = Object(_core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_13__["useWebView"])(),
      backApp = _useWebView.backApp;

  var getVersion = Object(_core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_10__["useVersion"])();
  var onOpenFairLink = Object(_core_hooks_useFairLink__WEBPACK_IMPORTED_MODULE_12__["useFairLink"])();

  var _useToggleMute = Object(_core_hooks_useToggleMute__WEBPACK_IMPORTED_MODULE_11__["useToggleMute"])(),
      mute = _useToggleMute.mute,
      onToggleMute = _useToggleMute.onToggleMute;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      betRate = _useContext.betRate,
      totalBets = _useContext.totalBets,
      betResult = _useContext.betResult,
      maximun = _useContext.maximun;

  var game_code = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_code;
  });
  var game_name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_name;
  });
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });
  return __jsx("header", null, __jsx("nav", null, __jsx("div", {
    className: "leftbox"
  }, __jsx("img", {
    src: image("close.png"),
    onClick: backApp
  }), __jsx("div", {
    className: "volume"
  }, __jsx("img", {
    src: image(mute ? "volume-mute.png" : "volume-down.png"),
    onClick: onToggleMute
  }))), __jsx("div", {
    className: "lhc_tit",
    onClick: getVersion
  }, game_name), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["As5fhk6n1Menu"], null)), __jsx("div", {
    className: "lhc_number"
  }, __jsx(_LastNumbers__WEBPACK_IMPORTED_MODULE_7__["As5fhk6n1LastNumbers"], null), __jsx(_Clock__WEBPACK_IMPORTED_MODULE_6__["As5fhk6n1Clock"], null)), {
    as5fhk6n1: __jsx(_as5fhk6n1_Animation__WEBPACK_IMPORTED_MODULE_8__["As5fhk6n1Animation"], null),
    as5fhk6n2: __jsx(_as5fhk6n2_Animation__WEBPACK_IMPORTED_MODULE_9__["As5fhk6n2Animation"], null)
  }[game_code] || null, __jsx("img", {
    src: image("header_bg.png"),
    alt: ""
  }), __jsx("article", {
    className: "lhc_note"
  }, __jsx("div", null, __jsx("img", {
    src: Object(_core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_2__["getCurrencyImage"])(currency)
  }), __jsx("span", null, "1"), "\u6CE8 = ", __jsx("span", null, betRate), currency, " / \u5DF2\u9009:", __jsx("span", null, totalBets), "\u6CE8\uFF0C\u5171", __jsx("span", null, betResult), currency), __jsx("div", null, __jsx("img", {
    src: image("header_disc.svg"),
    alt: ""
  }), "\u6700\u5927\u6536\u76CA\u91D1\u989D : ", maximun, currency), __jsx("img", {
    src: image("Verify_fairness.png"),
    alt: "",
    onClick: onOpenFairLink
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/LastNumbers.js":
/*!********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/LastNumbers.js ***!
  \********************************************************/
/*! exports provided: As5fhk6n1LastNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1LastNumbers", function() { return As5fhk6n1LastNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useLastNumbers */ "./core/hooks/useLastNumbers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var As5fhk6n1LastNumbers = function As5fhk6n1LastNumbers() {
  var numbers_config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _ref = state.Config.config.marksix_n1 || {},
        _ref$numbers_config = _ref.numbers_config,
        numbers_config = _ref$numbers_config === void 0 ? {} : _ref$numbers_config;

    return numbers_config;
  });

  var _useLastNumbers = Object(_core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_2__["useLastNumbers"])({
    length: 7,
    delayTime: 6000
  }),
      numbers = _useLastNumbers.numbers,
      expect = _useLastNumbers.expect;

  return __jsx("div", {
    className: "lhc_numbercon"
  }, __jsx("div", {
    className: "lhc_numbertxt"
  }, "\u7B2C", expect, "\u671F\u5F00\u5956\u4FE1\u606F"), __jsx("ul", null, numbers.map(function (value, index) {
    var color = numbers_config[Number(value)];
    return __jsx("li", {
      key: index,
      className: "num".concat(color)
    }, value);
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/Menu.js":
/*!*************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/Menu.js ***!
  \*************************************************/
/*! exports provided: As5fhk6n1Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1Menu", function() { return As5fhk6n1Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useClickOutside */ "./core/hooks/useClickOutside.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var As5fhk6n1Menu = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__["GoPageContext"]);
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showMenu = _useState[0],
      toggleMenu = _useState[1];

  var menuRef = Object(_core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__["useClickOutside"])(showMenu, toggleMenu);
  var balance = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Auth.balance;
  });
  return __jsx("div", {
    className: "lhc_smenu"
  }, __jsx("img", {
    src: image("menu_btn.png"),
    alt: "\u9009\u5355",
    onClick: function onClick() {
      return toggleMenu(!showMenu);
    }
  }), __jsx("div", {
    ref: menuRef,
    className: "lhc_smenucon ".concat(showMenu ? "active" : "")
  }, __jsx("p", null, "\u4F59\u989D\uFF1A", __jsx("span", null, balance), currency), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("rule");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon1.svg"),
    alt: ""
  })), __jsx("div", null, "\u73A9\u6CD5\u4ECB\u7ECD"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("history");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon4.png"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u516C\u544A"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("trend");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon3.svg"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u8D70\u52BF"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("betRecord");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon2.svg"),
    alt: ""
  })), __jsx("div", null, "\u6295\u6CE8\u8BB0\u5F55"))))));
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/MultipleSelect.js":
/*!***********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/MultipleSelect.js ***!
  \***********************************************************/
/*! exports provided: As5fhk6n1MultipleSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1MultipleSelect", function() { return As5fhk6n1MultipleSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/custom */ "./core/constants/custom.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var As5fhk6n1MultipleSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__["MultipleContext"]),
      multiple = _useContext.multiple,
      multipleHandle = _useContext.multipleHandle;

  return __jsx("div", {
    ref: ref,
    className: "bot_menu_popup active"
  }, __jsx("div", {
    className: "bot_menu_btn"
  }, _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__["MULTIPLE_MAP"].map(function (value) {
    var isActive = value === multiple;
    return __jsx("div", {
      key: value,
      className: "".concat(isActive ? "active" : ""),
      onClick: function onClick() {
        return multipleHandle.change(value);
      }
    }, value);
  })), __jsx("div", {
    className: "bot_menu_input"
  }, "\u500D\u6570", __jsx("button", {
    onClick: multipleHandle.decrement
  }, __jsx("svg", {
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }))), __jsx("input", {
    value: multiple,
    type: "tel",
    maxLength: 5,
    onChange: multipleHandle.input
  }), __jsx("button", {
    onClick: multipleHandle.increment
  }, __jsx("svg", {
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  })))));
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n1/index.js":
/*!**************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n1/index.js ***!
  \**************************************************/
/*! exports provided: As5fhk6n1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n1", function() { return As5fhk6n1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/LayoutContainer */ "./components/common/LayoutContainer.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/marksix_n1/as5fhk6n1/Header.js");
/* harmony import */ var _MultipleSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultipleSelect */ "./components/marksix_n1/as5fhk6n1/MultipleSelect.js");
/* harmony import */ var _GameCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCenter */ "./components/marksix_n1/as5fhk6n1/GameCenter/index.js");
/* harmony import */ var _core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useCleaningConfirm */ "./core/hooks/useCleaningConfirm.js");
/* harmony import */ var _components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/ConfirmDialog */ "./components/common/ConfirmDialog.js");
/* harmony import */ var _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/constants/confirmMessage */ "./core/constants/confirmMessage.js");
/* harmony import */ var _core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/hooks/useBetConfirm */ "./core/hooks/useBetConfirm.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _common_useHandleBet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/useHandleBet */ "./components/marksix_n1/common/useHandleBet.js");
/* harmony import */ var _core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/hooks/useMultipleMenu */ "./core/hooks/useMultipleMenu.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");
/* harmony import */ var _FirstTimeDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FirstTimeDialog */ "./components/marksix_n1/as5fhk6n1/FirstTimeDialog.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var As5fhk6n1 = function As5fhk6n1() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_11__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_14__["GoPageContext"]);
  var showBadge = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.EarnInfo.showBadge;
  });

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      multipleHandle = _useContext.multipleHandle,
      itemListHandle = _useContext.itemListHandle;

  var _useMultipleMenu = Object(_core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_13__["useMultipleMenu"])(),
      showMultipleMenu = _useMultipleMenu.showMultipleMenu,
      toggleMultipleMenu = _useMultipleMenu.toggleMultipleMenu,
      multipleMenuRef = _useMultipleMenu.multipleMenuRef;

  var _useCleaningConfirm = Object(_core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_7__["useCleaningConfirm"])(),
      showCleanConfirm = _useCleaningConfirm.showCleanConfirm,
      onOpenCleanConfirm = _useCleaningConfirm.onOpenCleanConfirm,
      onCloseCleanConfirm = _useCleaningConfirm.onCloseCleanConfirm;

  var _useBetConfirm = Object(_core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_10__["useBetConfirm"])(),
      showBetConfirm = _useBetConfirm.showBetConfirm,
      onOpenBetConfirm = _useBetConfirm.onOpenBetConfirm,
      onCloseBetConfirm = _useBetConfirm.onCloseBetConfirm;

  var handleBet = Object(_common_useHandleBet__WEBPACK_IMPORTED_MODULE_12__["useHandleBet"])();
  return __jsx(_components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["As5fhk6n1Header"], null), __jsx(_GameCenter__WEBPACK_IMPORTED_MODULE_6__["As5fhk6n1Game"], null), __jsx("footer", null, __jsx("div", {
    className: "bottom_btnbox"
  }, __jsx("button", {
    onClick: function onClick() {
      return onGoPage("betRecord");
    }
  }, __jsx("img", {
    src: image("bot_icon5.svg")
  }), "\u8F93\u8D62", __jsx("span", {
    style: {
      display: showBadge ? "visibility" : "hidden"
    }
  }, __jsx("img", {
    src: image("star.png")
  }))), __jsx("button", {
    className: "ss",
    onClick: toggleMultipleMenu
  }, __jsx("img", {
    src: image("bot_icon1.svg")
  }), "\u6295\u6CE8\u500D\u7387"), __jsx("button", {
    onClick: multipleHandle.clean
  }, __jsx("img", {
    src: image("bot_icon2.svg")
  }), "\u500D\u7387\u64A4\u9500"), __jsx("button", {
    onClick: onOpenCleanConfirm
  }, __jsx("img", {
    src: image("bot_icon3.svg")
  }), "\u6E05\u7A7A"), __jsx("button", {
    id: "onBet",
    onClick: onOpenBetConfirm
  }, __jsx("img", {
    src: image("bot_icon4.svg")
  }), "\u786E\u8BA4\u6295\u6CE8"))), showMultipleMenu && __jsx(_MultipleSelect__WEBPACK_IMPORTED_MODULE_5__["As5fhk6n1MultipleSelect"], {
    ref: multipleMenuRef
  }), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], {
    state: showCleanConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__["CONFIRM_TYPE"].CLEAN_BET,
    callback: itemListHandle.clean,
    close: onCloseCleanConfirm
  }), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], {
    state: showBetConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__["CONFIRM_TYPE"].BET,
    callback: handleBet,
    close: onCloseBetConfirm
  }), __jsx(_FirstTimeDialog__WEBPACK_IMPORTED_MODULE_15__["As5fhk6n1FirstTimeDialog"], null));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/Animation/Mc.js":
/*!*********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/Animation/Mc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libraries/getLink */ "./core/libraries/getLink.js");


var base = "marksix_n1/as5fhk6n2/animation/";

var tranURL = function tranURL(url) {
  return Object(_core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__["getLink"])("".concat(base).concat(url));
};

/* harmony default export */ __webpack_exports__["default"] = (function (cjs, an, playSound) {
  var createjs = cjs;
  var AdobeAn = an;
  var p; // shortcut to reference prototypes

  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [{
    name: "slot_machine_forRD_atlas_",
    frames: [[127, 1133, 45, 94], [221, 1167, 45, 94], [268, 1167, 45, 94], [315, 1167, 45, 94], [362, 1167, 45, 94], [409, 1167, 45, 94], [174, 1167, 45, 94], [0, 1260, 45, 94], [47, 1260, 45, 94], [94, 1260, 45, 94], [1244, 0, 110, 1200], [0, 0, 1242, 530], [889, 1040, 125, 125], [0, 1133, 125, 125], [0, 1006, 125, 125], [0, 532, 784, 472], [127, 1006, 125, 125], [254, 1006, 125, 125], [381, 1006, 125, 125], [508, 1006, 125, 125], [635, 1006, 125, 125], [762, 1006, 125, 125], [786, 532, 125, 125], [786, 659, 125, 125], [786, 786, 125, 125], [889, 913, 125, 125], [913, 532, 125, 125], [913, 659, 125, 125], [913, 786, 125, 125], [1016, 913, 14, 410]]
  }]; // symbols:

  (lib._0 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  (lib._1 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
  (lib._2 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  (lib._3 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  (lib._4 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();
  (lib._5 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();
  (lib._6 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();
  (lib._7 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();
  (lib._8 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();
  (lib._9 = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();
  (lib.ac = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();
  (lib.bg = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();
  (lib.blue = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();
  (lib.border = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();
  (lib.chicken = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();
  (lib.clock = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();
  (lib.cow = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(16);
  }).prototype = p = new cjs.Sprite();
  (lib.dog = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(17);
  }).prototype = p = new cjs.Sprite();
  (lib.dragon = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(18);
  }).prototype = p = new cjs.Sprite();
  (lib.green = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(19);
  }).prototype = p = new cjs.Sprite();
  (lib.horse = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(20);
  }).prototype = p = new cjs.Sprite();
  (lib.monkey = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(21);
  }).prototype = p = new cjs.Sprite();
  (lib.mouse = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(22);
  }).prototype = p = new cjs.Sprite();
  (lib.pig = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(23);
  }).prototype = p = new cjs.Sprite();
  (lib.rabbit = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(24);
  }).prototype = p = new cjs.Sprite();
  (lib.red = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(25);
  }).prototype = p = new cjs.Sprite();
  (lib.sheep = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(26);
  }).prototype = p = new cjs.Sprite();
  (lib.snake = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(27);
  }).prototype = p = new cjs.Sprite();
  (lib.tiger = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(28);
  }).prototype = p = new cjs.Sprite();
  (lib.tvborder = function () {
    this.spriteSheet = ss["slot_machine_forRD_atlas_"];
    this.gotoAndStop(29);
  }).prototype = p = new cjs.Sprite(); // helper functions:

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

  (lib.補間動畫10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAAdKxIAAi0IC1AAIAAC0gAjRKxIAAi0IC0AAIAAC0gAAdHDIAAi1IC1AAIAAC1gAjRHDIAAi1IC0AAIAAC1gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAAdkNIAAi0IC1AAIAAC0gAjRkNIAAi0IC0AAIAAC0gAAdn9IAAi1IC1AAIAAC1gAjRn9IAAi1IC0AAIAAC1gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAAdKxIAAi0IC1AAIAAC0gAjRKxIAAi0IC0AAIAAC0gAAdHDIAAi1IC1AAIAAC1gAjRHDIAAi1IC0AAIAAC1gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAAdkNIAAi0IC1AAIAAC0gAjRkNIAAi0IC0AAIAAC0gAAdn9IAAi1IC1AAIAAC1gAjRn9IAAi1IC0AAIAAC1gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAnBKxIAAi0IC1AAIAAC0gAqxKxIAAi0IC0AAIAAC0gAnBHDIAAi1IC1AAIAAC1gAqxHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAnBKxIAAi0IC1AAIAAC0gAqxKxIAAi0IC0AAIAAC0gAnBHDIAAi1IC1AAIAAC1gAqxHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -117, 138, 234);
  (lib.補間動畫4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);
  (lib.補間動畫3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_2

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AH9SSIAAi0IC1AAIAAC0gAENSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAH9gdIAAi0IC1AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAH9kNIAAi0IC1AAIAAC0gAENkNIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAH9n9IAAi1IC1AAIAAC1gAENn9IAAi1IC0AAIAAC1gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);
  (lib.補間動畫2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_2

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AENSSIAAi0IC0AAIAAC0gAAdSSIAAi0IC1AAIAAC0gAjRSSIAAi0IC0AAIAAC0gAnBSSIAAi0IC1AAIAAC0gAqxSSIAAi0IC0AAIAAC0gAH9OiIAAi1IC1AAIAAC1gAENOiIAAi1IC0AAIAAC1gAAdOiIAAi1IC1AAIAAC1gAjROiIAAi1IC0AAIAAC1gAnBOiIAAi1IC1AAIAAC1gAqxOiIAAi1IC0AAIAAC1gAH9KxIAAi0IC1AAIAAC0gAENKxIAAi0IC0AAIAAC0gAH9HDIAAi1IC1AAIAAC1gAENHDIAAi1IC0AAIAAC1gAH9DSIAAi0IC1AAIAAC0gAENDSIAAi0IC0AAIAAC0gAAdDSIAAi0IC1AAIAAC0gAjRDSIAAi0IC0AAIAAC0gAnBDSIAAi0IC1AAIAAC0gAqxDSIAAi0IC0AAIAAC0gAENgdIAAi0IC0AAIAAC0gAAdgdIAAi0IC1AAIAAC0gAjRgdIAAi0IC0AAIAAC0gAnBgdIAAi0IC1AAIAAC0gAqxgdIAAi0IC0AAIAAC0gAnBkNIAAi0IC1AAIAAC0gAqxkNIAAi0IC0AAIAAC0gAnBn9IAAi1IC1AAIAAC1gAqxn9IAAi1IC0AAIAAC1gAH9ruIAAi0IC1AAIAAC0gAENruIAAi0IC0AAIAAC0gAAdruIAAi0IC1AAIAAC0gAjRruIAAi0IC0AAIAAC0gAnBruIAAi0IC1AAIAAC0gAqxruIAAi0IC0AAIAAC0gAH9vcIAAi1IC1AAIAAC1gAENvcIAAi1IC0AAIAAC1gAAdvcIAAi1IC1AAIAAC1gAjRvcIAAi1IC0AAIAAC1gAnBvcIAAi1IC1AAIAAC1gAqxvcIAAi1IC0AAIAAC1g");
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69, -116.9, 138, 234);
  (lib.場景_1_tvborder = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // tvborder

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_5
      }, {
        t: this.instance_4
      }, {
        t: this.instance_3
      }, {
        t: this.instance_2
      }, {
        t: this.instance_1
      }, {
        t: this.instance
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_tvborder, null, null);
  (lib.場景_1_border = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // border

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_13
      }, {
        t: this.instance_12
      }, {
        t: this.instance_11
      }, {
        t: this.instance_10
      }, {
        t: this.instance_9
      }, {
        t: this.instance_8
      }, {
        t: this.instance_7
      }, {
        t: this.instance_6
      }, {
        t: this.instance_5
      }, {
        t: this.instance_4
      }, {
        t: this.instance_3
      }, {
        t: this.instance_2
      }, {
        t: this.instance_1
      }, {
        t: this.instance
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_border, null, null);
  (lib.場景_1_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // bg

    this.instance = new lib.bg();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_bg, null, null);
  (lib.units = function (mode, startPosition, loop) {
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
      "9": 9
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).to({
      state: [{
        t: this.instance_5
      }]
    }, 1).to({
      state: [{
        t: this.instance_6
      }]
    }, 1).to({
      state: [{
        t: this.instance_7
      }]
    }, 1).to({
      state: [{
        t: this.instance_8
      }]
    }, 1).to({
      state: [{
        t: this.instance_9
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-24, -40, 45, 94);
  (lib.tens = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-24, -40, 45, 94);
  (lib.color = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      red: 0,
      green: 1,
      blue: 2
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3)); // pic

    this.instance = new lib.red();
    this.instance.parent = this;
    this.instance.setTransform(-41, -41);
    this.instance_1 = new lib.green();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-41, -41);
    this.instance_2 = new lib.blue();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-41, -41);
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-41, -41, 125, 125);
  (lib.blurry = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // 圖層_1

    this.instance = new lib.ac();
    this.instance.parent = this;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.blurry, new cjs.Rectangle(0, 0, 110, 1200), null);
  (lib.animal = function (mode, startPosition, loop) {
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
      pig: 11
    }); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12)); // pic

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance
      }]
    }).to({
      state: [{
        t: this.instance_1
      }]
    }, 1).to({
      state: [{
        t: this.instance_2
      }]
    }, 1).to({
      state: [{
        t: this.instance_3
      }]
    }, 1).to({
      state: [{
        t: this.instance_4
      }]
    }, 1).to({
      state: [{
        t: this.instance_5
      }]
    }, 1).to({
      state: [{
        t: this.instance_6
      }]
    }, 1).to({
      state: [{
        t: this.instance_7
      }]
    }, 1).to({
      state: [{
        t: this.instance_8
      }]
    }, 1).to({
      state: [{
        t: this.instance_9
      }]
    }, 1).to({
      state: [{
        t: this.instance_10
      }]
    }, 1).to({
      state: [{
        t: this.instance_11
      }]
    }, 1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-63, -63, 125, 125);
  (lib.場景_1_num = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // num

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.num_0_0
      }, {
        t: this.num_0_1
      }, {
        t: this.num_1_0
      }, {
        t: this.num_1_1
      }, {
        t: this.num_2_0
      }, {
        t: this.num_2_1
      }, {
        t: this.num_3_0
      }, {
        t: this.num_3_1
      }, {
        t: this.num_4_0
      }, {
        t: this.num_4_1
      }, {
        t: this.num_5_0
      }, {
        t: this.num_5_1
      }, {
        t: this.num_6_0
      }, {
        t: this.num_6_1
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_num, null, null);
  (lib.場景_1_color = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // color

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.color_0
      }, {
        t: this.color_1
      }, {
        t: this.color_2
      }, {
        t: this.color_3
      }, {
        t: this.color_4
      }, {
        t: this.color_5
      }, {
        t: this.color_6
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_color, null, null);
  (lib.場景_1_animal = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // animal

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.animal_0
      }, {
        t: this.animal_1
      }, {
        t: this.animal_2
      }, {
        t: this.animal_3
      }, {
        t: this.animal_4
      }, {
        t: this.animal_5
      }, {
        t: this.animal_6
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_animal, null, null);
  (lib.clock_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_5 = function () {
      playSound("c1");
    };

    this.frame_29 = function () {
      playSound("c1");
    };

    this.frame_53 = function () {
      playSound("c1");
    };

    this.frame_77 = function () {
      playSound("c1");
    };

    this.frame_101 = function () {
      playSound("c1");
    };

    this.frame_124 = function () {
      var event = new createjs.Event("COUNTDOWN_FINISH");
      this.dispatchEvent(event);
      playSound("c2");
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(24).call(this.frame_29).wait(24).call(this.frame_53).wait(24).call(this.frame_77).wait(24).call(this.frame_101).wait(23).call(this.frame_124).wait(12)); // num1

    this.instance = new lib.補間動畫9("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(-2.9, 0, 1.2, 1.2);
    this.instance.alpha = 0;
    this.instance._off = true;
    this.instance_1 = new lib.補間動畫10("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-3, 0);
    this.instance_1._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(35));
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 17).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).to({
      _off: true
    }, 1).wait(11)); // num2

    this.instance_2 = new lib.補間動畫7("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-2.9, 0, 1.2, 1.2);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;
    this.instance_3 = new lib.補間動畫8("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-3, 0);
    this.instance_3._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(59));
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).to({
      _off: true
    }, 24).wait(11)); // num3

    this.instance_4 = new lib.補間動畫5("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(0, 0, 1.2, 1.2);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;
    this.instance_5 = new lib.補間動畫6("synched", 0);
    this.instance_5.parent = this;
    this.instance_5._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      alpha: 1
    }, 6).wait(83));
    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      alpha: 0
    }, 6).to({
      _off: true
    }, 48).wait(11)); // num4

    this.instance_6 = new lib.補間動畫3("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(0, 0, 1.2, 1.2);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;
    this.instance_7 = new lib.補間動畫4("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(-3, 0);
    this.instance_7._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({
      _off: false
    }, 0).to({
      _off: true,
      scaleX: 1,
      scaleY: 1,
      x: -3,
      alpha: 1
    }, 6).wait(107));
    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({
      _off: false
    }, 6).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      x: -2.9,
      alpha: 0
    }, 6).to({
      _off: true
    }, 72).wait(11)); // num5

    this.instance_8 = new lib.補間動畫2("synched", 0);
    this.instance_8.parent = this;
    this.instance_8._off = true;
    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({
      _off: false
    }, 0).to({
      startPosition: 0
    }, 18).to({
      scaleX: 1.2,
      scaleY: 1.2,
      alpha: 0
    }, 6).to({
      _off: true
    }, 96).wait(11)); // 圖層_1

    this.instance_9 = new lib.clock();
    this.instance_9.parent = this;
    this.instance_9.setTransform(-392, -290);
    this.timeline.addTween(cjs.Tween.get(this.instance_9).to({
      _off: true
    }, 125).wait(11));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-392, -290, 784, 472);
  (lib.ac_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // blurry

    this.instance = new lib.blurry();
    this.instance.parent = this;
    this.instance.setTransform(0, -820.5, 1, 1, 0, 0, 0, 55, 600);
    this.timeline.addTween(cjs.Tween.get(this.instance).to({
      y: -283.5
    }, 4).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-55, -1420.5, 110, 1200);
  (lib.場景_1_ac = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // ac

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
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.loopmc_0
      }, {
        t: this.loopmc_1
      }, {
        t: this.loopmc_2
      }, {
        t: this.loopmc_3
      }, {
        t: this.loopmc_4
      }, {
        t: this.loopmc_5
      }, {
        t: this.loopmc_6
      }]
    }).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_ac, null, null);
  (lib.clock_ac = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // timeline functions:

    this.frame_0 = function () {
      this.stop();
    };

    this.frame_131 = function () {
      this.stop();
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(131).call(this.frame_131).wait(1)); // clock

    this.clock = new lib.clock_1();
    this.clock.name = "clock";
    this.clock.parent = this;
    this.clock.setTransform(0, -501, 1, 1, 0, 0, 0, 0, -54);
    this.timeline.addTween(cjs.Tween.get(this.clock).to({
      y: -62
    }, 5).wait(120).to({
      y: -501
    }, 6).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-392, -737, 784, 472);
  (lib.場景_1_clock = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {}); // clock

    this.clockMc = new lib.clock_ac();
    this.clockMc.name = "clockMc";
    this.clockMc.parent = this;
    this.clockMc.setTransform(621, -234.9, 1, 1, 0, 0, 0, 0, -501);
    this.timeline.addTween(cjs.Tween.get(this.clockMc).wait(1));
  }).prototype = getMCSymbolPrototype(lib.場景_1_clock, null, null); // stage content:

  (lib.exportRoot = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    this.___GetDepth___ = function (obj) {
      var depth = obj.depth;
      var cameraObj = this.___camera___instance;

      if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
        depth += depth + cameraObj.depth;
      }

      return depth;
    };

    this.___needSorting___ = function () {
      for (var i = 0; i < this.getNumChildren() - 1; i++) {
        var prevDepth = this.___GetDepth___(this.getChildAt(i));

        var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));

        if (prevDepth < nextDepth) return true;
      }

      return false;
    };

    this.___sortFunction___ = function (obj1, obj2) {
      return this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1);
    };

    this.on("tick", function (event) {
      var curTimeline = event.currentTarget;

      if (curTimeline.___needSorting___()) {
        this.sortChildren(curTimeline.___sortFunction___);
      }
    }); // timeline functions:

    this.frame_0 = function () {
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

      var _this = this; //number


      var _d_0_num = 1;
      var _d_1_num = 2;
      var _d_2_num = 3;
      var _d_3_num = 4;
      var _d_4_num = 5;
      var _d_5_num = 6;
      var _d_6_num = 7; //animal 0~11 = 鼠、牛、虎、兔、龍、蛇、馬、羊、猴、雞、狗、豬

      var _d_0_animal = 0;
      var _d_1_animal = 1;
      var _d_2_animal = 2;
      var _d_3_animal = 3;
      var _d_4_animal = 4;
      var _d_5_animal = 5;
      var _d_6_animal = 6; //color 0紅 1藍 2綠色

      var _d_0_color = 0;
      var _d_1_color = 1;
      var _d_2_color = 2;
      var _d_3_color = 0;
      var _d_4_color = 1;
      var _d_5_color = 2;
      var _d_6_color = 0;
      stop_clock_mc(); //跑馬動畫

      this.addEventListener("RUN_LOOP", runLoop.bind(this)); //完整動畫

      this.addEventListener("SHOW_MAIN_SLOT_MC", showMainSlotMc.bind(this)); //指定數字

      this.addEventListener("SHOW_FINAL_NUM", showFinalNum.bind(this)); //倒數結束

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
        _d_0_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[0]);
        _d_1_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[1]);
        _d_2_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[2]);
        _d_3_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[3]);
        _d_4_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[4]);
        _d_5_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[5]);
        _d_6_num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.n[6]);
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
        _d_0_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[0]);
        _d_1_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[1]);
        _d_2_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[2]);
        _d_3_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[3]);
        _d_4_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[4]);
        _d_5_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[5]);
        _d_6_animal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.z[6]);
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
        _d_0_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[0]);
        _d_1_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[1]);
        _d_2_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[2]);
        _d_3_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[3]);
        _d_4_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[4]);
        _d_5_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[5]);
        _d_6_color = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.d.c[6]);
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
          num_0_pos = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(v.toString().substr(0, 1));
          num_1_pos = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(v.toString().substr(1, 1));
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
        _this["num_6_1"].visible = show; //animal

        _this["animal_0"].visible = show;
        _this["animal_1"].visible = show;
        _this["animal_2"].visible = show;
        _this["animal_3"].visible = show;
        _this["animal_4"].visible = show;
        _this["animal_5"].visible = show;
        _this["animal_6"].visible = show; //color

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
    }; // actions tween:


    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1)); // clock_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.clock).wait(1)); // color_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.color).wait(1)); // animal_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.animal).wait(1)); // num_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.num).wait(1)); // border_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.border).wait(1)); // tvborder_obj_

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
    this.timeline.addTween(cjs.Tween.get(this.tvborder).wait(1)); // mask_idn (mask)

    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EBB/Af9MAAAg/5IRlAAMAAAA/5gEAkMAf9MAAAg/5IRWAAMAAAA/5gALTf9MAAAg/5IRlAAMAAAA/5gAsuf9MAAAg/5IRgAAMAAAA/5gEgkYAf9MAAAg/5IRvAAMAAAA/5gEg7MAf9MAAAg/5IRMAAMAAAA/5gEhTjAf9MAAAg/5IRCAAMAAAA/5g");
    mask.setTransform(623.8, 252.5); // ac_obj_

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

    this.timeline.addTween(cjs.Tween.get(this.ac).wait(1)); // bg_obj_

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
  p.nominalBounds = new cjs.Rectangle(621, -205.9, 1242, 1001); // library properties:

  lib.properties = {
    id: "DDEFDC54822C9F47888DDE01C32488E0",
    width: 1242,
    height: 530,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [{
      src: tranURL("images/slot_machine_forRD_atlas_.png?1550650087624"),
      id: "slot_machine_forRD_atlas_"
    }, {
      src: tranURL("sounds/c1.mp3?1550650087716"),
      id: "c1"
    }, {
      src: tranURL("sounds/c2.mp3?1550650087716"),
      id: "c2"
    }],
    preloads: []
  }; // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };

  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };

  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };

  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  };

  p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  };

  p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];

  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);

    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["DDEFDC54822C9F47888DDE01C32488E0"] = {
    getStage: function getStage() {
      return exportRoot.getStage();
    },
    getLibrary: function getLibrary() {
      return lib;
    },
    getSpriteSheet: function getSpriteSheet() {
      return ss;
    },
    getImages: function getImages() {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);

    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  }; // Layer depth API :


  AdobeAn.Layer = new function () {
    this.getLayerZDepth = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
      return eval(script);
    };

    this.setLayerZDepth = function (timeline, layerName, zDepth) {
      var MAX_zDepth = 10000;
      var MIN_zDepth = -5000;
      if (zDepth > MAX_zDepth) zDepth = MAX_zDepth;else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth;
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
      eval(script);
    };

    this.removeLayer = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
      eval(script);
    };

    this.addNewLayer = function (timeline, layerName, zDepth) {
      if (layerName === "Camera") layerName = "___camera___instance";
      zDepth = typeof zDepth !== "undefined" ? zDepth : 0;
      var layer = new createjs.MovieClip();
      layer.name = layerName;
      layer.depth = zDepth;
      layer.layerIndex = 0;
      timeline.addChild(layer);
    };
  }();
  return {
    AdobeAn: AdobeAn,
    createjs: createjs
  };
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/Animation/index.js":
/*!************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/Animation/index.js ***!
  \************************************************************/
/*! exports provided: As5fhk6n2Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2Animation", function() { return As5fhk6n2Animation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/useAnimation */ "./core/hooks/useAnimation.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var COLOR = {
  red: 0,
  green: 1,
  blue: 2
};
var As5fhk6n2Animation = function As5fhk6n2Animation() {
  var mc = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __webpack_require__(/*! ./Mc */ "./components/marksix_n1/as5fhk6n2/Animation/Mc.js")["default"];
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  }),
      zodiac_numbers = _useSelector.zodiac_config.zodiac_numbers,
      numbers_config = _useSelector.numbers_config;

  var zodiac_config = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(zodiac_numbers).reduce(function (prev, key) {
      zodiac_numbers[key].forEach(function (num) {
        prev[num] = key;
      });
      return prev;
    }, {});
  }, []);
  var transformZodia = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (numbers) {
    return numbers.reduce(function (prev, value) {
      var _prev$zodiac = prev.zodiac,
          zodiac = _prev$zodiac === void 0 ? [] : _prev$zodiac,
          _prev$color = prev.color,
          color = _prev$color === void 0 ? [] : _prev$color;
      zodiac.push(zodiac_config[Number(value)] - 1);
      color.push(COLOR[numbers_config[Number(value)]]);
      prev.zodiac = zodiac;
      prev.color = color;
      return prev;
    }, {});
  }, [zodiac_config, numbers_config]);
  var animationImage = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useAnimationImage"])();

  var _useAnimation = Object(_core_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])({
    mc: mc,
    image: animationImage("slot_machine_forRD_atlas_.png"),
    id: "DDEFDC54822C9F47888DDE01C32488E0",
    showFinal: function showFinal(numbers) {
      var event = new Event("SHOW_FINAL_NUM"); //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
      //c 0:紅 1:綠 2:藍

      var _transformZodia = transformZodia(numbers),
          zodiac = _transformZodia.zodiac,
          color = _transformZodia.color;

      event.d = {};
      event.d.n = numbers; //數字 由左到右

      event.d.z = zodiac; //生肖 由左到右

      event.d.c = color; //紅綠藍 由左到右

      exportRootRef.current.dispatchEvent(event);
    },
    showMain: function showMain(numbers) {
      var event = new Event("SHOW_MAIN_SLOT_MC");

      var _transformZodia2 = transformZodia(numbers),
          zodiac = _transformZodia2.zodiac,
          color = _transformZodia2.color; //z: 0:鼠 1:牛 2:虎 3:兔 4:龍 5:蛇 6:馬 7:羊 8:猴 9:雞 10:狗 11:豬
      //c 1:紅 2:綠 3:藍


      event.d = {};
      event.d.n = numbers; //數字 由左到右

      event.d.z = zodiac; //生肖 由左到右

      event.d.c = color; //紅綠藍 由左到右

      exportRootRef.current.dispatchEvent(event);
    },
    showRunLoop: function showRunLoop() {
      var event = new Event("RUN_LOOP");
      exportRootRef.current.dispatchEvent(event);
    }
  }),
      loading = _useAnimation.loading,
      anim_containerRef = _useAnimation.anim_containerRef,
      canvasRef = _useAnimation.canvasRef,
      dom_overlay_containerRef = _useAnimation.dom_overlay_containerRef,
      exportRootRef = _useAnimation.exportRootRef;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, loading && __jsx("div", {
    style: {
      position: "relative",
      textAlign: "center",
      top: "18vw"
    }
  }, __jsx("div", {
    className: "meter"
  }, __jsx("span", null))), __jsx("div", {
    ref: anim_containerRef,
    className: "animation_frame"
  }, __jsx("canvas", {
    ref: canvasRef
  }), __jsx("div", {
    ref: dom_overlay_containerRef,
    style: {
      pointerEvents: "none",
      overflow: "hidden",
      width: "550px",
      height: "400px",
      position: "absolute",
      left: "0px",
      top: "0px",
      display: "block"
    }
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/Clock.js":
/*!**************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/Clock.js ***!
  \**************************************************/
/*! exports provided: As5fhk6n2Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2Clock", function() { return As5fhk6n2Clock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hooks_useClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useClock */ "./core/hooks/useClock.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var As5fhk6n2Clock = function As5fhk6n2Clock() {
  var countdown = Object(_core_hooks_useClock__WEBPACK_IMPORTED_MODULE_2__["useClock"])();

  var seconds = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_transformMinutesToSeconds"])(countdown);

  var _pad2 = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_pad"])(seconds, 3),
      _pad3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_pad2, 3),
      hundred_sec = _pad3[0],
      ten_sec = _pad3[1],
      sec = _pad3[2];

  return __jsx("div", {
    className: "lhc_numbercon"
  }, __jsx("div", {
    className: "lhc_numbertxt lhc_jend"
  }, "\u8DDD\u4E0B\u671F\u6295\u6CE8\u622A\u6B62\u8FD8\u6709"), __jsx("ol", null, __jsx("li", null, hundred_sec), __jsx("li", null, ten_sec), __jsx("li", null, sec), __jsx("li", null, "\u79D2")));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/FirstTimeDialog.js":
/*!************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/FirstTimeDialog.js ***!
  \************************************************************/
/*! exports provided: As5fhk6n2FirstTimeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2FirstTimeDialog", function() { return As5fhk6n2FirstTimeDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_useFirstTimeDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useFirstTimeDialog */ "./core/hooks/useFirstTimeDialog.js");
/* harmony import */ var _components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/FreezeBackground */ "./components/common/FreezeBackground.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var As5fhk6n2FirstTimeDialog = function As5fhk6n2FirstTimeDialog() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__["GoPageContext"]);

  var _useFirstTimeDialog = Object(_core_hooks_useFirstTimeDialog__WEBPACK_IMPORTED_MODULE_2__["useFirstTimeDialog"])(),
      showIntroduceDialog = _useFirstTimeDialog.showIntroduceDialog,
      onCloseIntroduceDialog = _useFirstTimeDialog.onCloseIntroduceDialog,
      showRuleDialog = _useFirstTimeDialog.showRuleDialog,
      onCloseRuleDialog = _useFirstTimeDialog.onCloseRuleDialog;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showIntroduceDialog && __jsx(_components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__["FreezeBackground"], null, __jsx("div", {
    className: "new_window"
  }, __jsx("div", {
    className: "new_menubox"
  }, __jsx("div", {
    className: "new_menu_title"
  }, "\u6295\u6CE8\u6559\u5B66"), __jsx("button", {
    onClick: onCloseIntroduceDialog
  }, __jsx("img", {
    src: image("close.png")
  })), __jsx("div", {
    className: "new_menu_list"
  }, __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.1 \u70B9\u9009\u6B32\u6295\u6CE8\u7684\u7EC4\u5408"), __jsx("img", {
    src: image("new_step1.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.2 \u9009\u62E9\u6295\u6CE8\u7684\u4F4D\u6570"), __jsx("div", null, __jsx("span", null, __jsx("img", {
    src: image("new_step2.png")
  })), __jsx("ol", null, __jsx("li", null, "\u6B63\u7801\u5168\u4E3A\u4E0D\u5206\u4F4D\u7F6E"), __jsx("li", null, "\u6B63\u2014\u7801\u4E3A\u843D\u7403\u7B2C\u2014\u4F4D"), __jsx("li", null, "\u6B63\u4E8C\u7801\u4E3A\u843D\u7403\u7B2C\u4E8C\u4F4D"), __jsx("li", null, "\u6B63\u4E09\u7801\u4E3A\u843D\u7403\u7B2C\u4E09\u4F4D"), __jsx("li", null, "\u6B63\u56DB\u7801\u4E3A\u843D\u7403\u7B2C\u56DB\u4F4D"), __jsx("li", null, "\u6B63\u4E94\u7801\u4E3A\u843D\u7403\u7B2C\u4E94\u4F4D"), __jsx("li", null, "\u6B63\u516D\u7801\u4E3A\u843D\u7403\u7B2C\u516D\u4F4D"), __jsx("li", null, "\u7279\u7801\u4E3A\u843D\u7403\u7279\u522B\u53F7")))), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.3 \u786E\u8BA4\u6295\u6CE8\u500D\u7387"), __jsx("img", {
    src: image("new_step3.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.4 \u786E\u8BA4\u6295\u6CE8\u76F4\u63A5\u4E0B\u6CE8"), __jsx("img", {
    src: image("new_step4.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.5 \u4E0B\u6CE8\u540E\u786E\u8BA4\u6295\u6CE8\u7ED3\u679C"), __jsx("img", {
    src: image("new_step5.png")
  })), __jsx("div", {
    className: "step"
  }, __jsx("h6", null, "STEP.6 \u4E2D\u5956\u7ED3\u679C\u53EF\u4E8E\u6295\u6CE8\u8BB0\u5F55\u67E5\u8BE2"), __jsx("img", {
    src: image("new_step6.png")
  })))), __jsx("div", {
    className: "new_window_bg"
  }))), showRuleDialog && __jsx(_components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_3__["FreezeBackground"], null, __jsx("div", {
    className: "window_con active"
  }, __jsx("div", {
    className: "window_box"
  }, __jsx("div", {
    className: "window_rules"
  }, __jsx("p", null, "\u4EB2\uFF0C\u7B2C\u4E00\u6B21\u8FDB\u6765\u6E38\u620F\u60F3\u5FC5\u5BF9\u73A9\u6CD5\u4E0D\u6E05\u695A\u5427\uFF0C\u662F\u5426\u9700\u8981\u89C2\u770B\u73A9\u6CD5\u4ECB\u7ECD\u5462\uFF1F"), __jsx("div", null, __jsx("button", {
    onClick: function onClick() {
      return onGoPage("rule");
    }
  }, "\u662F"), __jsx("button", {
    className: "close",
    onClick: onCloseRuleDialog
  }, "\u5426")))), __jsx("div", {
    className: "window_con_bg"
  }))));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/Color.js":
/*!*************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/Color.js ***!
  \*************************************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var odd = function odd(arr) {
  return arr.filter(function (n) {
    return n % 2 == 1;
  });
};

var even = function even(arr) {
  return arr.filter(function (n) {
    return n % 2 == 0;
  });
};

var bigThen = function bigThen(arr, num) {
  return arr.filter(function (n) {
    return n >= num;
  });
};

var smallThen = function smallThen(arr, num) {
  return arr.filter(function (n) {
    return n < num;
  });
};

var Color = function Color() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config,
      _config$color_config = config.color_config,
      red = _config$color_config.red_numbers,
      blue = _config$color_config.blue_numbers,
      green = _config$color_config.green_numbers;
  var COLOR_LIST = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return [{
      name: "全",
      color: "red",
      bet_type: "special_red",
      num: red
    }, {
      name: "全",
      color: "blue",
      bet_type: "special_blue",
      num: blue
    }, {
      name: "全",
      color: "green",
      bet_type: "special_green",
      num: green
    }, {
      name: "大",
      color: "red",
      bet_type: "special_red_big",
      num: bigThen(red, 27)
    }, {
      name: "大",
      color: "blue",
      bet_type: "special_blue_big",
      num: bigThen(blue, 25)
    }, {
      name: "大",
      color: "green",
      bet_type: "special_green_big",
      num: bigThen(green, 27)
    }, {
      name: "小",
      color: "red",
      bet_type: "special_red_small",
      num: smallThen(red, 27)
    }, {
      name: "小",
      color: "blue",
      bet_type: "special_blue_small",
      num: smallThen(blue, 25)
    }, {
      name: "小",
      color: "green",
      bet_type: "special_green_small",
      num: smallThen(green, 27)
    }, {
      name: "单",
      color: "red",
      bet_type: "special_red_odd",
      num: odd(red)
    }, {
      name: "单",
      color: "blue",
      bet_type: "special_blue_odd",
      num: odd(blue)
    }, {
      name: "单",
      color: "green",
      bet_type: "special_green_odd",
      num: odd(green)
    }, {
      name: "双",
      color: "red",
      bet_type: "special_red_even",
      num: even(red)
    }, {
      name: "双",
      color: "blue",
      bet_type: "special_blue_even",
      num: even(blue)
    }, {
      name: "双",
      color: "green",
      bet_type: "special_green_even",
      num: even(green)
    }];
  }, [red, blue, green]);
  return __jsx("article", {
    className: "lhc_kind color play_number"
  }, __jsx("h2", null, __jsx("span", null), "\u7279\u7801\u8272\u6CE2"), __jsx("div", {
    className: "lhc_btn_title"
  }, __jsx("div", null, "\u7EA2\u6CE2"), __jsx("div", null, "\u84DD\u6CE2"), __jsx("div", null, "\u7EFF\u6CE2")), lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(COLOR_LIST, 3).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "lhc_btn_box"
    }, block.map(function (_ref) {
      var bet_type = _ref.bet_type,
          color = _ref.color,
          name = _ref.name,
          num = _ref.num;

      var _bet_odds_config$bet_ = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bet_odds_config[bet_type].odds, 1),
          odds = _bet_odds_config$bet_[0];

      return __jsx("div", {
        key: bet_type,
        className: "".concat(color, "_con ").concat(itemList.has(bet_type) ? "active" : ""),
        onClick: function onClick() {
          return itemListHandle.toggle(bet_type, {
            bet_type: bet_type,
            bet_detail: ""
          });
        }
      }, __jsx("h6", null, name), __jsx("div", {
        className: "btntxt"
      }, num.join(",")), __jsx("p", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds, {
        digits: 2
      })));
    }));
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/HeadTail.js":
/*!****************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/HeadTail.js ***!
  \****************************************************************/
/*! exports provided: HeadTail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadTail", function() { return HeadTail; });
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var HEAD_TAIL_LIST = ["special_head_0", "special_head_1", "special_head_2", "special_head_3", "special_head_4", "special_tail_1", "special_tail_2", "special_tail_3", "special_tail_4", "special_tail_5", "special_tail_6", "special_tail_7", "special_tail_8", "special_tail_9", "special_tail_0"];
var HeadTail = function HeadTail() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config;
  return __jsx("article", {
    className: "lhc_kind"
  }, __jsx("h2", null, __jsx("span", null), "\u7279\u7801\u5934\u5C3E\u6570"), lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default()(HEAD_TAIL_LIST, 5).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "lhc_btn_box"
    }, block.map(function (bet_type) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      return __jsx("div", {
        key: bet_type,
        className: "numcon ".concat(itemList.has(bet_type) ? "active" : ""),
        onClick: function onClick() {
          return itemListHandle.toggle(bet_type, {
            bet_type: bet_type,
            bet_detail: ""
          });
        }
      }, __jsx("h6", null, bet_type_msg), __jsx("p", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds, {
        digits: 2
      })));
    }));
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/Regular.js":
/*!***************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/Regular.js ***!
  \***************************************************************/
/*! exports provided: Regular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Regular", function() { return Regular; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/common/FreezeBackground */ "./components/common/FreezeBackground.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var REGULAR_ITEM = lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_rangeArr"])(1, 49), 5);

var REGULAR_LIST = [{
  name: "正碼全",
  subName: "全",
  bet_type: "regular_number"
}, {
  name: "正一碼",
  subName: "一",
  bet_type: "regular_1"
}, {
  name: "正二碼",
  subName: "二",
  bet_type: "regular_2"
}, {
  name: "正三码",
  subName: "三",
  bet_type: "regular_3"
}, {
  name: "正四码",
  subName: "四",
  bet_type: "regular_4"
}, {
  name: "正五码",
  subName: "五",
  bet_type: "regular_5"
}, {
  name: "正六码",
  subName: "六",
  bet_type: "regular_6"
}, {
  name: "特码",
  subName: "特",
  bet_type: "special_number"
}];
var Regular = function Regular() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_7__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_5__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config,
      numbers_config = config.numbers_config;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showPopup = _useState[0],
      togglePopup = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectNumber = _useState2[0],
      setSelectNumber = _useState2[1];

  var oddsRange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var data = REGULAR_LIST.reduce(function (prev, curr) {
      var odds = bet_odds_config[curr.bet_type].odds.map(function (value) {
        return Number(value);
      });
      prev.push.apply(prev, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(odds));
      return prev;
    }, []);

    var max = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));

    var min = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));

    return "".concat(min).concat(data.length > 1 && " - " + max);
  }, [bet_odds_config]);

  var onSelectNumber = function onSelectNumber(number) {
    togglePopup(true);
    setSelectNumber(number);
  };

  return __jsx("article", {
    className: "lhc_kind positive play_number"
  }, __jsx("h2", null, __jsx("span", null, "\u8D54\u7387\uFF1A ", oddsRange), "\u6B63\u7801"), REGULAR_ITEM.map(function (block, index) {
    return __jsx("div", {
      className: "lhc_btn_box",
      key: index
    }, block.map(function (number) {
      var color = numbers_config[number];
      var isActive = REGULAR_LIST.find(function (_ref) {
        var bet_type = _ref.bet_type;
        return itemList.has("".concat(bet_type).concat(number));
      });
      return __jsx("div", {
        key: number,
        className: "".concat(color, "_con ").concat(isActive ? "active" : ""),
        onClick: function onClick() {
          return onSelectNumber(number);
        }
      }, __jsx("h6", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_pad"])(number, 2)), __jsx("div", {
        className: "btnicon"
      }, REGULAR_LIST.map(function (_ref2) {
        var bet_type = _ref2.bet_type,
            subName = _ref2.subName;
        return itemList.has("".concat(bet_type).concat(number)) && __jsx("span", {
          key: subName
        }, subName);
      })));
    }));
  }), showPopup && __jsx(_components_common_FreezeBackground__WEBPACK_IMPORTED_MODULE_6__["FreezeBackground"], null, __jsx("div", {
    className: "kind_popup"
  }, __jsx("div", {
    className: "kind_menubox"
  }, __jsx("div", {
    className: "kind_menu_title"
  }, __jsx("img", {
    src: image("star_icon.svg")
  }), "\u6295\u6CE8\u53F7\u7801\uFF1A", __jsx("span", null, selectNumber)), __jsx("button", {
    onClick: function onClick() {
      return togglePopup(false);
    }
  }, __jsx("img", {
    src: image("close.png")
  })), __jsx("div", {
    className: "kind_menu_list"
  }, __jsx("h6", null, "\u60A8\u8981\u6295\u6CE8\u7684\u4F4D\u7801\u662F"), __jsx("ol", null, REGULAR_LIST.map(function (_ref3) {
    var name = _ref3.name,
        bet_type = _ref3.bet_type;

    var _ref4 = bet_odds_config[bet_type] || {},
        _ref4$odds = _ref4.odds,
        odds = _ref4$odds === void 0 ? 0 : _ref4$odds;

    var itemKey = "".concat(bet_type).concat(selectNumber);
    return __jsx("li", {
      key: bet_type,
      className: "".concat(itemList.has(itemKey) ? "active" : ""),
      onClick: function onClick() {
        return itemListHandle.toggle(itemKey, {
          bet_type: bet_type,
          bet_detail: String(selectNumber)
        });
      }
    }, name, __jsx("span", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds)));
  })))), __jsx("div", {
    className: "kind_window_bg",
    onClick: function onClick() {
      return togglePopup(false);
    }
  }))));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/Tail.js":
/*!************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/Tail.js ***!
  \************************************************************/
/*! exports provided: Tail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tail", function() { return Tail; });
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var TAIL_LIST = ["tail_0", "tail_1", "tail_2", "tail_3", "tail_4", "tail_5", "tail_6", "tail_7", "tail_8", "tail_9"];
var Tail = function Tail() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config;
  return __jsx("article", {
    className: "lhc_kind"
  }, __jsx("h2", null, __jsx("span", null), "\u6B63\u7801\u5C3E\u6570"), lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default()(TAIL_LIST, 5).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "lhc_btn_box"
    }, block.map(function (bet_type) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      return __jsx("div", {
        key: bet_type,
        className: "numcon ".concat(itemList.has(bet_type) ? "active" : ""),
        onClick: function onClick() {
          return itemListHandle.toggle(bet_type, {
            bet_type: bet_type,
            bet_detail: ""
          });
        }
      }, __jsx("h6", null, bet_type_msg), __jsx("p", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds, {
        digits: 2
      })));
    }));
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/ZodiacAmount.js":
/*!********************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/ZodiacAmount.js ***!
  \********************************************************************/
/*! exports provided: ZodiacAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZodiacAmount", function() { return ZodiacAmount; });
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_constants_marksix_oddConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/marksix/oddConfig */ "./core/constants/marksix/oddConfig.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ZodiacAmount = function ZodiacAmount() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.marksix_n1;
  });
  var bet_odds_config = config.bet_odds_config;
  return __jsx("article", {
    className: "lhc_kind head play_number"
  }, __jsx("h2", null, __jsx("span", null), "\u603B\u8096"), lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default()(_core_constants_marksix_oddConfig__WEBPACK_IMPORTED_MODULE_5__["ZODIAC_AMOUNT_LIST"], 4).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "lhc_btn_box"
    }, block.map(function (bet_type) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      return __jsx("div", {
        key: bet_type,
        className: "numcon ".concat(itemList.has(bet_type) ? "active" : ""),
        onClick: function onClick() {
          return itemListHandle.toggle(bet_type, {
            bet_type: bet_type,
            bet_detail: ""
          });
        }
      }, __jsx("h6", null, bet_type_msg), __jsx("p", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds, {
        digits: 2
      })));
    }));
  }));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/GameCenter/index.js":
/*!*************************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/GameCenter/index.js ***!
  \*************************************************************/
/*! exports provided: As5fhk6n2Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2Game", function() { return As5fhk6n2Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ZodiacAmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZodiacAmount */ "./components/marksix_n1/as5fhk6n2/GameCenter/ZodiacAmount.js");
/* harmony import */ var _Tail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tail */ "./components/marksix_n1/as5fhk6n2/GameCenter/Tail.js");
/* harmony import */ var _HeadTail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeadTail */ "./components/marksix_n1/as5fhk6n2/GameCenter/HeadTail.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ "./components/marksix_n1/as5fhk6n2/GameCenter/Color.js");
/* harmony import */ var _Regular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Regular */ "./components/marksix_n1/as5fhk6n2/GameCenter/Regular.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var As5fhk6n2Game = function As5fhk6n2Game() {
  var expect = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _ref = state.RecentInfo.current || {},
        _ref$expect = _ref.expect,
        expect = _ref$expect === void 0 ? "" : _ref$expect;

    return expect;
  });
  return __jsx("article", {
    style: {
      flex: 1,
      overflow: "auto"
    }
  }, __jsx("article", {
    className: "popupbg"
  }, "\u5F53\u671F\u671F\u53F7\uFF1A", expect), __jsx(_Regular__WEBPACK_IMPORTED_MODULE_6__["Regular"], null), __jsx(_ZodiacAmount__WEBPACK_IMPORTED_MODULE_2__["ZodiacAmount"], null), __jsx(_Tail__WEBPACK_IMPORTED_MODULE_3__["Tail"], null), __jsx(_HeadTail__WEBPACK_IMPORTED_MODULE_4__["HeadTail"], null), __jsx(_Color__WEBPACK_IMPORTED_MODULE_5__["Color"], null));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/Header.js":
/*!***************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/Header.js ***!
  \***************************************************/
/*! exports provided: As5fhk6n2Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2Header", function() { return As5fhk6n2Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libraries/getCurrencyImage */ "./core/libraries/getCurrencyImage.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/marksix_n1/as5fhk6n2/Menu.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clock */ "./components/marksix_n1/as5fhk6n2/Clock.js");
/* harmony import */ var _LastNumbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LastNumbers */ "./components/marksix_n1/as5fhk6n2/LastNumbers.js");
/* harmony import */ var _as5fhk6n1_Animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../as5fhk6n1/Animation */ "./components/marksix_n1/as5fhk6n1/Animation/index.js");
/* harmony import */ var _as5fhk6n2_Animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../as5fhk6n2/Animation */ "./components/marksix_n1/as5fhk6n2/Animation/index.js");
/* harmony import */ var _core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/hooks/useVersion */ "./core/hooks/useVersion.js");
/* harmony import */ var _core_hooks_useToggleMute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/hooks/useToggleMute */ "./core/hooks/useToggleMute.js");
/* harmony import */ var _core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/hooks/useWebView */ "./core/hooks/useWebView.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var As5fhk6n2Header = function As5fhk6n2Header() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useImage"])();

  var _useWebView = Object(_core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_12__["useWebView"])(),
      backApp = _useWebView.backApp;

  var getVersion = Object(_core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_10__["useVersion"])();

  var _useToggleMute = Object(_core_hooks_useToggleMute__WEBPACK_IMPORTED_MODULE_11__["useToggleMute"])(),
      mute = _useToggleMute.mute,
      onToggleMute = _useToggleMute.onToggleMute;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      betRate = _useContext.betRate,
      totalBets = _useContext.totalBets,
      betResult = _useContext.betResult;

  var game_code = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_code;
  });
  var game_name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_name;
  });
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });
  var currency_rate = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency_rate;
  });
  return __jsx("header", null, __jsx("nav", null, __jsx("div", {
    className: "leftbox"
  }, __jsx("img", {
    src: image("close.png"),
    onClick: backApp
  }), __jsx("div", {
    className: "volume"
  }, __jsx("img", {
    src: image(mute ? "volume-mute.png" : "volume-down.png"),
    onClick: onToggleMute
  }))), __jsx("div", {
    className: "lhc_tit",
    onClick: getVersion
  }, game_name), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["As5fhk6n2Menu"], null)), __jsx("div", {
    className: "lhc_number"
  }, __jsx(_LastNumbers__WEBPACK_IMPORTED_MODULE_7__["As5fhk6n2LastNumbers"], null), __jsx(_Clock__WEBPACK_IMPORTED_MODULE_6__["As5fhk6n2Clock"], null)), {
    as5fhk6n1: __jsx(_as5fhk6n1_Animation__WEBPACK_IMPORTED_MODULE_8__["As5fhk6n1Animation"], null),
    as5fhk6n2: __jsx(_as5fhk6n2_Animation__WEBPACK_IMPORTED_MODULE_9__["As5fhk6n2Animation"], null)
  }[game_code] || null, __jsx("img", {
    src: image("header_bg.png"),
    alt: ""
  }), __jsx("article", {
    className: "lhc_note"
  }, __jsx("div", {
    className: "now"
  }, __jsx("img", {
    src: Object(_core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_2__["getCurrencyImage"])(currency),
    alt: ""
  }), __jsx("span", null, betRate, currency), "/\u6CE8"), __jsx("div", null, "\u5DF2\u9009:", __jsx("span", null, totalBets), "\u6CE8\uFF0C", __jsx("span", null, betResult, " "), currency)));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/LastNumbers.js":
/*!********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/LastNumbers.js ***!
  \********************************************************/
/*! exports provided: As5fhk6n2LastNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2LastNumbers", function() { return As5fhk6n2LastNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useLastNumbers */ "./core/hooks/useLastNumbers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var As5fhk6n2LastNumbers = function As5fhk6n2LastNumbers() {
  var numbers_config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _ref = state.Config.config.marksix_n1 || {},
        _ref$numbers_config = _ref.numbers_config,
        numbers_config = _ref$numbers_config === void 0 ? {} : _ref$numbers_config;

    return numbers_config;
  });

  var _useLastNumbers = Object(_core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_2__["useLastNumbers"])({
    length: 7,
    delayTime: 6000
  }),
      numbers = _useLastNumbers.numbers,
      expect = _useLastNumbers.expect;

  return __jsx("div", {
    className: "lhc_numbercon"
  }, __jsx("div", {
    className: "lhc_numbertxt"
  }, "\u7B2C", expect, "\u671F\u5F00\u5956\u4FE1\u606F"), __jsx("ul", null, numbers.map(function (value, index) {
    var color = numbers_config[Number(value)];
    return __jsx("li", {
      key: index,
      className: "num".concat(color)
    }, value);
  })));
};

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/Menu.js":
/*!*************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/Menu.js ***!
  \*************************************************/
/*! exports provided: As5fhk6n2Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2Menu", function() { return As5fhk6n2Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useClickOutside */ "./core/hooks/useClickOutside.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var As5fhk6n2Menu = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__["GoPageContext"]);
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showMenu = _useState[0],
      toggleMenu = _useState[1];

  var menuRef = Object(_core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__["useClickOutside"])(showMenu, toggleMenu);
  var balance = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Auth.balance;
  });
  return __jsx("div", {
    className: "lhc_smenu"
  }, __jsx("img", {
    src: image("menu_btn.png"),
    alt: "\u9009\u5355",
    onClick: function onClick() {
      return toggleMenu(!showMenu);
    }
  }), __jsx("div", {
    ref: menuRef,
    className: "lhc_smenucon ".concat(showMenu ? "active" : "")
  }, __jsx("p", null, "\u4F59\u989D\uFF1A", __jsx("span", null, balance), currency), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("rule");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon1.svg"),
    alt: ""
  })), __jsx("div", null, "\u73A9\u6CD5\u4ECB\u7ECD"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("history");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon4.png"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u516C\u544A"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("trend");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon3.svg"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u8D70\u52BF"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("betRecord");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_icon2.svg"),
    alt: ""
  })), __jsx("div", null, "\u6295\u6CE8\u8BB0\u5F55"))))));
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/MultipleSelect.js":
/*!***********************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/MultipleSelect.js ***!
  \***********************************************************/
/*! exports provided: As5fhk6n2MultipleSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2MultipleSelect", function() { return As5fhk6n2MultipleSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/custom */ "./core/constants/custom.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var As5fhk6n2MultipleSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__["MultipleContext"]),
      multiple = _useContext.multiple,
      multipleHandle = _useContext.multipleHandle;

  return __jsx("div", {
    ref: ref,
    className: "bot_menu_popup active"
  }, __jsx("div", {
    className: "bot_menu_btn"
  }, _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__["MULTIPLE_MAP"].map(function (value) {
    var isActive = value === multiple;
    return __jsx("div", {
      key: value,
      className: "".concat(isActive ? "active" : ""),
      onClick: function onClick() {
        return multipleHandle.change(value);
      }
    }, value);
  })), __jsx("div", {
    className: "bot_menu_input"
  }, "\u500D\u6570", __jsx("button", {
    onClick: multipleHandle.decrement
  }, __jsx("svg", {
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }))), __jsx("input", {
    value: multiple,
    type: "tel",
    maxLength: 5,
    onChange: multipleHandle.input
  }), __jsx("button", {
    onClick: multipleHandle.increment
  }, __jsx("svg", {
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  })))));
});

/***/ }),

/***/ "./components/marksix_n1/as5fhk6n2/index.js":
/*!**************************************************!*\
  !*** ./components/marksix_n1/as5fhk6n2/index.js ***!
  \**************************************************/
/*! exports provided: As5fhk6n2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5fhk6n2", function() { return As5fhk6n2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/LayoutContainer */ "./components/common/LayoutContainer.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/marksix_n1/as5fhk6n2/Header.js");
/* harmony import */ var _MultipleSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultipleSelect */ "./components/marksix_n1/as5fhk6n2/MultipleSelect.js");
/* harmony import */ var _GameCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCenter */ "./components/marksix_n1/as5fhk6n2/GameCenter/index.js");
/* harmony import */ var _core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useCleaningConfirm */ "./core/hooks/useCleaningConfirm.js");
/* harmony import */ var _components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/ConfirmDialog */ "./components/common/ConfirmDialog.js");
/* harmony import */ var _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/constants/confirmMessage */ "./core/constants/confirmMessage.js");
/* harmony import */ var _core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/hooks/useBetConfirm */ "./core/hooks/useBetConfirm.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _common_useHandleBet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/useHandleBet */ "./components/marksix_n1/common/useHandleBet.js");
/* harmony import */ var _core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/hooks/useMultipleMenu */ "./core/hooks/useMultipleMenu.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");
/* harmony import */ var _FirstTimeDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FirstTimeDialog */ "./components/marksix_n1/as5fhk6n2/FirstTimeDialog.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var As5fhk6n2 = function As5fhk6n2() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_11__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_14__["GoPageContext"]);
  var showBadge = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.EarnInfo.showBadge;
  });

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      multipleHandle = _useContext.multipleHandle,
      itemListHandle = _useContext.itemListHandle;

  var _useMultipleMenu = Object(_core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_13__["useMultipleMenu"])(),
      showMultipleMenu = _useMultipleMenu.showMultipleMenu,
      toggleMultipleMenu = _useMultipleMenu.toggleMultipleMenu,
      multipleMenuRef = _useMultipleMenu.multipleMenuRef;

  var _useCleaningConfirm = Object(_core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_7__["useCleaningConfirm"])(),
      showCleanConfirm = _useCleaningConfirm.showCleanConfirm,
      onOpenCleanConfirm = _useCleaningConfirm.onOpenCleanConfirm,
      onCloseCleanConfirm = _useCleaningConfirm.onCloseCleanConfirm;

  var _useBetConfirm = Object(_core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_10__["useBetConfirm"])(),
      showBetConfirm = _useBetConfirm.showBetConfirm,
      onOpenBetConfirm = _useBetConfirm.onOpenBetConfirm,
      onCloseBetConfirm = _useBetConfirm.onCloseBetConfirm;

  var handleBet = Object(_common_useHandleBet__WEBPACK_IMPORTED_MODULE_12__["useHandleBet"])();
  return __jsx(_components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["As5fhk6n2Header"], null), __jsx(_GameCenter__WEBPACK_IMPORTED_MODULE_6__["As5fhk6n2Game"], null), __jsx("footer", null, __jsx("div", {
    className: "bottom_btnbox"
  }, __jsx("button", {
    onClick: function onClick() {
      return onGoPage("betRecord");
    }
  }, __jsx("img", {
    src: image("bot_icon5.svg")
  }), "\u8F93\u8D62", __jsx("span", {
    style: {
      display: showBadge ? "block" : "none"
    }
  }, __jsx("img", {
    src: image("star.png")
  }))), __jsx("button", {
    className: "ss",
    onClick: toggleMultipleMenu
  }, __jsx("img", {
    src: image("bot_icon1.svg")
  }), "\u6295\u6CE8\u500D\u7387"), __jsx("button", {
    onClick: multipleHandle.clean
  }, __jsx("img", {
    src: image("bot_icon2.svg")
  }), "\u500D\u7387\u64A4\u9500"), __jsx("button", {
    onClick: onOpenCleanConfirm
  }, __jsx("img", {
    src: image("bot_icon3.svg")
  }), "\u6E05\u7A7A"), __jsx("button", {
    id: "onBet",
    onClick: onOpenBetConfirm
  }, __jsx("img", {
    src: image("bot_icon4.svg")
  }), "\u786E\u8BA4\u6295\u6CE8"))), showMultipleMenu && __jsx(_MultipleSelect__WEBPACK_IMPORTED_MODULE_5__["As5fhk6n2MultipleSelect"], {
    ref: multipleMenuRef
  }), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], {
    state: showCleanConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__["CONFIRM_TYPE"].CLEAN_BET,
    callback: itemListHandle.clean,
    close: onCloseCleanConfirm
  }), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], {
    state: showBetConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_9__["CONFIRM_TYPE"].BET,
    callback: handleBet,
    close: onCloseBetConfirm
  }), __jsx(_FirstTimeDialog__WEBPACK_IMPORTED_MODULE_15__["As5fhk6n2FirstTimeDialog"], null));
};

/***/ }),

/***/ "./components/marksix_n1/common/GameSwitchContext.js":
/*!***********************************************************!*\
  !*** ./components/marksix_n1/common/GameSwitchContext.js ***!
  \***********************************************************/
/*! exports provided: GameSwitchContext, GameSwitchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSwitchContext", function() { return GameSwitchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSwitchProvider", function() { return GameSwitchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/marksix_n1/as5fhk6n1 */ "./core/constants/marksix_n1/as5fhk6n1/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GameSwitchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var GameSwitchProvider = function GameSwitchProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_core_constants_marksix_n1_as5fhk6n1__WEBPACK_IMPORTED_MODULE_1__["GAME_KIND"].REGULAR),
      gameKind = _useState[0],
      setGameKind = _useState[1];

  return __jsx(GameSwitchContext.Provider, {
    value: {
      gameKind: gameKind,
      setGameKind: setGameKind
    }
  }, props.children);
};



/***/ }),

/***/ "./components/marksix_n1/common/useHandleBet.js":
/*!******************************************************!*\
  !*** ./components/marksix_n1/common/useHandleBet.js ***!
  \******************************************************/
/*! exports provided: useHandleBet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHandleBet", function() { return useHandleBet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_reducer_Bet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Bet */ "./core/reducer/Bet.js");




var useHandleBet = function useHandleBet() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      multiple = _useContext.multiple,
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var handleBet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var bet_list = itemList.keySeq().toArray().reduce(function (prev, curr) {
      var _itemList$get = itemList.get(curr),
          bet_type = _itemList$get.bet_type,
          bet_detail = _itemList$get.bet_detail;

      prev.push({
        bet_type: bet_type,
        bet_detail: bet_detail,
        multiple: multiple,
        bet_amount: 1
      });
      return prev;
    }, []);
    itemListHandle.clean();
    dispatch(Object(_core_reducer_Bet__WEBPACK_IMPORTED_MODULE_3__["sendBetList"])({
      bet_list: bet_list
    }));
  }, [itemList, multiple]);
  return handleBet;
};

/***/ }),

/***/ "./components/marksix_n1/index.js":
/*!****************************************!*\
  !*** ./components/marksix_n1/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _as5fhk6n1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./as5fhk6n1 */ "./components/marksix_n1/as5fhk6n1/index.js");
/* harmony import */ var _as5fhk6n2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as5fhk6n2 */ "./components/marksix_n1/as5fhk6n2/index.js");
/* harmony import */ var _common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/GameSwitchContext */ "./components/marksix_n1/common/GameSwitchContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Marksix_n1 = function Marksix_n1() {
  var game_code = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_code;
  });
  return __jsx(_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_4__["GameSwitchProvider"], null, {
    as5fhk6n1: __jsx(_as5fhk6n1__WEBPACK_IMPORTED_MODULE_2__["As5fhk6n1"], null),
    as5fhk6n2: __jsx(_as5fhk6n2__WEBPACK_IMPORTED_MODULE_3__["As5fhk6n2"], null)
  }[game_code] || null);
};

/* harmony default export */ __webpack_exports__["default"] = (Marksix_n1);

/***/ }),

/***/ "./core/constants/custom.js":
/*!**********************************!*\
  !*** ./core/constants/custom.js ***!
  \**********************************/
/*! exports provided: FUN_MAP, ZOD_MAP, MULTIPLE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUN_MAP", function() { return FUN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOD_MAP", function() { return ZOD_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTIPLE_MAP", function() { return MULTIPLE_MAP; });
var FUN_MAP = {
  b: "大",
  s: "小",
  sn: "单",
  dn: "双",
  sa: "全",
  ca: "清"
};
var ZOD_MAP = {
  1: "鼠",
  2: "牛",
  3: "虎",
  4: "兔",
  5: "龙",
  6: "蛇",
  7: "马",
  8: "羊",
  9: "猴",
  10: "鸡",
  11: "狗",
  12: "猪"
}; // export const MULTIPLE_MAP = [50, 100, 500, 1000, 5000, 10000];

var MULTIPLE_MAP = [1, 10, 50, 100, 1000];

/***/ }),

/***/ "./core/constants/marksix/index.js":
/*!*****************************************!*\
  !*** ./core/constants/marksix/index.js ***!
  \*****************************************/
/*! exports provided: TAB_TYPE, KIND_TYPE, PICK_LIMITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_TYPE", function() { return TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND_TYPE", function() { return KIND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICK_LIMITS", function() { return PICK_LIMITS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


var _PICK_LIMITS;

var TAB_TYPE = {
  SPECIAL: "SPECIAL",
  // 特碼
  SUM: "SUM",
  // 两面
  REGULAR: "REGULAR",
  // 正码
  COLOR: "COLOR",
  // 色波
  TAIL: "TAIL",
  // 头尾数
  ZODIAC: "ZODIAC",
  // 生肖
  SERIAL: "SERIAL",
  // 连码
  ZODIAC_TAIL: "ZODIAC_TAIL",
  // 一肖尾数
  ZODIAC_AMOUNT: "ZODIAC_AMOUNT",
  // 总肖
  ZODIAC_MULTI: "ZODIAC_MULTI" // 合肖

};
var KIND_TYPE = {
  DEFAULT: "DEFAULT",
  // 沒玩法
  // 正码
  REGULAR: "REGULAR",
  // 正码
  REGULAR_1: "REGULAR_1",
  // 正一特
  REGULAR_2: "REGULAR_2",
  // 正二特
  REGULAR_3: "REGULAR_3",
  // 正三特
  REGULAR_4: "REGULAR_4",
  // 正四特
  REGULAR_5: "REGULAR_5",
  // 正五特
  REGULAR_6: "REGULAR_6",
  // 正六特
  REGULAR_1_6: "REGULAR_1_6",
  // 正码1-6
  // 正码 (小網)
  REGULAR_1_6_1: "REGULAR_1_6_1",
  // 正码1-6-1
  REGULAR_1_6_2: "REGULAR_1_6_2",
  // 正码1-6-2
  REGULAR_1_6_3: "REGULAR_1_6_3",
  // 正码1-6-3
  REGULAR_1_6_4: "REGULAR_1_6_4",
  // 正码1-6-4
  REGULAR_1_6_5: "REGULAR_1_6_5",
  // 正码1-6-5
  REGULAR_1_6_6: "REGULAR_1_6_6",
  // 正码1-6-6
  // 色波 (小網)
  BALL: "BALL",
  // 色波
  ONE_COMB: "ONE_COMB",
  // 半波
  TWO_COMB: "TWO_COMB",
  // 半半波
  // 生肖
  SPECIAL_ZODIAC: "SPECIAL_ZODIAC",
  // 特肖
  REGULAR_ZODIAC: "REGULAR_ZODIAC",
  // 正肖
  SERIAL_2_ZODIAC: "SERIAL_2_ZODIAC",
  // 二肖
  SERIAL_3_ZODIAC: "SERIAL_3_ZODIAC",
  // 三肖
  SERIAL_4_ZODIAC: "SERIAL_4_ZODIAC",
  // 四肖
  SERIAL_5_ZODIAC: "SERIAL_5_ZODIAC",
  // 五肖
  SERIAL_2_ZODIAC_NO_HIT: "SERIAL_2_ZODIAC_NO_HIT",
  // 二肖连不中
  SERIAL_3_ZODIAC_NO_HIT: "SERIAL_3_ZODIAC_NO_HIT",
  // 三肖连不中
  SERIAL_4_ZODIAC_NO_HIT: "SERIAL_4_ZODIAC_NO_HIT",
  // 四肖连不中
  // 连码
  SPECIAL_SERIAL: "SPECIAL_SERIAL",
  // 特串
  SERIAL_2_SPECIAL: "SERIAL_2_SPECIAL",
  // 二中特
  SERIAL_3_HIT_3: "SERIAL_3_HIT_3",
  // 三全中
  SERIAL_3_HIT_2: "SERIAL_3_HIT_2",
  // 三中二
  SERIAL_2_HIT_2: "SERIAL_2_HIT_2",
  // 二全中
  SERIAL_4_HIT_1: "SERIAL_4_HIT_1",
  // 四中一
  SERIAL_5_NO_HIT: "SERIAL_5_NO_HIT",
  // 五不中
  SERIAL_6_NO_HIT: "SERIAL_6_NO_HIT",
  // 六不中
  SERIAL_7_NO_HIT: "SERIAL_7_NO_HIT",
  // 七不中
  SERIAL_8_NO_HIT: "SERIAL_8_NO_HIT",
  // 八不中
  SERIAL_9_NO_HIT: "SERIAL_9_NO_HIT",
  // 九不中
  SERIAL_10_NO_HIT: "SERIAL_10_NO_HIT",
  // 十不中
  SERIAL_11_NO_HIT: "SERIAL_11_NO_HIT",
  // 十一不中
  SERIAL_12_NO_HIT: "SERIAL_12_NO_HIT",
  // 十二不中
  SERIAL_2_TAIL: "SERIAL_2_TAIL",
  // 二尾连中
  SERIAL_2_TAIL_NO_HIT: "SERIAL_2_TAIL_NO_HIT",
  // 二尾连不中
  SERIAL_3_TAIL: "SERIAL_3_TAIL",
  // 三尾连中
  SERIAL_3_TAIL_NO_HIT: "SERIAL_3_TAIL_NO_HIT",
  // 三尾连不中
  SERIAL_4_TAIL: "SERIAL_4_TAIL",
  // 四尾连中
  SERIAL_4_TAIL_NO_HIT: "SERIAL_4_TAIL_NO_HIT",
  // 四尾连不中
  // 一肖尾数
  ZODIAC: "ZODIAC",
  // 一肖
  TAIL: "TAIL" // 尾数

};
var PICK_LIMITS = (_PICK_LIMITS = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.DEFAULT, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.SPECIAL, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.SUM, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.COLOR, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.BALL, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.ONE_COMB, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.TWO_COMB, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.TAIL, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SPECIAL_ZODIAC, [1, 12]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_ZODIAC, [1, 12]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_2_ZODIAC, [2, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_ZODIAC, [3, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_4_ZODIAC, [4, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_5_ZODIAC, [5, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_2_ZODIAC_NO_HIT, [2, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_ZODIAC_NO_HIT, [3, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_4_ZODIAC_NO_HIT, [4, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_2, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_3, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_4, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_5, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_6, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_1, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_2, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_3, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_4, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_5, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.REGULAR_1_6_6, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SPECIAL_SERIAL, [2, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_HIT_3, [3, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_HIT_2, [3, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_2_HIT_2, [2, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_4_HIT_1, [4, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_5_NO_HIT, [5, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_6_NO_HIT, [6, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_7_NO_HIT, [7, 10]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_8_NO_HIT, [8, 11]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_9_NO_HIT, [9, 12]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_10_NO_HIT, [10, 13]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_11_NO_HIT, [11, 13]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_12_NO_HIT, [12, 14]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_2_TAIL, [2, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_2_TAIL_NO_HIT, [2, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_TAIL, [3, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_3_TAIL_NO_HIT, [3, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_4_TAIL, [4, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.SERIAL_4_TAIL_NO_HIT, [4, 6]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.ZODIAC, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, KIND_TYPE.TAIL, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.ZODIAC_AMOUNT, [1]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PICK_LIMITS, TAB_TYPE.ZODIAC_MULTI, [2, 11]), _PICK_LIMITS);

/***/ }),

/***/ "./core/constants/marksix/oddConfig.js":
/*!*********************************************!*\
  !*** ./core/constants/marksix/oddConfig.js ***!
  \*********************************************/
/*! exports provided: SPECIAL_LIST, SUM_LIST, REGULAR_UNIT, REGULAR_LIST, REGULAR_ODD, COLOR_LIST, TAIL_LIST, ZODIAC_LIST, SERIAL_LIST, ZODIAC_TAIL_LIST, ZODIAC_AMOUNT_LIST, ZODIAC_MULTI_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIAL_LIST", function() { return SPECIAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUM_LIST", function() { return SUM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGULAR_UNIT", function() { return REGULAR_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGULAR_LIST", function() { return REGULAR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGULAR_ODD", function() { return REGULAR_ODD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_LIST", function() { return COLOR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAIL_LIST", function() { return TAIL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZODIAC_LIST", function() { return ZODIAC_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERIAL_LIST", function() { return SERIAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZODIAC_TAIL_LIST", function() { return ZODIAC_TAIL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZODIAC_AMOUNT_LIST", function() { return ZODIAC_AMOUNT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZODIAC_MULTI_LIST", function() { return ZODIAC_MULTI_LIST; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./core/constants/marksix/index.js");


var _REGULAR_ODD, _ZODIAC_LIST, _SERIAL_LIST;


var SPECIAL_LIST = ["special_big", "special_small", "special_odd", "special_even", "special_big_odd", "special_big_even", "special_small_odd", "special_small_even", "special_sum_big", "special_sum_small", "special_sum_odd", "special_sum_even", "special_tail_big", "special_tail_small"];
var SUM_LIST = [].concat(SPECIAL_LIST, ["sum_big", "sum_small", "sum_odd", "sum_even"]);
var REGULAR_UNIT = ["regular_unit_odd", "regular_unit_even", "regular_unit_big", "regular_unit_small", "regular_unit_sum_odd", "regular_unit_sum_even", "regular_unit_sum_big", "regular_unit_sum_small", "regular_unit_green", "regular_unit_red", "regular_unit_blue", "regular_unit_tail_big", "regular_unit_tail_small"];
var REGULAR_LIST = [1, 2, 3, 4, 5, 6].map(function (v) {
  return REGULAR_UNIT.map(function (type) {
    return type.replace("unit", v);
  });
});
var REGULAR_ODD = (_REGULAR_ODD = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR, "regular_number"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_1, "regular_1"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_2, "regular_2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_3, "regular_3"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_4, "regular_4"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_5, "regular_5"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_6, "regular_6"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_REGULAR_ODD, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_1_6, REGULAR_LIST), _REGULAR_ODD);
var COLOR_LIST = {
  BALL: ["special_red", "special_blue", "special_green"],
  ONE_COMB: ["special_red_odd", "special_red_even", "special_red_big", "special_red_small", "special_blue_odd", "special_blue_even", "special_blue_big", "special_blue_small", "special_green_odd", "special_green_even", "special_green_big", "special_green_small"],
  TWO_COMB: ["special_red_big_odd", "special_red_big_even", "special_red_small_odd", "special_red_small_even", "special_red_sum_odd", "special_red_sum_even", "special_blue_big_odd", "special_blue_big_even", "special_blue_small_odd", "special_blue_small_even", "special_blue_sum_odd", "special_blue_sum_even", "special_green_big_odd", "special_green_big_even", "special_green_small_odd", "special_green_small_even", "special_green_sum_odd", "special_green_sum_even"]
};
var TAIL_LIST = ["special_head_0", "special_head_1", "special_head_2", "special_head_3", "special_head_4", "special_tail_1", "special_tail_2", "special_tail_3", "special_tail_4", "special_tail_5", "special_tail_6", "special_tail_7", "special_tail_8", "special_tail_9", "special_tail_0"];
var ZODIAC_LIST = (_ZODIAC_LIST = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SPECIAL_ZODIAC, "special_zodiac_"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].REGULAR_ZODIAC, "regular_zodiac_"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_2_ZODIAC, "serial_2_zodiac"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_ZODIAC, "serial_3_zodiac"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_4_ZODIAC, "serial_4_zodiac"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_5_ZODIAC, "serial_5_zodiac"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_2_ZODIAC_NO_HIT, "serial_2_zodiac_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_ZODIAC_NO_HIT, "serial_3_zodiac_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ZODIAC_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_4_ZODIAC_NO_HIT, "serial_4_zodiac_not_hit"), _ZODIAC_LIST);
var SERIAL_LIST = (_SERIAL_LIST = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SPECIAL_SERIAL, "serial_special_mix"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_HIT_3, "regular_3_hit_3"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_HIT_2, "regular_3_hit_2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_2_HIT_2, "regular_2_hit_2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_4_HIT_1, "regular_4_hit_1"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_5_NO_HIT, "serial_5_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_6_NO_HIT, "serial_6_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_7_NO_HIT, "serial_7_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_8_NO_HIT, "serial_8_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_9_NO_HIT, "serial_9_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_10_NO_HIT, "serial_10_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_11_NO_HIT, "serial_11_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_12_NO_HIT, "serial_12_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_2_TAIL, "serial_2_tail"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_2_TAIL_NO_HIT, "serial_2_tail_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_TAIL, "serial_3_tail"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_3_TAIL_NO_HIT, "serial_3_tail_not_hit"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_4_TAIL, "serial_4_tail"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_SERIAL_LIST, _index__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SERIAL_4_TAIL_NO_HIT, "serial_4_tail_not_hit"), _SERIAL_LIST);
var ZODIAC_TAIL_LIST = {
  ZODIAC: ["zodiac_1", "zodiac_2", "zodiac_3", "zodiac_4", "zodiac_5", "zodiac_6", "zodiac_7", "zodiac_8", "zodiac_9", "zodiac_10", "zodiac_11", "zodiac_12"],
  TAIL: ["tail_0", "tail_1", "tail_2", "tail_3", "tail_4", "tail_5", "tail_6", "tail_7", "tail_8", "tail_9"]
};
var ZODIAC_AMOUNT_LIST = ["zodiac_amount_2", "zodiac_amount_3", "zodiac_amount_4", "zodiac_amount_5", "zodiac_amount_6", "zodiac_amount_7", "zodiac_amount_odd", "zodiac_amount_even"];
var ZODIAC_MULTI_LIST = ["special_multi_2_zodiac", "special_multi_3_zodiac", "special_multi_4_zodiac", "special_multi_5_zodiac", "special_multi_6_zodiac", "special_multi_7_zodiac", "special_multi_8_zodiac", "special_multi_9_zodiac", "special_multi_10_zodiac", "special_multi_11_zodiac"];

/***/ }),

/***/ "./core/constants/marksix_n1/as5fhk6n1/dictionary.js":
/*!***********************************************************!*\
  !*** ./core/constants/marksix_n1/as5fhk6n1/dictionary.js ***!
  \***********************************************************/
/*! exports provided: GAME_KIND_DESC, RULE_DICTIONARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_KIND_DESC", function() { return GAME_KIND_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_DICTIONARY", function() { return RULE_DICTIONARY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./core/constants/marksix_n1/as5fhk6n1/index.js");


var _GAME_KIND_DESC, _RULE_DICTIONARY;


var GAME_KIND_DESC = (_GAME_KIND_DESC = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_GAME_KIND_DESC, ___WEBPACK_IMPORTED_MODULE_1__["GAME_KIND"].REGULAR, "正码全"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_GAME_KIND_DESC, ___WEBPACK_IMPORTED_MODULE_1__["GAME_KIND"].COLOR, "特码色波"), _GAME_KIND_DESC);
var RULE_DICTIONARY = (_RULE_DICTIONARY = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_RULE_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["GAME_KIND"].REGULAR, {
  title: GAME_KIND_DESC.REGULAR,
  desc: "<p>投注与开奖号码正码相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,17,29,36,49特码25， 其中17为正码，即中奖）"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_RULE_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["GAME_KIND"].COLOR, {
  title: GAME_KIND_DESC.COLOR,
  desc: "<p>分为「红、蓝、绿」三个色波，从中选择一注，所选型态与开奖结果相同即为中奖。（例：选择红波小，开出03,25,17,29,36,49特码08 ，其中特码08为红波小，即中奖）<br/></p>"
}), _RULE_DICTIONARY);

/***/ }),

/***/ "./core/constants/marksix_n1/as5fhk6n1/index.js":
/*!******************************************************!*\
  !*** ./core/constants/marksix_n1/as5fhk6n1/index.js ***!
  \******************************************************/
/*! exports provided: GAME_KIND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_KIND", function() { return GAME_KIND; });
var GAME_KIND = {
  REGULAR: "REGULAR",
  // 正碼全
  COLOR: "COLOR" // 特码色波

};

/***/ }),

/***/ "./core/hooks/useAnimation.js":
/*!************************************!*\
  !*** ./core/hooks/useAnimation.js ***!
  \************************************/
/*! exports provided: useAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");





var useAnimation = function useAnimation(_ref) {
  var image = _ref.image,
      id = _ref.id,
      mc = _ref.mc,
      showFinal = _ref.showFinal,
      showMain = _ref.showMain,
      showRunLoop = _ref.showRunLoop;
  var previous = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.RecentInfo.previous;
  });
  var _previous$expect = previous.expect,
      expect = _previous$expect === void 0 ? "" : _previous$expect,
      _previous$winning_num = previous.winning_numbers,
      winning_numbers = _previous$winning_num === void 0 ? "" : _previous$winning_num;
  var mute = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Query.mute;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var anim_containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var dom_overlay_containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var runningAnimationRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
  var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var exportRootRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var muteRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(mute);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var start =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, _mc, AdobeAn, createjs, comp, lib, loader, handleFileLoad, handleComplete;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                handleComplete = function _ref4(evt, comp) {
                  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
                  var lib = comp.getLibrary();
                  var ss = comp.getSpriteSheet();
                  var queue = evt.target;
                  var ssMetadata = lib.ssMetadata;

                  for (var i = 0; i < ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                      images: [queue.getResult(ssMetadata[i].name)],
                      frames: ssMetadata[i].frames
                    });
                  }

                  exportRoot = new lib.exportRoot();
                  stage = new lib.Stage(canvas);
                  exportRootRef.current = exportRoot; //Registers the "tick" event listener.

                  fnStartAnimation = function fnStartAnimation() {
                    stage.addChild(exportRoot);
                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
                    createjs.Ticker.addEventListener("tick", stage);
                    var ready = false;
                    stage.addEventListener("tick", function () {
                      handleTick();

                      if (!ready) {
                        ready = true;
                        setInit(true);
                        setLoading(false);
                      }
                    });

                    function getProjectionMatrix(totalDepth) {
                      var focalLength = 528.25;
                      var projectionCenter = {
                        x: lib.properties.width / 2,
                        y: lib.properties.height / 2
                      };
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
                          if (cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined) cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
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
                            var stageCenter = {
                              x: lib.properties.width / 2,
                              y: lib.properties.height / 2
                            };
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
                          } //Offset by camera depth


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
                  }; //Code to support hidpi screens and responsive scaling.


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
                        if (respDim == "width" && lastW == iw || respDim == "height" && lastH == ih) {
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
                };

                handleFileLoad = function _ref3(evt, comp) {
                  var images = comp.getImages();

                  if (evt && evt.item.type == "image") {
                    images[evt.item.id] = evt.result;
                  }
                };

                _context.next = 4;
                return Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_loadImage"])(image);

              case 4:
                _mc = mc(window.createjs || {}, {}, playSound), AdobeAn = _mc.AdobeAn, createjs = _mc.createjs;
                canvas = canvasRef.current;
                anim_container = anim_containerRef.current;
                dom_overlay_container = dom_overlay_containerRef.current;
                comp = AdobeAn.getComposition(id);
                lib = comp.getLibrary();
                window.createjs.MotionGuidePlugin.install();
                loader = new createjs.LoadQueue(false);
                loader.installPlugin(window.createjs.Sound);
                loader.addEventListener("fileload", function (evt) {
                  handleFileLoad(evt, comp);
                });
                loader.addEventListener("complete", function (evt) {
                  handleComplete(evt, comp);
                });
                lib = comp.getLibrary();
                loader.loadManifest(lib.properties.manifest);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function start() {
        return _ref2.apply(this, arguments);
      };
    }();

    start();
    return function () {
      runningAnimationRef.current = false;
      instanceRef.current && (instanceRef.current.paused = true);
      window.createjs.Sound.stop();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (init) {
      if (winning_numbers) {
        var numbers = winning_numbers.split(",");
        showFinal(numbers);
      } else {
        showRunLoop();
      }
    }
  }, [init]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (init && expect) {
      showRunLoop();
    }
  }, [expect]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (init && winning_numbers) {
      var numbers = winning_numbers.split(",");
      showMain(numbers);
    }
  }, [winning_numbers]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    muteRef.current = mute;

    if (instanceRef.current) {
      instanceRef.current.volume = muteRef.current ? 0 : 1;
    }
  }, [mute]);

  var playSound = function playSound(id, loop) {
    if (runningAnimationRef.current) {
      instanceRef.current = window.createjs.Sound.play(id, window.createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
      instanceRef.current.volume = muteRef.current ? 0 : 1;
      return instanceRef.current;
    }
  };

  return {
    loading: loading,
    anim_containerRef: anim_containerRef,
    canvasRef: canvasRef,
    dom_overlay_containerRef: dom_overlay_containerRef,
    exportRootRef: exportRootRef
  };
};

/***/ }),

/***/ "./core/hooks/useBetConfirm.js":
/*!*************************************!*\
  !*** ./core/hooks/useBetConfirm.js ***!
  \*************************************/
/*! exports provided: useBetConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBetConfirm", function() { return useBetConfirm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Dialog */ "./core/reducer/Dialog.js");




var useBetConfirm = function useBetConfirm() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      totalBets = _useContext.totalBets;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showBetConfirm = _useState[0],
      setState = _useState[1];

  var onOpenBetConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (totalBets > 0) {
      setState(true);
    } else {
      dispatch(Object(_core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__["showDialog"])({
        message: "请至少选择一注"
      }));
    }
  }, [totalBets]);
  var onCloseBetConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setState(false);
  }, [showBetConfirm]);
  return {
    showBetConfirm: showBetConfirm,
    onOpenBetConfirm: onOpenBetConfirm,
    onCloseBetConfirm: onCloseBetConfirm
  };
};

/***/ }),

/***/ "./core/hooks/useCleaningConfirm.js":
/*!******************************************!*\
  !*** ./core/hooks/useCleaningConfirm.js ***!
  \******************************************/
/*! exports provided: useCleaningConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCleaningConfirm", function() { return useCleaningConfirm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultipleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleContext */ "./core/hooks/MultipleContext.js");


var useCleaningConfirm = function useCleaningConfirm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_MultipleContext__WEBPACK_IMPORTED_MODULE_1__["MultipleContext"]),
      totalBets = _useContext.totalBets;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showCleanConfirm = _useState[0],
      setState = _useState[1];

  var onOpenCleanConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (totalBets > 0) {
      setState(true);
    }
  }, [totalBets]);
  var onCloseCleanConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setState(false);
  }, [showCleanConfirm]);
  return {
    showCleanConfirm: showCleanConfirm,
    onOpenCleanConfirm: onOpenCleanConfirm,
    onCloseCleanConfirm: onCloseCleanConfirm
  };
};

/***/ }),

/***/ "./core/hooks/useClickOutside.js":
/*!***************************************!*\
  !*** ./core/hooks/useClickOutside.js ***!
  \***************************************/
/*! exports provided: useClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClickOutside", function() { return useClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useClickOutside = function useClickOutside(state, setState) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (state && ref.current && !ref.current.contains(event.target)) {
        setState(false);
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside, false);
    return function () {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [state]);
  return ref;
};

/***/ }),

/***/ "./core/hooks/useClock.js":
/*!********************************!*\
  !*** ./core/hooks/useClock.js ***!
  \********************************/
/*! exports provided: useClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClock", function() { return useClock; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_reducer_RecentInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/reducer/RecentInfo */ "./core/reducer/RecentInfo.js");







var useClock = function useClock() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      countdown = _useState[0],
      setCountdown = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var last_sell_date_time = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _ref = state.RecentInfo.current || {},
        _ref$last_sell_date_t = _ref.last_sell_date_time,
        last_sell_date_time = _ref$last_sell_date_t === void 0 ? "" : _ref$last_sell_date_t;

    return last_sell_date_time;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (last_sell_date_time) {
      var time = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_5__["_transformSpanTime"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(), last_sell_date_time);

      var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(-1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (acc, curr) {
        return curr ? curr + acc : acc;
      }, time), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function (v) {
        return v >= 0;
      })).subscribe({
        next: function next(time) {
          setCountdown(time);
        },
        complete: function complete() {
          dispatch(Object(_core_reducer_RecentInfo__WEBPACK_IMPORTED_MODULE_6__["currentFinished"])());
        }
      });
      return function () {
        timer$.unsubscribe();
      };
    }
  }, [last_sell_date_time]);
  return countdown;
};

/***/ }),

/***/ "./core/hooks/useFairLink.js":
/*!***********************************!*\
  !*** ./core/hooks/useFairLink.js ***!
  \***********************************/
/*! exports provided: useFairLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFairLink", function() { return useFairLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Dialog */ "./core/reducer/Dialog.js");
/* harmony import */ var _core_reducer_Fair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/reducer/Fair */ "./core/reducer/Fair.js");





var useFairLink = function useFairLink() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var fairLink = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Fair.url;
  });
  var expect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$History$list = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.History.list, 1),
        _state$History$list$ = _state$History$list[0],
        first = _state$History$list$ === void 0 ? {} : _state$History$list$;

    var _first$expect = first.expect,
        expect = _first$expect === void 0 ? "" : _first$expect;
    return expect;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (expect) {
      dispatch(Object(_core_reducer_Fair__WEBPACK_IMPORTED_MODULE_4__["fetchFair"])());
    }
  }, [expect]);
  var onOpenFairLink = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (fairLink) {
      window.open(fairLink, "_blank");
    } else {
      dispatch(Object(_core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__["showDialog"])({
        message: "验证网页开启失败 请重试，谢谢"
      }));
    }
  }, [fairLink]);
  return onOpenFairLink;
};

/***/ }),

/***/ "./core/hooks/useFirstTimeDialog.js":
/*!******************************************!*\
  !*** ./core/hooks/useFirstTimeDialog.js ***!
  \******************************************/
/*! exports provided: useFirstTimeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFirstTimeDialog", function() { return useFirstTimeDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_reducer_Query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Query */ "./core/reducer/Query.js");




var useFirstTimeDialog = function useFirstTimeDialog() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var first_time = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.first_time;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showRuleDialog = _useState[0],
      setShowRuleDialog = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(first_time),
      showIntroduceDialog = _useState2[0],
      setShowIntroduceDialog = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_core_reducer_Query__WEBPACK_IMPORTED_MODULE_3__["cleanFirstTime"])());
  }, []);

  var onCloseIntroduceDialog = function onCloseIntroduceDialog() {
    setShowIntroduceDialog(false);
    setShowRuleDialog(true);
  };

  var onCloseRuleDialog = function onCloseRuleDialog() {
    setShowRuleDialog(false);
  };

  return {
    showIntroduceDialog: showIntroduceDialog,
    onCloseIntroduceDialog: onCloseIntroduceDialog,
    showRuleDialog: showRuleDialog,
    onCloseRuleDialog: onCloseRuleDialog
  };
};

/***/ }),

/***/ "./core/hooks/useImage.js":
/*!********************************!*\
  !*** ./core/hooks/useImage.js ***!
  \********************************/
/*! exports provided: useImage, useAnimationImage, useAnimationSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImage", function() { return useImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimationImage", function() { return useAnimationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimationSound", function() { return useAnimationSound; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libraries/getLink */ "./core/libraries/getLink.js");


var useImage = function useImage() {
  var BaseInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.BaseInfo;
  });
  var game_code = BaseInfo.game_code,
      game_group = BaseInfo.game_group;
  return function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__["getLink"])("".concat(game_group, "/").concat(game_code, "/mobile/images/").concat(name));
  };
};
var useAnimationImage = function useAnimationImage() {
  var BaseInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.BaseInfo;
  });
  var game_code = BaseInfo.game_code,
      game_group = BaseInfo.game_group;
  return function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__["getLink"])("".concat(game_group, "/").concat(game_code, "/animation/images/").concat(name));
  };
};
var useAnimationSound = function useAnimationSound() {
  var BaseInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.BaseInfo;
  });
  var game_code = BaseInfo.game_code,
      game_group = BaseInfo.game_group;
  return function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_core_libraries_getLink__WEBPACK_IMPORTED_MODULE_1__["getLink"])("".concat(game_group, "/").concat(game_code, "/animation/sounds/").concat(name));
  };
};

/***/ }),

/***/ "./core/hooks/useLastNumbers.js":
/*!**************************************!*\
  !*** ./core/hooks/useLastNumbers.js ***!
  \**************************************/
/*! exports provided: useLastNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLastNumbers", function() { return useLastNumbers; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_reducer_EarnInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/EarnInfo */ "./core/reducer/EarnInfo.js");




var useLastNumbers = function useLastNumbers(_ref) {
  var _ref$length = _ref.length,
      length = _ref$length === void 0 ? 4 : _ref$length,
      _ref$delayTime = _ref.delayTime,
      delayTime = _ref$delayTime === void 0 ? 5000 : _ref$delayTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isFirstTime = _useState[0],
      setIsFirstTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: length
  }, function () {
    return "-";
  })),
      numbers = _useState2[0],
      setNumbers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("数据获取中..."),
      expect = _useState3[0],
      setExpect = _useState3[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var previous = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.RecentInfo.previous;
  });
  var lastHistory = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.History.list[0] || {};
  });
  var clearBadge = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.EarnInfo.clearBadge;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isFirstTime && previous.hasOwnProperty("winning_numbers") && lastHistory.numbers) {
      if (previous.winning_numbers) {
        setNumbers(previous.winning_numbers.split(","));
        setExpect(previous.expect);
        !clearBadge[previous.expect] && onFetchEarnInfo(previous.expect);
      } else {
        setNumbers(lastHistory.numbers.split(","));
        setExpect(lastHistory.expect);
        !clearBadge[lastHistory.expect] && onFetchEarnInfo(lastHistory.expect);
      }

      setIsFirstTime(false);
    }
  }, [isFirstTime, previous.winning_numbers, lastHistory.numbers]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isFirstTime && previous.winning_numbers) {
      var timeout = setTimeout(function () {
        setNumbers(previous.winning_numbers.split(","));
        setExpect(previous.expect);
        onFetchEarnInfo(previous.expect);
      }, delayTime);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [previous.winning_numbers]);

  var onFetchEarnInfo = function onFetchEarnInfo(expect) {
    dispatch(Object(_core_reducer_EarnInfo__WEBPACK_IMPORTED_MODULE_3__["fetchEarnInfo"])({
      expect: expect
    }));
  };

  return {
    numbers: numbers,
    expect: expect
  };
};

/***/ }),

/***/ "./core/hooks/useMultipleMenu.js":
/*!***************************************!*\
  !*** ./core/hooks/useMultipleMenu.js ***!
  \***************************************/
/*! exports provided: useMultipleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultipleMenu", function() { return useMultipleMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useClickOutside */ "./core/hooks/useClickOutside.js");


var useMultipleMenu = function useMultipleMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showMultipleMenu = _useState[0],
      setShowMultiple = _useState[1];

  var multipleMenuRef = Object(_useClickOutside__WEBPACK_IMPORTED_MODULE_1__["useClickOutside"])(showMultipleMenu, setShowMultiple);
  var toggleMultipleMenu = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowMultiple(!showMultipleMenu);
  }, [showMultipleMenu]);
  return {
    showMultipleMenu: showMultipleMenu,
    toggleMultipleMenu: toggleMultipleMenu,
    multipleMenuRef: multipleMenuRef
  };
};

/***/ }),

/***/ "./core/hooks/useRuleDialog.js":
/*!*************************************!*\
  !*** ./core/hooks/useRuleDialog.js ***!
  \*************************************/
/*! exports provided: useRuleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRuleDialog", function() { return useRuleDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useRuleDialog = function useRuleDialog() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showRuleDialog = _useState[0],
      setState = _useState[1];

  var onOpenRuleDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setState(true);
  }, [showRuleDialog]);
  var onCloseRuleDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setState(false);
  }, [showRuleDialog]);
  return {
    showRuleDialog: showRuleDialog,
    onOpenRuleDialog: onOpenRuleDialog,
    onCloseRuleDialog: onCloseRuleDialog
  };
};

/***/ }),

/***/ "./core/hooks/useToggleMute.js":
/*!*************************************!*\
  !*** ./core/hooks/useToggleMute.js ***!
  \*************************************/
/*! exports provided: useToggleMute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggleMute", function() { return useToggleMute; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_reducer_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/reducer/Query */ "./core/reducer/Query.js");


var useToggleMute = function useToggleMute() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  var mute = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.Query.mute;
  });

  var onToggleMute = function onToggleMute() {
    dispatch(Object(_core_reducer_Query__WEBPACK_IMPORTED_MODULE_1__["toggleMute"])());
  };

  return {
    mute: mute,
    onToggleMute: onToggleMute
  };
};

/***/ }),

/***/ "./core/hooks/useVersion.js":
/*!**********************************!*\
  !*** ./core/hooks/useVersion.js ***!
  \**********************************/
/*! exports provided: useVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVersion", function() { return useVersion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package */ "./package.json", 1);
/* harmony import */ var _core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Dialog */ "./core/reducer/Dialog.js");




var useVersion = function useVersion() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var getVirsion = function getVirsion() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (count > 5) {
      dispatch(Object(_core_reducer_Dialog__WEBPACK_IMPORTED_MODULE_3__["showDialog"])({
        message: "\u7248\u865F: ".concat(_package__WEBPACK_IMPORTED_MODULE_2__["version"], " \n\u7576\u524D\u74B0\u5883:").concat(window.location.href)
      }));
      setCount(0);
    }
  }, [count]);
  return getVirsion;
};

/***/ }),

/***/ "./core/libraries/getCurrencyImage.js":
/*!********************************************!*\
  !*** ./core/libraries/getCurrencyImage.js ***!
  \********************************************/
/*! exports provided: getCurrencyImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyImage", function() { return getCurrencyImage; });
/* harmony import */ var _getLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLink */ "./core/libraries/getLink.js");

var getCurrencyImage = function getCurrencyImage(currency) {
  return Object(_getLink__WEBPACK_IMPORTED_MODULE_0__["getLink"])("currency/".concat(currency, ".png"));
};

/***/ }),

/***/ "./core/libraries/getLink.js":
/*!***********************************!*\
  !*** ./core/libraries/getLink.js ***!
  \***********************************/
/*! exports provided: getLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLink", function() { return getLink; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

var _getConfig$publicRunt = next_config__WEBPACK_IMPORTED_MODULE_0___default()().publicRuntimeConfig,
    PUBLIC = _getConfig$publicRunt.PUBLIC,
    BUILD_ID = _getConfig$publicRunt.BUILD_ID,
    CDN_ENV = _getConfig$publicRunt.CDN_ENV,
    CDN_PATH = _getConfig$publicRunt.CDN_PATH,
    USE_CDN = _getConfig$publicRunt.USE_CDN;
var getLink = function getLink(url) {
  if (USE_CDN) {
    return "".concat(CDN_PATH).concat(CDN_ENV, "/static/").concat(BUILD_ID, "/").concat(url);
  } else {
    if (PUBLIC) {
      return "/static/".concat(BUILD_ID, "/").concat(url);
    }

    return "/static/".concat(url);
  }
};

/***/ }),

/***/ "./core/reducer/Query.js":
/*!*******************************!*\
  !*** ./core/reducer/Query.js ***!
  \*******************************/
/*! exports provided: SET_QUERY, TOGGLE_MUTE, CLEAN_FIRST_TIME, setQuery, toggleMute, cleanFirstTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_QUERY", function() { return SET_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MUTE", function() { return TOGGLE_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FIRST_TIME", function() { return CLEAN_FIRST_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuery", function() { return setQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMute", function() { return toggleMute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFirstTime", function() { return cleanFirstTime; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var SET_QUERY = "SET_QUERY";
var TOGGLE_MUTE = "TOGGLE_MUTE";
var CLEAN_FIRST_TIME = "CLEAN_FIRST_TIME";
var setQuery = function setQuery(payload) {
  return {
    type: SET_QUERY,
    payload: payload
  };
};
var toggleMute = function toggleMute() {
  return {
    type: TOGGLE_MUTE
  };
};
var cleanFirstTime = function cleanFirstTime() {
  return {
    type: CLEAN_FIRST_TIME
  };
};
var InitialState = {
  os: "",
  vendor_id: "",
  first_time: false,
  currency: "RMB",
  mute: false,
  currency_rate: "1"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_QUERY:
      var _action$payload = action.payload,
          os = _action$payload.os,
          vendor_id = _action$payload.vendor_id,
          first_time = _action$payload.first_time,
          currency = _action$payload.currency,
          mute = _action$payload.mute,
          currency_rate = _action$payload.currency_rate;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        os: os,
        vendor_id: vendor_id,
        first_time: first_time,
        currency: currency,
        mute: mute,
        currency_rate: currency_rate
      });

    case TOGGLE_MUTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        mute: !state.mute
      });

    case CLEAN_FIRST_TIME:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        first_time: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isUndefined, isNull, isPlainObject, isObject, isAnyObject, isObjectLike, isFunction, isArray, isString, isFullString, isEmptyString, isNumber, isBoolean, isRegExp, isDate, isSymbol, isPrimitive, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/chunk.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/chunk.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, merge, concatArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = props.concat(symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.3.2");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.3.2" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.3.2", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.3.2" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

var isHMREnabled =  true && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"lottery_web\",\"version\":\"0.1.2\",\"private\":true,\"scripts\":{\"dev\":\"babel-node server.js\",\"build\":\"next build\",\"start\":\"babel-node server.js\",\"release\":\"standard-version\"},\"dependencies\":{\"big.js\":\"^5.2.2\",\"buffer\":\"^5.4.2\",\"cookie-parser\":\"^1.4.4\",\"dotenv\":\"^8.1.0\",\"express\":\"^4.17.1\",\"immutable\":\"^4.0.0-rc.12\",\"lodash\":\"^4.17.15\",\"next\":\"9.0.5\",\"next-redux-wrapper\":\"^3.0.0\",\"nprogress\":\"^0.2.0\",\"react\":\"16.9.0\",\"react-dom\":\"16.9.0\",\"react-redux\":\"^7.1.1\",\"redux\":\"^4.0.4\",\"redux-observable\":\"^1.1.0\",\"rxjs\":\"^6.5.2\",\"standard-version\":\"^7.0.0\",\"styled-components\":\"^4.3.2\",\"superagent\":\"^5.1.0\",\"ua-parser-js\":\"^0.7.20\",\"universal-rxjs-ajax\":\"^2.0.3\"},\"devDependencies\":{\"@babel/core\":\"^7.5.4\",\"@babel/node\":\"^7.5.0\",\"babel-plugin-lodash\":\"^3.3.4\",\"babel-plugin-styled-components\":\"^1.10.6\"}}");

/***/ })

}]);
//# sourceMappingURL=2.js.map