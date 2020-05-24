/*
    Надо исправить: По условиям задачи, в классе должны быть методы like и remove.
 */
class Card {
    constructor (name, link) {
        this._name = name;
        this._link = link;
    }

    create = () => {        
        /*  !!! DONE !!!  
            Можно лучше: Эффективней использовать insertAdjacentHTML,
            так как он не перезаписывает все содержимое целиком и поэтому работает быстрее.
            https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
         */ 
        this._container = this._createCardNodeTemplate();        
        this._addLink();
        this._addName();  
        console.log(this._container);      
        return this._container;
    }

    _createCardNodeTemplate = () => {        
        const cardNode = document.createElement('div');
        cardNode.classList.add('place-card');
        const innerHtml =  `<div class="place-card__image">
                                <button class="place-card__delete-icon"></button>
                            </div>
                            <div class="place-card__description">
                                <h3 class="place-card__name"></h3>
                                <button class="place-card__like-icon"></button>
                            </div>`;
        cardNode.insertAdjacentHTML('afterbegin', innerHtml);
        return cardNode;
    }

    _addLink = () => {
        console.log(this._container);
        const placeCardImage = this._container.querySelector('.place-card__image');
        placeCardImage.setAttribute('data-url', this._link);
        placeCardImage.style.backgroundImage = `url(${this._link})`;
    }

    _addName = () => {
        this._container.querySelector('.place-card__name').textContent = this._name;
    } 
}
