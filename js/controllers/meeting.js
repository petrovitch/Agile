import AttendeeController from './attendees.js';
import ProgressIndicator from './progress-indicator.js';
import SplashScreen from './splash-modal.js';
import { Type } from '../data/meetings.js';

const view = {
    header: {
        title: document.getElementById('meeting-title'),
        clock: document.getElementById('meeting-clock')
    }
}

class Controller {
    constructor(model = {}) {
        this.model = model;
    }

    async init(meetingId = Type.Scrum) {
        await this.model.load(meetingId);

        // Add Title:
        if (view.header.title) {
            const text = document.createTextNode(this.model.title);
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

        const progressIndicator = new ProgressIndicator(this.model);
        progressIndicator.start = this.model.time.start;
        progressIndicator.duration = this.model.time.duration;

        // Show Splash:
        const splashScreen = new SplashScreen(this.model);


        // Show Attendees:
        const attendeeController = new AttendeeController(this.model);
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
