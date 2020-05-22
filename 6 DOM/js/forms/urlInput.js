class UrlInput extends StringInput {
    constructor(name, placeholder, textContent) {
        super(name, placeholder, textContent);
        this.input.setAttribute('type', 'url');
    }
}