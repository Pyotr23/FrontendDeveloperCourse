(function () {
  'use strict';
  // api.getInitialCards();
  const popupDirector = new PopupDirector(document.querySelector('.root'));
  const showImage = (url) => { popupDirector.renderImagePopup(url); }

  const renderCards = (function () {    
    api.getInitialCards()
    .then(res => {  
      const cards = [];    
      while (res.length !== 0) {
        console.log(res);
        // debugger;        
        const index = Math.floor(Math.random() * res.length);
        const card = new Card(res[index].name, res[index].link, showImage);
        cards.push(card.create());
        res.splice(index, 1);
        
      }  
      const cardList = new CardList(document.querySelector('.places-list'), cards);
      cardList.render();  
      return cardList
    });
    // while (initialCards.length !== 0) {
    //   const index = Math.floor(Math.random() * initialCards.length);
    //   const card = new Card(initialCards[index].name, initialCards[index].link, showImage);
    //   cards.push(card.create());
    //   initialCards.splice(index, 1);
    // }      
  })();

  console.log(renderCards);

  // const cardList = new CardList(document.querySelector('.places-list'), randomCards);
  // cardList.render();

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
    const stringInputs = [new TextInput('name', 'Полное имя', userInfo.name), new TextInput('job', 'Профессия', userInfo.job)];
    popupDirector.renderEditUserPopup(stringInputs, changeUserInfo);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);

  editUserButton.addEventListener('click', openEditUserPopup);
})()