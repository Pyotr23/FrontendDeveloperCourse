class CardList {
    constructor (container, cards) {
        this._container = container;
        this._cards = cards;
    }

    render() {
        this._cards.forEach(card => { this.addCard(card) });
    }

    addCard(card) {
        this._container.appendChild(card);
    }
}
