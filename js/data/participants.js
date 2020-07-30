
const participants = [
    { id: 1, name: "Anthony, Richard", departmentId: 1, meetings: [1, 2] },
    { id: 2, name: "Johnson, Alfred", departmentId: 2, meetings: [1, 2] },
    { id: 3, name: "Canady, Frank", departmentId: 3, meetings: [1, 2] },
    { id: 4, name: "Wright, Nitzi", departmentId: 4, meetings: [1, 2, 3] },
    { id: 5, name: "Flippen, Josh", departmentId: 4, meetings: [1, 2, 3] },
    { id: 6, name: "Ayer, Jason", departmentId: 3, meetings: [1, 2] },
    { id: 7, name: "Hodge, Hannah", departmentId: 3, meetings: [1, 2] },
    { id: 8, name: "Canfield, Brooks", departmentId: 3, meetings: [1, 2] },
    { id: 9, name: "Maddox, Jeff", departmentId: 3, meetings: [1, 2] },
    { id: 10, name: "Studdard, David", departmentId: 3, meetings: [1, 2] },
    { id: 11, name: "Thompson, Kenn E.", departmentId: 3, meetings: [1, 2] },
    { id: 12, name: "Wilson, Tim", departmentId: 3, meetings: [1, 2] },
    { id: 13, name: "Eoff, Edward", departmentId: 6, meetings: [2] },
    { id: 14, name: "Rhodes, Matt", departmentId: 5, meetings: [2] },
    { id: 15, name: "Carter, Jerry", departmentId: 5, meetings: [2] },
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