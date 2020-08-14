import AttendeeRepo from '../data/attendees.js';
import AttendeeModel from './attendee.js';

const repo = new AttendeeRepo();

class Model {
    constructor() {
        this._meetingId;
        this._attendees = [];
    }

    get meetingId() {
        return this._meetingId;
    }
    set meetingId(value) {
        this._meetingId = value;
    }

    get attendees() {
        return this._attendees;
    }
    set attendees(value) {
        const attendees = [...value].map(a => {
            const model = new AttendeeModel();

            model.id = a.id;
            model.name = a.name;
            model.meetings = a.meetings;

            return model;
        });

        this._attendees = attendees;
    }

    async getAttendeesInMeeting(meetingId) {
        try {
            const group = await groupRepo.getByMeetingId(meetingId);
            const data = [];
            for (const item of group) {
                data.push(await repo.getById(item.attendeeId))
            }

            if (data) {
                this.attendees = data;
            }
        }
        catch (e) {
            console.error(Error(e.message));
        }
    }
}

export default Model;