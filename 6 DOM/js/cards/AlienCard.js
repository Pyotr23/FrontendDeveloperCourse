class AlienCard extends Card {
    constructor (dto, api, currentUserId, showImage, showBadge, showLikesTimeout) {
        super(dto, api, currentUserId, showImage, showBadge, showLikesTimeout);
        this._addButton('place-card__icon_info');
    }
}