class ImagePopupBuilder extends PopupBuilder {
    withImage(link) {
        this.popup.withImage(link);
    }

    renderImage() {        
        this.popup.content.appendChild(this.popup.image);
    }
}