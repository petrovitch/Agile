import MeetingRepo from '../data/meetings.js';
import AttendeeRepo from '../data/attendeeDetail.js';

const meetingRepo = new MeetingRepo();
const attendeeRepo = new AttendeeRepo();

class Model {
    // get id() { return this._id; }
    // set id(value) {
    //     if (this._id !== value) {
    //         this._id = value;
    //     }
    // }

    // get title() { return this._title; }
    // set title(value) {
    //     if (this._title !== value) {
    //         this._title = value;
    //     }
    // }

    // get time() { return this._time; }
    // set time(value) {
    //     this._time = value;
    // }

    // get imageUrl() { return this._imageUrl; }
    // set imageUrl(value) {
    //     if (this._imageUrl !== value) {
    //         this._imageUrl = value;
    //     }
    // }

    // get attendees() { return this._attendees; }
    // set attendees(value) {
    //     this._attendees = value;
    // }

    // Create:

    // Read:
    async load(meetingId = 1) {
        try {
            const meeting = await meetingRepo.getById(meetingId);

            const meetingModel = {
                id: meeting.id,
                title: meeting.title,
                time: meeting.time,
                imageUrl: meeting.imageUrl,
                attendees: []
            };

            for (const attendee of meeting.attendees) {
                const attendeeDetail = await attendeeRepo.getById(attendee.id);
                meetingModel.attendees.push({
                    id: attendee.id,
                    name: attendeeDetail.name,
                    role: attendee.role
                });
            }

            return meetingModel;
        }
        catch (e) {
            console.error(Error(e.message));
        }
    }

    // Update:
    // Delete:
}

export default Model;