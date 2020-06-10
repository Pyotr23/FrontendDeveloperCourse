'use strict'
class FormPopupBuilder extends PopupBuilder {    
    withTitle(title) {
        this._popup.withTitle(title);
    }

    withForm(formContainer) {
        this._popup.withForm(formContainer);
    }

    setSubmitEventListener(action) {
        this._popup.setSubmitEventListener(action);
    }

    setInputEventListener(action) {
        this._popup.setInputEventListener(action);
    }

    renderForm() {
        this._popup.content.appendChild(this._popup.title);
        this._popup.content.appendChild(this._popup.form);
    }
}
