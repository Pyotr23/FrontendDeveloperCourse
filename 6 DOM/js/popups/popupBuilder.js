'use strict'
class PopupBuilder {
    constructor(parentNode, popup) {
        this._parentNode = parentNode;
        this._popup = popup;
    }

    get popup() {
        return this._popup;
    }

    renderPopup() {
        this._parentNode.appendChild(this._popup.container);
    }
}
