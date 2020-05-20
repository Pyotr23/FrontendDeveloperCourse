class ImagePopupBuilder extends PopupBuilder {
    addImage(link) {
        this.popup.content.appendChild(this.createImage(link));
        this.popup.content.classList.add('popup__content_card-image');
    }

    createImage(link) {
        const image = document.createElement('img');
        image.classList.add('popup__card-image');
        image.setAttribute('alt', '');
        image.setAttribute('src', link);
        return image;
    }
}