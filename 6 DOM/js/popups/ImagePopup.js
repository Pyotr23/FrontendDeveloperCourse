class ImagePopup extends Popup {
    withImage(link) {
        this._image = this.createImage(link);
        this._content.classList.add('popup__content_card-image');
    }

    get image() {
        return this._image;
    }

    createImage(link) {
        const image = this.createElement('img', 'popup__card-image');
        image.setAttribute('alt', '');
        image.setAttribute('src', link);
        return image;
    }
}