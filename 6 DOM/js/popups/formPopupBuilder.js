class FormPopupBuilder extends PopupBuilder {
    addTitle(title) {
        this.popup.addTitle(title);
    }

    addCardForm(textInput, urlInput, buttonText) {        
        this.popup.addCardForm(textInput, urlInput, buttonText);
    }
}