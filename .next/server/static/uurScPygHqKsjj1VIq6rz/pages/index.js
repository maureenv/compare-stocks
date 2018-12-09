module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(4);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "cheerio"
var external_cheerio_ = __webpack_require__(7);
var external_cheerio_default = /*#__PURE__*/__webpack_require__.n(external_cheerio_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(13);

// CONCATENATED MODULE: ./components/meta.js


 //import favicon from '../_res/images/favicon.ico'

var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var meta_Meta = function Meta(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("title", null, "Compare Stocks"), external_react_default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var meta = (meta_Meta);
// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__(5);
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// CONCATENATED MODULE: ./components/pageLayout.js




var Main = external_styled_components_default.a.div.withConfig({
  displayName: "Main",
  componentId: "sc-16tm1wk-0"
})([".particles-class{width:100%;height:100%;min-height:100vh;position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;position:fixed;background:rgba(0,179,179,1);background:-moz-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-webkit-gradient(left bottom,right top,color-stop(0%,rgba(0,179,179,1)),color-stop(100%,rgba(0,126,194,1)));background:-webkit-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-o-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-ms-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b3b3',endColorstr='#007ec2',GradientType=1 );}"]);
var theme = {
  lightblue: 'rgba(0,179,179,1)',
  darkblue: 'rgba(0,126,194,1)',
  whitegray: '#f5f5f5',
  lightgray: '#adadad'
};
/* harmony default export */ var pageLayout = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(Main, null, external_react_default.a.createElement(external_react_particles_js_default.a, {
    className: "particles-class",
    params: {
      "polygon": {
        "type": 'outside'
      },
      "particles": {
        "number": {
          "value": 80
        },
        "size": {
          "value": 3
        },
        "move": {
          "enable": true,
          "speed": 1
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          }
        }
      }
    }
  }), external_react_default.a.createElement(meta, null), external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, children));
});
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var url = 'https://www.gurufocus.com/term/peg/AAPL/PEG-Ratio';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

 // https://codepen.io/anon/pen/gQBGdR FIXED HEADER
// https://github.com/jerairrest/react-chartjs-2/issues/81 create custom legend?
// https://github.com/chartjs/Chart.js/issues/3150 show hide bar lines on custom click

var pages_chartData = {
  labels: [],
  datasets: []
};
var pages_chartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1
    }
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 8,
        maxRotation: 0,
        minRotation: 0
      }
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 5,
        beginAtZero: true
      }
    }]
  },
  tooltips: {
    callbacks: {}
  }
};
var chartColors = ['#003773', '#0094b9', '#d60000', '#ff6e00'];
var ChartContainer = external_styled_components_default.a.div.withConfig({
  displayName: "ChartContainer",
  componentId: "sc-1cvwks4-0"
})(["height:400px;width:100%;margin-top:50px;padding-bottom:100px;padding-right:20px;box-sizing:border-box;"]);
var Table = external_styled_components_default.a.table.withConfig({
  displayName: "Table",
  componentId: "sc-1cvwks4-1"
})(["position:relative;"]);
var Tbody = external_styled_components_default.a.tbody.withConfig({
  displayName: "Tbody",
  componentId: "sc-1cvwks4-2"
})(["border-bottom:1px solid gray;"]);
var OuterContainer = external_styled_components_default.a.div.withConfig({
  displayName: "OuterContainer",
  componentId: "sc-1cvwks4-3"
})(["background:#f5f5f5;height:100%;border-radius:4px;display:flex;align-items:center;justify-content:center;margin:40px;.particles-class{width:100%;height:100%;min-height:100vh;position:absolute;top:0;z-index:-1;position:fixed;}"]);
var InnerContainer = external_styled_components_default.a.div.withConfig({
  displayName: "InnerContainer",
  componentId: "sc-1cvwks4-4"
})(["padding:20px;width:100%;max-width:1000px;position:relative;padding-right:0;"]);
var TitleBanner = external_styled_components_default.a.div.withConfig({
  displayName: "TitleBanner",
  componentId: "sc-1cvwks4-5"
})(["width:102%;height:50px;border-bottom:1px solid #ffc190;background:#f74b31;background:-moz-linear-gradient(left,#f74b31 0%,#ff6e00 100%);background:-webkit-linear-gradient(left,#f74b31 0%,#ff6e00 100%);background:linear-gradient(to right,#f74b31 0%,#ff6e00 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f74b31',endColorstr='#ff6e00',GradientType=1 );position:absolute;left:-52%;transform:translate(50%);-webkit-box-shadow:0px 2px 11px 0 rgba(0,0,0,0.26);-moz-box-shadow:0px 2px 11px 0 rgba(0,0,0,0.26);box-shadow:0px 2px 11px 0 rgba(0,0,0,0.26);&:after{content:\"\";width:0;bottom:-10px;position:absolute;height:0;border-style:solid;border-width:0 9px 10px 0;border-color:transparent #770000 transparent transparent;}&:before{content:\"\";width:0;bottom:-10px;position:absolute;height:0;right:0;border-style:solid;border-width:10px 9px 0 0;border-color:#770000 transparent transparent transparent;}"]);
var BannerButton = external_styled_components_default.a.button.withConfig({
  displayName: "BannerButton",
  componentId: "sc-1cvwks4-6"
})(["appearance:none;border:none;padding:5px 10px;border-radius:4px;text-transform:uppercase;font-weight:700;cursor:pointer;letter-spacing:1px;border-bottom:2px solid #770000;"]);
var Tr = external_styled_components_default.a.tr.withConfig({
  displayName: "Tr",
  componentId: "sc-1cvwks4-7"
})(["font-family:'Roboto',sans-serif;text-align:left;position:", ";border-bottom:", ";&:first-child{border-bottom:0;}"], function (props) {
  return props.fixed && 'fixed';
}, function (props) {
  return !props.fixed && '1px solid #d6d6d6';
});
var Th = external_styled_components_default.a.th.withConfig({
  displayName: "Th",
  componentId: "sc-1cvwks4-8"
})(["text-align:", ";padding:10px 20px;font-size:", ";color:", ";font-weight:", ";padding-top:", ";padding-bottom:", ";"], function (props) {
  return props.left ? 'left' : 'right';
}, function (props) {
  return props.bannerTitle ? '15px' : '13px';
}, function (props) {
  return props.bannerTitle && 'white';
}, function (props) {
  return props.bannerTitle && 700;
}, function (props) {
  return props.bannerTitle && '18px';
}, function (props) {
  return props.bannerTitle && '20px';
});
var SelectStyles = external_styled_components_default.a.div.withConfig({
  displayName: "SelectStyles",
  componentId: "sc-1cvwks4-9"
})([".Select-control{width:200px;}"]);
var Bullet = external_styled_components_default.a.div.withConfig({
  displayName: "Bullet",
  componentId: "sc-1cvwks4-10"
})(["width:20px;height:8px;border-radius:10px;margin-right:8px;background-color:", ";"], function (props) {
  return props.color;
});
var LegendName = external_styled_components_default.a.p.withConfig({
  displayName: "LegendName",
  componentId: "sc-1cvwks4-11"
})(["font-size:13px;font-family:'Roboto',sans-serif;"]);
var LegendItemContainer = external_styled_components_default.a.div.withConfig({
  displayName: "LegendItemContainer",
  componentId: "sc-1cvwks4-12"
})(["display:flex;align-items:center;margin:0 20px;cursor:pointer;opacity:", ";"], function (props) {
  return props.opacity;
});
var ChartLegend = external_styled_components_default.a.div.withConfig({
  displayName: "ChartLegend",
  componentId: "sc-1cvwks4-13"
})(["display:flex;justify-content:center;"]);
var DateRangeContainer = external_styled_components_default.a.div.withConfig({
  displayName: "DateRangeContainer",
  componentId: "sc-1cvwks4-14"
})(["display:flex;justify-content:center;margin-bottom:20px;"]);
var DateRangeSelector = external_styled_components_default.a.div.withConfig({
  displayName: "DateRangeSelector",
  componentId: "sc-1cvwks4-15"
})([".input{position:relative;z-index:-9999;}.input:checked + label{background:", ";}.label{background:", ";color:#fff;padding:5px;font-family:'Roboto',sans-serif;cursor:pointer;font-size:13px;border-radius:4px;width:30px;text-align:center;display:inline-block;}"], function (props) {
  return props.theme.darkblue;
}, function (props) {
  return props.theme.lightgray;
});
var Dropdown = external_styled_components_default.a.div.withConfig({
  displayName: "Dropdown",
  componentId: "sc-1cvwks4-16"
})(["position:absolute;background:#fff;width:230px;padding:15px 0;border-radius:4px;.match{transition:all 0.2s ease-in-out;font-size:13px;padding:10px 15px;border-bottom:1px solid #d6d6d6;display:flex;justify-content:space-between;&:last-child{border-bottom:0;}&:hover{background:#d6d6d6;cursor:pointer;}}.symbol{font-weight:500;}.company-name{max-width:150px;text-align:right;line-height:1.3;color:#767676;}"]);
var DropdownContainer = external_styled_components_default.a.div.withConfig({
  displayName: "DropdownContainer",
  componentId: "sc-1cvwks4-17"
})(["position:relative;.input{font-size:15px;padding:5px;border:none;background:none;border-bottom:", ";color:#fff;font-weight:700;text-align:right;width:100px;transition:all 0.2s ease-in-out;::-webkit-input-placeholder{color:#fff;font-weight:300;}::-moz-placeholder{color:#fff;font-weight:300;}:-ms-input-placeholder{color:#fff;font-weight:300;}:-moz-placeholder{color:#fff;font-weight:300;}}"], function (props) {
  return props.hasValue || '1px solid #fff';
});

var pages_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      stocks: {},
      symbolList: ['V', 'MA'],
      chartRange: '1M',
      redraw: false,
      timeout: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildChartData", function (stocks) {
      var chartRange = _this.state.chartRange;
      pages_chartData.datasets = [];
      var labels = [];

      if (chartRange === '1D') {
        stocks[0].chart.map(function (c) {
          return labels.push(c.minute);
        });
      } else {
        stocks[0].chart.map(function (c) {
          return labels.push(c.date);
        });
      }

      pages_chartData.labels = labels;
      stocks.map(function (s, i) {
        var data = [];
        s.chart.map(function (c) {
          return data.push(c.close && c.close.toFixed(2));
        });
        pages_chartData.datasets.push({
          label: s.company.companyName,
          fill: false,
          lineTension: 0.1,
          backgroundColor: chartColors[i],
          borderColor: chartColors[i],
          borderCapStyle: 'butt',
          borderJoinStyle: 'bevel',
          pointBorderColor: chartColors[i],
          pointBackgroundColor: chartColors[i],
          pointBorderWidth: 0.5,
          borderWidth: 2,
          pointHoverRadius: 3,
          pointHoverBackgroundColor: chartColors[i],
          pointHoverBorderColor: chartColors[i],
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 5,
          data: data
        });
      });

      pages_chartOptions.tooltips.callbacks.label = function (tooltipItem) {
        return '$' + tooltipItem.yLabel.toLocaleString(2);
      };

      _this.setState({
        chartData: pages_chartData,
        chartOptions: pages_chartOptions
      }); // if ( chartFilter === 'total' ) {
      // chartOptions.tooltips.callbacks.label = tooltipItem => '$' + tooltipItem.yLabel.toLocaleString()
      // chartOptions.scales.yAxes[0].ticks.callback = value => '$' + value.toLocaleString()
      // chartData.datasets[0].data = Object.values( chartDataArray ).map( i => i.toFixed( 2 ))

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateDebtToEquity", function (stock) {
      if (stock.financials.financials) {
        var shareholderEquity = stock.financials.financials[0].shareholderEquity;
        var totalDebt = stock.financials.financials[0].totalDebt;
        var debtToEquity = (totalDebt / shareholderEquity).toFixed(2);
        return "".concat(debtToEquity, "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateAssetTurnover", function (stock) {
      if (stock.financials.financials) {
        var totalAssetsThisQuarter = stock.financials.financials[0].totalAssets;
        var totalAssetsLastQuarter = stock.financials.financials[1].totalAssets;
        var averageTotalAssets = (totalAssetsThisQuarter + totalAssetsLastQuarter) / 2;
        var assetTurnover = stock.financials.financials[0].totalRevenue / averageTotalAssets;
        return "".concat(assetTurnover.toFixed(2), "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculatePayoutRatio", function (stock) {
      if (stock.earnings.earnings) {
        var EPS = stock.earnings.earnings && stock.earnings.earnings.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.actualEPS;
        }, 0);
        var dividendRate = stock.stats.dividendRate;
        var payoutRatio = Math.floor(dividendRate / EPS * 100 * 100) / 100;
        return "".concat(payoutRatio, "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "findMatch", function (selected, index) {
      _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var res, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_isomorphic_unfetch_default()("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(selected, "&apikey=KT28GNBJ2ECP4SJ1"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;

                _this.setState(_defineProperty({}, "matches".concat(index), data['bestMatches']));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSymbol", function (index, e, clickedItem) {
      var selected;

      if (clickedItem === "input") {
        selected = e.target.value.toUpperCase();

        _this.findMatch(selected, index);
      } else {
        selected = e;

        _this.setState(_defineProperty({}, "matches".concat(index), null));
      }

      var symbolList = _toConsumableArray(_this.state.symbolList);

      symbolList[index] = selected;

      _this.setState({
        symbolList: symbolList
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearMatches", function () {
      // const clicked = e.target.getAttribute( 'class' )
      // if ( clicked !== 'symbol' && clicked !== 'match' ) {
      for (var i = 0; i < 5; i++) {
        _this.setState(_defineProperty({}, "matches".concat(i), null));
      } // }

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var symbolList, removeFromList, filteredList, res, data, stocks, array;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                symbolList = _this.state.symbolList;

                if (!(symbolList.length > 0)) {
                  _context2.next = 14;
                  break;
                }

                removeFromList = [undefined, null];
                filteredList = symbolList.filter(function (i) {
                  return !removeFromList.includes(i);
                });

                _this.setState({
                  symbolList: filteredList
                });

                _context2.next = 7;
                return external_isomorphic_unfetch_default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=quote,stats,financials,company,earnings,chart&range=1m"));

              case 7:
                res = _context2.sent;
                _context2.next = 10;
                return res.json();

              case 10:
                data = _context2.sent;
                stocks = [];
                array = Object.keys(data).map(function (d) {
                  return stocks.push(data[d]);
                });

                if (stocks.length > 0) {
                  _this.setState({
                    stocks: stocks,
                    chartRange: '1M',
                    line0: true,
                    line1: true,
                    line2: true,
                    line3: true
                  });

                  _this.buildChartData(stocks);
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setChartRange", function (range) {
      _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        var symbolList, removeFromList, filteredList, res, data, dataArray, _arr, _i, _arr$_i, key, value, stocks;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                symbolList = _this.state.symbolList;

                if (!(symbolList.length > 0)) {
                  _context3.next = 17;
                  break;
                }

                removeFromList = [undefined, null];
                filteredList = symbolList.filter(function (i) {
                  return !removeFromList.includes(i);
                });

                _this.setState({
                  symbolList: filteredList,
                  chartRange: range
                });

                _context3.next = 7;
                return external_isomorphic_unfetch_default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=chart&range=").concat(range));

              case 7:
                res = _context3.sent;
                _context3.next = 10;
                return res.json();

              case 10:
                data = _context3.sent;
                dataArray = [];
                _arr = Object.entries(data);

                for (_i = 0; _i < _arr.length; _i++) {
                  _arr$_i = _slicedToArray(_arr[_i], 2), key = _arr$_i[0], value = _arr$_i[1];
                  dataArray.push(_defineProperty({}, key, value));
                }

                stocks = _toConsumableArray(_this.state.stocks);
                stocks.map(function (s, i) {
                  var chartData = dataArray.find(function (d) {
                    return Object.keys(d)[0] === s.company.symbol;
                  });
                  s.chart = chartData[s.company.symbol].chart;
                });

                _this.setState({
                  stocks: stocks
                }, function () {
                  return _this.buildChartData(stocks);
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInputFields", function () {
      var symbolList = _this.state.symbolList;
      return Array.from(new Array(4), function (val, i) {
        return external_react_default.a.createElement(Th, {
          left: false,
          key: i
        }, external_react_default.a.createElement(DropdownContainer, {
          onMouseLeave: function onMouseLeave() {
            return _this.clearMatches();
          },
          hasValue: symbolList[i],
          onFocus: function onFocus() {
            return _this.clearMatches();
          }
        }, external_react_default.a.createElement("input", {
          className: "input",
          type: "text",
          placeholder: "Enter symbol",
          value: symbolList[i] || '',
          onChange: function onChange(e) {
            return _this.setSymbol(i, e, 'input');
          }
        }), _this.state["matches".concat(i)] && external_react_default.a.createElement(Dropdown, {
          id: "dropdown"
        }, _this.state["matches".concat(i)].map(function (m) {
          return external_react_default.a.createElement("div", {
            className: "match",
            key: m['1. symbol'],
            onClick: function onClick(e) {
              return _this.setSymbol(i, m['1. symbol'], 'dropdown');
            }
          }, external_react_default.a.createElement("p", {
            className: "symbol"
          }, m['1. symbol']), external_react_default.a.createElement("p", {
            className: "company-name"
          }, m['2. name']));
        }))));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLine", function (i) {
      _this.refs.chart.chartInstance.getDatasetMeta(i).hidden = _this.state["line".concat(i)];

      _this.setState(function (prevState) {
        var _ref4;

        return _ref4 = {}, _defineProperty(_ref4, "line".concat(i), !prevState["line".concat(i)]), _defineProperty(_ref4, "redraw", false), _ref4;
      });

      _this.refs.chart.chartInstance.update();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderLegend", function () {
      var stocks = _this.state.stocks;
      return stocks.length && stocks.map(function (s, i) {
        return external_react_default.a.createElement(LegendItemContainer, {
          key: i,
          onClick: function onClick() {
            return _this.toggleLine(i);
          },
          opacity: _this.state["line".concat(i)] ? 1 : 0.3
        }, external_react_default.a.createElement(Bullet, {
          color: chartColors[i]
        }), external_react_default.a.createElement(LegendName, null, s.company.companyName));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getValue", function (value) {
      if (typeof value === "string") {
        return value;
      } else if (value === 0) {
        return 0;
      } else if (typeof value === "number") {
        //return Math.floor( value * 100 ) / 100
        return value.toFixed(2);
      } else if (value === null || value === undefined) {
        return 'N/A';
      } else {
        return value;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCalculatedValues", function (functionName) {
      var stocks = _this.state.stocks;

      if (stocks.length) {
        switch (functionName) {
          case 'calculatePayoutRatio':
            return stocks.map(function (s) {
              return external_react_default.a.createElement(Th, {
                key: s.company.companyName
              }, _this.calculatePayoutRatio(s));
            });
            break;

          case 'calculateDebtToEquity':
            return stocks.map(function (s) {
              return external_react_default.a.createElement(Th, {
                key: s.company.companyName
              }, _this.calculateDebtToEquity(s));
            });
            break;

          case 'calculateAssetTurnover':
            return stocks.map(function (s) {
              return external_react_default.a.createElement(Th, {
                key: s.company.companyName
              }, _this.calculateAssetTurnover(s));
            });
            break;

          default:
            return;
        }
      } else {
        return external_react_default.a.createElement(Th, {
          colSpan: "4"
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCalculatedRow", function (title, functionName) {
      var stocks = _this.state.stocks;
      return external_react_default.a.createElement(Tr, null, external_react_default.a.createElement(Th, {
        left: true
      }, title), _this.getCalculatedValues(functionName), stocks.length < 4 && external_react_default.a.createElement(Th, {
        colSpan: 4 - stocks.length
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChartOptions", function () {
      var options = ['1D', '1M', '1Y', '5Y'];
      return options.map(function (o) {
        return external_react_default.a.createElement(DateRangeSelector, {
          key: o
        }, external_react_default.a.createElement("input", {
          className: "input",
          name: "chart",
          onChange: function onChange() {
            return _this.setChartRange(o);
          },
          id: o,
          type: "radio",
          value: o,
          checked: o === _this.state.chartRange
        }), external_react_default.a.createElement("label", {
          className: "label",
          htmlFor: o
        }, o));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTableRow", function (title, category, subcategory, isDollar, isPercent) {
      var stocks = _this.state.stocks;
      return external_react_default.a.createElement(Tr, null, external_react_default.a.createElement(Th, {
        left: true
      }, title), stocks.length ? stocks.map(function (s) {
        return external_react_default.a.createElement(Th, {
          key: s.company.companyName
        }, isDollar && s[category][subcategory] !== null && '$', _this.getValue(s[category][subcategory]), isPercent && s[category][subcategory] !== null && '%');
      }) : external_react_default.a.createElement(Th, {
        colSpan: "4"
      }), stocks.length < 4 && external_react_default.a.createElement(Th, {
        colSpan: 4 - stocks.length
      }));
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      external_isomorphic_unfetch_default()(proxyUrl + url).then(function (res) {
        return res.text();
      }).then(function (body) {
        // comp_name
        var test = external_cheerio_default.a.load(body); //console.log(test('.comp_name font').text(), 'the test')
        // test('.comp_name font').each(( index, element ) => {
        //   console.log(element, 'the index')
        // })
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.submit(); // document.body.addEventListener( 'click', this.clearMatches )
      // document.body.addEventListener( 'keyup', this.clearMatches )
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          stocks = _this$state.stocks,
          chartData = _this$state.chartData,
          chartOptions = _this$state.chartOptions,
          redraw = _this$state.redraw;
      var tableHeaders = ['Name', 'PEG', //
      'Price To Earning (P/E)', 'Price to Sales (P/S)', 'Price to Book (P/B)', 'Dividend Yield', 'Dividend Payout', 'Return On Assets', 'Return On Equity', 'Profit Margin', 'Current Ratio', //
      'Quick Ratio', //
      'Debt to Equity', 'Interest Coverage', //
      'Asset Turnover', //
      'Inventory Turnover'];
      // still need: PEG, current ratio, quick ratio, intereset coverage, asset turnover, inventory turnover
      return external_react_default.a.createElement(pageLayout, null, external_react_default.a.createElement(OuterContainer, null, external_react_default.a.createElement(InnerContainer, null, external_react_default.a.createElement(TitleBanner, null), external_react_default.a.createElement(Table, null, external_react_default.a.createElement("tbody", null, external_react_default.a.createElement(Tr, null, external_react_default.a.createElement(Th, {
        left: true,
        bannerTitle: true
      }, " Stock Symbol "), this.renderInputFields(), external_react_default.a.createElement(Th, null, external_react_default.a.createElement(BannerButton, {
        onClick: function onClick() {
          return _this2.submit();
        }
      }, " Go "))), this.renderTableRow('Name', 'company', 'companyName', false, false), this.renderTableRow('Sector', 'company', 'sector', false, false), this.renderTableRow('Industry', 'company', 'industry', false, false), this.renderTableRow('Latest Price', 'quote', 'latestPrice', true, false), this.renderTableRow('Price to Earning (P/E)', 'quote', 'peRatio', false, true), this.renderTableRow('Price to Sales (P/S)', 'stats', 'priceToSales', false, true), this.renderTableRow('Price to Book (P/B)', 'stats', 'priceToBook', false, true), this.renderTableRow('Dividend Yield', 'stats', 'dividendYield', false, true), this.renderTableRow('Dividend Rate', 'stats', 'dividendRate', true, false), this.renderCalculatedRow('Dividend Payout Ratio', 'calculatePayoutRatio'), this.renderTableRow('Return On Assets', 'stats', 'returnOnAssets', false, true), this.renderTableRow('Return On Equity', 'stats', 'returnOnEquity', false, true), this.renderTableRow('Profit Margin', 'stats', 'profitMargin', false, true), this.renderCalculatedRow('Debt to Equity', 'calculateDebtToEquity'), this.renderCalculatedRow('Asset Turnover (Current Quarter)', 'calculateAssetTurnover'))), stocks.length && external_react_default.a.createElement(ChartContainer, null, external_react_default.a.createElement(DateRangeContainer, null, this.renderChartOptions()), external_react_default.a.createElement(ChartLegend, null, this.renderLegend()), external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
        ref: "chart",
        data: chartData,
        options: chartOptions,
        redraw: redraw
      })))));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);