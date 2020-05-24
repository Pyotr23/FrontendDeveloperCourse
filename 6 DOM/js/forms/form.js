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
            /*
                Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
                Вместо этого можно реализовать отдельные геттеры и сеттеры:
                https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
             */
            this.container.appendChild(si.input);
            /*
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
