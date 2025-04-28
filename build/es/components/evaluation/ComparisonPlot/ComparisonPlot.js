import React from 'react';
import styles from './ComparisonPlot.module.css';
import { ResultPlot } from '../ResultPlot/ResultPlot';
export const ComparisonPlot = ({ orgUnitsData, }) => {
    return (React.createElement("div", { className: styles.comparionBox },
        React.createElement("div", { className: styles.title }, orgUnitsData.orgUnitName),
        React.createElement("div", { className: styles.comparionBoxSideBySide }, orgUnitsData.models.map((modelData, index) => {
            return (React.createElement("div", { key: index, className: styles.comparionBoxSideBySideItem },
                React.createElement(ResultPlot, { syncZoom: orgUnitsData.models.length > 1, data: modelData.data, modelName: modelData.modelName })));
        }))));
};
