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

    renderBagePopup(name, photo) {
        const popupBuilder = new InfoPopupBuilder(this._parentNode);
        popupBuilder.withBadge(name, photo);
        popupBuilder.renderBadge();
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
        popupBuilder.setSubmitEventListener((event) => this._addCard(event, addCard, popupBuilder));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    _addCard = (event, addCard, popupBuilder) => {
        event.preventDefault();
        const inputs = popupBuilder.popup.inputs;                
        event.submitter.textContent = 'Загрузка...';
        event.submitter.setAttribute('disable', 'true');        
        addCard(inputs[0].value, inputs[1].value, () => popupBuilder.popup.close());              
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

    _editUserInfo(event, changeUserInfo, popupBuilder) {
        event.preventDefault();        
        const inputs = popupBuilder.popup.inputs;
        event.submitter.textContent = 'Загрузка...';
        event.submitter.setAttribute('disable', 'true');               
        changeUserInfo({ 
            name: inputs[0].value, 
            about: inputs[1].value,
            avatar: inputs[2].value 
        }, () => popupBuilder.popup.close());                       
    }
}