/*
    Приветствую Вас! Очень хотел попробовать сделать данную работу с помощью шаблона проектирования "Строитель". Я понимаю,
    что для конкретной работы это избыточная сложность. Но тем не менее я надеюсь, что Вы оцените и поможете
    довести желаемое до конца. Буду рад любым советам и ссылкам!
*/
/*
    Часть 2. Огромное спасибо за прекрасное ревью!
*/
/*  
    Часть 3. Благодаря Вашему описанию использования callback-функций, я только сейчас осознал их.
    До этого я смотрел код с примерами, но картина не выстраивалась. Это действительно развязывает код,
    ведь подобные функции являются лишь контрактами, которые следует соблюсти, а реализация не важна.   
    Я в восторге! Ещё раз спасибо! Очень продуктивные две недели получились.
*/

/*
    Здравствуйте! Похвально, что осваиваете новые знания. Со своей стороны постараюсь помочь чем смогу.
 */
/*
    Спасибо за благодарность, очень приятно! ☺️
 */

(function () {
  'use strict';

  const popupDirector = new PopupDirector(document.querySelector('.root'));
  const showImage = (url) => { popupDirector.renderImagePopup(url); }

  const randomCards = (function () {
    const cards = [];
    while (initialCards.length !== 0) {
      const index = Math.floor(Math.random() * initialCards.length);
      const card = new Card(initialCards[index].name, initialCards[index].link, showImage);
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

  const addCard = (...arg) => { cardList.addCard(new Card(...arg, showImage).create()) };
  const changeUserInfo = (...arg) => {
    userInfo.set(...arg);
    userInfo.update();
  }

  const openAddCardPopup = () => { popupDirector.renderAddCardPopup(addCard); }
  const openEditUserPopup = () => { 
    const stringInputs = [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
    popupDirector.renderEditUserPopup(stringInputs, changeUserInfo); 
  }
  
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