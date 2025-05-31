"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparisonPlot = void 0;
var _react = _interopRequireDefault(require("react"));
var _ComparisonPlotModule = _interopRequireDefault(require("./ComparisonPlot.module.css"));
var _ResultPlot = require("../ResultPlot/ResultPlot");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ComparisonPlot = ({
  orgUnitsData
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.comparionBox
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.title
  }, orgUnitsData.orgUnitName), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.comparionBoxSideBySide
  }, orgUnitsData.models.map((modelData, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _ComparisonPlotModule.default.comparionBoxSideBySideItem
    }, /*#__PURE__*/_react.default.createElement(_ResultPlot.ResultPlot, {
      syncZoom: orgUnitsData.models.length > 1,
      data: modelData.data,
      modelName: modelData.modelName
    }));
  })));
};
exports.ComparisonPlot = ComparisonPlot;