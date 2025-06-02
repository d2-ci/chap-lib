"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparisonPlotList = void 0;
var _react = _interopRequireDefault(require("react"));
var _ComparisonPlot = require("../ComparisonPlot/ComparisonPlot");
var _reactVirtuoso = require("react-virtuoso");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ComparisonPlotList = ({
  evaluationPerOrgUnits,
  useVirtuoso = true,
  useVirtuosoWindowScroll = false,
  nameLabel
}) => {
  function getItemContent() {
    const ItemContent = index => {
      const orgUnitsData = evaluationPerOrgUnits[index];
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        key: orgUnitsData.orgUnitId
      }, /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
        orgUnitsData: orgUnitsData
      }));
    };
    ItemContent.displayName = 'ItemContent';
    return ItemContent;
  }
  if (!useVirtuoso) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, evaluationPerOrgUnits.map(orgUnitsData => {
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
        key: orgUnitsData.orgUnitId,
        orgUnitsData: orgUnitsData,
        nameLabel: nameLabel
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