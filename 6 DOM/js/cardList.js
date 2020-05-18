class CardList {
    constructor (container){
        this.container = container;        
    }

    addCard(card) {
        this.container.appendChild(card);
    }

    removeCard(event) {
        event.target.closest('.place-card').remove();    
    }

    likeCard(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
}
    