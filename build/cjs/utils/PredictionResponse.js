"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberDateToString = exports.getUniqeQuantiles = exports.getUniqePeriods = exports.getUniqeOrgUnits = exports.findOrgUnitName = void 0;
//these functions are used to get the prediction response from the server to display them in the view, add orgUnits names and so on

const getUniqePeriods = values => {
  return [...new Set(values.map(v => v.period))];
};
exports.getUniqePeriods = getUniqePeriods;
const getUniqeOrgUnits = values => {
  return [...new Set(values.map(v => v.orgUnit))];
};
exports.getUniqeOrgUnits = getUniqeOrgUnits;
const getUniqeQuantiles = values => {
  return [...new Set(values.map(v => v.dataElement))];
};
exports.getUniqeQuantiles = getUniqeQuantiles;
const findOrgUnitName = (orgUnitId, values) => {
  var _values$find;
  return (_values$find = values.find(ou => ou.orgUnit === orgUnitId)) === null || _values$find === void 0 ? void 0 : _values$find.displayName;
};
exports.findOrgUnitName = findOrgUnitName;
const numberDateToString = date => {
  const year = date.toString().slice(0, 4);
  const month = date.toString().slice(4, 6);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = monthNames[parseInt(month) - 1];
  if (monthName === undefined) {
    return String(date);
  }
  return `${monthName} ${year}`;
};
exports.numberDateToString = numberDateToString;