import { default as MeetingRepo, Type } from './data/meetings.js';
import DepartmentRepo from './data/departments.js';
import ParticipantRepo from './data/attendees.js';
import SplashScreen from './controllers/splash-modal.js';
import ProgressIndicator from './controllers/progress-indicator.js';
import { sort } from './util/util.js';

const meetingRepo = new MeetingRepo();
const departmentRepo = new DepartmentRepo();
const participantRepo = new ParticipantRepo();

class Meeting {
    async load(meetingType) {
        const meeting = await meetingRepo.getById(meetingType);
        const participants = await participantRepo.getByMeetingId(meetingType);
        const departments = await departmentRepo.getByParticipants(participants);

        this.id = meeting.id;
        this.title = meeting.title;
        this.time = meeting.time;
        this.imageUrl = meeting.imageUrl;
        this.departments = [];

        for (const department of departments) {
            this.departments.push({
                id: department.id,
                name: department.name,
                participants: participants.filter(p => p.departmentId == department.id)
            });
        }
    }

    static async render(meetingType) {
        const meeting = new Meeting();
        await meeting.load(meetingType);

        const splashScreen = new SplashScreen();
        splashScreen.imageUrl = meeting.imageUrl;

        addTitle(meeting);
        addDepartments(meeting);
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

    return `${day}, ${month} ${date}, ${year}, ${h}:${m}:${s}`
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

function addDepartments(meeting) {
    const attendeeList = document.getElementById('attendee-list');
    if (attendeeList) {

        const div = document.createElement('div');
        if (div) {
            div.classList.add('departments');

            for (let department of meeting.departments) {
                addDepartment(div, department);
            }

            attendeeList.appendChild(div);
        }
    }
}

function addDepartment(parent, department) {
    if (parent) {

        const section = document.createElement('section');
        if (section) {
            section.classList.add('department');

            // const h2 = document.createElement('h2');
            // if (h2) {
            //     const text = document.createTextNode(department.name);
            //     if (text) {
            //         h2.appendChild(text);
            //         section.appendChild(h2);
            //     }
            // }

            addParticipants(section, department.participants);

            parent.appendChild(section);
        }
    }
}

function addParticipants(parent, participants) {
    if (parent) {
        const ul = document.createElement('ul');

        if (ul) {
            ul.classList.add('participants');

            const sortedAttendees = participants
                .sort(sort.random);

            for (const participant of sortedAttendees) {
                addParticipant(ul, participant);
            }

            parent.appendChild(ul);
        }
    }
}

function addParticipant(parent, participant) {
    if (parent) {
        const li = document.createElement('li');

        if (li) {
            li.classList.add('participant');

            const checkbox = document.createElement('input');
            if (checkbox) {
                checkbox.type = 'checkbox';
                checkbox.id = participant.id;

                li.appendChild(checkbox);
            }

            const label = document.createElement('label');
            if (label) {
                label.setAttribute('for', participant.id);
                label.classList.add('participant-name');
                const text = document.createTextNode(`${participant.name.last}, ${participant.name.first}`);
                label.appendChild(text);

                li.appendChild(label);
            }

            // Add event listener for double click to hide
            li.addEventListener('dblclick', (e) => {
                label.classList.toggle('marked-out');

                window.getSelection().removeAllRanges();

                if (label.classList.contains('marked-out')) {
                    checkbox.checked = false;

                    const disabled = document.createAttribute('disabled');
                    checkbox.setAttributeNode(disabled);
                }
                else {
                    checkbox.removeAttribute('disabled');
                }

            });

            parent.appendChild(li);
        }
    }
}

export default Meeting;
