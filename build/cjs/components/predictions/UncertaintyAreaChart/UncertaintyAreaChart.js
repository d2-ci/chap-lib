"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UncertaintyAreaChart = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _highcharts = _interopRequireDefault(require("highcharts"));
var _accessibility = _interopRequireDefault(require("highcharts/modules/accessibility"));
var _highchartsMore = _interopRequireDefault(require("highcharts/highcharts-more"));
var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));
var _react = _interopRequireWildcard(require("react"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _UncertaintyAreaChartModule = _interopRequireDefault(require("./UncertaintyAreaChart.module.css"));
var _ui = require("@dhis2/ui");
var _PredictionResponse = require("../../../utils/PredictionResponse");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _accessibility.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);
(0, _highchartsMore.default)(_highcharts.default);
const getChartOptions = (data, predictionTargetName) => {
  const colors = _highcharts.default.getOptions().colors;
  const median = data.filter(d => d.dataElement === 'median').map(d => [d.period, d.value]);
  const range = data.filter(d => d.dataElement === 'quantile_low').map(d => [d.period, d.value, data.filter(x => x.dataElement === 'quantile_high' && x.period === d.period)[0].value]);
  return {
    title: {
      text: _d2I18n.default.t(`Prediction for ${predictionTargetName} for ${data[0].displayName}`)
    },
    tooltip: {
      shared: true
    },
    xAxis: {
      type: 'category',
      labels: {
        enabled: true,
        formatter: function () {
          return (0, _PredictionResponse.numberDateToString)(this.value);
        },
        style: {
          fontSize: '0.9rem'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Number of cases'
      }
    },
    credits: {
      text: 'CHAP'
    },
    chart: {
      height: 490,
      marginBottom: 125
    },
    plotOptions: {
      series: {
        lineWidth: 5
      }
    },
    series: [
    //median
    {
      type: 'line',
      data: median,
      name: _d2I18n.default.t('Quantile median'),
      color: '#004bbd',
      zIndex: 2
    },
    //high
    {
      type: 'arearange',
      name: _d2I18n.default.t('Range'),
      data: range,
      zIndex: 1,
      lineWidth: 0,
      color: '#004bbd',
      fillOpacity: 0.4
    }]
  };
};
function groupByOrgUnit(data) {
  const orgUnits = [...new Set(data.map(item => item.orgUnit))];
  return orgUnits.map(orgUnit => data.filter(item => item.orgUnit === orgUnit));
}
const UncertaintyAreaChart = _ref => {
  let {
    data,
    predictionTargetName
  } = _ref;
  const matrix = groupByOrgUnit(data.dataValues);
  const [options, setOptions] = (0, _react.useState)(getChartOptions(matrix[0], predictionTargetName));
  const [indexOfSelectedOrgUnit, setIndexOfSelectedOrgUnit] = (0, _react.useState)(0);
  const onSelectOrgUnit = index => {
    setIndexOfSelectedOrgUnit(index);
    setOptions(getChartOptions(matrix[index], predictionTargetName));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _UncertaintyAreaChartModule.default.chartContainer
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ui.Menu, {
    dense: true
  }, matrix.map((orgUnitData, index) => /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    className: _UncertaintyAreaChartModule.default.menu,
    active: indexOfSelectedOrgUnit == index,
    key: index,
    label: orgUnitData[0].displayName,
    onClick: () => onSelectOrgUnit(index)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _UncertaintyAreaChartModule.default.chart
  }, /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
    highcharts: _highcharts.default,
    constructorType: 'chart',
    options: options
  }))));
};
exports.UncertaintyAreaChart = UncertaintyAreaChart;