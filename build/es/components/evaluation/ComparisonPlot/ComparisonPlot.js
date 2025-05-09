import React from 'react';
import styles from './ComparisonPlot.module.css';
import { ResultPlot } from '../ResultPlot/ResultPlot';
export const ComparisonPlot = _ref => {
  let {
    orgUnitsData
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.comparionBox
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.title
  }, orgUnitsData.orgUnitName), /*#__PURE__*/React.createElement("div", {
    className: styles.comparionBoxSideBySide
  }, orgUnitsData.models.map((modelData, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: styles.comparionBoxSideBySideItem
    }, /*#__PURE__*/React.createElement(ResultPlot, {
      syncZoom: orgUnitsData.models.length > 1,
      data: modelData.data,
      modelName: modelData.modelName
    }));
  })));
};