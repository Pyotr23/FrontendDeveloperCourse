class PopupDirector {
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(); 
        popupBuilder.addImage(link);        
        popupBuilder.renderPopup(); 
    }

    renderFormPopup(title) {
        const popupBuilder = new FormPopupBuilder(); 
        popupBuilder.addTitle(title);        
        popupBuilder.renderPopup(); 
    }
}