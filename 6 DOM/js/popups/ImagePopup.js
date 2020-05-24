class ImagePopup extends Popup {
    withImage(link) {
        this.image = this.createImage(link);
        this.content.classList.add('popup__content_card-image');
    }

    createImage(link) {
        const image = this.createElement('img', 'popup__card-image');
        image.setAttribute('alt', '');
        image.setAttribute('src', link);
        return image;
    }
}