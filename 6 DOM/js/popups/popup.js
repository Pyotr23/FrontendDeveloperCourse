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

    addImage(link) {
        this.content.appendChild(this.createImage(link));
        this.content.classList.add('popup__content_card-image');
    }

    createImage(link) {
        const image = document.createElement('img');
        image.classList.add('popup__card-image');
        image.setAttribute('alt', '');
        image.setAttribute('src', link);
        return image;
    }

    addTitle(title) {        
        this.content.appendChild(this.createTitle(title));
    }  

    createTitle(title) {
        const titleElement = document.createElement('h3');
        titleElement.classList.add('popup__title');
        titleElement.textContent = title;
        return titleElement;
    }

    createPopup() {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.classList.add('popup_is-opened');    
        popup.innerHTML = `<div class="popup__content">
                             <img src="./images/close.svg" alt="" class="popup__close">        
                           </div>`;
        return popup;
    }

    setCloseEventListener() {
        const closeButton = this.container.querySelector('.popup__close');
        closeButton.addEventListener('click', this.close.bind(this));
    }  
}