import React, { useEffect, useState } from 'react';
import { ComparisonPlotList } from '../ComparisonPlotList/ComparisonPlotList';
import { Checkbox, InputField, } from '@dhis2/ui';
import SplitPeriodSelector from '../SplitPeriodSelector/SplitPeriodSelector';
import styles from './ComparionPlotWrapper.module.css';
export const ComparionPlotWrapper = ({ evaluationName, modelName, evaluations, splitPeriods, }) => {
    const [filteredEvaluationPlots, setFilteredEvaluationPlots] = useState([]);
    const [searchQuery, setSearchQuery] = useState();
    const [selectedOrgUnits, setSelectedOrgUnits] = useState([]);
    const [allOrgUnits, setAllOrgUnits] = useState([]);
    const [selectedSplitPeriod, setSelectedSplitPeriod] = useState(splitPeriods[0]);
    //on intial load
    useEffect(() => {
        const defaultSplitPoint = evaluations[0];
        setSelectedOrgUnits(defaultSplitPoint.evaluation.map((evaluationPerOrgUnit) => evaluationPerOrgUnit.orgUnitId));
        setAllOrgUnits(defaultSplitPoint.evaluation.map((evaluationPerOrgUnit) => {
            return {
                name: evaluationPerOrgUnit.orgUnitName,
                id: evaluationPerOrgUnit.orgUnitId,
            };
        }));
        setSelectedSplitPeriod(defaultSplitPoint.splitPoint);
        setFilteredEvaluationPlots(defaultSplitPoint.evaluation);
        //setSelectedOrgUnits(evaluationPerOrgUnits.map((orgUnit) => orgUnit.orgUnitId))
    }, [evaluations, splitPeriods]);
    useEffect(() => {
        //find selected orgUnits
        const splitPoint = evaluations.find((evaluation) => evaluation.splitPoint === selectedSplitPeriod);
        //match on orgUnit
        const _filteredEvaluationPlots = selectedOrgUnits?.map((orgUnit) => {
            // Use find to locate the first matching evaluation for the orgUnit
            return splitPoint.evaluation.find((evaluationPerOrgUnit) => evaluationPerOrgUnit.orgUnitId === orgUnit &&
                evaluationPerOrgUnit.orgUnitName
                    .toLocaleLowerCase()
                    .includes(searchQuery ? searchQuery.toLocaleLowerCase() : ''));
        });
        setFilteredEvaluationPlots(_filteredEvaluationPlots);
    }, [selectedSplitPeriod, selectedOrgUnits, searchQuery]);
    const onChangeOrgUnitSelected = (e) => {
        const selectedOrgUnit = e.checked
            ? [...selectedOrgUnits, e.value]
            : selectedOrgUnits.filter((orgUnit) => orgUnit !== e.value);
        setSelectedOrgUnits(selectedOrgUnit);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.wrapper },
            React.createElement("div", { className: styles.filter },
                React.createElement("div", null,
                    React.createElement("h2", null,
                        "Evaluation: ",
                        evaluationName)),
                React.createElement("div", null,
                    React.createElement("div", { className: styles.filterTitle }, "Split period:"),
                    React.createElement(SplitPeriodSelector, { splitPeriods: splitPeriods, setSelectedSplitPeriod: setSelectedSplitPeriod, selectedSplitPeriod: selectedSplitPeriod })),
                React.createElement("div", null,
                    React.createElement("div", { className: styles.filterTitle }, "Organization units:"),
                    React.createElement("div", { className: styles.filterCheckbox }, allOrgUnits.map((orgUnit, i) => (React.createElement(Checkbox, { checked: selectedOrgUnits.filter((o) => o == orgUnit.id).length > 0, onChange: onChangeOrgUnitSelected, label: orgUnit.name, key: orgUnit.id, value: orgUnit.id })))))),
            React.createElement("div", { className: styles.plots },
                React.createElement("div", null,
                    React.createElement("h3", null,
                        "Model: ",
                        modelName)),
                React.createElement("div", { className: styles.searchInput },
                    React.createElement(InputField, { label: "Search for organization units:", placeholder: allOrgUnits[0]?.name + '..', onChange: (e) => setSearchQuery(e.value), value: searchQuery })),
                React.createElement(ComparisonPlotList, { evaluationPerOrgUnits: filteredEvaluationPlots, useVirtuoso: true })))));
};
