const cardList = new CardList(document.querySelector('.places-list'));
const openAddCardPopupButton = document.querySelector('.user-info__button');
const addCardPopup = document.querySelector('#popup_add-card');
const editUserPopup = document.querySelector('#popup_edit-user');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = new UserInfo(document.querySelector('.user-info'));
const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongUrl: 'Здесь должна быть ссылка',
  wrongPattern: 'Введите данные в верном формате'
}

const randomFillPlaces = () => {
    while (initialCards.length !== 0){
        const index = Math.floor(Math.random() * initialCards.length);
        const card = new Card(initialCards[index].name, initialCards[index].link);        
        cardList.addCard(card.create());
        initialCards.splice(index, 1);
    }
}

const closePopup = (event) => {
  const popup = event.currentTarget.closest('.popup');
  popup.classList.remove('popup_is-opened');
  popup.querySelector('form').reset();
};

const showPopup = (popup) => { popup.classList.add('popup_is-opened'); };

const addCard = (event) => {
  event.preventDefault();  
  const addCardForm = event.target;
  const name = addCardForm.elements.name.value;
  const link = addCardForm.elements.link.value;
  const newCard = new Card(name, link);  
  cardList.addCard(newCard.create());
  closePopup(event);
}

const addEventListenerForClosingPopup = (popup) => {
  const closePopupButton = popup.querySelector('.popup__close');
  closePopupButton.addEventListener('click', closePopup);
}

const editUser = (event) => {
  event.preventDefault();   
  const newName = event.target.elements.name.value;
  const newJob = event.target.elements.job.value;
  userInfo.set(newName, newJob);  
  userInfo.update();  
  closePopup(event);
}

const handlerInputForm = (event) => {
  const input = event.target;
  const submit = event.currentTarget.querySelector('.button');
  isFieldValid(input);
  setSubmitButtonState(submit, isFormValid(input.closest('form')));
}

const isFormValid = (form) => {
  const [...inputs] = form.elements;
  return inputs.every(isValidate);
}

const setButtonState = (popup, state) => {
  const submit = popup.querySelector('.button');
  setSubmitButtonState(submit, state);
}

const setSubmitButtonState = (button, state) => {
  if (state) {
    button.removeAttribute('disabled');
    button.classList.add('popup__button_is-active');
  }
  else {
    button.setAttribute('disabled', '');
    button.classList.remove('popup__button_is-active');
  }
}

const isFieldValid = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.name}-error`);
  const isValid = isValidate(input);
  errorElement.textContent = input.validationMessage;
  return isValid;
}

const isValidate = (input) => {
  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity(errorMessages.empty);
    return false
  }

  if (input.validity.tooShort || input.validity.tooLong) {
    input.setCustomValidity(errorMessages.wrongLength);
    return false
  }

  if (input.validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity('Здесь должна быть ссылка');
    return false
  }

  return input.checkValidity();
}

const setEventListeners = (popup) => {
  const form = popup.querySelector('form');
  if (popup === addCardPopup)
    form.addEventListener('submit', addCard);
  else if (popup === editUserPopup)
  form.addEventListener('submit', editUser);
  form.addEventListener('input', handlerInputForm, true);
  addEventListenerForClosingPopup(popup);
}

const clearValidityError = (popup) => {
  const [...inputs] = popup.querySelector('form').elements;
  const nonSubmitInputs = inputs.filter(i => i.type !== 'submit');
  nonSubmitInputs.forEach(input => {
    const errorElement = input.parentNode.querySelector(`#${input.name}-error`);
    errorElement.textContent = "";
  });
}

const setUserInfoInputValues = () => {
  const form = editUserPopup.querySelector('form');
  const name = form.elements.name;
  const job = form.elements.job;
  name.value = userInfo.name;
  job.value = userInfo.job;
}

openAddCardPopupButton.addEventListener('click', () => {
  // setButtonState(addCardPopup, false);
  // clearValidityError(addCardPopup);
  // setEventListeners(addCardPopup);
  // showPopup(addCardPopup);  
  new PopupDirector().renderAddCardPopup('Новое место', '', '', '+');
});

editUserButton.addEventListener('click', () => {
  // setButtonState(editUserPopup, true);
  // clearValidityError(editUserPopup);
  // setEventListeners(editUserPopup);
  // showPopup(editUserPopup);
  // setUserInfoInputValues();  
  new PopupDirector().renderEditUserPopup('Редактировать профиль', userInfo, 'Сохранить');
});

document.querySelector('.places-list').addEventListener('click', (event) => {
const targetElement = event.target;
  if (targetElement.classList.contains('place-card__like-icon'))
    cardList.likeCard(event);
  else if (targetElement.classList.contains('place-card__delete-icon')){
    cardList.removeCard(event);
  }
  else if (targetElement.classList.contains('place-card__image')){     
    const link = targetElement.getAttribute('data-url');     
    new PopupDirector().renderImagePopup(link);   
    
    // const popupBuilder = new ImagePopupBuilder();    
    // popupBuilder.addImage(link);        
    // popupBuilder.renderPopup(); 
    

    // const imagePopup = new ImagePopup('popup_place-image', link);
    // imagePopup.open(); 
    // const formPopup = new FormPopup('hy', 'HYYYY');
    // formPopup.open();   
  }
})

randomFillPlaces();