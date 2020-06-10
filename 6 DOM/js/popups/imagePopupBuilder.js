'use strict'
class ImagePopupBuilder extends PopupBuilder {    
    withImage(link) {
        this._popup.withImage(link);
    }

    renderImage() {
        this._popup.content.appendChild(this._popup.image);
    }
}
