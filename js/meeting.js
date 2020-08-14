import MeetingRepo from './data/meetings.js';
import SplashScreen from './controllers/splash-modal.js';
import ProgressIndicator from './controllers/progress-indicator.js';
import AttendeesModel from './models/attendees.js';
import AttendeeController from './controllers/attendees.js';
import MeetingModel from './models/meeting.js';

const meetingRepo = new MeetingRepo();

class Meeting {
    async load(meetingId) {
        const meetingModel = new MeetingModel();
        await meetingModel.load(meetingId);
        const attendeeController = new AttendeeController(meetingModel);

        const meeting = await meetingRepo.getById(meetingId);

        this.id = meeting.id;
        this.title = meeting.title;
        this.time = meeting.time;
        this.imageUrl = meeting.imageUrl;
    }

    static async render(meetingType) {
        const meeting = new Meeting();
        await meeting.load(meetingType);

        const splashScreen = new SplashScreen();
        splashScreen.imageUrl = meeting.imageUrl;

        addTitle(meeting);
    }
}

function addTitle(meeting) {
    // <header id="main-header">
    //     <h1>Meeting</h1>
    // </header>

    const header = document.getElementsByClassName('meeting__header')[0];
    if (header) {
        const h1 = document.createElement('h1');
        if (h1) {
            const title = document.createTextNode(meeting.title);
            if (title) {
                h1.appendChild(title);
            }

            header.appendChild(h1);

            const progressIndicator = new ProgressIndicator();
            progressIndicator.start = meeting.time.start;
            progressIndicator.duration = meeting.time.duration;

            header.appendChild(progressIndicator.element);
        }
    }
}

export default Meeting;
