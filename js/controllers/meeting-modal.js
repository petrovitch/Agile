const view = {
    modal: document.getElementById('meeting-settings'),
    field: {
        title: document.getElementById('meeting-modal-title'),
        titles: document.getElementById('titles')
    },
    cancel: document.getElementById('meeting-modal-cancel'),
    okay: document.getElementById('meeting-modal-okay')
};

class Controller {
    constructor(model = {}) {
        this.model = model;

        view.cancel.addEventListener('click', (e) => {
            view.modal.classList.add('hidden');
        });

        view.okay.addEventListener('click', (e) => {
            view.modal.classList.add('hidden');
        });

        this.init();
    }

    init() {
        // view.field.title.setAttribute('value', this.model.title);

    }

    show() {
        view.modal.classList.remove('hidden');
    }

    hide() {
        view.modal.classList.add('hidden');
    }
}

export default Controller;