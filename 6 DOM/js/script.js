const cardsContainer = document.querySelector('.places-list');
const openFormButton = document.querySelector('.user-info__button');
const popupElement = document.querySelector('.popup');
// const popupStartState = {...popupElement};
const closeFormButton = popupElement.querySelector('.popup__close');
const addCardButton = popupElement.querySelector('.popup__button');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = document.querySelector('.user-info');
const form = document.forms.new;
const name = form.elements.name;
const link = form.elements.link;

function closeForm(){
  popupElement.classList.remove('popup_is-opened');
  // popupElement = popupStartState;
  form.reset();
}

function randomFillPlaces(){
    while (initialCards.length !== 0){
        const index = Math.floor(Math.random() * initialCards.length);
        const card = createCard({ name: initialCards[index].name, link: initialCards[index].link});
        cardsContainer.insertAdjacentHTML('afterbegin', card);
        initialCards.splice(index, 1);
    }
}

function createCard(cardParameters){
  const placeCard = `<div class="place-card"> 
                  <div class="place-card__image" style="background: url(${cardParameters.link})"> 
                    <button class="place-card__delete-icon"></button>
                  </div>
                  <div class="place-card__description">
                    <h3 class="place-card__name">${cardParameters.name}</h3>
                    <button class="place-card__like-icon"></button>
                  </div>
                </div>`
  return placeCard; 
}

function createElement(tag, className){
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

const showPopup = () => { popupElement.classList.add('popup_is-opened'); };

const modifyPopupForEditingUser = () => {
  console.log('Петя был здесь!');

  const title = popupElement.querySelector('.popup__title');
  title.textContent = 'Редактировать профиль';  

  name.setAttribute('placeholder', 'Полное имя');
  link.setAttribute('placeholder', 'Профессия');  
  const userName = userInfo.querySelector('.user-info__name').textContent;
  const userJob = userInfo.querySelector('.user-info__job').textContent;
  name.value = userName;
  link.value = userJob;

  const button = popupElement.querySelector('.popup__button');
  button.classList.add('button_place_popup');
  button.textContent = 'Сохранить'; 
  button.addEventListener('submit', () => {
    userName = name.value;
    userJob = link.value;
  });  
};

openFormButton.addEventListener('click', () => {   
  showPopup(); 
});

editUserButton.addEventListener('click', () => {
  modifyPopupForEditingUser();
  showPopup();  
});

closeFormButton.addEventListener('click', closeForm);

cardsContainer.addEventListener('click', (event) => {
const targetElement = event.target;
  if (targetElement.classList.contains('place-card__like-icon'))
    targetElement.classList.toggle('place-card__like-icon_liked');
  if (targetElement.classList.contains('place-card__delete-icon')){
    const removingCard = targetElement.closest('.place-card');
    removingCard.remove();
  }    
}) 

addCardButton.addEventListener('click', (event) => { 
  event.preventDefault();  
  const areInputsWithText = !name.validity.valueMissing && !link.validity.valueMissing;
  if (areInputsWithText){        
    closeForm();
    const newCard = createCard({ name: name.value, link: link.value });
    cardsContainer.insertAdjacentHTML('beforeend', newCard);
    form.reset();
  }    
})

randomFillPlaces();

 /**
 * Здравствуйте.
 * --------------------------------------------------------------------
 * Весь функционал работает корректно 
 * Код чистый и хорошо читается 
 * Вы используете логические группировки операций 
 * У вас нет дублирование кода
 *  Вы не используете небезопасный innerHtml
 *  Вы используете делегирование
    
  * можно лучше: избегайте сложных условий и большой вложенности в условии. Чем сложнее условие, чем больше
  * вложенности в условии, тем сложнее анализировать код, сложнее искать ошибки и поддерживать такой код
  * самый простой вариант это убирать условия или блок в условии в отдельную функцию
 *
 * можно лучше: Старайтесь не объявлять большое количество переменных. Чем больше переменных, тем сложнее понимать за что они 
 * отвечают и какую полезную нагрузку несут в коде. Лучше инкапсулировать(прятать) переменные в функциях. 
 * В будущем вам проще будет искать ошибки и разбираться в сложных взаимосвязях
 *
 * работа принимается
 * 
 */