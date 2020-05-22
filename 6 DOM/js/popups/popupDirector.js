class PopupDirector {
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(); 
        popupBuilder.withImage(link);        
        popupBuilder.renderImage(); 
        popupBuilder.renderPopup();
    }

    renderAddCardPopup(title, name, link, buttonText) {
        const popupBuilder = new FormPopupBuilder(); 
        popupBuilder.withTitle(title); 
        const formContainer = new FormDirector().getAddCardFormNode(name, link, buttonText);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup(); 
    }

    renderEditUserPopup(title, userInfo, buttonText) {
        const popupBuilder = new FormPopupBuilder(); 
        popupBuilder.withTitle(title); 
        const formContainer = new FormDirector().getEditUserFormNode(userInfo, buttonText);
        popupBuilder.withForm(formContainer);
        popupBuilder.renderForm();
        popupBuilder.renderPopup(); 
    }
}