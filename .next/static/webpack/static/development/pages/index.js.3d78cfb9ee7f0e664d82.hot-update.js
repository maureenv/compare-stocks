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

var _jsxFileName = "/Users/maureenvogel/webprojects/stocks/pages/index.js";

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




var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculatePayoutRatio", function (stock) {
      var EPS = stock.earnings.earnings.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.actualEPS;
      }, 0);
      var dividendRate = stock.stats.dividendRate;
      var payoutRatio = Math.floor(dividendRate / EPS * 100 * 100) / 100;
      return payoutRatio;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateDebtToEquity", function (stock) {
      var shareholderEquity = stock.financials.financials[0].shareholderEquity;
      var totalDebt = stock.financials.financials[0].totalDebt;
      var debtToEquity = (totalDebt / shareholderEquity).toFixed(2);
      return debtToEquity;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateTotal", function (orders) {
      var total = orders.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.total);
      }, 0);
      return total.toLocaleString();
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

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var stocks = this.state.stocks;
      var tableHeaders = ['Name', 'PEG', //
      'Price To Earning (P/E)', 'Price to Sales (P/S)', 'Price to Book (P/B)', 'Dividend Yield', 'Dividend Payout', 'Return On Assets', 'Return On Equity', 'Profit Margin', 'Current Ratio', //
      'Quick Ratio', //
      'Debt to Equity', 'Interest Coverage', //
      'Asset Turnover', //
      'Inventory Turnover'];
      console.log(stocks, 'the stocks');
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, " Name "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, s.company.companyName);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " Sector "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, s.company.sector);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " Industry "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, s.company.industry);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " Latest Price "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "$", s.quote.latestPrice);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " Price to Earning (P/E) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, s.quote.peRatio);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, " Price to Sales (P/S) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, s.stats.priceToSales.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " Price to Book (P/B) "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, s.stats.priceToBook);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, " Dividend Yield "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, s.stats.dividendYield.toFixed(2), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, " Dividend Rate "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "$", s.stats.dividendRate.toFixed(2));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, " Dividend Payout Ratio "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, _this3.calculatePayoutRatio(s), "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, " Return On Assets "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, s.stats.returnOnAssets, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, " Return On Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, s.stats.returnOnEquity, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, " Profit Margin "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, s.stats.profitMargin, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, " Profit Margin "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, s.stats.profitMargin, "%");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, " Debt to Equity "), stocks.length && stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, _this3.calculateDebtToEquity(s), "%");
      })))));
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
//# sourceMappingURL=index.js.3d78cfb9ee7f0e664d82.hot-update.js.map