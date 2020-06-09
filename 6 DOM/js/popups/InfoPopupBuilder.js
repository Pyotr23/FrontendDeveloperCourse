'use strict'
class InfoPopupBuilder extends PopupBuilder {
    constructor(parentNode) {
        super(parentNode);
        this._popup = new InfoPopup();
    }

    withBadge(name, photo) {
        this._popup.withBadge(name, photo);
    }

    renderBadge() {
        console.log(this._popup.badge);
        this._popup.content.appendChild(this._popup.badge);
    }
}
