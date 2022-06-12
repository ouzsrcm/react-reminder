
import { ServiceConfig as config } from './Util';

const defaultHeaders = {
    'Authorization': 'Bearer ' + config.APITOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Max-Age': '86400',
    'Access-Control-Expose-Headers': 'X-Requested-With'
}
function GetReminders() {
    return fetch(config.APIURL + '/reminders', {
        'method': 'GET',
        headers: defaultHeaders
    }).then(response => response.json());
}

function GetReminder(id) {
    return fetch(config.APIURL + '/reminders/' + id, {
        'method': 'GET',
        headers: defaultHeaders
    }).then(response => response.json());
}

function UpdateReminder(id, data) {
    return fetch(config.APIURL + '/reminders/' + id, {
        'method': 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function CreateReminder(data){
    if (data == null)
        return;

    return fetch(config.APIURL + '/reminders', {
        'method': 'POST',
        headers: defaultHeaders
    }).then(response => response.json());
}

export {
    GetReminders,
    GetReminder
}