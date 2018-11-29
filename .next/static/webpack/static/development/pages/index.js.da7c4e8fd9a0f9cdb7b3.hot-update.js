webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");

var _jsxFileName = "/Users/maureenvogel/webprojects/stocks/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ChartContainer",
  componentId: "sc-1cvwks4-0"
})(["height:500px;width:100%;margin-top:50px;"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "HeroTitle",
  componentId: "sc-1cvwks4-1"
})(["color:red;position:relative;z-index:1;text-transform:uppercase;font-size:100px;margin-bottom:-10px;font-family:'Anton',sans-serif;text-shadow:-3px 0px 11px rgba(0,0,0,0.7);"]);
var Table = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].table.withConfig({
  displayName: "Table",
  componentId: "sc-1cvwks4-2"
})([""]);
var Tbody = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tbody.withConfig({
  displayName: "Tbody",
  componentId: "sc-1cvwks4-3"
})(["border-bottom:1px solid gray;"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OuterContainer",
  componentId: "sc-1cvwks4-4"
})(["background:#f5f5f5;width:100%;height:100%;border-radius:4px;max-width:1200px;display:flex;align-items:center;justify-content:center;margin:20px;"]);
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InnerContainer",
  componentId: "sc-1cvwks4-5"
})(["padding:20px;width:100%;max-width:1000px;"]);
var Tr = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tr.withConfig({
  displayName: "Tr",
  componentId: "sc-1cvwks4-6"
})(["font-family:'Roboto',sans-serif;text-align:left;position:", ";border-bottom:", ";"], function (props) {
  return props.fixed && 'fixed';
}, function (props) {
  return !props.fixed && '1px solid #d6d6d6';
});
var Th = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
  displayName: "Th",
  componentId: "sc-1cvwks4-7"
})(["text-align:", ";padding:10px 20px;font-size:13px;"], function (props) {
  return props.left ? 'left' : 'right';
});
var SelectStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SelectStyles",
  componentId: "sc-1cvwks4-8"
})([".Select-control{width:200px;}"]); //
// <Dropdown>
//   { this.state[`matches${ i }`].map( m =>
//     <div className="match">
//       <p className="symbol">{ m['1. symbol']}</p>
//       <p className="company-name">{ m['2. name'] }</p>
//     </div>
//   )}
// </Dropdown>

var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dropdown",
  componentId: "sc-1cvwks4-9"
})(["position:absolute;background:#fff;width:230px;padding:15px 0;border-radius:4px;.match{transition:all 0.2s ease-in-out;font-size:13px;padding:10px 15px;border-bottom:1px solid #d6d6d6;display:flex;justify-content:space-between;&:last-child{border-bottom:0;}&:hover{background:#d6d6d6;cursor:pointer;}}.symbol{font-weight:500;}.company-name{max-width:150px;text-align:right;line-height:1.3;color:#767676;}"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DropdownContainer",
  componentId: "sc-1cvwks4-10"
})(["position:relative;.input{font-size:13px;}"]);

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
      stocks: {},
      symbolList: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildChartData", function (stocks) {
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
        chartData.datasets[i].data = data;
      });

      _this.setState({
        chartData: chartData,
        chartOptions: chartOptions
      });
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSymbol", function (index, e, clickedItem) {
      var selected;

      if (clickedItem === "input") {
        selected = e.target.value.toUpperCase();
        setTimeout(function () {
          _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var res, data;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(selected, "&apikey=KT28GNBJ2ECP4SJ1"));

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
        }, 500);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearMatches", function (i) {
      setTimeout(function () {
        _this.setState(_defineProperty({}, "matches".concat(i), null));
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var symbolList, removeFromList, filteredList, res, data, stocks, array;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=quote,stats,financials,company,earnings,chart&range=3m"));

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
                    stocks: stocks
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInputFields", function () {
      var symbolList = _this.state.symbolList;
      return Array.from(new Array(4), function (val, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          left: true,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          type: "text",
          placeholder: "Enter stock symbol",
          value: symbolList[i] || '',
          onChange: function onChange(e) {
            return _this.setSymbol(i, e, 'input');
          },
          onBlur: function onBlur() {
            return _this.clearMatches(i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        }), _this.state["matches".concat(i)] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dropdown, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, _this.state["matches".concat(i)].map(function (m) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "match",
            onClick: function onClick(e) {
              return _this.setSymbol(i, m['1. symbol'], 'dropdown');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "symbol",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 381
            },
            __self: this
          }, m['1. symbol']), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "company-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 382
            },
            __self: this
          }, m['2. name']));
        }))));
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
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 418
                },
                __self: this
              }, _this.calculatePayoutRatio(s));
            });
            break;

          case 'calculateDebtToEquity':
            return stocks.map(function (s) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 423
                },
                __self: this
              }, _this.calculateDebtToEquity(s));
            });
            break;

          case 'calculateAssetTurnover':
            return stocks.map(function (s) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 428
                },
                __self: this
              }, _this.calculateAssetTurnover(s));
            });
            break;

          default:
            return;
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          colSpan: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          },
          __self: this
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCalculatedRow", function (title, functionName) {
      var stocks = _this.state.stocks;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, title), _this.getCalculatedValues(functionName), stocks.length < 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: 4 - stocks.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTableRow", function (title, category, subcategory, isDollar, isPercent) {
      var stocks = _this.state.stocks;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, title), stocks.length ? stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }, isDollar && s[category][subcategory] !== null && '$', _this.getValue(s[category][subcategory]), isPercent && s[category][subcategory] !== null && '%');
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }), stocks.length < 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: 4 - stocks.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }));
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // ( async () => {
      //   const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote,stats,financials,company,earnings,chart&range=3m')
      //   const data = await res.json()
      //   const stocks = []
      //   const array = Object.keys( data ).map( d => stocks.push( data[d] ))
      //   this.setState({ stocks })
      //   this.buildChartData( stocks )
      // })()
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(proxyUrl + url).then(function (res) {
        return res.text();
      }).then(function (body) {
        // comp_name
        var test = cheerio__WEBPACK_IMPORTED_MODULE_4___default.a.load(body); //console.log(test('.comp_name font').text(), 'the test')
        // test('.comp_name font').each(( index, element ) => {
        //   console.log(element, 'the index')
        // })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OuterContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, " Stock Symbol "), this.renderInputFields(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.submit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, " Go ")), this.renderTableRow('Name', 'company', 'companyName', false, false), this.renderTableRow('Sector', 'company', 'sector', false, false), this.renderTableRow('Industry', 'company', 'industry', false, false), this.renderTableRow('Latest Price', 'quote', 'latestPrice', true, false), this.renderTableRow('Price to Earning (P/E)', 'quote', 'peRatio', false, true), this.renderTableRow('Price to Sales (P/S)', 'stats', 'priceToSales', false, true), this.renderTableRow('Price to Book (P/B)', 'stats', 'priceToBook', false, true), this.renderTableRow('Dividend Yield', 'stats', 'dividendYield', false, true), this.renderTableRow('Dividend Rate', 'stats', 'dividendRate', true, false), this.renderCalculatedRow('Dividend Payout Ratio', 'calculatePayoutRatio'), this.renderTableRow('Return On Assets', 'stats', 'returnOnAssets', false, true), this.renderTableRow('Return On Equity', 'stats', 'returnOnEquity', false, true), this.renderTableRow('Profit Margin', 'stats', 'profitMargin', false, true), this.renderCalculatedRow('Debt to Equity', 'calculateDebtToEquity'), this.renderCalculatedRow('Asset Turnover (Current Quarter)', 'calculateAssetTurnover'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: chartData,
        options: chartOptions,
        redraw: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.da7c4e8fd9a0f9cdb7b3.hot-update.js.map