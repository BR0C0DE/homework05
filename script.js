
var startDate = new Date(2012, 4, 1);
var endDate = new Date(2012, 4, 23);
var dateRange = moment().range(startDate, endDate);

var days = [1, 2, 3, 4, 5]; // mon-fri
var startTime = moment('09:00 +0000', 'HH:mm Z'); // 9:00 am UTC
var endTime = moment('17:00 +0000', 'HH:mm Z'); // 5:00 pm UTC
var timeRange = moment().range(startTime, endTime);

function isWithin(dateRange, timeRange, days, when) {
  return (when.within(dateRange) && !!~days.indexOf(when.day()) && moment(when.format('HH:mm Z'), 'HH:mm Z').within(timeRange));
}

var when = moment('2012-05-22 12:32 +0000', 'YYYY-MM-DD HH:mm Z');

console.log(isWithin(dateRange, timeRange, days, when));