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
        this.popup.content.appendChild(this.popup.title);       
        this.popup.content.appendChild(this.popup.form);
    }
}