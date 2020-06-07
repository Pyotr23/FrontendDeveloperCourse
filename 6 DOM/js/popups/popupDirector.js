'use strict'
class PopupDirector {
    constructor(parentNode) {
        this._parentNode = parentNode;
    }

    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(this._parentNode);

        popupBuilder.withImage(link);
        popupBuilder.renderImage();
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(stringInputs, addCard) {
        const popupBuilder = new FormPopupBuilder(this._parentNode);        
        const submitButtonText = '+';
        const form = new FormDirector().getForm(stringInputs, submitButtonText);
        const formValidator = new FormValidator(form);
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(form.view);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();
        popupBuilder.setSubmitEventListener((event) => this._addCard(event, addCard, popupBuilder, form.submitButton));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    _addCard = (event, addCard, popupBuilder, submitButton) => {
        event.preventDefault();
        const inputs = popupBuilder.popup.inputs;        
        submitButton.textContent = 'Загрузка...';
        submitButton.setAttribute('disable', 'true');
        const closePopup = () => popupBuilder.popup.close();
        addCard(inputs[0].value, inputs[1].value, closePopup);              
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
        popupBuilder.setSubmitEventListener((event) => this._editUserInfo(event, changeUserInfo, popupBuilder, form.submitButton));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    _editUserInfo(event, changeUserInfo, popupBuilder, submitButton) {
        event.preventDefault();
        const inputs = popupBuilder.popup.inputs;
        submitButton.textContent = 'Загрузка...';
        submitButton.setAttribute('disable', 'true');
        const closePopup = () => popupBuilder.popup.close();        
        changeUserInfo({ 
            name: inputs[0].value, 
            about: inputs[1].value,
            avatar: inputs[2].value 
        }, closePopup);                       
    }
}