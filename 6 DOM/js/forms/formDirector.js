'use strict'
class FormDirector {
    getForm(stringInputs, buttonText) {
        const builder = new FormBuilder();
        builder.withStringInputs(stringInputs);
        builder.withSubmitButton(buttonText);
        builder.render();
        return builder.form;
    }
}
