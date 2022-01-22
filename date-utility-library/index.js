import * as _ from './helper.js';
// Create a Date() object for halloween 
let halloween = new Date('October 31, 2021');

// returns "Sunday"
let day = _.getDay(halloween);
console.log(day);

let seconds = _.addYears(halloween, 10);
console.log(seconds);


// Add 4 months to the date
console.log(_.addMonths(halloween, 4));

// logs "Thu Mar 03 2022 ..."
// console.log(halloween);