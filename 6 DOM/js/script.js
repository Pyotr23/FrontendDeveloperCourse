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

/*
  Всё верно, это всего лишь контракт. Когда познакомитесь с каким-нибудь типизированным языком (например, typescript),
  можно будет просто объявить определенный интерфейс для коллбэка, а вызывающая функция уже обязана будет передать
  коллбэк, реализующий этот интерфейс.
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

  const openAddCardPopup = () => { 
    const stringInputs = [new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '')];
    popupDirector.renderAddCardPopup(stringInputs, addCard); 
  }
  const openEditUserPopup = () => {
    /*  !!! DONE !!!
      Можно лучше: Лучше однотипно инициализировать stringInputs, либо в самом методе, либо вне его.
      Каждый способ имеет право на существование и применение зависит от ситуации.
      Это не придирка, а пожелание, так проще будет поддерживать код.
     */
    const stringInputs = [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
    popupDirector.renderEditUserPopup(stringInputs, changeUserInfo);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);

  editUserButton.addEventListener('click', openEditUserPopup);
})()


/*
    Резюме по работе:
    Круто получилось! С коллбэками сделали всё как надо, код теперь более гармоничным смотрится и меньше зависимостей.

    Что понравилось:
    - добавлены коллбеки в PopupDirector;
    - открытие изображения реализовано через коллбэк.

    Что можно улучшить:
    - использовать строгий режим в каждом файле (UserInfo.js);
    - в качестве второго параметра метода addEventListener передавать ранее объявленную функцию (Card._setEventListeners);
    - в Card._remove добавить вызов stopPropagation, убрать проверку в обработчике клика на картинку.

    Успехов в дальнейшем обучении! Приятно было проверять вашу работу.
 */
