class Observable {
    constructor() {
        this._subscribers = [];
    }

    subscribe(subscriber) {
        this._subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        const index = this._subscribers.findIndex(subscriber);
        if (-1 < index) {
            this._subscribers.splice(index, 1);
        }
    }

    publish(data) {
        this._subscribers.forEach(s => s.onNotify(data));
    }
}

export default Observable;