import i18n from '@dhis2/d2-i18n';
import styles from './PredictionTable.module.css';
import React from 'react';
import { getUniqeOrgUnits, findOrgUnitName, getUniqePeriods, getUniqeQuantiles, numberDateToString, } from '../../../utils/PredictionResponse';
export const PredictionTable = ({ data }) => {
    const dataValues = data.dataValues;
    return (React.createElement(React.Fragment, null, getUniqeOrgUnits(dataValues).map((ou) => {
        return (React.createElement("div", { key: ou },
            React.createElement("h3", null, i18n.t(`Prediction for ${findOrgUnitName(ou, dataValues)}`)),
            React.createElement("table", { className: styles.table },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Quantiles"),
                        getUniqePeriods(dataValues).map((p) => {
                            return (React.createElement("th", { key: p }, i18n.t(numberDateToString(p))));
                        }))),
                React.createElement("tbody", null, getUniqeQuantiles(dataValues).map((q) => (React.createElement("tr", { key: q },
                    React.createElement("td", null, q.replaceAll('_', ' ')),
                    getUniqePeriods(dataValues).map((p) => {
                        return (React.createElement("td", { key: p }, dataValues.filter((d) => d.dataElement ===
                            q &&
                            d.orgUnit ===
                                ou &&
                            d.period ===
                                p)[0].value));
                    }))))))));
    })));
};
