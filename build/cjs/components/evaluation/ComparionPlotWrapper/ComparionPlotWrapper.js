"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparionPlotWrapper = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ComparisonPlotList = require("../ComparisonPlotList/ComparisonPlotList");
var _ui = require("@dhis2/ui");
var _SplitPeriodSelector = _interopRequireDefault(require("../SplitPeriodSelector/SplitPeriodSelector"));
var _ComparionPlotWrapperModule = _interopRequireDefault(require("./ComparionPlotWrapper.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ComparionPlotWrapper = _ref => {
  var _allOrgUnits$;
  let {
    evaluationName,
    modelName,
    evaluations,
    splitPeriods
  } = _ref;
  const [filteredEvaluationPlots, setFilteredEvaluationPlots] = (0, _react.useState)([]);
  const [searchQuery, setSearchQuery] = (0, _react.useState)();
  const [selectedOrgUnits, setSelectedOrgUnits] = (0, _react.useState)([]);
  const [allOrgUnits, setAllOrgUnits] = (0, _react.useState)([]);
  const [selectedSplitPeriod, setSelectedSplitPeriod] = (0, _react.useState)(splitPeriods[0]);

  //on intial load
  (0, _react.useEffect)(() => {
    const defaultSplitPoint = evaluations[0];
    setSelectedOrgUnits(defaultSplitPoint.evaluation.map(evaluationPerOrgUnit => evaluationPerOrgUnit.orgUnitId));
    setAllOrgUnits(defaultSplitPoint.evaluation.map(evaluationPerOrgUnit => {
      return {
        name: evaluationPerOrgUnit.orgUnitName,
        id: evaluationPerOrgUnit.orgUnitId
      };
    }));
    setSelectedSplitPeriod(defaultSplitPoint.splitPoint);
    setFilteredEvaluationPlots(defaultSplitPoint.evaluation);
    //setSelectedOrgUnits(evaluationPerOrgUnits.map((orgUnit) => orgUnit.orgUnitId))
  }, [evaluations, splitPeriods]);
  (0, _react.useEffect)(() => {
    //find selected orgUnits
    const splitPoint = evaluations.find(evaluation => evaluation.splitPoint === selectedSplitPeriod);

    //match on orgUnit
    const _filteredEvaluationPlots = selectedOrgUnits === null || selectedOrgUnits === void 0 ? void 0 : selectedOrgUnits.map(orgUnit => {
      // Use find to locate the first matching evaluation for the orgUnit
      return splitPoint.evaluation.find(evaluationPerOrgUnit => evaluationPerOrgUnit.orgUnitId === orgUnit && evaluationPerOrgUnit.orgUnitName.toLocaleLowerCase().includes(searchQuery ? searchQuery.toLocaleLowerCase() : ''));
    });
    setFilteredEvaluationPlots(_filteredEvaluationPlots);
  }, [selectedSplitPeriod, selectedOrgUnits, searchQuery]);
  const onChangeOrgUnitSelected = e => {
    const selectedOrgUnit = e.checked ? [...selectedOrgUnits, e.value] : selectedOrgUnits.filter(orgUnit => orgUnit !== e.value);
    setSelectedOrgUnits(selectedOrgUnit);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.wrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.filter
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Evaluation: ", evaluationName)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.filterTitle
  }, "Split period:"), /*#__PURE__*/_react.default.createElement(_SplitPeriodSelector.default, {
    splitPeriods: splitPeriods,
    setSelectedSplitPeriod: setSelectedSplitPeriod,
    selectedSplitPeriod: selectedSplitPeriod
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.filterTitle
  }, "Organization units:"), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.filterContent
  }, /*#__PURE__*/_react.default.createElement("div", null, allOrgUnits.map((orgUnit, i) => /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    checked: selectedOrgUnits.filter(o => o == orgUnit.id).length > 0,
    onChange: onChangeOrgUnitSelected,
    label: orgUnit.name,
    key: orgUnit.id,
    value: orgUnit.id
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.plots
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Model: ", modelName)), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparionPlotWrapperModule.default.searchInput
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: "Search for organization units:",
    placeholder: ((_allOrgUnits$ = allOrgUnits[0]) === null || _allOrgUnits$ === void 0 ? void 0 : _allOrgUnits$.name) + '..',
    onChange: e => setSearchQuery(e.value),
    value: searchQuery
  })), /*#__PURE__*/_react.default.createElement(_ComparisonPlotList.ComparisonPlotList, {
    evaluationPerOrgUnits: filteredEvaluationPlots,
    useVirtuoso: true
  }))));
};
exports.ComparionPlotWrapper = ComparionPlotWrapper;