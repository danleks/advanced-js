/**
 * handle passed date object.
 * @param {Date}    date The date object
 * @param {String}  property property name
 * @param {Integer} time    The number to add
 */
function timeHandler(date, property, time) {
    `${date}.set${property}(${date}.get${property}() + ${time})`;
    return date;
}

/**
 * get the day of the week as a string.
 * @param {Date}    date The date object
 */
function getDay(date) {
    // An array of day names
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
};

/**
 * get the month of the year as a string.
 * @param {Date}    date The date object
 */
function getMonth(date) {
    // An array of month names
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
}
/**
 * add a number of seconds to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of seconds to add
 */
function addSeconds(date, n) {
    return timeHandler(date, 'seconds', n);
}
/**
 * add a number of minutes to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of minutes to add
 */
function addMinutes(date, n) {
    return timeHandler(date, 'minutes', n);
}
/**
 * add a number of minutes to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of hours to add
 */
function addHours(date, n) {
    return timeHandler(date, 'hours', n);
}
/**
 * add a number of days to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
function addDays(date, n) {
    return timeHandler(date, 'days', n);
}
/**
 * add a number of months to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
function addMonths(date, n) {
    return timeHandler(date, 'months', n);
}
/**
 * add a number of years to a date.
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
function addYears(date, n) {
    return timeHandler(date, 'years', n);
}

export {getDay, getMonth, addSeconds, addMinutes, addHours, addDays, addMonths, addYears};
