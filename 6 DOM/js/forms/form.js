class Form {
    constructor() {
        this.container = this._createForm();
    }

    _createForm() {
        const form = document.createElement('form');
        form.classList.add('popup__form');
        form.setAttribute('novalidate', '');
        return form;
    }

    withSubmitButton(buttonText) {
        const button = this._createButton();
        button.textContent = buttonText;
        this.submitButton = button;
    }

    _createButton() {
        const button = document.createElement('button');
        button.classList.add('button');
        button.classList.add('popup__button');
        button.setAttribute('type', 'submit');
        button.setAttribute('disabled', '');
        return button;
    }

    withStringInputs(stringInputs) {
        this._stringInputs = stringInputs;
    }

    get stringInputs() {
        return this._stringInputs;
    }

    set stringInputs(inputs) {
        this._stringInputs = inputs;
    }

    render() {
        this._stringInputs.forEach(si => {
            /*  !!! DONE !!!
                Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
                Вместо этого можно реализовать отдельные геттеры и сеттеры:
                https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
             */
            this.container.appendChild(si.input);
            /*  !!! DONE !!!
                Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
                Вместо этого можно реализовать отдельные геттеры и сеттеры:
                https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
             */
            this.container.appendChild(si.error);
        })
        this.container.appendChild(this.submitButton);
    }
}
