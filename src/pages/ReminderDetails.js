import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import { GetReminder } from '../services/Reminders';
import {GetUserInfo} from '../services/User';

function ReminderDetails(id){
    const {id: reminderId} = useParams();
    const [reminder, setReminder] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            const reminder = await GetReminder(reminderId);
            setReminder(reminder);
        }
        fetchData();
    }, []);

    useEffect(()=>{
        async function fetchData(){
            const user = await GetUserInfo();
            setUser(user);
        }
        fetchData()
    }, [])
    return(
        <>
            <h4>
                <small>#id:{reminderId}</small>
                <p>
                    {reminder?.title}
                </p>
            </h4>
            <div className='row'>
                <div className='col-sm-6'>
                    <ul className='list-group'>
                    <li className='list-group-item'>user: {user?.name}</li> 
                    <li className='list-group-item'>reminderid: {reminder?.id}</li> 
                    <li className='list-group-item'>timezone: {reminder?.timezone}</li> 
                    </ul>
                </div>
                <div className='col-sm-6'>
                    asd
                </div>
            </div>
        </>
    )
}

export default ReminderDetails