/*
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
        this._cardList = cardList;      
        const popupBuilder = new FormPopupBuilder(this._parentNode); 
        this._popupBuilder = popupBuilder;       
        const stringInputs = [new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '')];
        const submitButtonText = '+';
        const formContainer = new FormDirector().getAddCardFormNode(stringInputs, submitButtonText);
        const submitButton = formContainer.querySelector('.popup__button');
        formValidator = new FormValidator(formContainer, submitButton);
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();        
        popupBuilder.setSubmitEventListener(this._addCard);
        /*
		   Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
		   то есть, мы уже не сможем использовать его в разрыве от этой переменной.
		   Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
		   либо использовать коллбэк-функцию, передавая обработку события наружу.
		*/
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        /*
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        formValidator.setSubmitButtonState();
    }

    _addCard = (event) => {
        event.preventDefault();
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        const inputs = this._popupBuilder.popup.inputs;        
        const newCard = new Card(inputs[0].value, inputs[1].value);
        /*  !!! DONE !!!
            Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
            то есть, мы уже не сможем использовать его в разрыве от этой переменной.
            Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
            либо использовать коллбэк-функцию, передавая обработку события наружу.
         */
        this._cardList.addCard(newCard.create());
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        this._popupBuilder.popup.close();
    }

    renderEditUserPopup(title, userInfo, buttonText) {
        const popupBuilder = new FormPopupBuilder(this._parentNode);
        this._popupBuilder = popupBuilder;
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
        const newName = this._popupBuilder.popup.form.elements.name.value;
        const newJob = this._popupBuilder.popup.form.elements.job.value;
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
        this._popupBuilder.popup.close();
    }
}
