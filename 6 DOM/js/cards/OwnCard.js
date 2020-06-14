class OwnCard extends Card {
    constructor (dto, api, currentUserId, showImage, showBadge, showLikesTimeout) {
        super(dto, api, currentUserId, showImage, showBadge, showLikesTimeout);  
        this._addButton('place-card__icon_delete', (event) => this._remove(event));     
    }

    _remove = (event) => {        
        this._api.deleteCard(this._dto._id);
        this._view.remove();
        event.stopPropagation();
    }
}