const participants = [
    { id: 1, name: "Richard Anthony", departmentId: 1, meetings: [1, 2] },
    { id: 2, name: "Alfred Johnson", departmentId: 2, meetings: [1, 2] },

    { id: 3, name: "Nitzi Wright", departmentId: 4, meetings: [1, 2, 3] },
    { id: 4, name: "Josh Flippen", departmentId: 4, meetings: [1, 2, 3] },

    { id: 5, name: "Frank Canady", departmentId: 3, meetings: [1, 2] },
    { id: 6, name: "Jeff Maddox", departmentId: 3, meetings: [1, 2] },
    { id: 7, name: "Brooks Canfield", departmentId: 3, meetings: [1, 2] },
    { id: 8, name: "Jason Ayer", departmentId: 3, meetings: [1, 2] },
    { id: 9, name: "David Studdard", departmentId: 3, meetings: [1, 2] },
    { id: 10, name: "Kenn Thompson", departmentId: 3, meetings: [1, 2] },
    { id: 11, name: "Hannah Hodge", departmentId: 3, meetings: [1, 2] },

    { id: 12, name: "Edward Eoff", departmentId: 6, meetings: [1, 2] },

    { id: 13, name: "Matt Rhodes", departmentId: 5, meetings: [2] },
    { id: 14, name: "Jerry Carter", departmentId: 5, meetings: [2] }
];

class Repo {
    getAll() {
        return participants;
    }

    getById(id) {
        return participants.find(p => p.id == id);
    }

    getByDepartmentId(departmentId) {
        return participants.filter(p => p.departmentId == departmentId);
    }

    getByMeetingId(meetingId) {
        return participants.filter(p => p.meetings.includes(meetingId));
    }
}

export default Repo;