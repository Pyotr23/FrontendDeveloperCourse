class ImagePopup extends Popup {
    constructor(id, link) {              
        super(id);        
        this.link = link;                       
        this.fillContent();               
    }

    createImage() {
        const image = document.createElement('img');
        image.classList.add('popup__card-image');
        image.setAttribute('alt', '');
        image.setAttribute('src', this.link);
        return image;
    }

    fillContent() {         
        this.content.appendChild(this.createImage());
        this.content.classList.add('popup__content_card-image');   
    }
}