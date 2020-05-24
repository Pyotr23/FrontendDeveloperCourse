/*
    Надо исправить: По условиям задачи, конструктор должен принимать два аргумента:
        DOM-элемент — контейнер, куда нужно складывать карточки;
        массив карточек, которые будут на странице при загрузке.
    Также должен быть метод render, отвечающий за отрисовку начального списка.
 */
class CardList {
    constructor (container){
        this.container = container;
        /*
            Надо исправить: Делегирование больше не стоит использовать.
            События должны быть добавлены на конкретные элементы (кнопка лайка, кнопка удаления, изображение карточки).
            И добавлять эти события нужно в классе Card, так как он отвечает за создание карточки,
            а текущий класс только за отрисовку на странице.
         */
        this.container.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('place-card__like-icon'))
                this.likeCard(event);            
            else if (target.classList.contains('place-card__image')) {
                const link = target.getAttribute('data-url');
                /*
                    Можно лучше: Прямое использование глобальной переменной снижает переиспользование текущего класса,
                    то есть, мы уже не сможем использовать его в разрыве от этой переменной.
                    Чтобы избегать такой привязки можно либо передавать переменную при создании текущего экземпляра класса,
                    либо использовать коллбэк-функцию, передавая обработку события наружу.
                 */
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
