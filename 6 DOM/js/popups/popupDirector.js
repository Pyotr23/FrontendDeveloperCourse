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
        const formContainer = new FormDirector().getEditUserFormNode(userInfo, buttonText);

        popupBuilder.withTitle(title);         
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup(); 
        popupBuilder.setSubmitEventListener(this.editUserInfo.bind(this));
        popupBuilder.setInputEventListener(formValidator.handlerInput.bind(formValidator));

        formValidator.setSubmitButtonState();        
    }  
    
    editUserInfo() {           
        const newName = this.popupBuilder.popup.form.elements.name.value;
        const newJob = this.popupBuilder.popup.form.elements.job.value;
        userInfo.set(newName, newJob);
        userInfo.update();

        this.popupBuilder.popup.close();        
    }
}