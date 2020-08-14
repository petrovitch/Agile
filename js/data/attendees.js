const attendees = [
    { id: 1, name: { last: "Anthony", first: "Richard" } },
    { id: 2, name: { last: "Johnson", first: "Alfred" } },
    { id: 3, name: { last: "Canady", first: "Frank" } },
    { id: 4, name: { last: "Wright", first: "Nitzi" } },
    { id: 5, name: { last: "Flippen", first: "Josh" } },
    { id: 6, name: { last: "Ayer", first: "Jason" } },
    { id: 7, name: { last: "Hodge", first: "Hannah" } },
    { id: 8, name: { last: "Canfield", first: "Brooks" } },
    { id: 9, name: { last: "Maddox", first: "Jeff" } },
    { id: 10, name: { last: "Studdard", first: "David" } },
    { id: 11, name: { last: "Thompson", first: "Kenn E." } },
    { id: 12, name: { last: "Wilson", first: "Tim" } },
    { id: 13, name: { last: "Eoff", first: "Edward" } },
    { id: 14, name: { last: "Rhodes", first: "Matt" } },
    { id: 15, name: { last: "Carter", first: "Jerry" } },
    { id: 16, name: { last: "Benson", first: "Christopher" } }
];

class Repo {
    get name() {
        return "Attendee Repository";
    }

    getAll() {
        const promise = new Promise((resolve, reject) => {
            const data = attendees;

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: No attendees have defined`));
            }
        });

        return promise;
    }

    getById(id) {
        const promise = new Promise((resolve, reject) => {
            const data = attendees.find(p => p.id == id);

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: Could not find attendee with an id of ${id}`));
            }
        });

        return promise;
    }

}

export default Repo;