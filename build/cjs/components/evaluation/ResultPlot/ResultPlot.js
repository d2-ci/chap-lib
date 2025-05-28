"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultPlot = void 0;
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _highcharts = _interopRequireDefault(require("highcharts"));
var _react = _interopRequireDefault(require("react"));
var _Time = require("../../../utils/Time");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function syncChartZoom(event) {
  _highcharts.default.charts.forEach(chart => {
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
    data: data.averages.slice(),
    zIndex: 3,
    opacity: 1,
    lineWidth: 2.5,
    marker: {
      enabled: false
    }
  }, {
    name: 'Quantiles Outer',
    data: data.ranges.slice(),
    type: 'arearange',
    lineWidth: 0,
    color: '#c4dcf2',
    fillOpacity: 1,
    zIndex: 0,
    marker: {
      enabled: false
    }
  }, {
    name: 'Quantiles Middle',
    data: data.midranges.slice(),
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
          return (0, _Time.getPeriodNameFromId)(this.value.toString());
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
    highcharts: _highcharts.default,
    options: getOptions(data, modelName, syncZoom)
  }));
};
exports.ResultPlot = ResultPlot;