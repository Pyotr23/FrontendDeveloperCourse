
// Приветствую Вас! Очень хотел попробовать сделать данную работу с помощью шаблона проектирования "Строитель". Я понимаю, 
// что для конкретной работы это избыточная сложность. Но тем не менее я надеюсь, что Вы оцените и поможете
// довести желаемое до конца. Буду рад любым советам и ссылкам! 

const cardList = new CardList(document.querySelector('.places-list'));
const openAddCardPopupButton = document.querySelector('.user-info__button');
const editUserButton = document.querySelector('.button_place_user-info');
const userInfo = new UserInfo(document.querySelector('.user-info'));
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

randomFillPlaces();