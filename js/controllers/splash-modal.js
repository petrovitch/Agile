const view = {
    modal: document.getElementById('splash'),
    image: document.getElementById('splash-image')
};

class Controller {
    constructor(model = {}) {
        this.model = model;

        if (view.modal) {
            view.modal.addEventListener('click', onClickEvent);
        }

        if (view.image) {
            if (this.model.imageUrl) {
                view.image.setAttribute('src', this.model.imageUrl);
            }
            else {
                view.modal.classList.add('hidden');
            }
        }
    }

    // set imageUrl(imageUrl) {
    //     if (IMAGE) {
    //         if (imageUrl) {
    //             IMAGE.setAttribute('src', imageUrl);
    //         }
    //         else {
    //             MODAL.classList.add('hidden');
    //         }
    //     }
    // }
}

export default Controller;

function onClickEvent(e) {
    const modal = e.currentTarget;

    if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
}