const Type = {
    Scrum: 1,
    "Go/No-go": 2,
    Review: 3
};

const meetings = [
    {
        id: Type.Scrum,
        title: "Daily Stand-Up Meeting",
        description: "Scrum Daily Standup",
        duration: "15:00",
        imageUrl: "/img/splash.png"
    },
    {
        id: Type["Go/No-go"],
        title: "Go/No-Go",
        description: "",
        duration: "15:00",
        imageUrl: "/img/daily_stand-up.png"
    },
    {
        id: Type.Review,
        title: "Review",
        description: "",
        duration: "1:00:00",
        imageUrl: "/img/daily_stand-up.png"
    }
];

class Repo {
    getAll() {
        return meetings;
    }

    getById(id) {
        return meetings.find(m => m.id == id);
    }
}

export default Repo;
export { Type };