webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/charts/mixed-chart.js":
/*!******************************************!*\
  !*** ./components/charts/mixed-chart.js ***!
  \******************************************/
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
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/charts/mixed-chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var options = {
  legend: {
    display: false
  },
  tooltips: {
    mode: 'index',
    filter: function filter(item) {
      return item.value !== 'NaN';
    }
  },
  scales: {
    xAxes: [{
      stacked: true,
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
    }],
    yAxes: [{
      stacked: true
    }]
  }
};

var formatData = function formatData(data) {
  var datasets = [];

  if (data.some(function (h) {
    return h.deces;
  })) {
    datasets.push({
      label: 'Décès',
      data: data.map(function (h) {
        return h.deces || null;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red
    });
  }

  if (data.some(function (h) {
    return h.reanimation;
  })) {
    datasets.push({
      label: 'En réanimation',
      data: data.map(function (h) {
        return h.reanimation || null;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkerGrey
    });
  }

  if (data.some(function (h) {
    return h.hospitalises;
  })) {
    datasets.push({
      label: 'Autre hospitalisation',
      data: data.map(function (h) {
        if (h.hospitalises) {
          return h.hospitalises - (h.reanimation || 0);
        }

        return null;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGrey
    });
  }

  if (data.some(function (h) {
    return h.gueris;
  })) {
    datasets.push({
      label: 'Retours à domicile',
      data: data.map(function (h) {
        return h.gueris || null;
      }),
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green
    });
  }

  if (data.some(function (h) {
    return h.casConfirmes;
  })) {
    datasets.push({
      label: 'Autre',
      data: data.map(function (h) {
        return h.casConfirmes - ((h.gueris || 0) + (h.deces || 0) + (h.hospitalises || h.reanimation || 0));
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

var MixedChart = function MixedChart(_ref) {
  var data = _ref.data,
      height = _ref.height;
  return __jsx("div", {
    style: {
      padding: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: formatData(data),
    options: options,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }));
};

MixedChart.defaultProps = {
  height: null
};
MixedChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (MixedChart);

/***/ })

})
//# sourceMappingURL=index.js.d73554b870e006410d2b.hot-update.js.map