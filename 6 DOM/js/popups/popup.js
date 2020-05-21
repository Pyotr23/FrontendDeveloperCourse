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
        const image = this.createElement('img', 'popup__card-image');        
        image.setAttribute('alt', '');
        image.setAttribute('src', link);
        return image;
    }

    addTitle(title) {        
        this.content.appendChild(this.createTitle(title));
    }  

    createTitle(title) {
        const titleElement = this.createElement('h3', 'popup__title');        
        titleElement.textContent = title;
        return titleElement;
    }

    addCardForm(textInput, urlInput, buttonText) {        
       const form = new FormDirector().getAddCardFormNode(textInput, urlInput, buttonText);
       this.content.appendChild(form);
    }   

    createPopup() {
        const popup = this.createElement('div', 'popup');        
        popup.classList.add('popup_is-opened');    
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
}