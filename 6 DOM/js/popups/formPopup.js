class FormPopup extends Popup {
    constructor(id, title) {
        debugger;
        super(id);
        this.title = title;        
        this.fillContent();
    }

    fillContent() {        
        this.content.appendChild(this.createTitle());
    }

    createTitle() {
        const title = document.createElement('h3');
        title.classList.add('popup__title');
        title.textContent = this.title;
        return title;
    }
}