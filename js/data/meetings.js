import { RoleType as Role } from './types.js';

const meetings = [
    {
        // Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint.
        // For shorter Sprints, the event is usually shorter.
        id: 3,
        title: "Sprint Planning",
        time: { start: "10:00", duration: "240" },
        imageUrl: ""
    },
    {
        // The Daily Scrum is a 15-minute time-boxed event for the Development Team.
        id: 1,
        title: "Daily Scrum Meeting",
        time: { start: "8:45", duration: "15" },
        imageUrl: "/img/splash.png"
    },
    {
        // This is not a Scrum Event.
        id: 4,
        title: "Daily Meeting with Product Owner and Management",
        time: { start: "9:00", duration: "5" },
        imageUrl: ""
    },
    {
        // The Develoment Team or team members often meet immediately after the 
        // Daily Scrum for detailed discussions, or to adapt, or replan, the rest 
        // of the Sprint's work.
        id: 8,
        title: "Detailed Discussions",
        time: { start: "9:00", duration: "15" },
        imageUrl: ""
    },
    {
        // This is at most a four-hour meeting for one-month Sprints.  For shorter
        // Sprints, the event is usually shorter.  Attendees include the Scrum Team
        // (Product Owner, Scrum Master, and Development Team) and key stakeholders 
        // invited by the Product Owner.
        id: 5,
        title: "Sprint Review",
        time: { start: "14:00", duration: "240" },
        imageUrl: ""
    },
    {
        // This is at most a three-hour meeting for one-month Sprints.  For shorter
        // Sprints, the even is usually shorter. The Scrum Master participates as a 
        // peer team member in the meeting from the accountability over the Scrum
        // process.  It is an opportunity for the Scrum Team to inspect itself.
        id: 6,
        title: "Sprint Retrospective",
        time: { start: "14:00", duration: "180" },
        imageUrl: ""
    },
    {
        // This is not a Scrum Event.
        id: 7,
        title: "Product Backlog Refinement",
        time: { start: "14:00", duration: "180" },
        imageUrl: ""
    },
    {
        // This is not a Scrum Event.
        id: 2,
        title: "Go/No-Go",
        time: { start: "14:00", duration: "30" },
        imageUrl: ""
    }
];

const repoName = 'Meeting Repository';
class Repo {
    getAll() {
        const promise = new Promise((resolve, reject) => {
            const data = meetings;

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${repoName}: No meetings exist in DB`));
            }

        });

        return promise;
    }

    getById(id) {
        const promise = new Promise((resolve, reject) => {
            const data = meetings.find(m => m.id == id);

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${repoName}: Could not find meeting with an id of ${id}`));
            }
        });

        return promise;
    }
}

export { Repo as default };
