const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
     }
  ];
const cardsContainer = document.querySelector('.places-list');
const openFormButton = document.querySelector('.user-info__button');
const popupElement = document.querySelector('.popup');
const closeFormButton = popupElement.querySelector('.popup__close');
const addCardButton = popupElement.querySelector('.popup__button');

function closeForm(){
  popupElement.classList.remove('popup_is-opened');
}

function randomFillPlaces(){
    while (initialCards.length !== 0){
        const index = Math.floor(Math.random() * initialCards.length);
        const card = createCard(initialCards[index].name, initialCards[index].link);
        cardsContainer.appendChild(card);
        initialCards.splice(index, 1);
    }
}

function createCard(cardName, link){
    const imageElement = createElement('div', 'place-card__image');    
    imageElement.setAttribute('style', `background-image: url(${link})`);
    const deleteButton = createElement('button', 'place-card__delete-icon');
    imageElement.appendChild(deleteButton);    

    const descriptionElement = createElement('div', 'place-card__description');
    const name = createElement('h3', 'place-card__name');
    name.textContent = cardName;
    const likeButton = createElement('button', 'place-card__like-icon');
    descriptionElement.appendChild(name);
    descriptionElement.appendChild(likeButton);    

    const placeCard = createElement('div', 'place-card');
    placeCard.appendChild(imageElement);
    placeCard.appendChild(descriptionElement);
    return placeCard;
}

function createElement(tag, className){
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

openFormButton.addEventListener('click', () => {    
  popupElement.classList.add('popup_is-opened');
});

closeFormButton.addEventListener('click', closeForm);

cardsContainer.addEventListener('click', (event) => {
const targetElement = event.target;
if (targetElement.classList.contains('place-card__like-icon'))
  targetElement.classList.toggle('place-card__like-icon_liked');
if (targetElement.classList.contains('place-card__delete-icon')){
  const removingCard = targetElement.parentNode.parentNode;
  cardsContainer.removeChild(removingCard);
}    
}) 

addCardButton.addEventListener('click', (event) => { 
event.preventDefault();
const form = document.forms.new;
const placeName = form.elements.name.value;
const placeLink = form.elements.link.value;
if (placeName.length !== 0 && placeLink.length !== 0){    
  closeForm();
  const newCard = createCard(placeName, placeLink);
  cardsContainer.appendChild(newCard);
  form.reset();
}    
})

randomFillPlaces();