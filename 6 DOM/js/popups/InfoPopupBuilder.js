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

    renderInfo() { 
        this._popup.content.appendChild(this._popup.title);       
        this._popup.content.appendChild(this._popup.badge);
        this._popup._rows.forEach(row => this._popup.content.appendChild(row.view));
    }
}
