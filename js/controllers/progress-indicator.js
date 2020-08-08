class ProgressIndicator {
    constructor(tick = 1000) {
        this._progress = document.getElementById('meeting-progress');

        this._tick = tick;
        this._start = new Date();
        this._duration = 900;

        this._id = setInterval(() => {
            this.update();
        }, tick);
    }

    get element() {
        return this._progress;
    }

    set start(value) {
        const [h, m] = value.split(':');
        this._start = new Date((new Date()).setHours(h, m, 0));
    }

    set duration(value) {
        this._duration = 60 * parseInt(value);
    }

    update() {
        const now = new Date();
        const end = new Date(this._start.getTime() + (1000 * this._duration));

        const max = (end - this._start) / 1000;
        const value = parseInt((end - now) / 1000);

        if (-1 < value) {
            this.element.setAttribute('max', max);
            this.element.setAttribute('value', value);
        }
        else {
            clearInterval(this._id);
            alert(`This meeting has ended`);
        }
    }
}

export default ProgressIndicator;
