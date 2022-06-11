import {
    ServiceConfig as config
} from './Util';

function GetApplications() {
    return fetch(config.APIURL + '/applications', {
        'method': 'GET',
        headers: {
            'Authorization': 'Bearer ' + config.APITOKEN,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export {
    GetApplications
}