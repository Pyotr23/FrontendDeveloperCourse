class Popup {
    constructor(id) {
        this.id = id;        
        const container = document.createElement('div');
        container.classList.add('popup');
        container.setAttribute('id', id);
        const popupContentHtml = `<div class="popup__content">
                                    <img src="./images/close.svg" alt="" class="popup__close">                              
                                  </div>`;
        container.innerHTML = popupContentHtml;
        this.container = container;
    }
        
    open() {
        this.classList.add('popup_is-opened');
    }

    close() {
        this.classList.remove('popup_is-opened');
    }
}