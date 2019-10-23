(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./components/pc28/as5f28/Clock.js":
/*!*****************************************!*\
  !*** ./components/pc28/as5f28/Clock.js ***!
  \*****************************************/
/*! exports provided: As5f28Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28Clock", function() { return As5f28Clock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useClock */ "./core/hooks/useClock.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var As5f28Clock = function As5f28Clock() {
  var countdown = Object(_core_hooks_useClock__WEBPACK_IMPORTED_MODULE_1__["useClock"])();

  var seconds = Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_2__["_pad"])(Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_2__["_transformMinutesToSeconds"])(countdown), 3);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "next_tit"
  }, "\u8DDD\u79BB\u4E0B\u671F"), __jsx("h2", null, seconds), __jsx("div", {
    className: "next_sec"
  }, "\u79D2"));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/BigSmall.js":
/*!*******************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/BigSmall.js ***!
  \*******************************************************/
/*! exports provided: BigSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigSmall", function() { return BigSmall; });
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var BigSmall = function BigSmall() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default()(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__["BIG_SMALL_LIST"], 4).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "number_con"
    }, block.map(function (bet_type) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      var isActive = itemList.has(bet_type);
      return __jsx("div", {
        key: bet_type,
        className: "number_box3 ".concat(isActive ? "active" : ""),
        onClick: onToggleItem(bet_type)
      }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds)));
    }));
  }));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/Color.js":
/*!****************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/Color.js ***!
  \****************************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Color = function Color() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config,
      color_config = config.color_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__["COLOR_LIST"].map(function (bet_type) {
    var _bet_type$split = bet_type.split("_"),
        _bet_type$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_bet_type$split, 3),
        color = _bet_type$split2[2];

    var numbers = color_config["".concat(color, "_numbers")];

    var _ref = bet_odds_config[bet_type] || {},
        _ref$odds = _ref.odds,
        odds = _ref$odds === void 0 ? 0 : _ref$odds,
        _ref$bet_type_msg = _ref.bet_type_msg,
        bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

    var isActive = itemList.has(bet_type);
    return __jsx("div", {
      key: bet_type,
      className: "number_".concat(color, " ").concat(isActive ? "active" : ""),
      onClick: onToggleItem(bet_type)
    }, __jsx("div", null, bet_type_msg), __jsx("div", {
      className: "color_".concat(color)
    }, numbers.map(function (value) {
      return __jsx("div", {
        key: value
      }, value);
    })), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds)));
  }));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/DivisorThree.js":
/*!***********************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/DivisorThree.js ***!
  \***********************************************************/
/*! exports provided: DivisorThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisorThree", function() { return DivisorThree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DivisorThree = function DivisorThree() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, __jsx("div", {
    className: "number_con"
  }, _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__["DIVISOR_THREE_LIST"].map(function (bet_type) {
    var _ref = bet_odds_config[bet_type] || {},
        _ref$odds = _ref.odds,
        odds = _ref$odds === void 0 ? 0 : _ref$odds,
        _ref$bet_type_msg = _ref.bet_type_msg,
        bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

    var isActive = itemList.has(bet_type);
    return __jsx("div", {
      key: bet_type,
      className: "number_box2 ".concat(isActive ? "active" : ""),
      onClick: onToggleItem(bet_type)
    }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds)));
  })));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/ExtremelyBigSmall.js":
/*!****************************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/ExtremelyBigSmall.js ***!
  \****************************************************************/
/*! exports provided: ExtremelyBigSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtremelyBigSmall", function() { return ExtremelyBigSmall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ExtremelyBigSmall = function ExtremelyBigSmall() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, __jsx("div", {
    className: "number_con"
  }, _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__["EXTREMELY_BIG_SMALL_LIST"].map(function (bet_type) {
    var _ref = bet_odds_config[bet_type] || {},
        _ref$odds = _ref.odds,
        odds = _ref$odds === void 0 ? 0 : _ref$odds,
        _ref$bet_type_msg = _ref.bet_type_msg,
        bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

    var isActive = itemList.has(bet_type);
    return __jsx("div", {
      key: bet_type,
      className: "number_box4 ".concat(isActive ? "active" : ""),
      onClick: onToggleItem(bet_type)
    }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds)));
  })));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/GuessNumber.js":
/*!**********************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/GuessNumber.js ***!
  \**********************************************************/
/*! exports provided: GuessNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuessNumber", function() { return GuessNumber; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var GuessNumber = function GuessNumber() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_4__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["GUESS_NUMBER_LIST"], 4).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "number_con"
    }, block.concat(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
      length: 4 - block.length
    }, function () {
      return "";
    })).map(function (bet_type, index) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      var isActive = itemList.has(bet_type);
      return bet_type ? __jsx("div", {
        key: bet_type,
        className: "number_box1 ".concat(isActive ? "active" : ""),
        onClick: onToggleItem(bet_type)
      }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_5__["_floorWithDigits"])(odds))) : __jsx("div", {
        key: index,
        className: "none"
      });
    }));
  }));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/Leopard.js":
/*!******************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/Leopard.js ***!
  \******************************************************/
/*! exports provided: Leopard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leopard", function() { return Leopard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Leopard = function Leopard() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_5__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__["LEOPARD_LIST"].map(function (bet_type) {
    var _ref = bet_odds_config[bet_type] || {},
        _ref$odds = _ref.odds,
        odds = _ref$odds === void 0 ? 0 : _ref$odds;

    var isActive = itemList.has(bet_type);
    return __jsx("div", {
      key: bet_type,
      className: "number_leopard ".concat(isActive ? "active" : ""),
      onClick: onToggleItem(bet_type)
    }, __jsx("div", {
      className: "leopard_con"
    }, __jsx("img", {
      src: image("img_leo.png"),
      alt: ""
    }), "+", __jsx("img", {
      src: image("img_leo.png"),
      alt: ""
    }), "+", __jsx("img", {
      src: image("img_leo.png"),
      alt: ""
    })), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds)));
  }));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/Side.js":
/*!***************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/Side.js ***!
  \***************************************************/
/*! exports provided: Side */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Side", function() { return Side; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Side = function Side() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, __jsx("div", {
    className: "number_con"
  }, _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_4__["SIDE_LIST"].map(function (bet_type) {
    var _ref = bet_odds_config[bet_type] || {},
        _ref$odds = _ref.odds,
        odds = _ref$odds === void 0 ? 0 : _ref$odds,
        _ref$bet_type_msg = _ref.bet_type_msg,
        bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

    var isActive = itemList.has(bet_type);
    return __jsx("div", {
      key: bet_type,
      className: "number_box5 ".concat(isActive ? "active" : ""),
      onClick: onToggleItem(bet_type)
    }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_3__["_floorWithDigits"])(odds)));
  })));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/Sum.js":
/*!**************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/Sum.js ***!
  \**************************************************/
/*! exports provided: Sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sum", function() { return Sum; });
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/libraries/utils */ "./core/libraries/utils.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Sum = function Sum() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Config.config.pc28;
  });
  var bet_odds_config = config.bet_odds_config;

  var onToggleItem = function onToggleItem(bet_type) {
    return function () {
      itemListHandle.toggle(bet_type, {
        bet_type: bet_type
      });
    };
  };

  return __jsx("section", {
    className: "play_number"
  }, lodash_chunk__WEBPACK_IMPORTED_MODULE_0___default()(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_5__["SUM_LIST"], 4).map(function (block, index) {
    return __jsx("div", {
      key: index,
      className: "number_con"
    }, block.map(function (bet_type) {
      var _ref = bet_odds_config[bet_type] || {},
          _ref$odds = _ref.odds,
          odds = _ref$odds === void 0 ? 0 : _ref$odds,
          _ref$bet_type_msg = _ref.bet_type_msg,
          bet_type_msg = _ref$bet_type_msg === void 0 ? "" : _ref$bet_type_msg;

      var isActive = itemList.has(bet_type);
      return __jsx("div", {
        key: bet_type,
        className: "number_box1 ".concat(isActive ? "active" : ""),
        onClick: onToggleItem(bet_type)
      }, __jsx("div", null, bet_type_msg), __jsx("div", null, Object(_core_libraries_utils__WEBPACK_IMPORTED_MODULE_4__["_floorWithDigits"])(odds)));
    }));
  }));
};

/***/ }),

/***/ "./components/pc28/as5f28/GameCenter/index.js":
/*!****************************************************!*\
  !*** ./components/pc28/as5f28/GameCenter/index.js ***!
  \****************************************************/
/*! exports provided: As5f28Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28Game", function() { return As5f28Game; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/GameSwitchContext */ "./components/pc28/common/GameSwitchContext.js");
/* harmony import */ var _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/pc28 */ "./core/constants/pc28/index.js");
/* harmony import */ var _Sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sum */ "./components/pc28/as5f28/GameCenter/Sum.js");
/* harmony import */ var _DivisorThree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DivisorThree */ "./components/pc28/as5f28/GameCenter/DivisorThree.js");
/* harmony import */ var _BigSmall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BigSmall */ "./components/pc28/as5f28/GameCenter/BigSmall.js");
/* harmony import */ var _ExtremelyBigSmall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExtremelyBigSmall */ "./components/pc28/as5f28/GameCenter/ExtremelyBigSmall.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ "./components/pc28/as5f28/GameCenter/Color.js");
/* harmony import */ var _Side__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Side */ "./components/pc28/as5f28/GameCenter/Side.js");
/* harmony import */ var _Leopard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Leopard */ "./components/pc28/as5f28/GameCenter/Leopard.js");
/* harmony import */ var _GuessNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GuessNumber */ "./components/pc28/as5f28/GameCenter/GuessNumber.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var As5f28Game = function As5f28Game() {
  var _KIND_TYPE$SUM$KIND_T;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_2__["GameSwitchContext"]),
      gameKind = _useContext.gameKind;

  return __jsx("article", {
    style: {
      flex: 1,
      overflow: "auto"
    }
  }, (_KIND_TYPE$SUM$KIND_T = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].SUM, __jsx(_Sum__WEBPACK_IMPORTED_MODULE_4__["Sum"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].DIVISOR_THREE, __jsx(_DivisorThree__WEBPACK_IMPORTED_MODULE_5__["DivisorThree"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].BIG_SMALL, __jsx(_BigSmall__WEBPACK_IMPORTED_MODULE_6__["BigSmall"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].EXTREMELY_BIG_SMALL, __jsx(_ExtremelyBigSmall__WEBPACK_IMPORTED_MODULE_7__["ExtremelyBigSmall"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].COLOR, __jsx(_Color__WEBPACK_IMPORTED_MODULE_8__["Color"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].SIDE, __jsx(_Side__WEBPACK_IMPORTED_MODULE_9__["Side"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].LEOPARD, __jsx(_Leopard__WEBPACK_IMPORTED_MODULE_10__["Leopard"], null)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_3__["KIND_TYPE"].GUESS_NUMBER, __jsx(_GuessNumber__WEBPACK_IMPORTED_MODULE_11__["GuessNumber"], null)), _KIND_TYPE$SUM$KIND_T)[gameKind] || null);
};

/***/ }),

/***/ "./components/pc28/as5f28/GameKindMenu.js":
/*!************************************************!*\
  !*** ./components/pc28/as5f28/GameKindMenu.js ***!
  \************************************************/
/*! exports provided: As5f28GameKindMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28GameKindMenu", function() { return As5f28GameKindMenu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/GameSwitchContext */ "./components/pc28/common/GameSwitchContext.js");
/* harmony import */ var _core_constants_pc28_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/pc28/dictionary */ "./core/constants/pc28/dictionary.js");
/* harmony import */ var _core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/hooks/useClickOutside */ "./core/hooks/useClickOutside.js");
/* harmony import */ var _core_constants_pc28__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/constants/pc28 */ "./core/constants/pc28/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var As5f28GameKindMenu = function As5f28GameKindMenu() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_4__["GameSwitchContext"]),
      showGameKindMenu = _useContext.showGameKindMenu,
      toggleGameKindMenu = _useContext.toggleGameKindMenu,
      gameKind = _useContext.gameKind,
      setGameKind = _useContext.setGameKind;

  var navRef = Object(_core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_6__["useClickOutside"])(showGameKindMenu, toggleGameKindMenu);

  var onConfirm = function onConfirm(value) {
    return function (event) {
      event.stopPropagation();
      setGameKind(value);
      onClose();
    };
  };

  var onClose = function onClose() {
    toggleGameKindMenu(false);
  };

  return __jsx("nav", {
    onClick: function onClick() {
      return toggleGameKindMenu(!showGameKindMenu);
    }
  }, __jsx("div", {
    className: "play_option"
  }, "\u73A9\u6CD5\u9009\u62E9"), __jsx("h2", null, _core_constants_pc28_dictionary__WEBPACK_IMPORTED_MODULE_5__["KINDS_NAME"][gameKind]), __jsx("div", {
    className: "play_arr"
  }, __jsx("img", {
    src: image("".concat(showGameKindMenu ? "nav_down.png" : "nav_up.png")),
    alt: ""
  })), __jsx("div", {
    ref: navRef,
    className: "menu ".concat(showGameKindMenu ? "active" : "")
  }, __jsx("h3", null, "\u8BF7\u9009\u62E9\u4E00\u73A9\u6CD5"), lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_core_constants_pc28__WEBPACK_IMPORTED_MODULE_7__["KIND_TYPE"]), 3).map(function (block, index) {
    return __jsx("ul", {
      key: index
    }, block.map(function (kind) {
      return __jsx("li", {
        key: kind,
        className: "".concat(gameKind === kind ? "active" : "")
      }, __jsx("a", {
        onClick: onConfirm(kind)
      }, _core_constants_pc28_dictionary__WEBPACK_IMPORTED_MODULE_5__["KINDS_NAME"][kind]));
    }));
  })));
};

/***/ }),

/***/ "./components/pc28/as5f28/Header.js":
/*!******************************************!*\
  !*** ./components/pc28/as5f28/Header.js ***!
  \******************************************/
/*! exports provided: As5f28Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28Header", function() { return As5f28Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./components/pc28/as5f28/Menu.js");
/* harmony import */ var _GameKindMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameKindMenu */ "./components/pc28/as5f28/GameKindMenu.js");
/* harmony import */ var _LastNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LastNumbers */ "./components/pc28/as5f28/LastNumbers.js");
/* harmony import */ var _core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/hooks/useVersion */ "./core/hooks/useVersion.js");
/* harmony import */ var _core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/hooks/useWebView */ "./core/hooks/useWebView.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var As5f28Header = function As5f28Header() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__["useImage"])();

  var _useWebView = Object(_core_hooks_useWebView__WEBPACK_IMPORTED_MODULE_6__["useWebView"])(),
      backApp = _useWebView.backApp;

  var getVersion = Object(_core_hooks_useVersion__WEBPACK_IMPORTED_MODULE_5__["useVersion"])();
  return __jsx("header", null, __jsx("div", {
    className: "close"
  }, __jsx("img", {
    src: image("btn_close.png"),
    alt: "\u5173\u95ED",
    onClick: backApp
  }), __jsx(_GameKindMenu__WEBPACK_IMPORTED_MODULE_3__["As5f28GameKindMenu"], null)), __jsx("div", {
    className: "logo"
  }, __jsx("h1", {
    onClick: getVersion
  }, __jsx("img", {
    src: image("logo.png"),
    alt: "\u5317\u4EAC28"
  })), __jsx(_LastNumbers__WEBPACK_IMPORTED_MODULE_4__["As5f28LastNumbers"], null)), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["As5f28Menu"], null));
};

/***/ }),

/***/ "./components/pc28/as5f28/LastNumbers.js":
/*!***********************************************!*\
  !*** ./components/pc28/as5f28/LastNumbers.js ***!
  \***********************************************/
/*! exports provided: As5f28LastNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28LastNumbers", function() { return As5f28LastNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useLastNumbers */ "./core/hooks/useLastNumbers.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var As5f28LastNumbers = function As5f28LastNumbers() {
  var _useLastNumbers = Object(_core_hooks_useLastNumbers__WEBPACK_IMPORTED_MODULE_1__["useLastNumbers"])({
    length: 4,
    delayTime: 0
  }),
      numbers = _useLastNumbers.numbers,
      expect = _useLastNumbers.expect;

  return __jsx("div", {
    className: "number_now"
  }, __jsx("h2", null, expect, "\u671F\u5F00\u5956"), __jsx("div", {
    className: "number_nowcon"
  }, numbers.map(function (value, index) {
    var isLast = index == numbers.length - 1;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index
    }, __jsx("div", null, value), !isLast && __jsx("div", null, index < 2 ? "+" : "="));
  })));
};

/***/ }),

/***/ "./components/pc28/as5f28/Menu.js":
/*!****************************************!*\
  !*** ./components/pc28/as5f28/Menu.js ***!
  \****************************************/
/*! exports provided: As5f28Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28Menu", function() { return As5f28Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useClickOutside */ "./core/hooks/useClickOutside.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/GoPageContext */ "./core/hooks/GoPageContext.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Clock */ "./components/pc28/as5f28/Clock.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var As5f28Menu = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_3__["useImage"])();
  var onGoPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_GoPageContext__WEBPACK_IMPORTED_MODULE_4__["GoPageContext"]);
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });
  var balance = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Auth.balance;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showMenu = _useState[0],
      toggleMenu = _useState[1];

  var menuRef = Object(_core_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_2__["useClickOutside"])(showMenu, toggleMenu);
  return __jsx("div", {
    className: "smenu"
  }, __jsx("img", {
    onClick: function onClick() {
      return toggleMenu(!showMenu);
    },
    src: image("btn_smenu.png"),
    alt: "\u9009\u5355"
  }), __jsx("nav", null, __jsx(_Clock__WEBPACK_IMPORTED_MODULE_5__["As5f28Clock"], null), __jsx("div", {
    ref: menuRef,
    className: "smenucon ".concat(showMenu ? "active" : "")
  }, __jsx("h3", null, "\u4F59\u989D\uFF1A", balance, " ", currency), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("rule");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_guide.png"),
    alt: ""
  })), __jsx("div", null, "\u73A9\u6CD5\u4ECB\u7ECD"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("history");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_numbers.png"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u516C\u544A"))), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("trend");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_trend.png"),
    alt: ""
  })), __jsx("div", null, "\u5F00\u5956\u8D70\u52BF")))), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return onGoPage("betRecord");
    }
  }, __jsx("div", null, __jsx("img", {
    src: image("menu_record.png"),
    alt: ""
  })), __jsx("div", null, "\u6295\u6CE8\u8BB0\u5F55")))))));
});

/***/ }),

/***/ "./components/pc28/as5f28/MultipleSelect.js":
/*!**************************************************!*\
  !*** ./components/pc28/as5f28/MultipleSelect.js ***!
  \**************************************************/
/*! exports provided: As5f28MultipleSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28MultipleSelect", function() { return As5f28MultipleSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/custom */ "./core/constants/custom.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var As5f28MultipleSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__["MultipleContext"]),
      multiple = _useContext.multiple,
      multipleHandle = _useContext.multipleHandle;

  var onSelect = function onSelect(value) {
    return function () {
      multipleHandle.change(value);
    };
  };

  return __jsx("nav", {
    ref: ref,
    className: "active"
  }, __jsx("h3", null, "\u5355\u6CE8\u91D1\u989D"), __jsx("ol", null, _core_constants_custom__WEBPACK_IMPORTED_MODULE_2__["MULTIPLE_MAP"].map(function (value) {
    var isActive = value === multiple;
    return __jsx("li", {
      key: value,
      className: "".concat(isActive ? "active" : ""),
      onClick: onSelect(value)
    }, value);
  })), __jsx("div", {
    className: "btn_content"
  }, __jsx("button", {
    className: "btn_repeat",
    onClick: multipleHandle.clean
  }, "\u91CD\u7F6E"), __jsx("div", {
    className: "btn_mul"
  }, __jsx("button", {
    onClick: multipleHandle.decrement
  }, "-"), __jsx("div", null, multiple), __jsx("button", {
    onClick: multipleHandle.increment
  }, "+"))));
});

/***/ }),

/***/ "./components/pc28/as5f28/index.js":
/*!*****************************************!*\
  !*** ./components/pc28/as5f28/index.js ***!
  \*****************************************/
/*! exports provided: As5f28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As5f28", function() { return As5f28; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/LayoutContainer */ "./components/common/LayoutContainer.js");
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/hooks/useCleaningConfirm */ "./core/hooks/useCleaningConfirm.js");
/* harmony import */ var _components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/common/ConfirmDialog */ "./components/common/ConfirmDialog.js");
/* harmony import */ var _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/confirmMessage */ "./core/constants/confirmMessage.js");
/* harmony import */ var _core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/hooks/useBetConfirm */ "./core/hooks/useBetConfirm.js");
/* harmony import */ var _core_hooks_useImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/hooks/useImage */ "./core/hooks/useImage.js");
/* harmony import */ var _core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/hooks/useMultipleMenu */ "./core/hooks/useMultipleMenu.js");
/* harmony import */ var _core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/libraries/getCurrencyImage */ "./core/libraries/getCurrencyImage.js");
/* harmony import */ var _MultipleSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MultipleSelect */ "./components/pc28/as5f28/MultipleSelect.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header */ "./components/pc28/as5f28/Header.js");
/* harmony import */ var _GameCenter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GameCenter */ "./components/pc28/as5f28/GameCenter/index.js");
/* harmony import */ var _common_useHandleBet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/useHandleBet */ "./components/pc28/common/useHandleBet.js");
/* harmony import */ var _common_useRandom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/useRandom */ "./components/pc28/common/useRandom.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var As5f28 = function As5f28() {
  var image = Object(_core_hooks_useImage__WEBPACK_IMPORTED_MODULE_8__["useImage"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_3__["MultipleContext"]),
      betRate = _useContext.betRate,
      totalBets = _useContext.totalBets,
      betResult = _useContext.betResult,
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var _useMultipleMenu = Object(_core_hooks_useMultipleMenu__WEBPACK_IMPORTED_MODULE_9__["useMultipleMenu"])(),
      showMultipleMenu = _useMultipleMenu.showMultipleMenu,
      toggleMultipleMenu = _useMultipleMenu.toggleMultipleMenu,
      multipleMenuRef = _useMultipleMenu.multipleMenuRef;

  var _useCleaningConfirm = Object(_core_hooks_useCleaningConfirm__WEBPACK_IMPORTED_MODULE_4__["useCleaningConfirm"])(),
      showCleanConfirm = _useCleaningConfirm.showCleanConfirm,
      onOpenCleanConfirm = _useCleaningConfirm.onOpenCleanConfirm,
      onCloseCleanConfirm = _useCleaningConfirm.onCloseCleanConfirm;

  var _useBetConfirm = Object(_core_hooks_useBetConfirm__WEBPACK_IMPORTED_MODULE_7__["useBetConfirm"])(),
      showBetConfirm = _useBetConfirm.showBetConfirm,
      onOpenBetConfirm = _useBetConfirm.onOpenBetConfirm,
      onCloseBetConfirm = _useBetConfirm.onCloseBetConfirm;

  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.Query.currency;
  });
  var handleBet = Object(_common_useHandleBet__WEBPACK_IMPORTED_MODULE_14__["useHandleBet"])();
  var handleRandom = Object(_common_useRandom__WEBPACK_IMPORTED_MODULE_15__["useRandom"])();
  return __jsx(_components_common_LayoutContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_12__["As5f28Header"], null), __jsx(_GameCenter__WEBPACK_IMPORTED_MODULE_13__["As5f28Game"], null), __jsx("aside", null, __jsx("div", {
    className: "number_confirm"
  }, __jsx("div", null, __jsx("img", {
    src: Object(_core_libraries_getCurrencyImage__WEBPACK_IMPORTED_MODULE_10__["getCurrencyImage"])(currency),
    alt: "eth"
  }), "1 \u6CE8 \u2248 ", betRate, " ", currency), __jsx("div", null, "|"), __jsx("div", null, __jsx("span", null, totalBets), "\u6CE8\uFF0C\u5171", __jsx("span", null, betResult), currency)), __jsx("ul", null, __jsx("li", {
    onClick: toggleMultipleMenu
  }, __jsx("img", {
    src: image("btn_price.png"),
    alt: ""
  }), __jsx("p", null, "\u5355\u6CE8\u91D1\u989D")), __jsx("li", {
    onClick: handleRandom
  }, __jsx("img", {
    src: image("btn_random.png"),
    alt: ""
  }), __jsx("p", null, "\u673A\u9009")), __jsx("li", {
    onClick: onOpenCleanConfirm
  }, __jsx("img", {
    src: image("".concat(itemList.size > 0 ? "btn_clear.png" : "btn_clear_non.png")),
    alt: ""
  }), __jsx("p", null, "\u6E05\u7A7A\u6295\u6CE8")), __jsx("li", {
    onClick: onOpenBetConfirm
  }, __jsx("img", {
    src: image("btn_check.png"),
    alt: ""
  }), __jsx("p", null, "\u6295\u6CE8"))), showMultipleMenu && __jsx(_MultipleSelect__WEBPACK_IMPORTED_MODULE_11__["As5f28MultipleSelect"], {
    ref: multipleMenuRef
  })), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialog"], {
    state: showCleanConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["CONFIRM_TYPE"].CLEAN_BET,
    callback: itemListHandle.clean,
    close: onCloseCleanConfirm
  }), __jsx(_components_common_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialog"], {
    state: showBetConfirm,
    type: _core_constants_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["CONFIRM_TYPE"].BET,
    callback: handleBet,
    close: onCloseBetConfirm
  }));
};

/***/ }),

/***/ "./components/pc28/common/GameSwitchContext.js":
/*!*****************************************************!*\
  !*** ./components/pc28/common/GameSwitchContext.js ***!
  \*****************************************************/
/*! exports provided: GameSwitchContext, GameSwitchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSwitchContext", function() { return GameSwitchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSwitchProvider", function() { return GameSwitchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_constants_pc28__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/pc28 */ "./core/constants/pc28/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GameSwitchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var GameSwitchProvider = function GameSwitchProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_core_constants_pc28__WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SUM),
      gameKind = _useState[0],
      setGameKind = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showGameKindMenu = _useState2[0],
      toggleGameKindMenu = _useState2[1];

  return __jsx(GameSwitchContext.Provider, {
    value: {
      showGameKindMenu: showGameKindMenu,
      toggleGameKindMenu: toggleGameKindMenu,
      gameKind: gameKind,
      setGameKind: setGameKind
    }
  }, props.children);
};



/***/ }),

/***/ "./components/pc28/common/useHandleBet.js":
/*!************************************************!*\
  !*** ./components/pc28/common/useHandleBet.js ***!
  \************************************************/
/*! exports provided: useHandleBet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHandleBet", function() { return useHandleBet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_reducer_Bet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/reducer/Bet */ "./core/reducer/Bet.js");




var useHandleBet = function useHandleBet() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_1__["MultipleContext"]),
      multiple = _useContext.multiple,
      itemList = _useContext.itemList,
      itemListHandle = _useContext.itemListHandle;

  var handleBet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var bet_list = itemList.keySeq().toArray().reduce(function (prev, curr) {
      var _itemList$get = itemList.get(curr),
          bet_type = _itemList$get.bet_type,
          _itemList$get$bet_det = _itemList$get.bet_detail,
          bet_detail = _itemList$get$bet_det === void 0 ? "" : _itemList$get$bet_det;

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

/***/ "./components/pc28/common/useRandom.js":
/*!*********************************************!*\
  !*** ./components/pc28/common/useRandom.js ***!
  \*********************************************/
/*! exports provided: useRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRandom", function() { return useRandom; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/MultipleContext */ "./core/hooks/MultipleContext.js");
/* harmony import */ var _GameSwitchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameSwitchContext */ "./components/pc28/common/GameSwitchContext.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/pc28 */ "./core/constants/pc28/index.js");
/* harmony import */ var _core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/pc28/oddConfig */ "./core/constants/pc28/oddConfig.js");







var useRandom = function useRandom() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_core_hooks_MultipleContext__WEBPACK_IMPORTED_MODULE_2__["MultipleContext"]),
      itemListHandle = _useContext.itemListHandle;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_GameSwitchContext__WEBPACK_IMPORTED_MODULE_3__["GameSwitchContext"]),
      gameKind = _useContext2.gameKind;

  var handleRandom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var _KIND_TYPE$SUM$KIND_T;

    var randomBetType = (_KIND_TYPE$SUM$KIND_T = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].SUM, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["SUM_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].DIVISOR_THREE, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["DIVISOR_THREE_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].BIG_SMALL, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["BIG_SMALL_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].EXTREMELY_BIG_SMALL, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["EXTREMELY_BIG_SMALL_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].SIDE, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["SIDE_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].GUESS_NUMBER, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["GUESS_NUMBER_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].COLOR, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["COLOR_LIST"]);
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KIND_TYPE$SUM$KIND_T, _core_constants_pc28__WEBPACK_IMPORTED_MODULE_5__["KIND_TYPE"].LEOPARD, function () {
      return getRandomType(_core_constants_pc28_oddConfig__WEBPACK_IMPORTED_MODULE_6__["LEOPARD_LIST"]);
    }), _KIND_TYPE$SUM$KIND_T)[gameKind]();
    var randomList = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])().set(randomBetType, {
      bet_type: randomBetType
    });
    itemListHandle.set(randomList);
  }, [gameKind]);
  return handleRandom;
};

var getRandomType = function getRandomType(list) {
  return list[Math.floor(Math.random() * list.length)];
};

/***/ }),

/***/ "./components/pc28/index.js":
/*!**********************************!*\
  !*** ./components/pc28/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _as5f28__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./as5f28 */ "./components/pc28/as5f28/index.js");
/* harmony import */ var _common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/GameSwitchContext */ "./components/pc28/common/GameSwitchContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Pc28 = function Pc28() {
  var game_code = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.BaseInfo.game_code;
  });
  return __jsx(_common_GameSwitchContext__WEBPACK_IMPORTED_MODULE_3__["GameSwitchProvider"], null, {
    as5f28: __jsx(_as5f28__WEBPACK_IMPORTED_MODULE_2__["As5f28"], null)
  }[game_code] || null);
};

/* harmony default export */ __webpack_exports__["default"] = (Pc28);

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

/***/ "./core/constants/pc28/dictionary.js":
/*!*******************************************!*\
  !*** ./core/constants/pc28/dictionary.js ***!
  \*******************************************/
/*! exports provided: DICTIONARY, TABS_NAME, KINDS_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DICTIONARY", function() { return DICTIONARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_NAME", function() { return TABS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KINDS_NAME", function() { return KINDS_NAME; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./core/constants/pc28/index.js");


var _DICTIONARY, _TABS_NAME, _KINDS_NAME;


var DICTIONARY = (_DICTIONARY = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SUM, {
  desc: "从0到27中选择一个数字进行投注，所选数值等于三个开奖号码的相加之和(特码数字)，即为中奖。 (例如：投注和值3，开出三码为0,1,2，总和为3，即中奖。)",
  sample: "选择5，开奖号码为是113(和值为5(顺序不限，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].DIVISOR_THREE, {
  desc: "从0到2中选择一个数字构成1注，所选数值等于特码除三余数，即为中奖。 (例如：投注余数0，开奖号码1,2,3，特码为6，除三余数为0，即为中奖。)",
  sample: "选择2，开奖号码为233(和值为8，余数2，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].BIG_SMALL, {
  desc: "所选的投注项目，等于开出的三个号码加总的形态(即特码所属的型态)，即为中奖。" + "大小：14~27为大，0~13为小\n" + "单：0~27的单数\n" + "双：0~27的双数\n" + "大单：15、17、19、21、23、25、27\n" + "小单：1、3、 5、7、9、11、13\n" + "大双：14、16、18、20、22、24、26\n" + "小双：0、2、4、6、8、10、12\n" + "(例如：投注小，开奖号码为1,2,3，特码为6，即为中奖。)",
  sample: "投注大单，开奖号码为788(和值为23，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].EXTREMELY_BIG_SMALL, {
  desc: "所选的投注项目，等于开出的三个号码加总的形态，即为中奖。极大：22~27，极小：0~5。奖金{odds}。",
  sample: "投注极大，开奖号码为788(和值为23，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].COLOR, {
  desc: "所选的投注项目，等于开出的三个号码加总的波色，即为中奖。红波：3、6、9、12、15、18、21、24；绿波：1、4、7、10、16、19、22、25；蓝波：2、5、8、11、17、20、23、26奖金{odds}。",
  sample: "投注蓝波，开奖号码为788(和值为23，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SIDE, {
  desc: "选择一个型态进行投注，开出的三个号码总和为该型态，即为中奖。0~9为小边，10~17为中，18~27为大边。奖金{odds}。",
  sample: "投注大边，开奖号码为888(和值为24，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].LEOPARD, {
  desc: "选择一个型态投注，开出的三个号码相同，即为中奖。奖金{odds}。",
  sample: "投注豹子，开奖号码为888(三同号，即为中奖。"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_DICTIONARY, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].GUESS_NUMBER, {
  desc: "从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3 , 开出123)。奖金{odds}。",
  sample: "投注8，开奖号码为888，即为中奖，中一等奖；开奖号码为128，中三等奖。"
}), _DICTIONARY);
var TABS_NAME = (_TABS_NAME = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_TABS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].SPECIAL, "特码"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_TABS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].GUESS_NUMBER, "猜一码"), _TABS_NAME);
var KINDS_NAME = (_KINDS_NAME = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SUM, "和值"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].DIVISOR_THREE, "除三余数"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].BIG_SMALL, "大小单双"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].EXTREMELY_BIG_SMALL, "极大极小"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].COLOR, "色波"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].SIDE, "大中小边"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].LEOPARD, "豹子"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_KINDS_NAME, ___WEBPACK_IMPORTED_MODULE_1__["KIND_TYPE"].GUESS_NUMBER, "猜一码"), _KINDS_NAME);

/***/ }),

/***/ "./core/constants/pc28/index.js":
/*!**************************************!*\
  !*** ./core/constants/pc28/index.js ***!
  \**************************************/
/*! exports provided: TAB_TYPE, KIND_TYPE, config, PICK_LIMITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_TYPE", function() { return TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND_TYPE", function() { return KIND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICK_LIMITS", function() { return PICK_LIMITS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");

var TAB_TYPE = {
  SPECIAL: 'SPECIAL',
  // 特碼
  GUESS_NUMBER: 'GUESS_NUMBER' // 猜一碼

};
var KIND_TYPE = {
  SUM: 'SUM',
  // 和值
  DIVISOR_THREE: 'DIVISOR_THREE',
  // 除三余数
  BIG_SMALL: 'BIG_SMALL',
  // 大小单双
  EXTREMELY_BIG_SMALL: 'EXTREMELY_BIG_SMALL',
  // 极大极小
  COLOR: 'COLOR',
  // 色波
  SIDE: 'SIDE',
  // 大中小边
  LEOPARD: 'LEOPARD',
  // 豹子
  GUESS_NUMBER: 'GUESS_NUMBER' // 猜一碼

};
var config = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TAB_TYPE.SPECIAL, [{
  category: '特串',
  kinds: [{
    name: '和值',
    kind: KIND_TYPE.SUM
  }, {
    name: '除三余数',
    kind: KIND_TYPE.DIVISOR_THREE
  }]
}, {
  category: '混合',
  kinds: [{
    name: '大小单双',
    kind: KIND_TYPE.BIG_SMALL
  }, {
    name: '极大极小',
    kind: KIND_TYPE.EXTREMELY_BIG_SMALL
  }]
}, {
  category: '趣味',
  kinds: [{
    name: '色波',
    kind: KIND_TYPE.COLOR
  }]
}, {
  category: '中边',
  kinds: [{
    name: '大中小边',
    kind: KIND_TYPE.SIDE
  }]
}, {
  category: '豹子',
  kinds: [{
    name: '豹子',
    kind: KIND_TYPE.LEOPARD
  }]
}]);
var PICK_LIMITS = {};

/***/ }),

/***/ "./core/constants/pc28/oddConfig.js":
/*!******************************************!*\
  !*** ./core/constants/pc28/oddConfig.js ***!
  \******************************************/
/*! exports provided: LEOPARD_LIST, SIDE_LIST, GUESS_NUMBER_LIST, SUM_LIST, BIG_SMALL_LIST, EXTREMELY_BIG_SMALL_LIST, DIVISOR_THREE_LIST, COLOR_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEOPARD_LIST", function() { return LEOPARD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDE_LIST", function() { return SIDE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUESS_NUMBER_LIST", function() { return GUESS_NUMBER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUM_LIST", function() { return SUM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIG_SMALL_LIST", function() { return BIG_SMALL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTREMELY_BIG_SMALL_LIST", function() { return EXTREMELY_BIG_SMALL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIVISOR_THREE_LIST", function() { return DIVISOR_THREE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_LIST", function() { return COLOR_LIST; });
var LEOPARD_LIST = ["three_identical_all"];
var SIDE_LIST = ["special_number_big_side", "special_number_middle_side", "special_number_small_side"];
var GUESS_NUMBER_LIST = ["guess_number_0", "guess_number_1", "guess_number_2", "guess_number_3", "guess_number_4", "guess_number_5", "guess_number_6", "guess_number_7", "guess_number_8", "guess_number_9"];
var SUM_LIST = ["special_number_0", "special_number_1", "special_number_2", "special_number_3", "special_number_4", "special_number_5", "special_number_6", "special_number_7", "special_number_8", "special_number_9", "special_number_10", "special_number_11", "special_number_12", "special_number_13", "special_number_14", "special_number_15", "special_number_16", "special_number_17", "special_number_18", "special_number_19", "special_number_20", "special_number_21", "special_number_22", "special_number_23", "special_number_24", "special_number_25", "special_number_26", "special_number_27"];
var BIG_SMALL_LIST = ["special_number_big", "special_number_small", "special_number_odd", "special_number_even", "special_number_big_odd", "special_number_small_odd", "special_number_big_even", "special_number_small_even"];
var EXTREMELY_BIG_SMALL_LIST = ["special_number_extremely_big", "special_number_extremely_small"];
var DIVISOR_THREE_LIST = ["special_number_mod3_0", "special_number_mod3_1", "special_number_mod3_2"];
var COLOR_LIST = ["special_number_red", "special_number_blue", "special_number_green"];

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
//# sourceMappingURL=6.js.map