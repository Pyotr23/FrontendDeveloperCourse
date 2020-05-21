class PopupDirector {
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(); 
        popupBuilder.addImage(link);        
        popupBuilder.renderPopup(); 
    }

    renderCardFormPopup(title, textInput, urlInput, buttonText) {
        const popupBuilder = new FormPopupBuilder(); 
        popupBuilder.addTitle(title); 
        popupBuilder.addCardForm(textInput, urlInput, buttonText);       
        popupBuilder.renderPopup(); 
    }
}