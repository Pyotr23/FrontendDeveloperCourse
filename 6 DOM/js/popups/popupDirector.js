'use strict'
class PopupDirector {
    renderImagePopup(link, popupBuilder) {        
        popupBuilder.withImage(link);
        popupBuilder.renderImage();
        popupBuilder.renderPopup();
    }

    renderInfoPopup(dto, popupBuilder) {        
        popupBuilder.withBadge(dto.owner.name, dto.owner.avatar);
        popupBuilder.renderBadge();
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(addCard, formContainer, popupBuilder, formValidator) {        
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();         
        popupBuilder.setSubmitEventListener((event) => this._addCard(event, addCard, popupBuilder));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    _addCard = (event, addCard, popupBuilder) => {
        event.preventDefault();
        const [...inputs] = popupBuilder.popup.inputs;             
        event.submitter.textContent = 'Загрузка...';
        event.submitter.setAttribute('disable', 'true');  
        const name = inputs.find(input => input.name === 'name').value; 
        const link = inputs.find(input => input.name === 'link').value;
        addCard(name, link, () => popupBuilder.popup.close());              
    }

    renderEditUserPopup(userInfo, formContainer, popupBuilder, formValidator) {            
        popupBuilder.withTitle('Редактировать профиль');
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup();        
        popupBuilder.setSubmitEventListener((event) => this._editUserInfo(event, userInfo.update.bind(userInfo), popupBuilder));
        popupBuilder.setInputEventListener((event) => formValidator.handleInput(event));
        formValidator.setSubmitButtonState();
    }

    _editUserInfo(event, changeUserInfo, popupBuilder) {
        event.preventDefault();        
        const [...inputs] = popupBuilder.popup.inputs;
        event.submitter.textContent = 'Загрузка...';
        event.submitter.setAttribute('disable', 'true');
        const name = inputs.find(input => input.name === 'name').value; 
        const about = inputs.find(input => input.name === 'about').value;   
        const avatar = inputs.find(input => input.name === 'avatar').value; 
        changeUserInfo({ 
            name: name, 
            about: about,
            avatar: avatar
        }, () => popupBuilder.popup.close());                       
    }
}