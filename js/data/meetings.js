import { RoleType as Role } from './types.js';

const meetings = [
    {
        // The Daily Scrum is a 15-minute time-boxed event for the Development Team.
        id: 1,
        title: "Daily Scrum",
        time: { start: "9:00", duration: "15" },
        imageUrl: "/img/splash.png"
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
