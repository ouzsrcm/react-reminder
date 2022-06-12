const ServiceConfig = {
    APIURL: "https://reminders-api.com/api",
    APITOKEN: "26wK03zuWXRsxuB5P8DFvReFaEiPYucUfsgJ5meo"

};

function GetTimeZones() {
    var timeZones = require('../Common/timezones.json');
    return timeZones;
}

export {
    ServiceConfig,
    GetTimeZones
}