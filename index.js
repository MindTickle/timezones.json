var oldTimezonesList = require('./oldTimezones.json');
var timezonesList = require('./timezones.json');

var allTimezonesList = oldTimezones.concat(timezonesList);

module.exports = {
    oldTimezonesList: oldTimezonesList,
    timezonesList: timezonesList,
    allTimezonesList: allTimezonesList
}