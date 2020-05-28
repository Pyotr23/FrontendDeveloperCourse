class PopupBuilder {
    constructor(parentNode) {
        this._parentNode = parentNode;
        this._popup = undefined;
    }

    get popup() {
        return this._popup;
    }

    renderPopup() {
        this._parentNode.appendChild(this._popup.container);
    }
}
