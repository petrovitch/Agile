const Type = {
    None: 0,
    Scrum: 1,
    GoNoGo: 2,
    SprintReview: 3,
    SprintPlanning: 4
};

const meetings = [
    {
        id: Type.Scrum,
        title: "Daily Stand-Up Meeting",
        description: "Scrum Daily Standup",
        time: { start: "8:45", duration: "15" },
        imageUrl: "/img/splash.png"
    },
    {
        id: Type.GoNoGo,
        title: "Go/No-Go",
        description: "",
        time: { start: "14:00", duration: "30" },
        imageUrl: ""
    },
    {
        id: Type.SprintReview,
        title: "Review",
        description: "",
        time: { start: "09:00", duration: "60" },
        imageUrl: ""
    }
];

class Repo {
    getAll() {
        const promise = new Promise((resolve, reject) => {
            const data = meetings;

            if (data) {
                resolve(data);
            }
            else {
                reject(Error('Meeting Repository: No meetings exist in DB'));
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
                reject(Error(`Meeting Repository: Could not find meeting with an id of ${id}`));
            }
        });

        return promise;
    }
}

export { Repo as default, Type };
