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
            if (imageUrl) {
                IMAGE.setAttribute('src', imageUrl);
            }
            else {
                MODAL.classList.add('hidden');
            }
        }
    }
}

export default Controller;

function onClickEvent(e) {
    const modal = e.currentTarget;

    if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
}