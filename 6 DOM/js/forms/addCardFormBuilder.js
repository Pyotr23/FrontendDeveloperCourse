class AddCardFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {        
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(userInfo) {        
        const stringInputs = 
            [new TextInput('name', 'Название', userInfo.name), new UrlInput('link', 'Ссылка на картинку', userInfo.job)];        
        this.form.stringInputs = stringInputs;
    }

    render() {
        this.form.render();
    }
}