class AddCardFormBuilder extends FormBuilder {
    addSubmitButton(buttonText) {        
        this.form.addSubmitButton(buttonText);
    }

    addTextInputWithErrorSpan(textInput) {
        this.form.addTextInputWithErrorSpan(textInput);
    }

    addUrlInputWithErrorSpan(urlInput) {
        this.form.addUrlInputWithErrorSpan(urlInput);
    }
}