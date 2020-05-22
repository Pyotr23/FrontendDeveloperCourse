class TextInput extends StringInput {
    constructor(name, placeholder, textContent) {
        super(name, placeholder, textContent);
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('minlength', '2');
        this.input.setAttribute('maxlength', '30');
    }
}