import { RoleType as Role } from './types.js';

const meetings = [
    {
        id: 3,
        title: "Product Planning",
        time: { start: "10:00", duration: "240" },
        imageUrl: ""
    },
    {
        id: 1,
        title: "Daily Scrum Meeting",
        time: { start: "8:45", duration: "15" },
        imageUrl: "/img/splash.png"
    },
    {
        id: 4,
        title: "Daily Meeting with Product Owner and Management",
        time: { start: "9:00", duration: "5" },
        imageUrl: ""
    },
    {
        id: 5,
        title: "Scrum Review",
        time: { start: "14:00", duration: "240" },
        imageUrl: ""
    },
    {
        id: 6,
        title: "Scrum Retrospective",
        time: { start: "14:00", duration: "180" },
        imageUrl: ""
    },
    {
        id: 7,
        title: "Product Backlog Refinement",
        time: { start: "14:00", duration: "180" },
        imageUrl: ""
    {
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
