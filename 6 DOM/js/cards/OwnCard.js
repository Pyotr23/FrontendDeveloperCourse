class OwnCard extends Card {
    constructor (dto, api, currentUserId, showImage) {
        super(dto, api, currentUserId, showImage);
        this._addRemoveButton();
    }

    _addRemoveButton() {
        this._removeButton = document.createElement('button');
        this._removeButton.classList.add('place-card__delete-icon');
        const imageElement = this._view.querySelector('.place-card__image');
        imageElement.appendChild(this._removeButton);
        this._removeButton.addEventListener('click', this._remove);
    }
}