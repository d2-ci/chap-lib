import i18n from '@dhis2/d2-i18n';
import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import styles from './UncertaintyAreaChart.module.css';
import { Menu, MenuItem } from '@dhis2/ui';
import { numberDateToString } from '../../../utils/PredictionResponse';
accessibility(Highcharts);
exporting(Highcharts);
highchartsMore(Highcharts);
const getChartOptions = (data, predictionTargetName) => {
    const colors = Highcharts.getOptions().colors;
    const median = data
        .filter((d) => d.dataElement === 'median')
        .map((d) => [d.period, d.value]);
    const range = data
        .filter((d) => d.dataElement === 'quantile_low')
        .map((d) => [
        d.period,
        d.value,
        data.filter((x) => x.dataElement === 'quantile_high' && x.period === d.period)[0].value,
    ]);
    return {
        title: {
            text: i18n.t(`Prediction for ${predictionTargetName} for ${data[0].displayName}`),
        },
        tooltip: {
            shared: true,
        },
        xAxis: {
            type: 'category',
            labels: {
                enabled: true,
                formatter: function () {
                    return numberDateToString(this.value);
                },
                style: {
                    fontSize: '0.9rem',
                },
            },
        },
        yAxis: {
            title: {
                text: 'Number of cases',
            },
        },
        credits: {
            text: 'CHAP',
        },
        chart: {
            height: 490,
            marginBottom: 125,
        },
        plotOptions: {
            series: {
                lineWidth: 5,
            },
        },
        series: [
            //median
            {
                type: 'line',
                data: median,
                name: i18n.t('Quantile median'),
                color: '#004bbd',
                zIndex: 2,
            },
            //high
            {
                type: 'arearange',
                name: i18n.t('Range'),
                data: range,
                zIndex: 1,
                lineWidth: 0,
                color: '#004bbd',
                fillOpacity: 0.4,
            },
        ],
    };
};
function groupByOrgUnit(data) {
    const orgUnits = [...new Set(data.map((item) => item.orgUnit))];
    return orgUnits.map((orgUnit) => data.filter((item) => item.orgUnit === orgUnit));
}
export const UncertaintyAreaChart = ({ data, predictionTargetName, }) => {
    const matrix = groupByOrgUnit(data.dataValues);
    const [options, setOptions] = useState(getChartOptions(matrix[0], predictionTargetName));
    const [indexOfSelectedOrgUnit, setIndexOfSelectedOrgUnit] = useState(0);
    const onSelectOrgUnit = (index) => {
        setIndexOfSelectedOrgUnit(index);
        setOptions(getChartOptions(matrix[index], predictionTargetName));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.chartContainer },
            React.createElement("div", null,
                React.createElement(Menu, { dense: true }, matrix.map((orgUnitData, index) => (React.createElement(MenuItem, { className: styles.menu, active: indexOfSelectedOrgUnit == index, key: index, label: orgUnitData[0].displayName, onClick: () => onSelectOrgUnit(index) }))))),
            React.createElement("div", { className: styles.chart },
                React.createElement(HighchartsReact, { highcharts: Highcharts, constructorType: 'chart', options: options })))));
};
