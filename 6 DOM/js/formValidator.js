class FormValidator {
    constructor(form) {
        this._form = form; 
        this._errorMessages = {
            empty: 'Это обязательное поле',
            wrongLength: 'Должно быть от 2 до 30 символов',
            wrongUrl: 'Здесь должна быть ссылка',
            wrongPattern: 'Введите данные в верном формате'
        }       
    }

    checkInputsValidity() {
        const [...inputs] = this._form.elements;
        return inputs.every(this.isValidate);
    }

    isValidate = (input) => {
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

    /*
        Можно лучше: Корректней будет назвать handleInput или inputHandler.
     */
    handleInput(event) {
        this.isFieldValid(event.target);
        this.setSubmitButtonState();
    }

    /*
        Можно лучше: Название метода подразумевает возврат boolean-значения, указывающего на валидность поля.
        Но и возвращаемого значения нет и не по коду это не требуется,
        так что уместней будет переименовать метод исходя из того, что он делает.
     */
    isFieldValid(input) {
        this.isValidate(input);
        const errorElement = this._form.querySelector(`#${input.name}-error`);
        errorElement.textContent = input.validationMessage;
    }

    setSubmitButtonState() {
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
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
