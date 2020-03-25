webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/charts/confirmes-chart.js":
/*!**********************************************!*\
  !*** ./components/charts/confirmes-chart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/charts/confirmes-chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var options = {
  legend: {
    display: false
  },
  tooltips: {
    mode: 'index'
  },
  fill: false,
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'DD/MM'
        },
        tooltipFormat: 'DD/MM'
      },
      gridLines: {
        offsetGridLines: true
      },
      offset: true
    }]
  }
};

var formatData = function formatData(data) {
  var datasets = [];

  if (data.some(function (h) {
    return h.casConfirmes;
  })) {
    datasets.push({
      label: 'Cas confirmés',
      data: data.map(function (h) {
        return h.casConfirmes;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].orange
    });
  }

  return {
    labels: data.map(function (h) {
      return new Date(h.date);
    }),
    datasets: datasets
  };
};

var ConfirmesChart = function ConfirmesChart(_ref) {
  var data = _ref.data,
      height = _ref.height;
  return __jsx("div", {
    style: {
      padding: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    data: formatData(data),
    options: options,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

ConfirmesChart.defaultProps = {
  height: null
};
ConfirmesChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmesChart);

/***/ })

})
//# sourceMappingURL=index.js.f24c8eccd5e610f49a6d.hot-update.js.map