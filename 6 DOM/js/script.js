(function () {
  'use strict';
  const rootContainer = document.querySelector('.root');  
  const userInfo = new UserInfo(document.querySelector('.user-info'), api);
  const cardList = new CardList(document.querySelector('.places-list'), api, createCard);
  const openAddCardPopupButton = document.querySelector('.user-info__button');
  const editUserButton = document.querySelector('.button_place_user-info');

  const showImage = (url) => {
    const imagePopup = new ImagePopup();
    const imagePopupBuilder = new ImagePopupBuilder(rootContainer, imagePopup);
    const popupDirector = new PopupDirector();
    popupDirector.renderImagePopup(url, imagePopupBuilder);
  }

  const showLikesTimeout = (event, dto) => setTimeout(showLikesPopup, 1500, event, dto); 
  
  const showLikesPopup = (event, dto) => {
    const infoPopup = new InfoPopup();
    const infoPopupBuilder = new InfoPopupBuilder(rootContainer, infoPopup);
    const popupDirector = new PopupDirector();
    popupDirector.renderLikesPopup(dto, infoPopupBuilder);
    event.stopPropagation();
  }

  const openCardInfo = (event, dto) => {     
    const infoPopup = new InfoPopup();
    const infoPopupBuilder = new InfoPopupBuilder(rootContainer, infoPopup);
    const popupDirector = new PopupDirector();
    popupDirector.renderInfoPopup(dto, infoPopupBuilder);
    event.stopPropagation();
  }

  const openAddCardPopup = () => {
    const form = new Form();
    const submitButtonText = '+';
    const stringInputs = [ new TextInput('name', 'Название', ''), new UrlInput('link', 'Ссылка на картинку', '') ];
    const formBuilder = new FormBuilder(form);
    const formDirector = new FormDirector(formBuilder);
    const filledForm = formDirector.getForm(stringInputs, submitButtonText);
    const formValidator = new FormValidator(filledForm);
    const formPopup = new FormPopup();
    const formPopupBuilder = new FormPopupBuilder(rootContainer, formPopup);
    const popupDirector = new PopupDirector();
    popupDirector.renderAddCardPopup(cardList.addCard.bind(cardList), filledForm.view, formPopupBuilder, formValidator);
  } 

  const openEditUserPopup = () => {    
    const form = new Form();
    const submitButtonText = 'Сохранить';
    const stringInputs = [
      new TextInput('name', 'Полное имя', userInfo.name),
      new TextInput('about', 'Профессия', userInfo.about),
      new UrlInput('avatar', 'Ссылка на аватар', userInfo.avatar)
    ];
    const formBuilder = new FormBuilder(form);
    const formDirector = new FormDirector(formBuilder);
    const filledForm = formDirector.getForm(stringInputs, submitButtonText);
    const formValidator = new FormValidator(filledForm);
    const formPopup = new FormPopup();
    const formPopupBuilder = new FormPopupBuilder(rootContainer, formPopup);
    const popupDirector = new PopupDirector();
    popupDirector.renderEditUserPopup(userInfo, filledForm.view, formPopupBuilder, formValidator);
  }   

  function createCard(dto) {    
    return isOwnCard(dto) 
      ? new OwnCard(dto, api, userInfo.id, showImage)
      : new AlienCard(dto, api, userInfo.id, showImage, openCardInfo, showLikesTimeout);      
  }

  const isOwnCard = (dto) => !dto.owner._id || userInfo.id === dto.owner._id;

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
})()