class FormValidator {
    constructor(form) {        
        this._formView = form.view; 
        this._button = form.submitButton;        
        this._errorMessages = {
            empty: 'Это обязательное поле',
            wrongLength: 'Должно быть от 2 до 30 символов',
            wrongUrl: 'Здесь должна быть ссылка',
            wrongPattern: 'Введите данные в верном формате'
        }       
    }

    _checkInputsValidity() {
        const [...inputs] = this._formView.elements;
        return inputs.every(this._isValidate);
    }

    _isValidate = (input) => {
        input.setCustomValidity("");

        if (input.validity.valueMissing) {
          input.setCustomValidity(this._errorMessages.empty);
          return false
        }

        if (input.validity.tooShort || input.validity.tooLong) {
          input.setCustomValidity(this._errorMessages.wrongLength);
          return false
        }

        if (input.validity.typeMismatch && input.type === 'url') {
          input.setCustomValidity(this._errorMessages.wrongUrl);
          return false
        }

        return input.checkValidity();
    }

    /*  !!! DONE !!!
        Можно лучше: Корректней будет назвать handleInput или inputHandler.
     */
    handleInput(event) {
        this._setErrorContent(event.target);
        this.setSubmitButtonState();
    }

    /*  !!! DONE !!!
        Можно лучше: Название метода подразумевает возврат boolean-значения, указывающего на валидность поля.
        Но и возвращаемого значения нет и не по коду это не требуется,
        так что уместней будет переименовать метод исходя из того, что он делает.
     */
    _setErrorContent(input) {
        this._isValidate(input);
        const errorElement = this._formView.querySelector(`#${input.name}-error`);
        errorElement.textContent = input.validationMessage;
    }

    setSubmitButtonState() {
        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */         
        if (this._checkInputsValidity()) {
            this._button.removeAttribute('disabled');
            this._button.classList.add('popup__button_is-active');
        }
        else {
            this._button.setAttribute('disabled', '');
            this._button.classList.remove('popup__button_is-active');
        }
    }
}
