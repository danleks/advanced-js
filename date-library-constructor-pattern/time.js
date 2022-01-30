const Time = (() => {
    /**
     * Emit a custom event
     * @param  {String} type   The event type
     * @param  {Object} detail Any details to pass along with the event
     * @param  {Node}   elem   The element to attach the event to
    */
    function emitEvent(type, detail = {}, elem = document) {
        // make sure there's an event type
        if (!type) return;
    
        // create a new custom event
        let event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });

        return elem.dispatchEvent(event);
    };

    /**
     * The Constructor object
     * @param {Array}  date    A date string, object, or array of arguments
     * @param {Object} options Options and settings
    */
    function Constructor(date = [], options = {}) {
        let settings = Object.assign({
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }, options)

        // check if date parameter is not array and if not, make it arr
        if (!Array.isArray(date)) {
            date = [date];
        }
       
        // freeze settings object so it and its properties cannot be modified
        Object.freeze(settings);
        
        // define instance properties
        Object.defineProperties(this, {
            date: {value: new Date(...date)},
            _settings: {value: settings},
        })

        // emit a time:ready event
        emitEvent('time:ready', {
            time: this
        })
    };

    /**
    * get the day of the week as a string.
    */
    Constructor.prototype.getDay = function() {
        return this._settings.days[this.date.getDay()];
    };

    /**
    * get the month of the year as a string.
    */
    Constructor.prototype.getMonth = function() {
        return this._settings.months[this.date.getMonth()];
    }

    /**
    * add a number of seconds to a date.
    * @param {Integer} n    The number of seconds to add
    */
    Constructor.prototype.addSeconds = function(n) {
        let d = new Date(this.date);
        d.setSeconds(d.getSeconds() + n);
        let time = new Constructor(d, this._settings);

        // Emit time:update event
        let cancel = !emitEvent('time:update', {
            time,
            type: 'seconds',
            amount: n,
        })

        // If canceled, return a copy of the original instance
	    // If not, return new instance
        if (cancel) return new Constructor(this.date, this._settings);
        return time;
        // return new Constructor(d, this._settings);
    }

    /**
    * add a number of minutes to a date.
    * @param {Integer} n    The number of minutes to add
    */
    Constructor.prototype.addMinutes = function(n) {
        let d = new Date(this.date);
        d.setMinutes(d.getMinutes() + n)
        let time = new Constructor(d, this._settings);
        
        let cancel = !emitEvent('time:update', {
            time,
            type: 'minutes',
            amount: n
        })

        if (cancel) return new Constructor(this.date, this._settings);
        return time;
    }

    /**
    * add a number of minutes to a date.
    * @param {Integer} n    The number of hours to add
    */
    Constructor.prototype.addHours = function(n) {
        let d = new Date(this.date);
        d.setHours(d.getHours() + n)
        let time = new Constructor(d, this._settings);

        let cancel = !emitEvent('time:update', {
            time,
            type: 'hours',
            amount: n
        });

        if (cancel) return new Constructor(this.date, this._settings);
        return time;
    }

    /**
    * add a number of days to a date.
    * @param {Integer} n    The number of days to add
    */
    Constructor.prototype.addDays = function(n) {
        let d = new Date(this.date);
        d.setDate(d.getDate() + n)
        let time = new Constructor(d, this._settings);

        let cancel = !emitEvent('time:update', {
            time,
            type: 'days',
            amount: n
        });

        if (cancel) return new Constructor(this.date, this._settings);
        return time;
    }

    /**
     * add a number of months to a date.
     * @param {Integer} n    The number of months to add
     */
    Constructor.prototype.addMonths = function(n) {
        let d = new Date(this.date);
        d.setMonth(d.getMonth() + n)
        let time = new Constructor(d, this._settings);

        let cancel = !emitEvent('time:update', {
            time,
            type: 'months',
            amount: n
        });

        if (cancel) return new Constructor(this.date, this._settings);
        return time;
    }

    /**
     * add a number of years to a date.
     * @param {Integer} n    The number of months to add
     */
    Constructor.prototype.addYears = function(n) {
        let d = new Date(this.date);
        d.setFullYear(d.getFullYear() + n)
        let time = new Constructor(d, this._settings);

        let cancel = !emitEvent('time:update', {
            time,
            type: 'years',
            amount: n
        });

        if (cancel) return new Constructor(this.date, this._settings);
        return time;
    }

    return Constructor;
})();

export default Time;
