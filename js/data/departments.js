const departments = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Product Owners" },
    { id: 3, name: "Developers" },
    { id: 4, name: "QA" },
    { id: 5, name: "IT" },
    { id: 6, name: "Support" }
];

class Repo {
    get name() {
        return "Department Repository";
    }

    getAll() {
        const promise = new Promise((resolve, reject) => {
            const data = departments;

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: No departments have been defined`));
            }
        });

        return promise;
    }

    getById(departmentId) {
        const promise = new Promise((resolve, reject) => {
            const data = departments.find(d => d.id = departmentId);

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: No departments found with an id of ${departmentId}`));
            }
        });

        return promise;
    }

    getByParticipants(attendees) {
        const promise = new Promise((resolve, reject) => {
            const data = departments
                .filter(d => attendees.some(p => p.departmentId == d.id));

            if (data) {
                resolve(data);
            }
            else {
                reject(Error(`${this.name}: No departments found by paticipants`));
            }
        });

        return promise;
    }
}

export default Repo;