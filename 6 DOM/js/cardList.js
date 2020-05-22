class CardList {
    constructor (container){
        this.container = container;   
        this.container.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('place-card__like-icon'))
                this.likeCard(event);
            else if (target.classList.contains('place-card__delete-icon'))
                this.removeCard(event);          
            else if (target.classList.contains('place-card__image')) {     
                const link = target.getAttribute('data-url');     
                popupDirector.renderImagePopup(link); 
            }
        })    
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
    