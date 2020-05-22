class EditUserFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {        
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(name, job) {        
        const stringInputs = [new TextInput('name', 'Название', name), new TextInput('link', 'Ссылка на картинку', url)];        
        this.form.stringInputs = stringInputs;
    }

    render() {
        this.form.render();
    }
}