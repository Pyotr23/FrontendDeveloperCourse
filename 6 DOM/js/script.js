(function () {
  'use strict';
  const popupDirector = new PopupDirector(document.querySelector('.root'));
  const userInfo = new UserInfo(document.querySelector('.user-info'), api);
  const cardList = new CardList(document.querySelector('.places-list'), api, createCard);
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');

  const showImage = (url) => popupDirector.renderImagePopup(url);
  const openAddCardPopup = () => popupDirector.renderAddCardPopup(cardList.addCard.bind(cardList))
  const openEditUserPopup = () => popupDirector.renderEditUserPopup(userInfo);

  function createCard(dto) {
    if (!dto.owner._id || userInfo.id === dto.owner._id)
      return new OwnCard(dto, api, userInfo.id, showImage);
    return new Card(dto, api, userInfo.id, showImage);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
})()


/*REVIEW. Резюме.

Проект творческий. Проделана большая работа.

Взаимодействие с сервером происходит правильно.
Выполнены все дополнительные задания.

Но, нарушены некоторые принципы ООП.

Что надо исправить.

1. Нужно устранить нарушение принципа открытости закрытости проекта, который гласит, что проект может расширяться (то есть в него можно добавлять
новые функции и сущности), но при этом существующий код не должен меняться.

Вы обращаетесь к полям Ваших форм по индексу, но вдруг заказчик попросит Вас добавить ещё поле, или сделать чекбокс, или радио кнопки вверху формы?
Индексы у старых полей input могут измениться и Вам придётся править старый код, а не только добавлять новый. Поэтому обращение к DOM-элементам по
индексу недопустимо.  Также недопустимо жёстко определять сколько полей должно быть на форме и какие типы полей там обязательно должны присутствовать.
Если Вы делаете размётку из js (что вообще-то не предполагалось в данном проекте) нужно предусмотреть возможность обращения
к DOM-элементам по индивидуальному селектору. Так же формы должны иметь возможность меняться независимо друг от друга.

2. Из чек-листа 8-го задания: "В классах напрямую не создаются экземпляры других классов.". Проверьте все свои классы и устраните нарушение этого
требования. Экземпляры одних классов должны передаваться как параметры в другие классы, как и переменные из глобальной области видимости.




*/
