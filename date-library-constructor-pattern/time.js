const Time = (() => {
    function Constructor(...date) {
        this.date = new Date(date.join(','));
    };

    /**
    * get the day of the week as a string.
    */
    Constructor.prototype.getDay = function() {
        // An array of day names
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[this.date.getDay()];
    };

    /**
    * get the month of the year as a string.
    */
    Constructor.prototype.getMonth = function() {
        // An array of month names
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.date.getMonth()];
    }

    /**
    * add a number of seconds to a date.
    * @param {Integer} n    The number of seconds to add
    */
    Constructor.prototype.addSeconds = function(n) {
        this.date.setSeconds(this.date.getSeconds() + n);
        return this;
    }

    /**
    * add a number of minutes to a date.
    * @param {Integer} n    The number of minutes to add
    */
    Constructor.prototype.addMinutes = function(n) {
        this.date.setMinutes(this.date.getMinutes() + n);
        return this;
    }

    /**
    * add a number of minutes to a date.
    * @param {Integer} n    The number of hours to add
    */
    Constructor.prototype.addHours = function(n) {
        this.date.setHours(this.date.getHours() + n);
        return this;
    }

    /**
    * add a number of days to a date.
    * @param {Integer} n    The number of days to add
    */
    Constructor.prototype.addDays = function(n) {
        this.date.setDate(this.date.getDate() + n);
        return this;
    }

    /**
     * add a number of months to a date.
     * @param {Integer} n    The number of months to add
     */
    Constructor.prototype.addMonths = function(n) {
        this.date.setMonth(this.date.getMonth() + n);
        return this;
    }

    /**
     * add a number of years to a date.
     * @param {Integer} n    The number of months to add
     */
    Constructor.prototype.addYears = function(n) {
        this.date.setFullYear(this.date.getFullYear() + n);
        return this;
    }

    return Constructor;
})();

export default Time;
