'use strict'
class ImagePopupBuilder extends PopupBuilder {
    constructor(parentNode) {
        super(parentNode);
        this._popup = new ImagePopup();
    }

    withImage(link) {
        this._popup.withImage(link);
    }

    renderImage() {
        this._popup.content.appendChild(this._popup.image);
    }
}
