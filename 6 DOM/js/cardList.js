'use strict'
class CardList {
    constructor (container, api, createCard) {
        this._container = container; 
        this._api = api;  
        this._createCard = createCard;
        this._initCardList();     
    }

    _render(cards) {
        cards.forEach(card => { this.addCard(card) });
    }

    addCard(card) {
        this._container.appendChild(card.view);
    }   

    _initCardList = () => {    
        this._api.getInitialCards()
        .then(cardDtoes => this._render(this._randomCreateCards(cardDtoes)));
    }   

    _randomCreateCards = (cardDtoes) => {
        const randomCards = [];    
        while (cardDtoes.length !== 0) {                      
          const index = Math.floor(Math.random() * cardDtoes.length);      
          randomCards.push(this._createCard(cardDtoes[index]));
          cardDtoes.splice(index, 1);        
        }
        return randomCards;
    }
}
