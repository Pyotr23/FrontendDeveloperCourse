'use strict'
class PopupDirector {
    constructor(parentNode) {
        this._parentNode = parentNode;
        /*  !!! DONE !!!
            Можно лучше: Переменная нигде не используется и поэтому может быть удалена.
         */        
    }

    /*
        !!! DONE !!!
        Можно лучше: Метод нигде не используется.
     */
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(this._parentNode);

        popupBuilder.withImage(link);
        popupBuilder.renderImage();
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(addCard) {
        const popupBuilder = new FormPopupBuilder(this._parentNode);
        const stringInputs = [new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '')];
        const submitButtonText = '+';
        const form = new FormDirector().getForm(stringInputs, submitButtonText);
        const formValidator = new FormValidator(form);
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(form.view);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener((event) => this._addCard(event, addCard, popupBuilder));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    /*  !!! DONE !!!
        Можно лучше: Вместо передачи cardList, который используется только для вызова у него метода addCard,
        можно передавать коллбэк, который вызывать вместо
        const newCard = new Card(inputs[0].value, inputs[1].value);
        cardList.addCard(newCard.create());
        и передавать туда имя и ссылку.
        А саму логику добавления карточки перенести в то место, где вызывается renderAddCardPopup.
        Таким образом, мы сделаем классы более независимыми.
     */
    _addCard = (event, addCard, popupBuilder) => {
        event.preventDefault();
        const inputs = popupBuilder.popup.inputs;
        addCard(inputs[0].value, inputs[1].value);        
        popupBuilder.popup.close();
    }

    renderEditUserPopup(stringInputs, changeUserInfo) {
        const popupBuilder = new FormPopupBuilder(this._parentNode);        
        const submitButtonText = 'Сохранить';
        const form = new FormDirector().getForm(stringInputs, submitButtonText);
        const formValidator = new FormValidator(form);
        popupBuilder.withTitle('Редактировать профиль');
        popupBuilder.withForm(form.view);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener((event) => this._editUserInfo(event, changeUserInfo, popupBuilder));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    /*  !!! DONE !!!
        Можно лучше: Аналогично _addCard логику обновления в UserInfo можно вынести в коллбэк.
     */
    _editUserInfo(event, changeUserInfo, popupBuilder) {
        const inputs = popupBuilder.popup.inputs;
        changeUserInfo(inputs[0].value, inputs[1].value);        
        popupBuilder.popup.close();
    }
}
