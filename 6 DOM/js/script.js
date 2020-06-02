(function () {
  'use strict';
  const popupDirector = new PopupDirector(document.querySelector('.root'));  
  const userInfo = new UserInfo(document.querySelector('.user-info'));  
  const cardList = new CardList(document.querySelector('.places-list'));
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');

  const showImage = (url) => { popupDirector.renderImagePopup(url); }

  const randomCreateCards = (arr) => {
    const cards = [];    
    while (arr.length !== 0) {                 
      const index = Math.floor(Math.random() * arr.length);
      const card = new Card(arr[index].name, arr[index].link, showImage);
      cards.push(card.create());
      arr.splice(index, 1);        
    }
    return cards;
  }

  const fillCardList = (cardList) => {    
    api.getInitialCards()
    .then(res => cardList.render(randomCreateCards(res)));
  }     

  const addCard = (...arg) => { 
    cardList.addCard(new Card(...arg, showImage).create()) 
  };

  const changeUserInfo = (...arg) => {
    userInfo.set(...arg);
    userInfo.update();
  }

  const openAddCardPopup = () => { 
    const stringInputs = [new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '')];
    popupDirector.renderAddCardPopup(stringInputs, addCard); 
  }

  const openEditUserPopup = () => {    
    const stringInputs = [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
    popupDirector.renderEditUserPopup(stringInputs, changeUserInfo);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);

  fillCardList(cardList);
})()