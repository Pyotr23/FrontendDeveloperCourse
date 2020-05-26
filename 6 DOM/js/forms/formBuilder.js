class FormBuilder {
    constructor() {
        this._form = new Form();
    }

    get view() {
        return this._form.container;
    }
}