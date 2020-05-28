'use strict'
class FormBuilder {
    constructor() {
        this._form = new Form();
    }

    withSubmitButton(buttonText) {
        this._form.withSubmitButton(buttonText);
    }

    withStringInputs(stringInputs) {
        this._form.stringInputs = stringInputs;
    }

    render() {
        this._form.render();
    }

    get form() {
        return this._form;
    }
}
