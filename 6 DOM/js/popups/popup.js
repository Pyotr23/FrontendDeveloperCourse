class Popup {
    constructor(id) {        
        this.id = id;  
        const emptyPopup = document.querySelector('.popup');
        this.emptyPopup = emptyPopup.cloneNode(true);         
        this.container = emptyPopup;                           
    }

    open() {           
        this.container.classList.add('popup_is-opened');         
        this.setCloseEventListener();             
    }

    close() {        
        const parentNode = this.container.parentNode;
        parentNode.removeChild(this.container);    
        parentNode.appendChild(this.emptyPopup);            
    }   

    setCloseEventListener() {
        const closeButton = this.container.querySelector('.popup__close');
        closeButton.addEventListener('click', this.close.bind(this));
    }    
}