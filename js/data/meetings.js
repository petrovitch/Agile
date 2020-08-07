const Type = {
    Scrum: 1,
    GoNoGo: 2,
    Review: 3
};

const meetings = [
    {
        id: Type.Scrum,
        title: "Daily Stand-Up Meeting",
        description: "Scrum Daily Standup",
        time: { start: "17:20", duration: "5" },
        imageUrl: "/img/splash.png"
    },
    {
        id: Type.GoNoGo,
        title: "Go/No-Go",
        description: "",
        time: { start: "08:45", duration: "15" },
        imageUrl: "/img/daily_stand-up.png"
    },
    {
        id: Type.Review,
        title: "Review",
        description: "",
        time: { start: "08:45", duration: "15" },
        imageUrl: "/img/daily_stand-up.png"
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
