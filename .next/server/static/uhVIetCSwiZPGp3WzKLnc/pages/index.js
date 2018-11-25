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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 //<Line data={ chartData } options={ chartOptions } />

var chartData = {
  labels: [],
  datasets: [{
    label: 'Apple',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: []
  }, {
    label: 'Microsoft',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: []
  }]
};
var chartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1
    }
  },
  legend: {
    display: true
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
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
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1cvwks4-0"
})(["color:red;position:relative;z-index:1;text-transform:uppercase;font-size:100px;margin-bottom:-10px;font-family:'Anton',sans-serif;text-shadow:-3px 0px 11px rgba(0,0,0,0.7);"]);

var Index =
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
      stocks: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildChartData", function (stocks) {
      console.log(stocks, 'the stocks');
      var labels = [];
      stocks[0].chart.map(function (c) {
        return labels.push(c.date);
      });
      chartData.labels = labels;
      stocks.map(function (s, i) {
        var data = [];
        s.chart.map(function (c) {
          return data.push(c.close);
        });
        console.log(data, 'the data');
        chartData.datasets[i].data = data;
      });

      _this.setState({
        chartData: chartData,
        chartOptions: chartOptions
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateDebtToEquity", function (stock) {
      var shareholderEquity = stock.financials.financials[0].shareholderEquity;
      var totalDebt = stock.financials.financials[0].totalDebt;
      var debtToEquity = (totalDebt / shareholderEquity).toFixed(2);
      return debtToEquity;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateAssetTurnover", function (stock) {
      var totalAssetsThisQuarter = stock.financials.financials[0].totalAssets;
      var totalAssetsLastQuarter = stock.financials.financials[1].totalAssets;
      var averageTotalAssets = (totalAssetsThisQuarter + totalAssetsLastQuarter) / 2;
      var assetTurnover = stock.financials.financials[0].totalRevenue / averageTotalAssets;
      return assetTurnover.toFixed(2);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculatePayoutRatio", function (stock) {
      var EPS = stock.earnings.earnings.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.actualEPS;
      }, 0);
      var dividendRate = stock.stats.dividendRate;
      var payoutRatio = Math.floor(dividendRate / EPS * 100 * 100) / 100;
      return payoutRatio;
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data, stocks, array;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote,stats,financials,company,earnings,chart&range=3m');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                stocks = [];
                array = Object.keys(data).map(function (d) {
                  return stocks.push(data[d]);
                });

                _this2.setState({
                  stocks: stocks
                });

                _this2.buildChartData(stocks);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(proxyUrl + url).then(function (res) {
        return res.text();
      }).then(function (body) {
        // comp_name
        var test = cheerio__WEBPACK_IMPORTED_MODULE_4___default.a.load(body);
        console.log(test('.comp_name font').text(), 'the test'); // test('.comp_name font').each(( index, element ) => {
        //   console.log(element, 'the index')
        // })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          stocks = _this$state.stocks,
          chartData = _this$state.chartData,
          chartOptions = _this$state.chartOptions;
      var tableHeaders = ['Name', 'PEG', //
      'Price To Earning (P/E)', 'Price to Sales (P/S)', 'Price to Book (P/B)', 'Dividend Yield', 'Dividend Payout', 'Return On Assets', 'Return On Equity', 'Profit Margin', 'Current Ratio', //
      'Quick Ratio', //
      'Debt to Equity', 'Interest Coverage', //
      'Asset Turnover', //
      'Inventory Turnover'];
      // still need: PEG, current ratio, quick ratio, intereset coverage, asset turnover, inventory turnover
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Name "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.company.companyName);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Sector "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.company.sector);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Industry "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.company.industry);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Latest Price "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, "$", s.quote.latestPrice);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Price to Earning (P/E) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.quote.peRatio);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Price to Sales (P/S) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.priceToSales.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Price to Book (P/B) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.priceToBook);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Dividend Yield "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.dividendYield.toFixed(2), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Dividend Rate "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, "$", s.stats.dividendRate.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Dividend Payout Ratio "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, _this3.calculatePayoutRatio(s), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Return On Assets "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.returnOnAssets, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Return On Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.returnOnEquity, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Profit Margin "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, s.stats.profitMargin, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Debt to Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, _this3.calculateDebtToEquity(s), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, " Asset Turnover (Current Quarter)"), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName
        }, _this3.calculateAssetTurnover(s), "%");
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: '500px',
          width: '800px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__["Line"], {
        data: chartData,
        options: chartOptions,
        redraw: true
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);