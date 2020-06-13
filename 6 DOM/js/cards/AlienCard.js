class AlienCard extends Card {
    constructor (dto, api, currentUserId, showImage, showBadge, showLikes) {
        super(dto, api, currentUserId, showImage, showBadge, showLikes);
        this._addButton('place-card__icon_info');
    }
}