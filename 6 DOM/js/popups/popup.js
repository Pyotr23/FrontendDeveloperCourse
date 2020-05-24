/*
    Можно лучше: В данный момент класс Popup представляет собой смесь helper'ов на все случаи жизни.
    Тут находится и логика добавления разметки для форм, и для просмотра изображения, и общая.
    Можно оставить в данном классе только общую логику, а специфичную вынести в отдельные классы, наследуемые от Popup.
 */
class Popup {
    constructor() {
        this.container = this.createPopup();
        this.content = this.container.querySelector('.popup__content');
        this.setCloseEventListener();
    }

    open() {
        this.container.classList.add('popup_is-opened');
    }

    close() {
        this.container.parentNode.removeChild(this.container);
    }    

    withTitle(titleName) {
        this.title = this.createTitle(titleName);
    }

    createTitle(titleName) {
        const titleElement = this.createElement('h3', 'popup__title');
        titleElement.textContent = titleName;
        return titleElement;
    }

    withForm(formContainer) {
        this.form = formContainer;
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator = new FormValidator(formContainer);
    }

    createPopup() {
        const popup = this.createElement('div', 'popup');
        popup.classList.add('popup_is-opened');
        /*
            Можно лучше: Эффективней использовать insertAdjacentHTML,
            так как он не перезаписывает все содержимое целиком и поэтому работает быстрее.
            https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
         */
        popup.innerHTML = `<div class="popup__content">
                             <img src="./images/close.svg" alt="" class="popup__close">        
                           </div>`;
        return popup;
    }

    createElement(htmlTag, className) {
        const element = document.createElement(htmlTag);
        element.classList.add(className);
        return element;
    }

    setCloseEventListener() {
        const closeButton = this.container.querySelector('.popup__close');
        closeButton.addEventListener('click', this.close.bind(this));
    }

    /*
        Можно лучше: Опечатка в названии, listener с маленькой буквы.
     */
    setSubmitEventlistener(action) {
        this.form.addEventListener('submit', action);
    }

    setInputEventListener(action) {
        this.form.addEventListener('input', action);
    }
}
