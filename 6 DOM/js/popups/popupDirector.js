class PopupDirector {
    renderImagePopup(link) {
        const popupBuilder = new ImagePopupBuilder(); 
        popupBuilder.addImage(link);        
        popupBuilder.renderPopup(); 
    }
}