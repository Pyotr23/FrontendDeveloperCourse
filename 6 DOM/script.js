
// Можно лучше (минута делов):   перенесите  в отдельный файл, меньше строк, больше понимание, 
// Правильная организация кода, это важная часть разработки. Ведь код надо постоянно поддерживать
// подключить его можно через  <script src="js/initialCards.js"></script> 
// Плюс мы выносим данные отдельно, а логика останется в этом файле 
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
   /*  Можно лучше: 
   *  Альтернативный способ создания карточки. При нем не требуется создавать вручную все
   * Вы можете реализовать функцию, которая сразу же возвращает “кусок” разметки. Это решает проблему постоянного createElement DOM-элементов. 
    function getTemplate(data){ 
      const template = `<div class="place-card"> 
                  <div class="place-card__image" style="background: url(${data.link})"> 
                    <button class="place-card__delete-icon"></button>
                  </div>
                  <div class="place-card__description">
                    <h3 class="place-card__name">${data.name}</h3>
                    <button class="place-card__like-icon"></button>
                  </div>
                </div>`
    return template;
    } 
   *  Этот кусок разметки в дальнейшем можно вставить в DOM, воспользовавшись методом insertAdjacentHTML().
   *  https: //developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
   *    pointElement.insertAdjacentHTML('afterend', getTemplate(data));
   */ 
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
// можно лучше: Для валидации используйте кастомный метод validation
// https: //developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_API%27s_element.setCustomValidity() 
// на русском https: //msiter.ru/tutorials/javascript/js_validation 
// на русском https://htmlacademy.ru/blog/useful/html/form-validation-techniques 
// на английском очень хорошая статья с примерами https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/ 
// 
// как пример, если вы установите  <input type="text" min="10" max="100" >
// то сразу сможете определить что текст слишком короткий, например так: 
//  
// if (validity.tooShort) { 
// // Значение слишком короткое 
// }
// if (validity.tooLong) { 
// // Значение слишком длинное 
// }
if (placeName.length !== 0 && placeLink.length !== 0){    
  closeForm();
  const newCard = createCard(placeName, placeLink);
  cardsContainer.appendChild(newCard);
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