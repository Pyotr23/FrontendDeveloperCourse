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

    withImage(link) {
        this.image = this.createImage(link); 
        this.content.classList.add('popup__content_card-image');      
    }

    createImage(link) {
        const image = this.createElement('img', 'popup__card-image');        
        image.setAttribute('alt', '');
        image.setAttribute('src', link);        
        return image;
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
    
    setSubmitEventlistener(action) {
        this.form.addEventListener('submit', action);
    }

    setInputEventListener(action) {
        this.form.addEventListener('input', action);
    }
}