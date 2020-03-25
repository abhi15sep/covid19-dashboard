webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/statistics.js":
/*!**********************************!*\
  !*** ./components/statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./pages/index.js");
/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counters */ "./components/counters.js");
/* harmony import */ var _charts_mixed_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/mixed-chart */ "./components/charts/mixed-chart.js");
/* harmony import */ var _charts_confirmes_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/confirmes-chart */ "./components/charts/confirmes-chart.js");
/* harmony import */ var _charts_deces_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/deces-chart */ "./components/charts/deces-chart.js");
/* harmony import */ var _charts_reanimation_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/reanimation-chart */ "./components/charts/reanimation-chart.js");
/* harmony import */ var _charts_hospitalises_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/hospitalises-chart */ "./components/charts/hospitalises-chart.js");
/* harmony import */ var _charts_gueris_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/gueris-chart */ "./components/charts/gueris-chart.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/statistics.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var charts = {
  mixed: {
    name: 'Tout afficher',
    chart: _charts_mixed_chart__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  confirmed: {
    name: 'Cas confirmés',
    chart: _charts_confirmes_chart__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  hospitalises: {
    name: 'Hospitalisations',
    chart: _charts_hospitalises_chart__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  reanimation: {
    name: 'Réanimations',
    chart: _charts_reanimation_chart__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  deces: {
    name: 'Décès',
    chart: _charts_deces_chart__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  gueris: {
    name: 'Retours à domicile',
    chart: _charts_gueris_chart__WEBPACK_IMPORTED_MODULE_11__["default"]
  }
};

var Statistics = function Statistics() {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_4__["AppContext"]),
      date = _useContext.date,
      franceReport = _useContext.franceReport,
      previousFranceReport = _useContext.previousFranceReport,
      selectedPreviousLocationReport = _useContext.selectedPreviousLocationReport,
      selectedLocationReport = _useContext.selectedLocationReport,
      setSelectedLocation = _useContext.setSelectedLocation,
      isMobileDevice = _useContext.isMobileDevice;

  var report = selectedLocationReport || franceReport;
  var previousReport = selectedPreviousLocationReport || previousFranceReport;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('mixed'),
      selectedChart = _useState[0],
      setSelectedChart = _useState[1];

  var Chart = charts[selectedChart].chart;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]) + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, selectedLocationReport && (isMobileDevice ? __jsx("div", {
    onClick: function onClick() {
      return setSelectedLocation(null);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]) + " " + 'close',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["X"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })) : __jsx("div", {
    onClick: function onClick() {
      return setSelectedLocation(null);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]) + " " + 'back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["BarChart2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "France"))), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "COVID-19 en ", selectedLocationReport ? selectedLocationReport.nom : 'France')), __jsx(_counters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    report: report,
    previousReport: previousReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), report && report.history && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Chart, {
    data: report.history.filter(function (r) {
      return date >= r.date;
    }),
    height: isMobileDevice ? 150 : 150,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]) + " " + 'charts-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, Object.keys(charts).map(function (chart) {
    return __jsx("div", {
      key: chart,
      onClick: function onClick() {
        return setSelectedChart(chart);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["525827053", [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary]]]) + " " + "chart-name ".concat(chart === selectedChart ? 'selected' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, charts[chart].name);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "525827053",
    dynamic: [isMobileDevice ? '0 -0.5em' : 0, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, theme.alt, theme.secondary, theme.primary],
    __self: this
  }, ".header.__jsx-style-dynamic-selector{text-align:center;position:-webkit-sticky;position:sticky;top:0;background-color:white;margin:".concat(isMobileDevice ? '0 -0.5em' : 0, ";padding:1px;}.back.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lighterGrey, ";padding:0.5em;font-size:larger;}.close.__jsx-style-dynamic-selector{position:absolute;top:0;right:0.5em;}.back.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:0 0.5em;}.back.__jsx-style-dynamic-selector:hover{cursor:pointer;background:").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGrey, ";}.charts-list.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:0.2em;margin:0.5em;}.chart-name.__jsx-style-dynamic-selector{text-align:center;background-color:").concat(theme.alt, ";color:#fff;border-radius:4px;margin:.2em 0;padding:0.2em 0.4em;}.chart-name.__jsx-style-dynamic-selector:hover{cursor:pointer;background-color:").concat(theme.secondary, ";}.chart-name.selected.__jsx-style-dynamic-selector{background-color:").concat(theme.primary, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzZCLEFBU0wsQUFVSyxBQU1ILEFBSUEsQUFLRixBQU9LLEFBU0gsQUFLK0IsYUFwQmEsRUFUN0QsQUFJMEMsQUFxQk0sR0FsRDlCLEFBbUJWLEFBc0J3QyxNQXJCbEMsWUFDZCxVQWtDQSxTQXpCQSxHQTdCUSxHQWtEUixHQWpEeUIsQUF3Q1osTUFQSSxJQTFCSSxDQWtDRCxVQVBMLEVBakN1QixNQXlDdEIsS0FQaEIsU0FRc0IsZ0JBekNSLElBMENkLFFBekNBLGdDQUt5QixtR0FDWixXQUM2Qix3Q0FDMUIsY0FDRyxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2plcm9tZS9vcGVuY292aWQxOS1mci9kYXNoYm9hcmQvY29tcG9uZW50cy9zdGF0aXN0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtYLCBCYXJDaGFydDJ9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycydcblxuaW1wb3J0IHtBcHBDb250ZXh0LCBUaGVtZUNvbnRleHR9IGZyb20gJy4uL3BhZ2VzJ1xuXG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi9jb3VudGVycydcbmltcG9ydCBNaXhlZENoYXJ0IGZyb20gJy4vY2hhcnRzL21peGVkLWNoYXJ0J1xuaW1wb3J0IENvbmZpcm1lc0NoYXJ0IGZyb20gJy4vY2hhcnRzL2NvbmZpcm1lcy1jaGFydCdcbmltcG9ydCBEZWNlc0NoYXJ0IGZyb20gJy4vY2hhcnRzL2RlY2VzLWNoYXJ0J1xuaW1wb3J0IFJlYW5pbWF0aW9uQ2hhcnQgZnJvbSAnLi9jaGFydHMvcmVhbmltYXRpb24tY2hhcnQnXG5pbXBvcnQgSG9zcGl0YWxpc2VzQ2hhcnQgZnJvbSAnLi9jaGFydHMvaG9zcGl0YWxpc2VzLWNoYXJ0J1xuaW1wb3J0IEd1ZXJpc0NoYXJ0IGZyb20gJy4vY2hhcnRzL2d1ZXJpcy1jaGFydCdcblxuY29uc3QgY2hhcnRzID0ge1xuICBtaXhlZDoge1xuICAgIG5hbWU6ICdUb3V0IGFmZmljaGVyJyxcbiAgICBjaGFydDogTWl4ZWRDaGFydFxuICB9LFxuICBjb25maXJtZWQ6IHtcbiAgICBuYW1lOiAnQ2FzIGNvbmZpcm3DqXMnLFxuICAgIGNoYXJ0OiBDb25maXJtZXNDaGFydFxuICB9LFxuICBob3NwaXRhbGlzZXM6IHtcbiAgICBuYW1lOiAnSG9zcGl0YWxpc2F0aW9ucycsXG4gICAgY2hhcnQ6IEhvc3BpdGFsaXNlc0NoYXJ0XG4gIH0sXG4gIHJlYW5pbWF0aW9uOiB7XG4gICAgbmFtZTogJ1LDqWFuaW1hdGlvbnMnLFxuICAgIGNoYXJ0OiBSZWFuaW1hdGlvbkNoYXJ0XG4gIH0sXG4gIGRlY2VzOiB7XG4gICAgbmFtZTogJ0TDqWPDqHMnLFxuICAgIGNoYXJ0OiBEZWNlc0NoYXJ0XG4gIH0sXG4gIGd1ZXJpczoge1xuICAgIG5hbWU6ICdSZXRvdXJzIMOgIGRvbWljaWxlJyxcbiAgICBjaGFydDogR3VlcmlzQ2hhcnRcbiAgfVxufVxuXG5jb25zdCBTdGF0aXN0aWNzID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICBjb25zdCB7ZGF0ZSwgZnJhbmNlUmVwb3J0LCBwcmV2aW91c0ZyYW5jZVJlcG9ydCwgc2VsZWN0ZWRQcmV2aW91c0xvY2F0aW9uUmVwb3J0LCBzZWxlY3RlZExvY2F0aW9uUmVwb3J0LCBzZXRTZWxlY3RlZExvY2F0aW9uLCBpc01vYmlsZURldmljZX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgcmVwb3J0ID0gc2VsZWN0ZWRMb2NhdGlvblJlcG9ydCB8fCBmcmFuY2VSZXBvcnRcbiAgY29uc3QgcHJldmlvdXNSZXBvcnQgPSBzZWxlY3RlZFByZXZpb3VzTG9jYXRpb25SZXBvcnQgfHwgcHJldmlvdXNGcmFuY2VSZXBvcnRcblxuICBjb25zdCBbc2VsZWN0ZWRDaGFydCwgc2V0U2VsZWN0ZWRDaGFydF0gPSB1c2VTdGF0ZSgnbWl4ZWQnKVxuICBjb25zdCBDaGFydCA9IGNoYXJ0c1tzZWxlY3RlZENoYXJ0XS5jaGFydFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICB7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCAmJiAoXG4gICAgICAgICAgaXNNb2JpbGVEZXZpY2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UnIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTG9jYXRpb24obnVsbCl9PjxYIC8+PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrJyBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZExvY2F0aW9uKG51bGwpfT48QmFyQ2hhcnQyIC8+IDxzcGFuPkZyYW5jZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIDxoMj5DT1ZJRC0xOSBlbiB7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCA/IHNlbGVjdGVkTG9jYXRpb25SZXBvcnQubm9tIDogJ0ZyYW5jZSd9PC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q291bnRlcnMgcmVwb3J0PXtyZXBvcnR9IHByZXZpb3VzUmVwb3J0PXtwcmV2aW91c1JlcG9ydH0gLz5cblxuICAgICAge3JlcG9ydCAmJiByZXBvcnQuaGlzdG9yeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENoYXJ0IGRhdGE9e3JlcG9ydC5oaXN0b3J5LmZpbHRlcihyID0+IGRhdGUgPj0gci5kYXRlKX0gaGVpZ2h0PXtpc01vYmlsZURldmljZSA/IDE1MCA6IDE1MH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcnRzLWxpc3QnPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGNoYXJ0cykubWFwKGNoYXJ0ID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17Y2hhcnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2hhcnQtbmFtZSAke2NoYXJ0ID09PSBzZWxlY3RlZENoYXJ0ID8gJ3NlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDaGFydChjaGFydCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hhcnRzW2NoYXJ0XS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogJHtpc01vYmlsZURldmljZSA/ICcwIC0wLjVlbScgOiAwfTtcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmxpZ2h0ZXJHcmV5fTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayBzcGFuIHtcbiAgICAgICAgICBtYXJnaW46IDAgMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjazpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcnRzLWxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgICAgICAgZ3JpZC1nYXA6IDAuMmVtO1xuICAgICAgICAgIG1hcmdpbjogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcnQtbmFtZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYWx0fTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiAuMmVtIDA7XG4gICAgICAgICAgcGFkZGluZzogMC4yZW0gMC40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcnQtbmFtZTpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuc2Vjb25kYXJ5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFydC1uYW1lLnNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzXG4iXX0= */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/statistics.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=index.js.849e5715c0c564d8bc01.hot-update.js.map