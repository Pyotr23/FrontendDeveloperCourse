'use strict'
class CardList {
    constructor (container, api, createCard) {
        this._container = container; 
        this._api = api;  
        this._createCard = createCard;
        // this._initCardList();     
    }

    _render(cards) {
        cards.forEach(card => this._renderCard(card));
    }

    _renderCard(card) {
        this._container.appendChild(card.view);
    }

    addCard(name, link, closePopup) {        
        this._api.addCard(name, link)
        .then(dto => this._renderCard(this._createCard(dto))) 
        .catch(err => console.log(err)) 
        .finally(closePopup);       
    }   

    _initCardList = () => {    
        this._api.getInitialCards()
        .then(cardDtoes => this._render(this._randomCreateCards(cardDtoes)))
        .catch(err => console.log(err));
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
