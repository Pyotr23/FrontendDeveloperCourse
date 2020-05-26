/*
    Приветствую Вас! Очень хотел попробовать сделать данную работу с помощью шаблона проектирования "Строитель". Я понимаю,
    что для конкретной работы это избыточная сложность. Но тем не менее я надеюсь, что Вы оцените и поможете
    довести желаемое до конца. Буду рад любым советам и ссылкам!
*/

/*
    Здравствуйте! Похвально, что осваиваете новые знания. Со своей стороны постараюсь помочь чем смогу.
 */

/*
    Надо исправить: Создание множества переменных, не обернутых в IIFE, засоряет глобальную область видимости.
    Когда код расположен в разных файлах, его нужно заключать в модули, т.к. если файлов будет много,
    то в разных файлах могут появится функции или переменные с одинаковыми именами,
    тогда они будут переопределять друг друга. Модуль должен предоставлять наружу только минимально необходимый api.
    https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/IIFE
 */

/*  !!! DONE !!!  
    Можно лучше: Рекомендуется использовать строгий режим, в котором меньше вероятность допустить синтаксические ошибки.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode
 */

'use strict';
const randomCards = (function () {
  const cards = [];
  while (initialCards.length !== 0) {
    const index = Math.floor(Math.random() * initialCards.length);
    const card = new Card(initialCards[index].name, initialCards[index].link);
    cards.push(card.create());    
    initialCards.splice(index, 1);
  }  
  return cards;
})();

const cardList = new CardList(document.querySelector('.places-list'), randomCards);
cardList.render();

const openAddCardPopupButton = document.querySelector('.user-info__button');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = new UserInfo(document.querySelector('.user-info'));
const popupDirector = new PopupDirector(document.querySelector('.root'));
let formValidator = null;

openAddCardPopupButton.addEventListener('click', () => {
  popupDirector.renderAddCardPopup(cardList);
});

editUserButton.addEventListener('click', () => {
  popupDirector.renderEditUserPopup('Редактировать профиль', userInfo, 'Сохранить');
});

/*
    Резюме по работе:
    Очень достойная работа у вас получилась! На мой взгляд, шаблон Builder реализовали на высоком уровне.
    Код переиспользуется и разбит по классам и функциям.

    Что понравилось:
    - используются ES6 классы;
    - понятный и аккуратный код;
    - форматирование кода везде единообразное;
    - создание dom-элементов разбито по функциям и не дублируется;
    - изучаете и применяете новые знания дополнительно от занятий.

    Что важно исправить:
    - обернуть код в script.js в IIFE;
    - убрать импорт несуществующего файла из index.css;
    - перенести обработку действий карточки в Card, не использовать делегирование;
    - в UserInfo не искать dom-элементы по несколько раз;
    - не использовать поиск по document внутри методов классов.

    Что можно улучшить:
    - использовать строгий режим (use strict);
    - использовать insertAdjacentHTML для вставки html;
    - не использовать глобальные переменные;
    - корректно называть методы (в FormValidator, Popup);
    - не обращаться к внутренним свойствам экземпляров классов напрямую;
    - класс Popup разделить на несколько классов;
    - отказаться от использования общего свойства this.popupBuilder в PopupDirector.

    Обратите внимание, что работа принимается только после исправления всех «Надо исправить».
 */
