import Observable from './observable.js';
import Repo from '../data/attendees.js';

const repo = new Repo();

class Model extends Observable {
    constructor() {
        super();
    }

    // Properties:
    get id() { return this._id; }
    set id(value) {
        this._id = value;

        this.notify('id');
    }

    get name() { return this._name; }
    set name(value) {
        this._name = value;

        this.notify('name');
    }
    get fullName() {
        return `${this._name.last}, ${this._name.first}`;
    }

    // Methods:
    getById(id) {
        try {
            const data = repo.getById(id);

            this._id = data.id;
            this._name = data.name;

            this.notify('getById');
        }
        catch (e) {
            console.error(Error(e.message));
        }
    }
}

export default Model;