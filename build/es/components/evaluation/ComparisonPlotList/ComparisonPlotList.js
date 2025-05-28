import React from 'react';
import { ComparisonPlot } from '../ComparisonPlot/ComparisonPlot';
import { Virtuoso } from 'react-virtuoso';
export const ComparisonPlotList = ({
  evaluationPerOrgUnits,
  useVirtuoso = true,
  useVirtuosoWindowScroll = false
}) => {
  function getItemContent() {
    const ItemContent = index => {
      const orgUnitsData = evaluationPerOrgUnits[index];
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/React.createElement("div", {
        key: orgUnitsData.orgUnitId
      }, /*#__PURE__*/React.createElement(ComparisonPlot, {
        orgUnitsData: orgUnitsData
      }));
    };
    ItemContent.displayName = 'ItemContent';
    return ItemContent;
  }
  if (!useVirtuoso) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, evaluationPerOrgUnits.map(orgUnitsData => {
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/React.createElement(ComparisonPlot, {
        key: orgUnitsData.orgUnitId,
        orgUnitsData: orgUnitsData
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