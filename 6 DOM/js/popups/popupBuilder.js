class PopupBuilder {
    constructor() {
        this.popup = new Popup();
    }

    renderPopup() {
        document.querySelector('.root').appendChild(this.popup.container);
    }
}