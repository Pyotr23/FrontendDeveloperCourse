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
}
