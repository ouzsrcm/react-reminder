import { useEffect, useState } from "react";
import { GetUserInfo } from "../services/User";
import {GetReminders} from '../services/Reminders'

function Reminders (){

    const [users, setUsers] = useState(null);
    const [reminders, setReminders] = useState(null);

    useEffect(() => {
        async function fetchUser(){
            var users = await GetUserInfo()
            setUsers(users)
        }
        fetchUser()
    }, []);

    useEffect(() => {
        async function fetchReminders(){
            var reminders = await GetReminders()
            setReminders(reminders)
        }
        fetchReminders()
    }, [])

    function handleClick(){
        console.log('clicked')
    }

    return (
        <>
            <h4 className="mb-1 mt-1">{users?.name} Reminders</h4>
            <div className='row cards mt-1'>
                {reminders?.data.map((reminder, index) => {
                    return(
                        <div className='col-sm-4 mb-3' key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{reminder.title}</h5>
                                    <p className='card-text'>
                                        <small>
                                            timezone: {reminder.timezone}<br />
                                            user_id: {reminder.user_id}<br />
                                            application_id: {reminder.application_id}<br />
                                            date_tz: {reminder.date_tz}<br />
                                            time_tz: {reminder.time_tz}<br />
                                            created_at: {reminder.created_at}<br />
                                            updated_at: {reminder.updated_at}<br />
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );

}

export default Reminders