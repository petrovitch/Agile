import { RoleType as Role } from './types.js';

const meetings = [
    {
        id: 1,
        title: "Daily Stand-Up Meeting",
        time: { start: "08:00", duration: "15" },
        imageUrl: "/img/splash.png",
        attendees: [
            { id: 1, role: Role.Lead },
            { id: 2, role: Role.Lead },
            { id: 3, role: Role.Participant },
            { id: 4, role: Role.Participant },
            { id: 5, role: Role.Participant },
            { id: 6, role: Role.Participant },
            { id: 7, role: Role.Participant },
            { id: 8, role: Role.Participant },
            { id: 9, role: Role.Participant },
            { id: 10, role: Role.Participant },
            { id: 11, role: Role.Participant },
            { id: 12, role: Role.Participant },
            { id: 13, role: Role.Observer }
        ]
    },
    {
        id: 2,
        title: "Go/No-Go",
        time: { start: "14:00", duration: "30" },
        imageUrl: "",
        attendees: [
            { id: 1, role: Role.Lead },
            { id: 2, role: Role.Lead },
            { id: 3, role: Role.Participant },
            { id: 4, role: Role.Participant },
            { id: 5, role: Role.Participant },
            { id: 6, role: Role.Participant },
            { id: 7, role: Role.Participant },
            { id: 8, role: Role.Participant },
            { id: 9, role: Role.Participant },
            { id: 10, role: Role.Participant },
            { id: 11, role: Role.Participant },
            { id: 12, role: Role.Participant },
            { id: 13, role: Role.Participant },
            { id: 14, role: Role.Participant },
            { id: 15, role: Role.Participant },
            { id: 16, role: Role.Participant }
        ]
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
