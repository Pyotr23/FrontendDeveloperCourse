const cardsContainer = document.querySelector('.places-list');
const openAddCardPopupButton = document.querySelector('.user-info__button');
const addCardPopup = document.querySelector('#popup_add-card');
const editUserPopup = document.querySelector('#popup_edit-user');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = document.querySelector('.user-info');

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

const closePopup = (popup) => { popup.classList.remove('popup_is-opened'); };

const showPopup = (popup) => { popup.classList.add('popup_is-opened'); };

const addCard = (event) => {         
  event.preventDefault();   
  const addCardForm = event.target;   
  const name = addCardForm.elements.name;
  const link = addCardForm.elements.link;
  const areInputsWithText = !name.validity.valueMissing && !link.validity.valueMissing;
  if (areInputsWithText){      
    const newCard = createCardNode({ name: name.value, link: link.value });
    cardsContainer.insertAdjacentHTML('beforeend', newCard);      
    closePopup(addCardPopup);
    addCardForm.reset();
  };    
}

const addEventListenerForClosingPopup = (popup) => {
  const closePopupButton = popup.querySelector('.popup__close');
  closePopupButton.addEventListener('click', 
    () => { closePopup(popup); });
}

const editUser = (event) => {
  event.preventDefault();   
  const editUserForm = event.target;   
  const name = editUserForm.elements.name;
  const job = editUserForm.elements.job;  
  const areInputsWithText = !name.validity.valueMissing && !job.validity.valueMissing;
  if (areInputsWithText){      
    userInfo.querySelector('.user-info__name').textContent = name.value; 
    userInfo.querySelector('.user-info__job').textContent = job.value;    
    closePopup(editUserPopup);
    editUserForm.reset();
  };   
}

const preparePopup = (popup, cardLink) => {
  addEventListenerForClosingPopup(popup);

  const cardImage = popup.querySelector('.popup__card-image');  
  cardImage.setAttribute('src', cardLink);
}

openAddCardPopupButton.addEventListener('click', () => {     
  const addCardForm = addCardPopup.querySelector('form');
  addCardForm.addEventListener('submit', (event) => { addCard(event); });  

  addEventListenerForClosingPopup(addCardPopup);
  showPopup(addCardPopup); 
});

editUserButton.addEventListener('click', () => {    
  debugger;
  const editUserForm = editUserPopup.querySelector('form');
  editUserForm.addEventListener('submit', (event) => { editUser(event); });

  const name = editUserForm.elements.name;
  const job = editUserForm.elements.job; 
  
  name.value = userInfo.querySelector('.user-info__name').textContent;
  job.value = userInfo.querySelector('.user-info__job').textContent;

  addEventListenerForClosingPopup(editUserPopup);
  showPopup(editUserPopup); 
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