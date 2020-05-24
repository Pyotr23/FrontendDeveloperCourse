class FormDirector {
    getAddCardFormNode(name, url, buttonText) {
        const builder = new AddCardFormBuilder();
        builder.withStringInputs(name, url);
        builder.withSubmitButton(buttonText);
        builder.render();
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        return builder.form.container;
    }

    getEditUserFormNode(userInfo, buttonText) {
        const builder = new EditUserFormBuilder();
        builder.withStringInputs(userInfo);
        builder.withSubmitButton(buttonText);
        builder.render();
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        return builder.form.container;
    }
}
