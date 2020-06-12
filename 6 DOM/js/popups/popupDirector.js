'use strict'
class PopupDirector {
    renderImagePopup(link, popupBuilder) {        
        popupBuilder.withImage(link);
        popupBuilder.renderPopup();
    }

    renderInfoPopup(dto, popupBuilder) { 
        popupBuilder.withTitle(dto.name); 
        popupBuilder.withInfoRows([ new InfoRow('Дата публикации', this._getDateTime(new Date(dto.createdAt))), 
            new InfoRow('Лайков', dto.likes.length)]);  
        popupBuilder.withTitle('Об авторе');   
        popupBuilder.withBadge(dto.owner.name, dto.owner.avatar);
        popupBuilder.withInfoRows([ new InfoRow('Профессия', dto.owner.about)]);        
        popupBuilder.renderPopup();
    }

    _getDateTime(date) {
        const hours = this._getTwoSymbolsValue(date.getHours());
        const minutes = this._getTwoSymbolsValue(date.getMinutes());
        const day = this._getTwoSymbolsValue(date.getDate());
        const month = this._getTwoSymbolsValue(parseInt(date.getMonth(), 10) + 1);
        const year = date.getFullYear();
        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    _getTwoSymbolsValue(value) {        
        return value.toString().length === 1 
            ? 0 + value.toString()
            : value;
    }

    renderAddCardPopup(addCard, formContainer, popupBuilder, formValidator) {        
        popupBuilder.withTitle('Новое место');
        popupBuilder.withForm(formContainer);        
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