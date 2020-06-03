(function () {
  'use strict';
  const popupDirector = new PopupDirector(document.querySelector('.root'));  
  const userInfo = new UserInfo(document.querySelector('.user-info')); 
  const cardList = new CardList(document.querySelector('.places-list'));
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');
  const userPhoto = document.querySelector('.user-info__photo');

  const showImage = (url) => { popupDirector.renderImagePopup(url); }

  const randomCreateCards = (cards) => {
    const randomCards = [];    
    while (cards.length !== 0) {                 
      const index = Math.floor(Math.random() * cards.length);
      const card = new Card(cards[index].name, cards[index].link, showImage);
      randomCards.push(card.create());
      cards.splice(index, 1);        
    }
    return randomCards;
  }

  const fillCardList = (cardList) => {    
    api.getInitialCards()
    .then(res => cardList.render(randomCreateCards(res)));
  }   
  
  const setUserInfo = (userInfo) => {
    api.getUser()
    .then(user => {      
      userInfo.set(user);
    }) 
    .catch(() => userInfo.set({ name: '', about: '' }))
    .finally(() => userInfo.update());      
  }  

  const addCard = (...arg) => { 
    cardList.addCard(new Card(...arg, showImage).create()) 
  };

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
    popupDirector.renderAddCardPopup(stringInputs, addCard); 
  }

  const openEditUserPopup = () => {    
    const stringInputs = [ new TextInput('name', 'Полное имя', userInfo.name), new TextInput('about', 'Профессия', userInfo.about) ];
    popupDirector.renderEditUserPopup(stringInputs, updateUser);
  }

  const openEditUserPhotoPopup = () => {
    const stringInputs = [ new UrlInput('avatar', 'Ссылка на аватар', userInfo.avatar) ];
    popupDirector.renderEditUserPhotoPopup(stringInputs, updateUserPhoto);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
  userPhoto.addEventListener('click', openEditUserPhotoPopup);

  setUserInfo(userInfo);
  fillCardList(cardList);
})()