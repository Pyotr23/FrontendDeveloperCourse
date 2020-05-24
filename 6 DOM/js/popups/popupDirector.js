/*
    Можно лучше: В реализации класса ставится на то, что в один момент времени может отображаться только один попап,
    в следствие чего в this.popupBuilder заносится необходимый экземпляр класса Builder.
    Но если появится необходимость, например, открыть попап в попапе (такое бывает),
    то данная реализация уже не будет работать корректно.
 */
class PopupDirector {
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder();
        this.popupBuilder = popupBuilder;

        popupBuilder.withImage(link);
        popupBuilder.renderImage();
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(title, name, link, buttonText) {
        const popupBuilder = new FormPopupBuilder();
        this.popupBuilder = popupBuilder;
        const formContainer = new FormDirector().getAddCardFormNode(name, link, buttonText);

        popupBuilder.withTitle(title);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener(this.addCard.bind(this));
        /*
		   Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
		   то есть, мы уже не сможем использовать его в разрыве от этой переменной.
		   Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
		   либо использовать коллбэк-функцию, передавая обработку события наружу.
		*/
        popupBuilder.setInputEventListener(formValidator.handlerInput.bind(formValidator));

        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator.setSubmitButtonState();
    }

    addCard(event) {
        event.preventDefault();
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        const name = this.popupBuilder.popup.form.elements.name.value;
        const link = this.popupBuilder.popup.form.elements.link.value;
        const newCard = new Card(name, link);
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        cardList.addCard(newCard.create());
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        this.popupBuilder.popup.close();
    }

    renderEditUserPopup(title, userInfo, buttonText) {
        const popupBuilder = new FormPopupBuilder();
        this.popupBuilder = popupBuilder;
        const formContainer = new FormDirector().getEditUserFormNode(userInfo, buttonText);

        popupBuilder.withTitle(title);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener(this.editUserInfo.bind(this));
        /*
		   Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
		   то есть, мы уже не сможем использовать его в разрыве от этой переменной.
		   Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
		   либо использовать коллбэк-функцию, передавая обработку события наружу.
		*/
        popupBuilder.setInputEventListener(formValidator.handlerInput.bind(formValidator));

        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator.setSubmitButtonState();
    }

    editUserInfo() {
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        const newName = this.popupBuilder.popup.form.elements.name.value;
        const newJob = this.popupBuilder.popup.form.elements.job.value;
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        userInfo.set(newName, newJob);
        userInfo.update();

        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        this.popupBuilder.popup.close();
    }
}
