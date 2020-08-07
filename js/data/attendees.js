const attendees = [
    { id: 1, name: { last: "Anthony", first: "Richard" }, departmentId: 1, meetings: [1, 2] },
    { id: 2, name: { last: "Johnson", first: "Alfred" }, departmentId: 2, meetings: [1, 2] },
    { id: 3, name: { last: "Canady", first: "Frank" }, departmentId: 3, meetings: [1, 2] },
    { id: 4, name: { last: "Wright", first: "Nitzi" }, departmentId: 4, meetings: [1, 2, 3] },
    { id: 5, name: { last: "Flippen", first: "Josh" }, departmentId: 4, meetings: [1, 2, 3] },
    { id: 6, name: { last: "Ayer", first: "Jason" }, departmentId: 3, meetings: [1, 2] },
    { id: 7, name: { last: "Hodge", first: "Hannah" }, departmentId: 3, meetings: [1, 2] },
    { id: 8, name: { last: "Canfield", first: "Brooks" }, departmentId: 3, meetings: [1, 2] },
    { id: 9, name: { last: "Maddox", first: "Jeff" }, departmentId: 3, meetings: [1, 2] },
    { id: 10, name: { last: "Studdard", first: "David" }, departmentId: 3, meetings: [1, 2] },
    { id: 11, name: { last: "Thompson", first: "Kenn E." }, departmentId: 3, meetings: [1, 2] },
    { id: 12, name: { last: "Wilson", first: "Tim" }, departmentId: 3, meetings: [1, 2] },
    { id: 13, name: { last: "Eoff", first: "Edward" }, departmentId: 6, meetings: [2] },
    { id: 14, name: { last: "Rhodes", first: "Matt" }, departmentId: 5, meetings: [2] },
    { id: 15, name: { last: "Carter", first: "Jerry" }, departmentId: 5, meetings: [2] },
    { id: 16, name: { last: "Benson", first: "Christopher" }, departmentId: 6, meetings: [2] },
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

    getByDepartmentId(departmentId) {
        const promise = new Promise((resolve, reject) => {
            const data = attendees.filter(p => p.departmentId == departmentId);

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: Could not find attendee with an departmentId of ${departmentId}`));
            }
        });

        return promise;
    }

    getByMeetingId(meetingId) {
        const promise = new Promise((resolve, reject) => {
            const data = attendees.filter(p => p.meetings.includes(meetingId));

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: No attendees found included with meetingId of ${meetingId}`));
            }
        });

        return promise;
    }
}

export default Repo;