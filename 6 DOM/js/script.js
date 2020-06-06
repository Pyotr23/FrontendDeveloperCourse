(function () {
  'use strict';
  const popupDirector = new PopupDirector(document.querySelector('.root'));  
  const userInfo = new UserInfo(document.querySelector('.user-info'), api); 
  const cardList = new CardList(document.querySelector('.places-list'), api, createCard);
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');

  const showImage = url => popupDirector.renderImagePopup(url);

  const deleteCard = (id) => {
    api.deleteCard(id)
    .then(res => console.log(res));
  } 

  const openAddCardPopup = () => { 
    const stringInputs = [ new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '') ];
    popupDirector.renderAddCardPopup(stringInputs, cardList.addCard.bind(cardList)); 
  }

  const openEditUserPopup = () => {    
    const stringInputs = [ 
      new TextInput('name', 'Полное имя', userInfo.name), 
      new TextInput('about', 'Профессия', userInfo.about),
      new UrlInput('avatar', 'Ссылка на аватар', userInfo.avatar) 
    ];
    popupDirector.renderEditUserPopup(stringInputs, userInfo.update.bind(userInfo));
  }

  function createCard(dto) {    
    if (!dto.owner._id || userInfo.id === dto.owner._id)
      return new OwnCard(dto, api, userInfo.id, showImage);
    return new Card(dto, api, userInfo.id, showImage);
  } 

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
})()