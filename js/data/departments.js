const departments = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Product Owners" },
    { id: 3, name: "Developers" },
    { id: 4, name: "QA" },
    { id: 5, name: "IT" },
    { id: 6, name: "Support" }
];

class Repo {
    getAll() {
        return departments;
    }

    getById(departmentId) {
        return departments.find(d => d.id = departmentId);
    }

    getByParticipants(participants) {
        return departments
            .filter(d => participants.some(p => p.departmentId == d.id));
    }
}

export default Repo;