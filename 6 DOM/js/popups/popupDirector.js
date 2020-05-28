class PopupDirector {
    constructor(parentNode, appendCard) {
        this._parentNode = parentNode;
        /*
            Можно лучше: Переменная нигде не используется и поэтому может быть удалена.
         */
        this._appendCard = appendCard
    }

    /*
        Можно лучше: Метод нигде не используется.
     */
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
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    /*
        Можно лучше: Вместо передачи cardList, который используется только для вызова у него метода addCard,
        можно передавать коллбэк, который вызывать вместо
        const newCard = new Card(inputs[0].value, inputs[1].value);
        cardList.addCard(newCard.create());
        и передавать туда имя и ссылку.
        А саму логику добавления карточки перенести в то место, где вызывается renderAddCardPopup.
        Таким образом, мы сделаем классы более независимыми.
     */
    _addCard = (event, cardList, popupBuilder) => {
        event.preventDefault();
        const inputs = popupBuilder.popup.inputs;
        const newCard = new Card(inputs[0].value, inputs[1].value);
        cardList.addCard(newCard.create());
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
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    /*
        Можно лучше: Аналогично _addCard логику обновления в UserInfo можно вынести в коллбэк.
     */
    _editUserInfo(event, userInfo, popupBuilder) {
        const inputs = popupBuilder.popup.inputs;
        userInfo.set(inputs[0].value, inputs[1].value);
        userInfo.update();
        popupBuilder.popup.close();
    }
}
