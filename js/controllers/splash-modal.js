const MODAL = document.getElementById('splash');
const IMAGE = document.getElementById('splash-image');

class Controller {
    constructor() {
        if (MODAL) {
            MODAL.addEventListener('click', onClickEvent);
        }
    }

    set imageUrl(imageUrl) {
        if (IMAGE) {
            IMAGE.setAttribute('src', imageUrl);
        }
    }
}

export default Controller;

function onClickEvent(e) {
    const modal = e.currentTarget;

    modal.classList.toggle('hidden');
}