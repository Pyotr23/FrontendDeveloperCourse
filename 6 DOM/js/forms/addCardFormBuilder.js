class AddCardFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {        
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(name, url) {        
        const stringInputs = [new TextInput('name', 'Название', name), new UrlInput('link', 'Ссылка на картинку', url)];        
        this.form.stringInputs = stringInputs;
    }

    render() {
        this.form.render();
    }
}