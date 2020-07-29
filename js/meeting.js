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
        this.description = meeting.description;
        this.duration = meeting.duration;
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

    const header = document.getElementsByClassName('meeting__header')[0];
    if (header) {
        const h1 = document.createElement('h1');
        if (h1) {
            const title = document.createTextNode(meeting.title);
            if (title) {
                h1.appendChild(title);
            }

            header.appendChild(h1);

            const progress = document.createElement('progress');
            const duration = parseDuration(meeting.duration);
            console.log(duration);
            progress.setAttribute('max', duration);
            progress.setAttribute('value', duration);
            setInterval(() => {
                const remaining = parseInt(progress.getAttribute('value')) - 1;
                progress.setAttribute('value', remaining);
            }, 1000);

            header.appendChild(progress);
        }
    }
}

function addDepartments(meeting) {
    const main = document.getElementsByClassName('meeting__content-right')[0];
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

/**
 * 
 * @param {string} duration string in the form of "##h##m##s"
 *  where h = hours, m = minutes, s = seconds can be individual (i.e. "15m")
 * @returns {number} seconds
 */
function parseDuration(duration) {
    console.log(duration);
    let seconds = 0;
    const ar = duration
        .split(":")
        .reverse();

    for (let i = 0, ni = Math.min(ar.length, 3); i < ni; ++i) {
        seconds += ar[i] * Math.pow(60, i);
    }

    return seconds;
}

export default Meeting;
