import React from 'react';
import { ComparisonPlot } from '../ComparisonPlot/ComparisonPlot';
import { Virtuoso } from 'react-virtuoso';
export const ComparisonPlotList = _ref => {
  let {
    evaluationPerOrgUnits,
    useVirtuoso = true,
    useVirtuosoWindowScroll = false
  } = _ref;
  function getItemContent() {
    return index => {
      const orgUnitsData = evaluationPerOrgUnits[index];
      return orgUnitsData && /*#__PURE__*/React.createElement("div", {
        key: orgUnitsData.orgUnitId
      }, /*#__PURE__*/React.createElement(ComparisonPlot, {
        orgUnitsData: orgUnitsData
      }));
    };
  }
  if (!useVirtuoso) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, evaluationPerOrgUnits.map((orgUnitsData, index) => {
      return /*#__PURE__*/React.createElement(ComparisonPlot, {
        orgUnitsData: orgUnitsData,
        key: orgUnitsData.orgUnitId
      });
    }));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      height: '60vh'
    },
    useWindowScroll: useVirtuosoWindowScroll,
    totalCount: evaluationPerOrgUnits.length,
    itemContent: getItemContent()
  }));
};