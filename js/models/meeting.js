import MeetingRepo from '../data/meetings.js';
import AttendeeRepo from '../data/attendees.js';

const meetingRepo = new MeetingRepo();
const attendeeRepo = new AttendeeRepo();

class Model {
    get id() { return this._id; }
    set id(value) {
        this._id = value;
    }

    get title() { return this._title; }
    set title(value) {
        this._title = value;
    }

    get time() { return this._time; }
    set time(value) {
        this._time = value;
    }

    get attendees() { return this._attendees; }
    set attendees(value) {
        this._attendees = value;
    }

    async load(meetingId) {
        try {
            const meeting = await meetingRepo.getById(meetingId);
            this.id = meeting.id;
            this.title = meeting.title;
            this.time = meeting.time;
            if (meeting) {
                const attendees = [];
                for (const attendee of meeting.attendees) {
                    const item = await attendeeRepo.getById(attendee.id);
                    attendees.push({
                        id: attendee.id,
                        name: item.name,
                        role: attendee.role
                    });
                }

                this.attendees = attendees;
            }
        }
        catch (e) {
            console.error(Error(e.message));
        }
    }
}

export default Model;