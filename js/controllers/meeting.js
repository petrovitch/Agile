import AttendeeController from './attendees.js';
import ProgressIndicator from './progress-indicator.js';
import SplashScreen from './splash-modal.js';

import MeetingRoleRepo from '../data/meetingAttendeeRole.js';
import AttendeeDetailRepo from '../data/attendeeDetail.js';
import MeetingAttendeeModel from '../models/attendees.js';

const view = {
    header: {
        title: document.getElementById('meeting-title'),
        clock: document.getElementById('meeting-clock')
    }
}

class Controller {
    constructor(model = {}) {
        this.model = model;

        this.init();
    }

    async init() {
        const meeting = await this.model.load(2);

        // Add Title:
        if (view.header.title) {
            const text = document.createTextNode(meeting.title);
            view.header.title.appendChild(text);
        }

        // Add Clock
        const clock = document.getElementById('meeting-clock');
        if (clock) {
            clock.innerText = formatClock(new Date());
            setInterval(() => {
                clock.innerText = formatClock(new Date());
            }, 1000);
        }

        // Progress Bar
        const progressIndicator = new ProgressIndicator(meeting);
        // progressIndicator.start = meeting.time.start;
        // progressIndicator.duration = meeting.time.duration;

        // Show Splash:
        const splashScreen = new SplashScreen(meeting);

        // Show Attendees:
        this.initAttendeeList(meeting);
    }

    async initAttendeeList(meeting) {
        const meetingRoleRepo = new MeetingRoleRepo();
        const attendeeDetailRepo = new AttendeeDetailRepo();
        const attendeeModel = new MeetingAttendeeModel(meetingRoleRepo, attendeeDetailRepo);
        const model = await attendeeModel.load(meeting.id);
        const attendeeController = new AttendeeController(model);
    }
}

export default Controller;

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatClock(dateTime) {
    const day = days[dateTime.getDay()],
        month = months[dateTime.getMonth()],
        date = dateTime.getDate(),
        year = dateTime.getFullYear(),
        h = dateTime.getHours(),
        m = dateTime.getMinutes().toString().padStart(2, '0'),
        s = dateTime.getSeconds().toString().padStart(2, '0');

    return `${day}, ${month}${month !== 'May' ? '.' : ''} ${date}, ${year}, ${h}:${m}:${s}`
}
