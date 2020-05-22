class FormDirector {
    getAddCardFormNode(name, url, buttonText) {        
        const builder = new AddCardFormBuilder();
        builder.withStringInputs(name, url);
        builder.withSubmitButton(buttonText);
        builder.render();
        return builder.form.container;        
    }

    getEditUserFormNode(userInfo, buttonText) {                
        const builder = new EditUserFormBuilder();
        builder.withStringInputs(userInfo);
        builder.withSubmitButton(buttonText);
        builder.render();
        return builder.form.container;        
    }
}