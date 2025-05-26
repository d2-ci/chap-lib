"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparisonPlotList = void 0;
var _react = _interopRequireDefault(require("react"));
var _ComparisonPlot = require("../ComparisonPlot/ComparisonPlot");
var _reactVirtuoso = require("react-virtuoso");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ComparisonPlotList = _ref => {
  let {
    evaluationPerOrgUnits,
    useVirtuoso = true,
    useVirtuosoWindowScroll = false
  } = _ref;
  function getItemContent() {
    return index => {
      const orgUnitsData = evaluationPerOrgUnits[index];
      return orgUnitsData && /*#__PURE__*/_react.default.createElement("div", {
        key: orgUnitsData.orgUnitId
      }, /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
        orgUnitsData: orgUnitsData
      }));
    };
  }
  if (!useVirtuoso) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, evaluationPerOrgUnits.map((orgUnitsData, index) => {
      return /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
        orgUnitsData: orgUnitsData,
        key: orgUnitsData.orgUnitId
      });
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactVirtuoso.Virtuoso, {
    style: {
      height: '60vh'
    },
    useWindowScroll: useVirtuosoWindowScroll,
    totalCount: evaluationPerOrgUnits.length,
    itemContent: getItemContent()
  }));
};
exports.ComparisonPlotList = ComparisonPlotList;