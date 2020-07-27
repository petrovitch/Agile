import { default as MeetingRepo, Type } from './data/meetings.js';
import DepartmentRepo from './data/departments.js';
import ParticipantRepo from './data/participants.js';

const meetingRepo = new MeetingRepo();
const departmentRepo = new DepartmentRepo();
const participantRepo = new ParticipantRepo();

class Meeting {
    constructor(meetingType) {
        const meeting = meetingRepo.getById(meetingType);
        const participants = participantRepo.getByMeetingId(meetingType);
        const departments = departmentRepo.getByParticipants(participants);

        this.id = meeting.id;
        this.title = meeting.title;
        this.startTime = meeting.startTime;
        this.endTime = meeting.endTime;
        this.departments = [];

        for (const department of departments) {
            this.departments.push({
                id: department.id,
                name: department.name,
                participants: participants.filter(p => p.departmentId == department.id)
            });
        }
    }

    // Meeting.render(meetingType)
    static render(meetingType) {
        const meeting = new Meeting(meetingType);

        addTitle(meeting);
        addDepartments(meeting);
    }
}

function addTitle(meeting) {
    // <header id="main-header">
    //     <h1>Meeting</h1>
    // </header>

    const header = document.createElement('header');
    if (header) {
        const h1 = document.createElement('h1');
        if (h1) {
            const title = document.createTextNode(meeting.title);
            if (title) {
                h1.appendChild(title);
            }

            header.appendChild(h1);
            // parent.appendChild(document.createTextNode(new Date(meeting.starts)));
            // parent.appendChild(document.createTextNode(' ' + new Date(meeting.ends)));

            const progress = document.createElement('progress');
            const duration = (Date.parse(meeting.endTime) - Date.parse(meeting.startTime)) / 1000
            progress.setAttribute('max', duration);
            progress.setAttribute('value', duration);
            setInterval(() => {
                const remaining = parseInt(progress.getAttribute('value')) - 1;
                progress.setAttribute('value', remaining);
            }, 1000);

            header.appendChild(progress);

            document.body.appendChild(header);
        }
    }
}

function addDepartments(meeting) {
    const main = document.createElement('main');
    if (main) {

        const div = document.createElement('div');
        if (div) {
            div.classList.add('departments');

            for (let department of meeting.departments) {
                addDepartment(div, department);
            }

            main.appendChild(div);
        }

        document.body.appendChild(main);
    }
}

function addDepartment(parent, department) {
    if (parent) {

        const section = document.createElement('section');
        if (section) {
            section.classList.add('department');

            const h2 = document.createElement('h2');
            if (h2) {
                const text = document.createTextNode(department.name);
                if (text) {
                    h2.appendChild(text);
                    section.appendChild(h2);
                }
            }

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

            for (const participant of participants) {
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
                const text = document.createTextNode(participant.name);
                label.appendChild(text);

                li.appendChild(label);
            }

            // Add event listener for double click to hide
            li.addEventListener('dblclick', (e) => {
                li.classList.add('hidden');
            });

            parent.appendChild(li);
        }
    }
}

export default Meeting;
