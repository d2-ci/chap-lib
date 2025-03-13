import { SingleSelectField, SingleSelectOption, } from '@dhis2/ui';
import React from 'react';
const SplitPeriodSelector = ({ splitPeriods, setSelectedSplitPeriod, selectedSplitPeriod, }) => {
    if (!splitPeriods.includes(selectedSplitPeriod)) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(SingleSelectField, { selected: selectedSplitPeriod, onChange: (e) => setSelectedSplitPeriod(e.selected) }, splitPeriods.map((splitPeriod, i) => (React.createElement(SingleSelectOption, { key: i, label: splitPeriod, value: splitPeriod })))))));
};
export default SplitPeriodSelector;
