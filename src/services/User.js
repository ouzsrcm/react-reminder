import {
    ServiceConfig as config
} from './Util';

function GetUserInfo() {
    return fetch(config.APIURL + '/user', {
        'method': 'GET',
        headers: {
            'Authorization': 'Bearer ' + config.APITOKEN,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export {
    GetUserInfo
};