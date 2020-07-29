var i = 1;

const participants = [
    { id: i++, name: "Wright, Nitzi", departmentId: 4, meetings: [1, 2, 3] },
    { id: i++, name: "Flippen, Josh", departmentId: 4, meetings: [1, 2, 3] },

    { id: i++, name: "Ayer, Jason", departmentId: 3, meetings: [1, 2] },
    { id: i++, name: "Hodge, Hannah", departmentId: 3, meetings: [1, 2] },

    { id: i++, name: "Canfield, Brooks", departmentId: 3, meetings: [1, 2] },
    { id: i++, name: "Maddox, Jeff", departmentId: 3, meetings: [1, 2] },
    { id: i++, name: "Studdard, David", departmentId: 3, meetings: [1, 2] },
    { id: i++, name: "Thompson, Kenn", departmentId: 3, meetings: [1, 2] },

    { id: i++, name: "Eoff, Edward", departmentId: 6, meetings: [1, 2] },

    { id: i++, name: "Rhodes, Matt", departmentId: 5, meetings: [2] },
    { id: i++, name: "Carter, Jerry", departmentId: 5, meetings: [2] },

    { id: i++, name: "Canady, Frank", departmentId: 3, meetings: [1, 2] },
    { id: i++, name: "Johnson, Alfred", departmentId: 2, meetings: [1, 2] },
    { id: i++, name: "Anthony, Richard", departmentId: 1, meetings: [1, 2] },
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