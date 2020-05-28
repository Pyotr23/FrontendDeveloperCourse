class Card {
    constructor (name, link) {
        this._name = name;
        this._link = link;
        this._innerHtml =  `<div class="place-card__image">
                                <button class="place-card__delete-icon"></button>
                            </div>
                            <div class="place-card__description">
                                <h3 class="place-card__name"></h3>
                                <button class="place-card__like-icon"></button>
                            </div>`;
    }

    create = () => {
        this._view = this._createCardNodeTemplate();
        this._addLink();
        this._addName();
        this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._remove);
        this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);
        return this._view;
    }

    _createCardNodeTemplate = () => {
        const cardNode = document.createElement('div');
        cardNode.classList.add('place-card');
        /*  !!! DONE !!!
            Можно лучше: Большие строковые переменные лучше выносить из методов,
            так они не будут создаваться каждый раз новые.
            Можно вынести в конструктор аналогично this._errorMessages в FormValidator.
         */       
        cardNode.insertAdjacentHTML('afterbegin', this._innerHtml);
        return cardNode;
    }

    _addLink = () => {
        const placeCardImage = this._view.querySelector('.place-card__image');
        placeCardImage.setAttribute('data-url', this._link);
        placeCardImage.style.backgroundImage = `url(${this._link})`;
    }

    _addName = () => {
        this._view.querySelector('.place-card__name').textContent = this._name;
    }

    _remove = () => {
        this._view.remove();
    }

    _like = (event) => {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
}
