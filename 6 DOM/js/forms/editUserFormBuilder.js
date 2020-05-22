class EditUserFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {        
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(userInfo) {                
        const stringInputs = 
            [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];        
        this.form.stringInputs = stringInputs;
    }

    render() {
        this.form.render();
    }
}