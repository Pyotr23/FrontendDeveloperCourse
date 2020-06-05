(function () {
  'use strict';
  const popupDirector = new PopupDirector(document.querySelector('.root'));  
  const userInfo = new UserInfo(document.querySelector('.user-info')); 
  const cardList = new CardList(document.querySelector('.places-list'), api, createCard);
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');
  const userPhoto = document.querySelector('.user-info__photo');

  const showImage = url => popupDirector.renderImagePopup(url);

  const deleteCard = (id) => {
    api.deleteCard(id)
    .then(res => console.log(res));
  }  
  
  const setUserInfo = (userInfo) => {
    api.getUserInfo()
    .then(user => userInfo.set(user)) 
    .catch(() => userInfo.set({ name: '', about: '' }))
    .finally(() => userInfo.update());      
  }  

  const updateUser = (user) => {    
    api.updateUserInfo(user)
    .then(newUserInfo => userInfo.set(newUserInfo))
    .finally(() => userInfo.update());     
  }

  const updateUserPhoto = (link) => {
    api.updateUserPhoto(link)
    .then(res => userInfo.setPhoto(res.avatar))
    .finally(() => userInfo.update());  
  }

  const openAddCardPopup = () => { 
    const stringInputs = [ new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '') ];
    popupDirector.renderAddCardPopup(stringInputs, cardList.addCard.bind(cardList)); 
  }

  const openEditUserPopup = () => {    
    const stringInputs = [ new TextInput('name', 'Полное имя', userInfo.name), new TextInput('about', 'Профессия', userInfo.about) ];
    popupDirector.renderEditUserPopup(stringInputs, updateUser);
  }

  const openEditUserPhotoPopup = () => {
    const stringInputs = [ new UrlInput('avatar', 'Ссылка на аватар', userInfo.avatar) ];
    popupDirector.renderEditUserPhotoPopup(stringInputs, updateUserPhoto);
  }

  function createCard(dto) {
    return new Card(dto, showImage, deleteCard);
  } 

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
  userPhoto.addEventListener('click', openEditUserPhotoPopup);

  setUserInfo(userInfo);
})()