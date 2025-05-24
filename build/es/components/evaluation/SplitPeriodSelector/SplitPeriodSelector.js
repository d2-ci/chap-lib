import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import React from 'react';
import { getPeriodNameFromId } from '../../../utils/Time';
const SplitPeriodSelector = ({
  splitPeriods,
  setSelectedSplitPeriod,
  selectedSplitPeriod
}) => {
  if (!splitPeriods.includes(selectedSplitPeriod)) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SingleSelectField, {
    selected: selectedSplitPeriod,
    onChange: e => setSelectedSplitPeriod(e.selected)
  }, splitPeriods.map((splitPeriod, i) => /*#__PURE__*/React.createElement(SingleSelectOption, {
    key: i,
    label: getPeriodNameFromId(splitPeriod),
    value: splitPeriod
  })))));
};
export default SplitPeriodSelector;