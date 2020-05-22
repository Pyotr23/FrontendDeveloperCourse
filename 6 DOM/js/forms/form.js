class Form {
    constructor() {
        this.container = this.createForm();
    }

    createForm() {
        const form = document.createElement('form');
        form.classList.add('popup__form');
        form.setAttribute('novalidate', '');
        return form;
    }

    withSubmitButton(buttonText) {
        const button = this.createButton();
        button.textContent = buttonText;
        this.submitButton = button;
    }

    createButton() {
        const button = document.createElement('button');
        button.classList.add('button');
        button.classList.add('popup__button');
        button.setAttribute('type', 'submit');
        button.setAttribute('disabled', '');
        return button;
    }   

    withStringInputs(stringInputs) {
        this.stringInputs = stringInputs;        
    }   
    
    render() {        
        this.stringInputs.forEach(si => {
            this.container.appendChild(si.input);
            this.container.appendChild(si.error);
        })
        this.container.appendChild(this.submitButton);
    }
}