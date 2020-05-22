class FormValidator {
    static errorMessages = {
        empty: 'Это обязательное поле',
        wrongLength: 'Должно быть от 2 до 30 символов',
        wrongUrl: 'Здесь должна быть ссылка',
        wrongPattern: 'Введите данные в верном формате'
      }

    constructor(form) {
        this.form = form;
    }

    checkInputsValidity() {             
        const [...inputs] = this.form.elements;
        return inputs.every(isValidate);
    }

    isValidate = (input) => {
        input.setCustomValidity("");
      
        if (input.validity.valueMissing) {
          input.setCustomValidity(errorMessages.empty);
          return false
        }
      
        if (input.validity.tooShort || input.validity.tooLong) {
          input.setCustomValidity(errorMessages.wrongLength);
          return false
        }
      
        if (input.validity.typeMismatch && input.type === 'url') {
          input.setCustomValidity('Здесь должна быть ссылка');
          return false
        }
      
        return input.checkValidity();
      }
}