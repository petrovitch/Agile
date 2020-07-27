const Type = {
    Scrum: 1,
    "Go/No-go": 2,
    Review: 3
};

const meetings = [
    {
        id: Type.Scrum,
        title: "Scrum",
        startTime: "26 Jul 2020 8:45:00",
        endTime: "26 Jul 2020 8:46:00",
        imgUrl: "/img/daily_stand-up.png"
    },
    {
        id: Type["Go/No-go"],
        title: "Go/No-Go",
        startTime: "26 Jul 2020 8:45:00",
        endTime: "26 Jul 2020 9:00:00",
        imgUrl: "/img/daily_stand-up.png"
    },
    {
        id: Type.Review,
        title: "Review",
        startTime: "26 Jul 2020 8:45:00",
        endTime: "26 Jul 2020 8:46:00",
        imgUrl: "/img/daily_stand-up.png"
    },
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