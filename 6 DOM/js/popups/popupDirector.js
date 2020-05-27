/*  !!! DONE !!!
    Можно лучше: В реализации класса ставится на то, что в один момент времени может отображаться только один попап,
    в следствие чего в this.popupBuilder заносится необходимый экземпляр класса Builder.
    Но если появится необходимость, например, открыть попап в попапе (такое бывает),
    то данная реализация уже не будет работать корректно.
 */
class PopupDirector {
    constructor(parentNode, appendCard) {
        this._parentNode = parentNode;
        this._appendCard = appendCard
    }

    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(this._parentNode);
        
        popupBuilder.withImage(link);
        popupBuilder.renderImage();
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(formValidator, cardList) {           
        const popupBuilder = new FormPopupBuilder(this._parentNode);              
        const stringInputs = [new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '')];
        const submitButtonText = '+';
        const form = new FormDirector().getForm(stringInputs, submitButtonText);        
        formValidator = new FormValidator(form);
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(form.view);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();        
        popupBuilder.setSubmitEventListener((event) => this._addCard(event, cardList, popupBuilder));
        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
		*/
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator.setSubmitButtonState();
    }

    _addCard = (event, cardList, popupBuilder) => {
        event.preventDefault();
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        const inputs = popupBuilder.popup.inputs;        
        const newCard = new Card(inputs[0].value, inputs[1].value);
        /*  !!! DONE !!!
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
        popupBuilder.popup.close();
    }

    // renderEditUserPopup(title, userInfo, buttonText) {
    renderEditUserPopup(formValidator, userInfo) {
        const popupBuilder = new FormPopupBuilder(this._parentNode);        
        const stringInputs = [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
        const submitButtonText = 'Сохранить';
        const form = new FormDirector().getForm(stringInputs, submitButtonText);        
        formValidator = new FormValidator(form);
        popupBuilder.withTitle('Редактировать профиль');
        popupBuilder.withForm(form.view);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener((event) => this._editUserInfo(event, userInfo, popupBuilder));
        /*  !!! DONE !!!
		   Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
		   то есть, мы уже не сможем использовать его в разрыве от этой переменной.
		   Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
		   либо использовать коллбэк-функцию, передавая обработку события наружу.
		*/
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));

        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator.setSubmitButtonState();
    }

    _editUserInfo(event, userInfo, popupBuilder) {
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        
        const inputs = popupBuilder.popup.inputs;         
        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        userInfo.set(inputs[0].value, inputs[1].value);
        userInfo.update();

        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        popupBuilder.popup.close();
    }
}
