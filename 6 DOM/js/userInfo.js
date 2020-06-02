'use strict'
class UserInfo {
    constructor(container) {
        this._container = container;
        this._nameElement = container.querySelector('.user-info__name');
        this._jobElement = container.querySelector('.user-info__job'); 
        this._photoElement = container.querySelector('.user-info__photo');       
    }

    set(user) {
        this._user = user;
    }

    get name() {
        return this._user.name;
    }

    get about() {
        return this._user.about;
    }    

    update() {        
        this._nameElement.textContent = this._user.name;
        this._jobElement.textContent = this._user.about;
        this._photoElement.style.backgroundImage = `url(${this._user.avatar})`;
    }
}
