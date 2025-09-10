class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (timeStart, callback) {
        if( timeStart === null || callback === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.findIndex( alarm => alarm.time === timeStart ) === -1) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push( {time: timeStart, callback, canCall: true} );
    }

    removeClock (timeStart) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != timeStart);
    }

    getCurrentFormattedTime () {
        let today = new Date();
        let hh = today.getHours();
        hh = hh < 10 ? "0" + hh : "" + hh;
        let mm = today.getMinutes();
        mm = mm < 10 ? "0" + mm : "" + mm;
        return hh + ":" + mm;
    }

    start () {
        if (this.intervalId != null) {
            return;
        }

        this.intervalID = setInterval(
            () => {
                this.alarmCollection.forEach(
                    alarm => {
                        let currentTime = this.getCurrentFormattedTime();
                        if (currentTime != alarm.time || !alarm.canCall) {
                            return;
                        }
                        alarm.canCall = false;
                        alarm.callback();
                    }
                );
            }
            , 1000
        );
    }

    stop () {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(
            alarm => alarm.canCall = true
        );
    }

    clearAlarms () {
        stop();
        this.alarmCollection = [];
    }
}