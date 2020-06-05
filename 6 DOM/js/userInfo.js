'use strict'
class UserInfo {
    constructor(container, api) {
        this._container = container;
        this._api = api;
        this._setElements();
        this.set();
    }

    _setElements() {
        this._nameElement = this._container.querySelector('.user-info__name');
        this._jobElement = this._container.querySelector('.user-info__job'); 
        this._photoElement = this._container.querySelector('.user-info__photo');    
    }

    set() {     
        this._api.getUserInfo()
        .then(dto => {
            this._dto = dto;
            this.update();
        })
        .catch(err => console.log(err));        
    }

    setPhoto(link) {        
        this._user.avatar = link;
    }

    // get name() {
    //     return this._user.name;
    // }

    // get about() {
    //     return this._user.about;
    // }   
    
    // get avatar() {
    //     return this._user.avatar;
    // }

    // get id() {
    //     return this._user._id;
    // }

    update() {                    
        this._nameElement.textContent = this._dto.name;
        this._jobElement.textContent = this._dto.about;
        this._photoElement.style.backgroundImage = `url(${this._dto.avatar})`;
    }
}
