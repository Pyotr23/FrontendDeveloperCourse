class AlienCard extends Card {
    constructor (dto, api, currentUserId, showImage, showBadge) {
        super(dto, api, currentUserId, showImage, showBadge);
        this._addButton('place-card__icon_info');
    }
}