'use strict'
class Popup {
    constructor() {
        this._template =   `<div class="popup popup_is-opened">
                                <div class="popup__content">
                                    <img src="./images/close.svg" alt="" class="popup__close">
                                </div>
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
        this._content.appendChild(this._title);
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
        const element = document.createElement('div');        
        element.insertAdjacentHTML('afterbegin', this._template.trim());
        return element.firstChild;
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
