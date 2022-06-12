import { useEffect, useState } from 'react';
import TimeZoneDetails from '../components/TimeZoneDetails';
import {GetTimeZones} from '../services/Util';


function CreateReminder (){
    
    const [timeZones, setTimeZones] = useState([]);
    const [timeZone, setTimeZone] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            const timeZones = await GetTimeZones();
            setTimeZones(timeZones);
        }
        fetchData()
    }, [timeZones]);

    function handleCreate(){
        var data = {
            "title": "Test",
            timezone: "America/New_York",
            "date_tz": "2023-02-15",
        }
    }
    
    function handleChangeTimeZone(e){
        console.log(e.target.value);
        var timeZone = timeZones.filter(x => x.value == e.target.value);
        if (timeZone == null)
            return;
            
        setTimeZone(timeZone[0]);
    }

    return (
        <>
            <h3>Create Reminder</h3>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Timezone" className="form-label">Timezone</label>
                                <select className="form-control" id="Timezone"
                                        onChange={e => handleChangeTimeZone(e)}>
                                    <option value="">Select Timezone</option>
                                    {
                                        [...timeZones].map((timezone, index) => {
                                            return <option key={index} value={timezone.value}>{timezone.text}</option>
                                        })
                                    }
                                </select>
                                <small id="detailed">
                                    <TimeZoneDetails props={timeZone} />
                                </small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Date" className="form-label">Date</label>
                                <input type="Date" className="form-control" id="Date" placeholder="Date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Time" className="form-label">Time</label>
                                <input type="Time" className="form-control" id="Time" placeholder="Time" />
                            </div>
                            <div className="mb-3">
                                <button type="button" className="btn btn-primary" onClick={handleCreate}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateReminder;