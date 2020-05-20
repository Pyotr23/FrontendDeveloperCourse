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

    addTitle(title) {
        const titleElement = document.createElement
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