class FormDirector {
    getAddCardFormNode(textInput, urlInput, buttonText) {
        const builder = new AddCardFormBuilder();
        builder.addTextInputWithErrorSpan(textInput);
        builder.addUrlInputWithErrorSpan(urlInput);
        builder.addSubmitButton(buttonText);
        return builder.form.container;
    }
}