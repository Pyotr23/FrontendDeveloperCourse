class FormPopupBuilder extends PopupBuilder {
    withTitle(title) {
        this.popup.withTitle(title);
    }

    withForm(formContainer) {        
        this.popup.withForm(formContainer);
    }

    renderForm() { 
        this.popup.content.appendChild(this.popup.title);       
        this.popup.content.appendChild(this.popup.form);
    }
}