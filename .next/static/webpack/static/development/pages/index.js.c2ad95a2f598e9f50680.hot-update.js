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

var _jsxFileName = "/Users/maureenvogel/webprojects/stocks/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1cvwks4-0"
})(["color:red;position:relative;z-index:1;text-transform:uppercase;font-size:100px;margin-bottom:-10px;font-family:'Anton',sans-serif;text-shadow:-3px 0px 11px rgba(0,0,0,0.7);"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__OuterContainer",
  componentId: "sc-1cvwks4-1"
})(["background:#666;width:100%;height:100%;"]);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSymbol", function (index, event) {
      var text = event.target.value;

      var symbolList = _toConsumableArray(_this.state.symbolList);

      symbolList[index] = text;

      _this.setState({
        symbolList: symbolList
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var symbolList, removeFromList, filteredList, res, data, stocks, array;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                symbolList = _this.state.symbolList;
                removeFromList = [undefined, null];
                filteredList = symbolList.filter(function (i) {
                  return !removeFromList.includes(i);
                });

                _this.setState({
                  symbolList: filteredList
                });

                console.log(filteredList.join(","), 'after');
                _context.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=quote,stats,financials,company,earnings,chart&range=3m"));

              case 7:
                res = _context.sent;
                _context.next = 10;
                return res.json();

              case 10:
                data = _context.sent;
                console.log(data, 'the data');
                stocks = [];
                array = Object.keys(data).map(function (d) {
                  return stocks.push(data[d]);
                });

                _this.setState({
                  stocks: stocks
                });

                _this.buildChartData(stocks);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInputFields", function () {
      return Array.from(new Array(5), function (val, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          placeholder: "Enter stock symbol",
          value: _this.state.symbolList[i] || '',
          onChange: function onChange(e) {
            return _this.setSymbol(i, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }));
      });
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
        var test = cheerio__WEBPACK_IMPORTED_MODULE_4___default.a.load(body);
        console.log(test('.comp_name font').text(), 'the test'); // test('.comp_name font').each(( index, element ) => {
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
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, " Stock Symbol "), this.renderInputFields(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.submit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, " Go ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, " Name "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, s.company.companyName);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, " Sector "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, s.company.sector);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, " Industry "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, s.company.industry);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, " Latest Price "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, "$", s.quote.latestPrice);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, " Price to Earning (P/E) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, s.quote.peRatio);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, " Price to Sales (P/S) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, s.stats.priceToSales.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, " Price to Book (P/B) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, s.stats.priceToBook);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, " Dividend Yield "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, s.stats.dividendYield.toFixed(2), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, " Dividend Rate "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, "$", s.stats.dividendRate.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, " Dividend Payout Ratio "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          },
          __self: this
        }, _this2.calculatePayoutRatio(s), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, " Return On Assets "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, s.stats.returnOnAssets, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, " Return On Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, s.stats.returnOnEquity, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, " Profit Margin "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, s.stats.profitMargin, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, " Debt to Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, _this2.calculateDebtToEquity(s), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, " Asset Turnover (Current Quarter)"), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }, _this2.calculateAssetTurnover(s), "%");
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: '500px',
          width: '800px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: chartData,
        options: chartOptions,
        redraw: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      })));
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
//# sourceMappingURL=index.js.c2ad95a2f598e9f50680.hot-update.js.map