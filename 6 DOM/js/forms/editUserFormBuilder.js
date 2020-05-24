class EditUserFormBuilder extends FormBuilder {
    withSubmitButton(buttonText) {
        this.form.withSubmitButton(buttonText);
    }

    withStringInputs(userInfo) {
        const stringInputs =
            [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
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
