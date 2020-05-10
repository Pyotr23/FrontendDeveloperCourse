const cardsContainer = document.querySelector('.places-list');
const openAddCardPopupButton = document.querySelector('.user-info__button');
const addCardPopup = document.querySelector('#popup_add-card');
const editUserPopup = document.querySelector('#popup_edit-user');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = document.querySelector('.user-info');
const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongUrl: 'Здесь должна быть ссылка',
  wrongPattern: 'Введите данные в верном формате'  
}

const randomFillPlaces = () => {
    while (initialCards.length !== 0){
        const index = Math.floor(Math.random() * initialCards.length);
        const card = createCardNode({ name: initialCards[index].name, link: initialCards[index].link});
        cardsContainer.insertAdjacentHTML('afterbegin', card);
        initialCards.splice(index, 1);
    }
}

const createCardNode = (card) => {
  const cardNode = `<div class="place-card"> 
                  <div class="place-card__image" data-url="${card.link}" style="background: url(${card.link})"> 
                    <button class="place-card__delete-icon"></button>
                  </div>
                  <div class="place-card__description">
                    <h3 class="place-card__name">${card.name}</h3>
                    <button class="place-card__like-icon"></button>
                  </div>
                </div>`
  return cardNode; 
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
  const name = addCardForm.elements.name;
  const link = addCardForm.elements.link;
  const newCard = createCardNode({ name: name.value, link: link.value });
  cardsContainer.insertAdjacentHTML('beforeend', newCard);      
  closePopup(event);   
}

const addEventListenerForClosingPopup = (popup) => {
  const closePopupButton = popup.querySelector('.popup__close');
  closePopupButton.addEventListener('click', closePopup);   
}

const editUser = (event) => {
  event.preventDefault();   
  const editUserForm = event.target;   
  const name = editUserForm.elements.name;
  const job = editUserForm.elements.job;      
  userInfo.querySelector('.user-info__name').textContent = name.value; 
  userInfo.querySelector('.user-info__job').textContent = job.value;    
  closePopup(event);         
}

const preparePopup = (popup, cardLink) => {
  addEventListenerForClosingPopup(popup);

  const cardImage = popup.querySelector('.popup__card-image');  
  cardImage.setAttribute('src', cardLink);
}

const handlerInputForm = (event) => {    
  const input = event.target; 
  const submit = event.currentTarget.querySelector('.button');  
  setSubmitButtonState(submit, isFieldValid(input));   
}

const setButtonState = (popup, state) => {
  const submit = popup.querySelector('.button');    
  setSubmitButtonState(submit, state); 
}

const getSubmitState = (inputs) => {
  let submitState = true;
  inputs.forEach(input => {
    submitState = isFieldValid(input) && submitState;
  });
  return submitState;
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

const setUserInfo = () => {
  const form = editUserPopup.querySelector('form');
  const name = form.elements.name;
  const job = form.elements.job;   
  name.value = userInfo.querySelector('.user-info__name').textContent;
  job.value = userInfo.querySelector('.user-info__job').textContent;
}

openAddCardPopupButton.addEventListener('click', () => {      
  setButtonState(addCardPopup, false);
  clearValidityError(addCardPopup);
  setEventListeners(addCardPopup);  
  showPopup(addCardPopup); 
});

editUserButton.addEventListener('click', () => {  
  setButtonState(editUserPopup, true);
  clearValidityError(editUserPopup);
  setEventListeners(editUserPopup);  
  showPopup(editUserPopup); 
  setUserInfo();  
});

cardsContainer.addEventListener('click', (event) => {
const targetElement = event.target;
  if (targetElement.classList.contains('place-card__like-icon'))
    targetElement.classList.toggle('place-card__like-icon_liked');
  else if (targetElement.classList.contains('place-card__delete-icon')){
    const removingCard = targetElement.closest('.place-card');
    removingCard.remove();
  }  
  else if (targetElement.classList.contains('place-card__image')){
    const cardImagePopup = document.querySelector('#popup_place-image');
    const cardLink = targetElement.getAttribute('data-url');
    preparePopup(cardImagePopup, cardLink);
    showPopup(cardImagePopup);    
  }
}) 

randomFillPlaces(); 