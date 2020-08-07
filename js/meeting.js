import { default as MeetingRepo, Type } from './data/meetings.js';
import DepartmentRepo from './data/departments.js';
import ParticipantRepo from './data/attendees.js';
import SplashScreen from './controllers/splash-modal.js';
import ProgressIndicator from './controllers/progress-indicator.js';

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

function addDepartments(meeting) {
    const main = document.getElementsByClassName('meeting__content-left')[0];
    if (main) {

        const div = document.createElement('div');
        if (div) {
            div.classList.add('departments');

            for (let department of meeting.departments) {
                addDepartment(div, department);
            }

            main.appendChild(div);
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

            const sorted = participants.sort((a, b) => {
                if (a.name.last < b.name.last) {
                    return -1;
                }

                if (a.name.last > b.name.last) {
                    return 1;
                }

                if (a.name.first < b.name.first) {
                    return -1;
                }

                if (a.name.first > b.name.first) {
                    return 1;
                }

                return 0;
            });

            for (const participant of sorted) {
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
                li.classList.toggle('mark-out');
                if (li.classList.contains('mark-out')) {
                    checkbox.setAttribute('disabled', null);
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
