class StringInput {
    constructor(name, placeholder, value) {
        this.name = name;
        this.placeholder = placeholder;
        this.value = value;
        this.input = this.createInput();
        this.error = this.createError();          
    }

    createInput() {
        const input = document.createElement('input');        
        input.classList.add('popup__input');
        input.setAttribute('required', '');
        input.setAttribute('name', this.name);
        input.setAttribute('placeholder', this.placeholder); 
        input.value = this.value;         
        return input;         
    }

    createError() {  
        const error = document.createElement('error');
        error.classList.add('error');
        error.setAttribute('id', `${this.name}-error`);         
        return error;  
    }
}