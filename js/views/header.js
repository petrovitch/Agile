const root = {
    title: document.getElementById('header-title')
}

class View {
    constructor(model = {/* title: <string> */ }) {
        this.model = model;

        this.model.subscribe(this);
    }

    onNotify(data) {
        switch (data) {
            default:
                root.title.appendChild(new document.createTextNode(this.model.title));
                break;
        }
    }
}

export default View;
