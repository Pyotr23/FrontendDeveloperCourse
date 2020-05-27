/*  !!! DONE !!!
    Можно лучше: В данный момент класс Popup представляет собой смесь helper'ов на все случаи жизни.
    Тут находится и логика добавления разметки для форм, и для просмотра изображения, и общая.
    Можно оставить в данном классе только общую логику, а специфичную вынести в отдельные классы, наследуемые от Popup.
 */
class Popup {
    constructor() {
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
            Можно лучше: Эффективней использовать insertAdjacentHTML,
            так как он не перезаписывает все содержимое целиком и поэтому работает быстрее.
            https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
         */
        const innerHtml =  `<div class="popup__content">
                                <img src="./images/close.svg" alt="" class="popup__close">
                            </div>`;
        popup.insertAdjacentHTML('afterbegin', innerHtml);
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
