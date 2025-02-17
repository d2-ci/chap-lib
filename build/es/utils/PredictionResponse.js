//these functions are used to get the prediction response from the server to display them in the view, add orgUnits names and so on
export const getUniqePeriods = (values) => {
    return [...new Set(values.map((v) => v.period))];
};
export const getUniqeOrgUnits = (values) => {
    return [
        ...new Set(values.map((v) => v.orgUnit)),
    ];
};
export const getUniqeQuantiles = (values) => {
    return [
        ...new Set(values.map((v) => v.dataElement)),
    ];
};
export const findOrgUnitName = (orgUnitId, values) => {
    return values.find((ou) => ou.orgUnit === orgUnitId)?.displayName;
};
export const numberDateToString = (date) => {
    const year = date.toString().slice(0, 4);
    const month = date.toString().slice(4, 6);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const monthName = monthNames[parseInt(month) - 1];
    if (monthName === undefined) {
        return String(date);
    }
    return `${monthName} ${year}`;
};
