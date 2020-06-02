'use strict'
class Card {
    constructor (name, link, showImage) {
        this._name = name;
        this._link = link;
        this._showImage = showImage;
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
        placeCardImage.setAttribute('data-url', this._link);
        placeCardImage.style.backgroundImage = `url(${this._link})`;
    }

    _addName = () => {
        this._view.querySelector('.place-card__name').textContent = this._name;
    }

    _setEventListeners() {
        this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._remove);
        this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);        
        this._view.querySelector('.place-card__image').addEventListener('click', () => { this._showImage(this._link) });
    }

    _remove = (event) => {
        this._view.remove();
        event.stopPropagation();
    }

    _like = (event) => {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
}
