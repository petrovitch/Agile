import MeetingRepo from './data/meetings.js';
import SplashScreen from './controllers/splash-modal.js';
import ProgressIndicator from './controllers/progress-indicator.js';
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

function addTitle(meeting) {
    const title = document.getElementById('meeting-title');
    if (title) {
        title.innerHTML = meeting.title;

        const subTitle = document.getElementById('meeting-clock');
        if (subTitle) {

            subTitle.innerText = formatClock(new Date());
            setInterval(() => {
                subTitle.innerText = formatClock(new Date());
            }, 1000);
        }

        const progressIndicator = new ProgressIndicator();
        progressIndicator.start = meeting.time.start;
        progressIndicator.duration = meeting.time.duration;
        progressIndicator.update();
    }
}

export default Meeting;
