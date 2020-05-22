class FormValidator {
    constructor(form) {
        this.form = form;
        this.errorMessages = {
            empty: 'Это обязательное поле',
            wrongLength: 'Должно быть от 2 до 30 символов',
            wrongUrl: 'Здесь должна быть ссылка',
            wrongPattern: 'Введите данные в верном формате'
        } 
    }

    checkInputsValidity() {             
        const [...inputs] = this.form.elements;
        return inputs.every(this.isValidate);
    }

    isValidate = (input) => {
        input.setCustomValidity("");
      
        if (input.validity.valueMissing) {
          input.setCustomValidity(this.errorMessages.empty);
          return false
        }
      
        if (input.validity.tooShort || input.validity.tooLong) {
          input.setCustomValidity(this.errorMessages.wrongLength);
          return false
        }
      
        if (input.validity.typeMismatch && input.type === 'url') {
          input.setCustomValidity(this.errorMessages.wrongUrl);
          return false
        }
      
        return input.checkValidity();
    }

    handlerInput(event) {        
        this.isFieldValid(event.target);
        this.setSubmitButtonState();    
    }

    isFieldValid(input) {        
        this.isValidate(input);
        const errorElement = this.form.querySelector(`#${input.name}-error`);
        errorElement.textContent = input.validationMessage;                
    }

    setSubmitButtonState() {
        const button = popupDirector.popupBuilder.popup.form.querySelector('.button');
        if (this.checkInputsValidity()) {
            button.removeAttribute('disabled');
            button.classList.add('popup__button_is-active');
        }
        else {
            button.setAttribute('disabled', '');
            button.classList.remove('popup__button_is-active');
        }
    }
}