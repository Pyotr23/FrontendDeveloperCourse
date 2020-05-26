class FormPopupBuilder extends PopupBuilder {
    constructor(parentNode) {         
        super(parentNode);     
        this._popup = new FormPopup();        
    }

    withTitle(title) {
        this._popup.withTitle(title);
    }

    withForm(formContainer) {
        this._popup.withForm(formContainer);
    }

    setSubmitEventListener(action) {
        console.log(this._popup);
        this._popup.setSubmitEventListener(action);
    }

    setInputEventListener(action) {        
        this._popup.setInputEventListener(action);
    }

    renderForm() {
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        this._popup.content.appendChild(this._popup.title);
        this._popup.content.appendChild(this._popup.form);
    }
}
