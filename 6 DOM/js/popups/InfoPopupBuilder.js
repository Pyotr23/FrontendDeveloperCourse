'use strict'
class InfoPopupBuilder extends PopupBuilder {
    withTitle(title) {        
        this._popup.withTitle(title);
    }

    withBadge(name, photo) {
        this._popup.withBadge(name, photo);
    }

    withInfoRows(rows) {
        this._popup.withInfoRows(rows);
    }

    withoutCloseButton() {
        this._popup.withoutCloseButton();
    }
}
