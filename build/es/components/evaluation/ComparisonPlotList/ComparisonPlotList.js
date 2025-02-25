import React from 'react';
import { ComparisonPlot } from '../ComparisonPlot/ComparisonPlot';
import { Virtuoso } from 'react-virtuoso';
export const ComparisonPlotList = ({ evaluationPerOrgUnits, useVirtuoso = true, useVirtuosoWindowScroll = false, }) => {
    function getItemContent() {
        return (index) => {
            const orgUnitsData = evaluationPerOrgUnits[index];
            return (orgUnitsData && (React.createElement("div", { key: orgUnitsData.orgUnitId },
                React.createElement(ComparisonPlot, { orgUnitsData: orgUnitsData }))));
        };
    }
    if (!useVirtuoso) {
        return (React.createElement(React.Fragment, null, evaluationPerOrgUnits.map((orgUnitsData, index) => {
            return React.createElement(ComparisonPlot, { orgUnitsData: orgUnitsData });
        })));
    }
    return (React.createElement("div", null,
        React.createElement(Virtuoso, { style: { height: '520px' }, useWindowScroll: useVirtuosoWindowScroll, totalCount: evaluationPerOrgUnits.length, itemContent: getItemContent() })));
};
