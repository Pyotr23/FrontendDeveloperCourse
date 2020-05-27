/*  !!! DONE !!!
    Надо исправить: По условиям задачи, конструктор должен принимать два аргумента:
        DOM-элемент — контейнер, куда нужно складывать карточки;
        массив карточек, которые будут на странице при загрузке.
    Также должен быть метод render, отвечающий за отрисовку начального списка.
 */
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
