'use strict'
class InfoPopupBuilder extends PopupBuilder {
    withTitle(title) {        
        this._popup.withTitle(title);
    }

    withBadge(name, photo) {
        this._popup.withBadge(name, photo);
    }

    renderInfo() { 
        this._popup.content.appendChild(this._popup.title);       
        this._popup.content.appendChild(this._popup.badge);
    }
}
