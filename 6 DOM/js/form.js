class Form {
    constructor() {
        this.container = this.createForm();
    }

    createForm() {
        const form = document.createElement('form');
        form.classList.add('popup__form');
        form.setAttribute('novalidate', 'true');
        return form;
    }
}