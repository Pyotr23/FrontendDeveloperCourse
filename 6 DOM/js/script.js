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
const popupDirector = new PopupDirector();
let formValidator = null;

const randomFillPlaces = () => {
    while (initialCards.length !== 0){
        const index = Math.floor(Math.random() * initialCards.length);
        const card = new Card(initialCards[index].name, initialCards[index].link);        
        cardList.addCard(card.create());
        initialCards.splice(index, 1);
    }
}

openAddCardPopupButton.addEventListener('click', () => {  
  popupDirector.renderAddCardPopup('Новое место', '', '', '+');  
});

editUserButton.addEventListener('click', () => {  
  popupDirector.renderEditUserPopup('Редактировать профиль', userInfo, 'Сохранить');  
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
    popupDirector.renderImagePopup(link);   
  }
})

randomFillPlaces();