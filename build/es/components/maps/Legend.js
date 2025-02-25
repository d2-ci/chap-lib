import React from 'react';
import styles from './Legend.module.css';
const Legend = ({ title, bins, colors }) => {
    console.log('Legend:', bins, colors);
    return (React.createElement("div", { className: styles.legend },
        React.createElement("br", null),
        React.createElement("div", { className: styles.legendTitle }, title),
        React.createElement("div", { className: styles.legendSymbols }, bins.map((bin, index) => {
            return (React.createElement("div", { className: styles.classItem, key: index },
                React.createElement("span", { className: styles.classSymbol, style: { backgroundColor: colors[index] } }),
                React.createElement("span", { className: styles.classLabel },
                    bin.startValue,
                    " - ",
                    bin.endValue)));
        }))));
};
export default Legend;
