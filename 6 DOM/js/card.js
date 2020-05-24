/*
    Надо исправить: По условиям задачи, в классе должны быть методы like и remove.
 */
class Card {
    constructor (name, link) {
        this.name = name;
        this.link = link;
    }

    create() {
        const cardNodeTemplate = `<div class="place-card__image">
                    <button class="place-card__delete-icon"></button>
                  </div>
                  <div class="place-card__description">
                    <h3 class="place-card__name"></h3>
                    <button class="place-card__like-icon"></button>
                  </div>`
        const cardNode = document.createElement('div');
        cardNode.classList.add('place-card');
        /*
            Можно лучше: Эффективней использовать insertAdjacentHTML,
            так как он не перезаписывает все содержимое целиком и поэтому работает быстрее.
            https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
         */
        cardNode.innerHTML = cardNodeTemplate;
        const placeCardImage = cardNode.querySelector('.place-card__image');
        placeCardImage.setAttribute('data-url', this.link);
        placeCardImage.style.backgroundImage = `url(${this.link})`;
        const placeCardName = cardNode.querySelector('.place-card__name');
        placeCardName.textContent = this.name;
        this.cardElement = cardNode;
        return cardNode;
    }
}
