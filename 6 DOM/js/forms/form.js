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

    addSubmitButton(buttonText) {
        const button = this.createButton();
        button.textContent = buttonText;
        this.container.appendChild(button);
    }

    createButton() {
        const button = document.createElement('button');
        button.classList.add('button');
        button.classList.add('popup__button');
        button.setAttribute('type', 'submit');
        button.setAttribute('disabled', '');
        return button;
    }   

    addTextInputWithErrorSpan(textInput) {
        const input = this.createTextInput();
        input.setAttribute('name', textInput.name);
        input.setAttribute('placeholder', textInput.placeholder);        
        this.container.appendChild(input);
        const error = this.createErrorSpan();
        error.setAttribute('id', `${textInput.name}-error`);
        this.container.appendChild(error);
    } 
    
    createTextInput() {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('popup__input');
        input.setAttribute('required', '');
        input.setAttribute('minlength', '2');
        input.setAttribute('maxlength', '30');
        return input;      
    }    

    addUrlInputWithErrorSpan(urlInput) {
        debugger;
        const input = this.createUrlInput();
        input.setAttribute('name', urlInput.name);
        input.setAttribute('placeholder', urlInput.placeholder);        
        this.container.appendChild(input);
        const error = this.createErrorSpan();
        error.setAttribute('id', `${urlInput.name}-error`);
        this.container.appendChild(error);
    } 
    
    createUrlInput() {
        const input = document.createElement('input');
        input.setAttribute('type', 'url');
        input.classList.add('popup__input');
        input.setAttribute('required', '');       
        return input;      
    }

    createErrorSpan() {
        const span = document.createElement('error');
        span.classList.add('error');
        return span;
    }
}