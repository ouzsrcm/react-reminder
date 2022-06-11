import { useEffect, useState } from 'react';
import {
    GetUserInfo
} from '../services/User';

function handleClick(e){
    e.preventDefault();
    console.log(e.target.id)
    //TODO: redirect to details page
}

function Home(){
    const [users, setUsers] = useState(null);
    useEffect(() => {
        async function fetchUser(){
            var users = await GetUserInfo()
            setUsers(users)
        }
        fetchUser()
    }, []);
  return (
    <>
        <h4 className="mb-1 mt-1">{users?.name} Reminders</h4>
        <div className='row cards mt-1'>
            <div className='col-sm-4 mb-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Elden Ring Tournament 6 PM</h5>
                        <p className='card-text'>
                            pls. don't forget it :)
                        </p>
                        <a className='btn btn-primary' onClick={handleClick} id="eldenring">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;