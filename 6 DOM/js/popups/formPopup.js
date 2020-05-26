class FormPopup extends Popup {
    withForm(formContainer) {
        this._form = formContainer;
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator = new FormValidator(formContainer);
    }

    get form() {
        return this._form;
    }

    get inputs() {
        const [...inputs] = this._form.elements;
        return inputs;
    }
    
    /*  !!! DONE !!!
        Можно лучше: Опечатка в названии, listener с маленькой буквы.
     */
    setSubmitEventListener(action) {
        this._form.addEventListener('submit', action);
    }

    setInputEventListener(action) {
        this._form.addEventListener('input', action);
    }
}