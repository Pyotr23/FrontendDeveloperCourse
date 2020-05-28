'use strict'
class Popup {
    constructor() {        
        this._innerHtml =  `<div class="popup__content">
                                <img src="./images/close.svg" alt="" class="popup__close">
                            </div>`;
        this._container = this._createPopup();
        this._content = this._container.querySelector('.popup__content');
        this._setCloseEventListener();
    }

    get container() {
        return this._container;
    }

    get content() {
        return this._content;
    }

    get title() {
        return this._title;
    }

    withTitle(titleName) {
        this._title = this._createTitle(titleName);
    }

    close = () => {
        this._container.parentNode.removeChild(this._container);
    }

    _createTitle(titleName) {
        const titleElement = this._createElement('h3', 'popup__title');
        titleElement.textContent = titleName;
        return titleElement;
    }

    _createPopup() {
        const popup = this._createElement('div', 'popup');
        popup.classList.add('popup_is-opened');
        /*  !!! DONE !!!
		   Можно лучше: Большие строковые переменные лучше выносить из методов,
		   так они не будут создаваться каждый раз новые.
		   Можно вынести в конструктор аналогично this._errorMessages в FormValidator.
		 */        
        popup.insertAdjacentHTML('afterbegin', this._innerHtml);
        return popup;
    }

    _createElement(htmlTag, className) {
        const element = document.createElement(htmlTag);
        element.classList.add(className);
        return element;
    }

    _setCloseEventListener() {
        const closeButton = this._container.querySelector('.popup__close');
        closeButton.addEventListener('click', this.close);
    }
}
