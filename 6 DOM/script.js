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

randomFillPlaces();

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
