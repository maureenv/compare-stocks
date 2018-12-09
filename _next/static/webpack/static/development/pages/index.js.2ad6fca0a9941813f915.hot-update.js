webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pageLayout.js":
/*!**********************************!*\
  !*** ./components/pageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta */ "./components/meta.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/index.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/maureenvogel/webprojects/stocks/components/pageLayout.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');\n  body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    min-height: 100vh;\n  }\n  #__next {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  body, h1, h2, h3, h4, div, p {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; /* for firefox font */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), styled_reset__WEBPACK_IMPORTED_MODULE_4___default.a);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Main",
  componentId: "sc-16tm1wk-0"
})([".particles-class{width:100%;height:100%;min-height:100vh;position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;position:fixed;background:rgba(0,179,179,1);background:-moz-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-webkit-gradient(left bottom,right top,color-stop(0%,rgba(0,179,179,1)),color-stop(100%,rgba(0,126,194,1)));background:-webkit-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-o-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:-ms-linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);background:linear-gradient(45deg,rgba(0,179,179,1) 0%,rgba(0,126,194,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b3b3',endColorstr='#007ec2',GradientType=1 );}"]);
var theme = {
  lightblue: 'rgba(0,179,179,1)',
  darkblue: 'rgba(0,126,194,1)',
  whitegray: '#f5f5f5',
  lightgray: '#adadad'
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./node_modules/styled-reset/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/styled-reset/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.reset = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var reset = (0, _styledComponents.css)(_templateObject());
exports.reset = reset;
var _default = reset;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.2ad6fca0a9941813f915.hot-update.js.map