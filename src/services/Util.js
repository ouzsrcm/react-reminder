const ServiceConfig = {
    APIURL: "https://reminders-api.com/api",
    APITOKEN: "26wK03zuWXRsxuB5P8DFvReFaEiPYucUfsgJ5meo"

};

function GetTimeZones() {
    return require('../Common/timezones.json');
}

export {
    ServiceConfig,
    GetTimeZones
}