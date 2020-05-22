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
        popupBuilder.withTitle(title); 
        const formContainer = new FormDirector().getAddCardFormNode(name, link, buttonText);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup(); 
        popupBuilder.setSubmitEventListener(this.addCard);
        formValidator = new FormValidator(popupBuilder.popup.form);
        popupBuilder.setInputEventListener(formValidator.handlerInput.bind(formValidator));
        formValidator.setSubmitButtonState();
    }

    addCard(event) {
        event.preventDefault();        
        const name = this.popupBuilder.popup.form.elements.name.value;
        const link = this.popupBuilder.popup.form.elements.link.value;
        const newCard = new Card(name, link);  
        cardList.addCard(newCard.create());
        this.popupBuilder.popup.close();
    }

    renderEditUserPopup(title, userInfo, buttonText) {
        const popupBuilder = new FormPopupBuilder();
        this.popupBuilder = popupBuilder; 
        popupBuilder.withTitle(title); 
        const formContainer = new FormDirector().getEditUserFormNode(userInfo, buttonText);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup(); 
        popupBuilder.setSubmitEventListener(this.editUserInfo);
        formValidator = new FormValidator(popupBuilder.popup.form);
        popupBuilder.setInputEventListener(formValidator.handlerInput.bind(formValidator));
        formValidator.setSubmitButtonState();
    }  
    
    editUserInfo() {   
        debugger;     
        const newName = this.elements.name.value;
        const newJob = this.elements.job.value;
        userInfo.set(newName, newJob);
        userInfo.update();        
    }
}