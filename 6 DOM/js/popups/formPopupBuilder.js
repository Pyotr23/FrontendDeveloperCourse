class FormPopupBuilder extends PopupBuilder {
    withTitle(title) {
        this.popup.withTitle(title);
    }

    withForm(formContainer) {
        this.popup.withForm(formContainer);
    }

    setSubmitEventListener(action) {
        this.popup.setSubmitEventlistener(action);
    }

    setInputEventListener(action) {
        this.popup.setInputEventListener(action);
    }

    renderForm() {
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        this.popup.content.appendChild(this.popup.title);
        this.popup.content.appendChild(this.popup.form);
    }
}
