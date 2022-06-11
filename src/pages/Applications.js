import { useEffect, useState } from 'react';
import {GetApplications} from '../services/Applications';

function Applications() {

    const [applications, setApplications] = useState(null);

    useEffect(() => {
        async function fetchData(){
            var apps = await GetApplications();
            setApplications(apps);
        }
        fetchData();
    }, []);
  return (
    <>
        <h4 className="mb-1 mt-1">Applications</h4>
        <div className='row cards mt-1'>
            {applications?.data.map((app, index) => {
                return(
                    <div className='col-sm-4 mb-3' key={index}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{app.name}</h5>
                                <p className='card-text'>
                                    <small>
                                        url: {app.webhook_url}<br />
                                        http_basic_auth_username: {app.http_basic_auth_username}<br />
                                        http_basic_auth_password: {app.http_basic_auth_password}<br />
                                    </small>
                                </p>
                                <a className='btn btn-primary'>Details</a>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </>
  );
}

export default Applications;