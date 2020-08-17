const data = [
    { id: 1, name: { first: "Richard", last: "Anthony" } },
    { id: 2, name: { first: "Alfred", last: "Johnson" } },
    { id: 3, name: { first: "Frank", last: "Canady" } },
    { id: 4, name: { first: "Nitzi", last: "Wright" } },
    { id: 5, name: { first: "Josh", last: "Flippen" } },
    { id: 6, name: { first: "Jason", last: "Ayer" } },
    { id: 7, name: { first: "Hannah", last: "Hodge" } },
    { id: 8, name: { first: "Brooks", last: "Canfield" } },
    { id: 9, name: { first: "Jeff", last: "Maddox" } },
    { id: 10, name: { first: "David", last: "Studdard" } },
    { id: 11, name: { first: "Kenn E.", last: "Thompson" } },
    { id: 12, name: { first: "Tim", last: "Wilson" } },
    { id: 13, name: { first: "Edward", last: "Eoff" } },
    { id: 14, name: { first: "Matt", last: "Rhodes" } },
    { id: 15, name: { first: "Jerry", last: "Carter" } },
    { id: 16, name: { first: "Christopher", last: "Benson" } }
];

const repoName = 'Attendee Repository';
class Repo {
    getAll() {
        const promise = new Promise((resolve, reject) => {
            const attendeeDetails = data;

            if (attendeeDetails) {
                resolve(attendeeDetails);
            }
            else {
                reject(Error(`${repoName}: No attendees have defined`));
            }
        });

        return promise;
    }

    getById(id) {
        const promise = new Promise((resolve, reject) => {
            const attendeeDetail = data.find(p => p.id == id);

            if (attendeeDetail) {
                resolve(attendeeDetail);
            }
            else {
                reject(Error(`${repoName}: Could not find attendee with an id of ${id}`));
            }
        });

        return promise;
    }

}

export default Repo;