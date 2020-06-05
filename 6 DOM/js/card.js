'use strict'
class Card {
    constructor (dto, showImage, deleteCard) {
        this._dto = dto;       
        this._showImage = showImage;
        this._deleteCard = deleteCard;
        this._template =  `<div class="place-card">        
                                <div class="place-card__image">
                                    <button class="place-card__delete-icon"></button>
                                </div>
                                <div class="place-card__description">
                                    <h3 class="place-card__name"></h3>
                                    <button class="place-card__like-icon"></button>
                                </div>
                            </div>`;
    }

    get dto() {
        return this._dto;
    }

    // get id() {
    //     return this._id;
    // }

    // get name() {
    //     return this._name;
    // }

    // get link() {
    //     return this._link;
    // }

    create = () => {
        this._view = this._createCardNodeTemplate();
        this._addLink();
        this._addName();
        this._setEventListeners();
        return this._view;
    }

    _createCardNodeTemplate = () => {
        const element = document.createElement('div');
        element.insertAdjacentHTML('beforeend', this._template.trim());
        return element.firstChild;       
    }

    _addLink = () => {
        const placeCardImage = this._view.querySelector('.place-card__image');
        placeCardImage.setAttribute('data-url', this._dto.link);
        placeCardImage.style.backgroundImage = `url(${this._dto.link})`;
    }

    _addName = () => {
        this._view.querySelector('.place-card__name').textContent = this._dto.name;
    }

    _setEventListeners() {
        this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._remove);
        this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);        
        this._view.querySelector('.place-card__image').addEventListener('click', () => { this._showImage(this._dto.link) });
    }

    _remove = (event) => {
        this._deleteCard(this._dto.classListid);
        this._view.remove();
        event.stopPropagation();
    }

    _like = (event) => {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
}
