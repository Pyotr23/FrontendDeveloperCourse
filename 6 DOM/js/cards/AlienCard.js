class AlienCard extends Card {
    constructor (dto, showImage, deleteCard) {
        super(dto, showImage, deleteCard);
        this._addLikeCount();
    }

    _addLikeCount = () => {
        const likeCountElement = this._view.querySelector('.place-card__like-count');
        likeCountElement.textContent = this._dto.likes.length;
    }
}