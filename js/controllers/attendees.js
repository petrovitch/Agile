import { shuffle } from '../util/util.js';
import { RoleType as Type } from '../data/types.js';

const view = {
    control: document.getElementById('attendee-list')
};

class Controller {
    constructor(model = {}) {
        this.model = model;

        this.init();
    }

    init() {
        if (view.control) {
            view.control.appendChild(this.addGroups());
        }
    }

    addGroups() {
        const groups = [...new Set(this.model.attendees.map(a => a.role))].sort();

        const div = document.createElement('div');
        if (div) {
            div.classList.add('departments');

            for (const group of groups) {
                div.appendChild(this.addGroup(group));
            }

            return div;
        }
    }

    addGroup(group) {
        const div = document.createElement('div');
        if (div) {
            div.classList.add('department');

            div.appendChild(this.addAttendees(group));

            return div;
        }
    }

    addAttendees(group) {
        const ul = document.createElement('ul');
        if (ul) {
            ul.classList.add('participants');

            let groupAttendees = this.model.attendees
                .filter(a => a.role === group);

            // Randomize attendees
            if (group === Type.Participant) {
                groupAttendees = shuffle(groupAttendees);
            }

            for (const attendee of groupAttendees) {
                ul.appendChild(this.addAttendee(attendee));
            }

            return ul;
        }
    }

    addAttendee(attendee) {
        const li = document.createElement('li');
        if (li) {
            li.classList.add('participant');

            const id = attendee.id;

            const checkbox = document.createElement('input');
            if (checkbox) {
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', id);

                // Hide checkbox for observers
                if (attendee.role === Type.Observer) {
                    checkbox.classList.add('hidden');
                }

                li.appendChild(checkbox);
            }

            const label = document.createElement('label');
            if (label) {
                label.setAttribute('for', id);
                label.classList.add('participant-name');
                const text = document.createTextNode(`${attendee.name.last}, ${attendee.name.first}`);
                label.appendChild(text);

                li.appendChild(label);
            }

            li.addEventListener('dblclick', (e) => {
                label.classList.toggle('marked-out');

                window.getSelection().removeAllRanges();

                if (label.classList.contains('marked-out')) {
                    checkbox.checked = false;

                    const disabled = document.createAttribute('disabled');
                    checkbox.setAttributeNode(disabled);
                }
                else {
                    checkbox.removeAttribute('disabled');
                }
            });

            return li;
        }
    }
}

export default Controller;