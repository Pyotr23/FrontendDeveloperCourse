'use strict'
class FormPopupBuilder extends PopupBuilder {   
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
