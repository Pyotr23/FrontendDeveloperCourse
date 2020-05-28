/*
    Приветствую Вас! Очень хотел попробовать сделать данную работу с помощью шаблона проектирования "Строитель". Я понимаю,
    что для конкретной работы это избыточная сложность. Но тем не менее я надеюсь, что Вы оцените и поможете
    довести желаемое до конца. Буду рад любым советам и ссылкам!
*/
/*
    Часть 2. Огромное спасибо за прекрасное ревью!
*/

/*
    Здравствуйте! Похвально, что осваиваете новые знания. Со своей стороны постараюсь помочь чем смогу.
 */
/*
    Спасибо за благодарность, очень приятно! ☺️
 */

(function () {
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

  const addCard = (...arg) => { cardList.addCard(new Card(...arg).create()) };
  const openAddCardPopup = () => { popupDirector.renderAddCardPopup(addCard); }
  const openEditUserPopup = () => { popupDirector.renderEditUserPopup(userInfo); }
  
  /*  !!! DONE !!!
    Можно лучше: Не ясно предназначение этой переменной и для чего её передавать в методы.
  */  

  /*  !!! DONE !!!
    Можно лучше: В качестве второго параметра метода addEventListener лучше использовать ранее объявленную функцию.
    Код имеет свойство расширяться и повторно использоваться.
    Поэтому функцию из второго параметра слушателя следует вынести и декларировать отдельно.
    А в методе addEventListener только ее вызывать. Это облегчает как читаемость кода,
    так и его повторное использование в рамках данного или другого проекта.
   */
  openAddCardPopupButton.addEventListener('click', openAddCardPopup);

  /*  !!! DONE !!!
    Можно лучше: В качестве второго параметра метода addEventListener лучше использовать ранее объявленную функцию.
   */
  editUserButton.addEventListener('click', openEditUserPopup);
})()


/*
    Резюме по работе:
    Большой объём работы проделали, вы молодец! Все замечания и улучшения поправили, но появилось новое.

    Что понравилось:
    - файлы классов названы с большой буквы;
    - добавлены геттеры и сеттеры;
    - Popup разбит на несколько классов;
    - внутренние свойства и методы начинаются с "_".

    Что важно исправить:
    - пропало отображение картинки в попапе при клике на карточку (подумайте как архитектурно правильнее это реализовать).

    Что можно улучшить:
    - использовать строгий режим в каждом файле;
    - убрать переменную formValidator и её передачу в методы;
    - в качестве второго параметра метода addEventListener передавать ранее объявленную функцию;
    - большие строковые переменные выносить из методов класса в конструктор;
    - удалить неиспользуемые свойства (PopupDirector);
    - в PopupDirector использовать коллбэки.

    Обратите внимание, что работа принимается только после исправления всех «Надо исправить».
 */