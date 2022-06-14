import { Component } from 'react';
import TimeZoneDetails from '../components/TimeZoneDetails';
import {GetTimeZones} from '../services/Util';
import{ CreateReminder as ReminderCreationService } from '../services/Reminders';


class CreateReminder extends Component {

    state = {
        Title: null,
        Date: null,
        Time: null,
        TimeZone:null,
        TimeZones: [],
        CreationErrors: null,
        CreationSuccess: null
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        var state = this.state
        var data = {
            title: state.Title,
            date_tz: state.Date,
            time_tz: state.Time,
            timezone: state.TimeZone?.utc[0]
        }
        console.log(data);
        ReminderCreationService(data).then(res => {
            this.setState({
                CreationErrors: res.message,
            })
            console.log(res)
        })
    }
    
    handleChangeTimeZone = (e) => {
        var timeZone = this.state.TimeZones.filter(x => x.value == e.target.value);
        if (timeZone == null)
            return;

        this.setState({TimeZone: timeZone[0]});
    }

    componentDidMount() {
        this.getTimeZones();
    }

    async getTimeZones(){
        const timeZones = GetTimeZones();
        this.setState({
            TimeZones: timeZones
        })
    }

    render() {
        return (
            <>
                <h3>Create Reminder</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <div className="card">
                            <form onSubmit={this.handleSubmit} className="form">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="Title" className="form-label">Title</label>
                                        <input type="text" className="form-control" 
                                            onChange={(e) => this.setState({Title: e.target.value})}
                                            defaultValue={this.state.Title == null ? "" : this.state.Title } name="Title" id="Title" placeholder="Title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Timezone" className="form-label">Timezone</label>
                                        <select className="form-control" id="Timezone"
                                                onChange={e => this.handleChangeTimeZone(e)}
                                                defaultValue={this.state.Time == null ? "" : this.state.Timezone }>
                                            <option>Select Timezone</option>
                                            {
                                                [...this.state.TimeZones].map((timezone, index) => {
                                                    return <option key={index} value={timezone.value}>{timezone.text}</option>
                                                })
                                            }
                                        </select>
                                        <small id="detailed">
                                            <TimeZoneDetails props={this.state.TimeZone} />
                                        </small>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Date" className="form-label">Date</label>
                                        <input type="Date" className="form-control" 
                                            onChange={(e) => this.setState({Date: e.target.value})}
                                            defaultValue={this.state.Date == null ? "" : this.state.Date } name="Date" id="Date" placeholder="Date" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Time" className="form-label">Time</label>
                                        <input type="Time" className="form-control" 
                                            onChange={(e) => this.setState({Time: e.target.value})}
                                            defaultValue={this.state.Time == null ? "" : this.state.Time } name="Time" id="Time" placeholder="Time" />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        {this.state.CreationErrors && <div className="alert alert-danger">{this.state.CreationErrors}</div>}
                        {!this.state.CreationErrors && <div className="alert alert-success">...</div>}
                    </div>
                </div>
            </>
        );
    }
}

export default CreateReminder;