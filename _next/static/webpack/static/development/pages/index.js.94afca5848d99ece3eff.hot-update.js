webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/mobile.js":
/*!***************************!*\
  !*** ./layouts/mobile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_date_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date-nav */ "./components/date-nav.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/react-map-gl */ "./components/react-map-gl/index.js");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/statistics */ "./components/statistics.js");
/* harmony import */ var _components_confirmed_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/confirmed-chart */ "./components/confirmed-chart.js");
/* harmony import */ var _components_descritpion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/descritpion */ "./components/descritpion.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");

var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var VIEWS = {
  map: function map(_ref) {
    var viewport = _ref.viewport,
        date = _ref.date,
        regionsReport = _ref.regionsReport,
        setViewport = _ref.setViewport;
    return __jsx(_components_react_map_gl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      viewport: viewport,
      date: date,
      regions: regionsReport,
      onViewportChange: setViewport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  },
  stats: function stats(_ref2) {
    var date = _ref2.date,
        franceReport = _ref2.franceReport;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_7__["default"], {
      report: franceReport,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), franceReport && franceReport.history && __jsx(_components_confirmed_chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: franceReport.history,
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  },
  description: function description() {
    return __jsx(_components_descritpion__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }
};

var MobilePage = function MobilePage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('map'),
      selectedView = _useState[0],
      setSelectedView = _useState[1];

  return __jsx("div", {
    className: "jsx-2203491429" + " " + 'mobile-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_date_nav__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedView: selectedView,
    selectView: setSelectedView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, VIEWS[selectedView](props)), __jsx("div", {
    className: "jsx-2203491429" + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: "jsx-2203491429" + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["FileText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('map');
    },
    className: "jsx-2203491429" + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('stats');
    },
    className: "jsx-2203491429" + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2203491429",
    __self: this
  }, ".mobile-page-container.jsx-2203491429{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2xheW91dHMvbW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHd0IsMEVBQ1MsOEVBQ2YsaUNBQ1QiLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvbGF5b3V0cy9tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0ZpbGVUZXh0LCBNYXAsIEJhckNoYXJ0fSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xuXG5pbXBvcnQgRGF0ZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtbmF2J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IFJlYWN0TWFwR2wgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC1tYXAtZ2wnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3MnXG5pbXBvcnQgQ29uZmlybWVkQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtZWQtY2hhcnQnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcml0cGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmNvbnN0IFZJRVdTID0ge1xuICBtYXA6ICh7dmlld3BvcnQsIGRhdGUsIHJlZ2lvbnNSZXBvcnQsIHNldFZpZXdwb3J0fSkgPT4gKFxuICAgIDxSZWFjdE1hcEdsXG4gICAgICB2aWV3cG9ydD17dmlld3BvcnR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgcmVnaW9ucz17cmVnaW9uc1JlcG9ydH1cbiAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fSAvPlxuICApLFxuICBzdGF0czogKHtkYXRlLCBmcmFuY2VSZXBvcnR9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxTdGF0aXN0aWNzIHJlcG9ydD17ZnJhbmNlUmVwb3J0fSAvPlxuXG4gICAgICB7ZnJhbmNlUmVwb3J0ICYmIGZyYW5jZVJlcG9ydC5oaXN0b3J5ICYmIChcbiAgICAgICAgPENvbmZpcm1lZENoYXJ0IGRhdGE9e2ZyYW5jZVJlcG9ydC5oaXN0b3J5fSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICksXG4gIGRlc2NyaXB0aW9uOiAoKSA9PiA8RGVzY3JpcHRpb24gLz5cbn1cblxuY29uc3QgTW9iaWxlUGFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVmlldywgc2V0U2VsZWN0ZWRWaWV3XSA9IHVzZVN0YXRlKCdtYXAnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1wYWdlLWNvbnRhaW5lcic+XG4gICAgICA8RGF0ZU5hdiB7Li4ucHJvcHN9IC8+XG4gICAgICA8TWVudSBzZWxlY3RlZFZpZXc9e3NlbGVjdGVkVmlld30gc2VsZWN0Vmlldz17c2V0U2VsZWN0ZWRWaWV3fT5cbiAgICAgICAge1ZJRVdTW3NlbGVjdGVkVmlld10ocHJvcHMpfVxuICAgICAgPC9NZW51PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldy1zZWxlY3Rvcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdkZXNjcmlwdGlvbicgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0VmlldygnZGVzY3JpcHRpb24nKX0+XG4gICAgICAgICAgPEZpbGVUZXh0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnbWFwJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdtYXAnKX0+XG4gICAgICAgICAgPE1hcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ3N0YXRzJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWaWV3KCdzdGF0cycpfT5cbiAgICAgICAgICA8QmFyQ2hhcnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2JpbGUtcGFnZS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUGFnZVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/layouts/mobile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobilePage);

/***/ })

})
//# sourceMappingURL=index.js.94afca5848d99ece3eff.hot-update.js.map