
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

export {
    GetReminders
}