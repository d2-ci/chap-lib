import React from 'react';
import i18n from '@dhis2/d2-i18n';
import { getUniqeOrgUnits, getUniqePeriods, numberDateToString, } from '../../../utils/PredictionResponse';
import MapItem from '../../maps/MapItem';
import Choropleth from '../../maps/Choropleth';
import Legend from '../../maps/Legend';
import Basemap from '../../maps/Basemap';
import { getEqualIntervals } from '../../maps/utils';
import useOrgUnits from '../../../hooks/useOrgUnits';
import styles from './PredictionMap.module.css';
const colors = ['#FFFFD4', '#FED98E', '#FE9929', '#D95F0E', '#993404'];
export const PredictionMap = ({ data, predictionTargetName, }) => {
    // get all orgunits
    const orgUnitIds = getUniqeOrgUnits(data.dataValues);
    // load orgunit geoms
    const { orgUnits } = useOrgUnits(orgUnitIds);
    // get and classify periods
    const periods = getUniqePeriods(data.dataValues);
    const values = data.dataValues.map((d) => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const bins = getEqualIntervals(minValue, maxValue);
    return orgUnits ? (React.createElement("div", null,
        React.createElement("h3", null,
            "Prediction Maps for ",
            predictionTargetName),
        React.createElement("div", { className: styles.predictionMapGroup }, periods.map((period, index) => {
            return (React.createElement("div", { className: styles.predictionMapCard, key: index },
                React.createElement("h4", null,
                    "\uD83D\uDD51 ",
                    i18n.t(numberDateToString(period))),
                React.createElement(MapItem, { key: period, index: index, count: periods.length, syncId: "prediction-map" },
                    React.createElement(Basemap, null),
                    React.createElement(Choropleth, { period: period, prediction: data, geojson: orgUnits, bins: bins, colors: colors }))));
        })),
        React.createElement(Legend, { title: 'Median Prediction for ' + predictionTargetName, bins: bins, colors: colors }))) : null;
};
