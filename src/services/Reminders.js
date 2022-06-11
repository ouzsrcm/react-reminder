
import { ServiceConfig as config } from './Util';

function GetReminders() {
    return fetch(config.APIURL + '/reminders', {
        'method': 'GET',
        headers:{
            'Authorization': 'Bearer ' + config.APITOKEN,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

function GetReminder(id) {
    return fetch(config.APIURL + '/reminders/' + id, {
        'method': 'GET',
        headers:{
            'Authorization': 'Bearer ' + config.APITOKEN,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

function UpdateReminder(id, data) {
    return fetch(config.APIURL + '/reminders/' + id, {
        'method': 'PUT',
        headers:{
            'Authorization': 'Bearer ' + config.APITOKEN,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export {
    GetReminders,
    GetReminder
}