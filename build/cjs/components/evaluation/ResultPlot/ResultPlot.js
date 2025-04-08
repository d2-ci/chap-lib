"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultPlot = void 0;
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _highcharts = _interopRequireDefault(require("highcharts"));
var _react = _interopRequireWildcard(require("react"));
var _Time = require("../../../utils/Time");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//import HighchartsMore from "highcharts/highcharts-more";

//HighchartsMore(Highcharts); // Enables the 'arearange' series type
function syncChartZoom(event) {
  _highcharts.default.charts.forEach(chart => {
    console.log(chart);
    if (chart) {
      chart.xAxis[0].setExtremes(event.min, event.max);
    }
  });
}
const getSeries = data => {
  return [{
    name: 'Real Cases',
    data: data.realValues,
    zIndex: 4,
    lineWidth: 2.5,
    type: 'spline',
    color: '#f68000',
    // Different color for real data
    marker: {
      enabled: false,
      lineWidth: 2
      //fillColor: Highcharts.getOptions().colors[2]
    }
  }, {
    name: 'Predicted Cases',
    type: 'line',
    color: '#004bbd',
    data: data.averages,
    zIndex: 3,
    opacity: 1,
    lineWidth: 2.5,
    marker: {
      enabled: false
    }
  }, {
    name: 'Quantiles',
    data: data.ranges,
    type: 'arearange',
    lineWidth: 0,
    color: '#c4dcf2',
    fillOpacity: 1,
    zIndex: 0,
    marker: {
      enabled: false
    }
  }, {
    name: 'QuantilesMid',
    data: data.midranges,
    type: 'arearange',
    lineWidth: 1,
    color: '#9bbdff',
    fillOpacity: 1,
    zIndex: 1,
    marker: {
      enabled: false
    }
  }];
};
const getOptions = (data, modelName, syncZoom) => {
  return {
    title: {
      text: ''
    },
    subtitle: {
      text: modelName ? 'Model: ' + modelName : '',
      align: 'left'
    },
    chart: {
      zoomType: 'x'
    },
    xAxis: {
      categories: data.periods,
      // Use periods as categories
      labels: {
        enabled: true,
        formatter: function () {
          return (0, _Time.getPeriodNameFromId)(this.value);
        },
        style: {
          fontSize: '0.9rem'
        }
      },
      events: syncZoom && {
        afterSetExtremes: syncChartZoom
      },
      title: {
        text: 'Period'
      }
    },
    yAxis: {
      title: {
        text: null
      },
      min: 0
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: ' cases'
    },
    plotOptions: {
      series: {
        animation: {
          duration: 0
        }
      }
    },
    series: getSeries(data)
  };
};
const ResultPlot = _ref => {
  let {
    data,
    modelName,
    syncZoom
  } = _ref;
  const [isRerendering, setIsRerendering] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    console.log(data);
    setIsRerendering(true);
  }, [data]);
  (0, _react.useEffect)(() => {
    if (isRerendering) {
      setIsRerendering(false);
    }
  }, [isRerendering]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isRerendering && /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
    highcharts: _highcharts.default,
    options: getOptions(data, modelName, syncZoom)
  }));
};
exports.ResultPlot = ResultPlot;