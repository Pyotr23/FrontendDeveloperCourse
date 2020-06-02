'use strict'
class CardList {
    constructor (container) {
        this._container = container;        
    }

    render(cards) {
        cards.forEach(card => { this.addCard(card) });
    }

    addCard(card) {
        this._container.appendChild(card);
    }
}
