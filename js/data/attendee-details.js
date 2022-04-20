const data = [
    { id: 1, name: { first: "Richard", last: "Anthony" }, department: "Management" },
    { id: 2, name: { first: "Alfred", last: "Johnson" }, department: "Product Owner" },
    // { id: 3, name: { first: "Frank", last: "Canady" }, department: "Development" },
    { id: 3, name: { first: "Phil", last: "Hickman" }, department: "Development" },
    { id: 4, name: { first: "Nitzi", last: "Wright" }, department: "QA" },
    // { id: 5, name: { first: "Josh", last: "Flippen" }, department: "QA" },
    { id: 6, name: { first: "Jason", last: "Ayer" }, department: "Development" },
    // { id: 7, name: { first: "Hannah", last: "Hodge" }, department: "Development" },
    { id: 8, name: { first: "Brooks", last: "Canfield" }, department: "Development" },
    // { id: 9, name: { first: "Jeff", last: "Maddox" }, department: "Development" },
    { id: 10, name: { first: "Armando", last: "Apolinar" }, department: "Development" },
    { id: 11, name: { first: "Kenn E.", last: "Thompson" }, department: "Development" },
    { id: 12, name: { first: "Tim", last: "Wilson" }, department: "Development" },
    { id: 13, name: { first: "Edward", last: "Eoff" }, department: "Support" },
    { id: 14, name: { first: "Matt", last: "Rhodes" }, department: "IT" },
    // { id: 15, name: { first: "Jerry", last: "Carter" }, department: "IT" },
    // { id: 16, name: { first: "Christopher", last: "Benson" }, department: "Support" },
    { id: 17, name: { first: "Sam", last: "Wells" }, department: "QA" },
    { id: 18, name: { first: "Paul", last: "Anderson" }, department: "Development" },
    // { id: 19, name: { first: "Jonathan", last: "Granger" }, department: "Development" },
    { id: 20, name: { first: "Dmytro", last: "Sholka" }, department: "Development" },
    { id: 21, name: { first: "Joe", last: "York" }, department: "Management" },
    { id: 22, name: { first: "Shane", last: "Petty" }, department: "Management" },
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