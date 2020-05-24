class AddCardFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(name, link) {
        const stringInputs =
            [new TextInput('name', 'Название', name), new UrlInput('link', 'Ссылка на картинку', link)];
        /*
          Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
          Вместо этого можно реализовать отдельные геттеры и сеттеры:
          https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
        */
        this.form.stringInputs = stringInputs;
    }

    render() {
        this.form.render();
    }
}
