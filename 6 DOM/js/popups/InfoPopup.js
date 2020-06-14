'use strict'
class InfoPopup extends Popup {
    constructor() {
        super();
        this.content.classList.add('popup__content_info');
        this._badgeTemplate = `<div class="badge">                                
                                <img class="badge__image"/>
                                <span class="badge__name"></span>
                               </div>                               
                               `;
    }

    withBadge(name, photo) {
        this._badge = this._createBadge(name, photo);
        this._content.appendChild(this._badge);
        
    }

    withInfoRows(rows) {
        this._rows = rows;
        this._rows.forEach(row => this._content.appendChild(row.view));
    }

    get badge() {
        return this._badge;
    }

    _createBadge(name, photo) {
        const element = document.createElement('div');  
        element.insertAdjacentHTML('afterbegin', this._badgeTemplate.trim());
        const badgeNode = element.firstChild;
        const badgeName = badgeNode.querySelector('.badge__name');
        badgeName.textContent = name;
        const badgePhoto = badgeNode.querySelector('.badge__image');
        badgePhoto.setAttribute('src', photo);        
        return badgeNode;
    }
}