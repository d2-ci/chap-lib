"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SplitPeriodSelector = _ref => {
  let {
    splitPeriods,
    setSelectedSplitPeriod,
    selectedSplitPeriod
  } = _ref;
  if (!splitPeriods.includes(selectedSplitPeriod)) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    selected: selectedSplitPeriod,
    onChange: e => setSelectedSplitPeriod(e.selected)
  }, splitPeriods.map((splitPeriod, i) => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    key: i,
    label: splitPeriod,
    value: splitPeriod
  })))));
};
var _default = exports.default = SplitPeriodSelector;