import Time from './time.js';

// Create a new Time() instance
let halloween = new Time('October 31, 2021');

// If the year on the Time() instance is greater than 2021, don't update
document.addEventListener('time:update', function (event) {
    // Update going to happen
	console.log('update going to happen', event.detail);
    // if current year greater than 2021, don't update
	if (event.detail.time.date.getFullYear() > 2021) {
		event.preventDefault();
        console.log('event is cancelled', event.detail);
        return;
	}

    // update happened
    console.log('event completed', event.detail);
});

// Adjust the date
// the addYears() method won't update the date in this instance
halloween.addDays(3).addMonths(1).addYears(1);

console.log(halloween);





// Create a new Time() instance
// Customize the days and months
// let halloween = new Time('October 31, 2021', {
// 	days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
// 	months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
// });

// Try to override settings
// These should not change anything
// halloween._settings = null;
// halloween._settings.months = null;

// Get details from the instance
// returns "domingo" and "octubre"
// let day = halloween.getDay();
// let month = halloween.getMonth();
// console.log(day, month);

// Add some time
//let allHallowsDay = halloween.addYears(5).addDays(1);

// halloween should still be October 31, 2021
// allHallowsDay should be November 1, 2026
// console.log(halloween.date);
// console.log(allHallowsDay.date);
