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
    if (!dto.owner._id || userInfo.id === dto.owner._id)
      return new OwnCard(dto, api, userInfo.id, showImage);
    return new Card(dto, api, userInfo.id, showImage);
  }

  openAddCardPopupButton.addEventListener('click', openAddCardPopup);
  editUserButton.addEventListener('click', openEditUserPopup);
})()


/*REVIEW. Резюме.

Проект творческий. Проделана большая работа.

Взаимодействие с сервером происходит правильно.
Выполнены все дополнительные задания.

Но, нарушены некоторые принципы ООП.

Что надо исправить.

!!! DONE !!!
К сожалению, из первого пункта я понял только, что надо отказаться от индексов при выборе форм. А вот про зависимость форм друг от друга и жёсткого количества
полей в форме не понял.

1. Нужно устранить нарушение принципа открытости закрытости проекта, который гласит, что проект может расширяться (то есть в него можно добавлять
новые функции и сущности), но при этом существующий код не должен меняться.

Вы обращаетесь к полям Ваших форм по индексу, но вдруг заказчик попросит Вас добавить ещё поле, или сделать чекбокс, или радио кнопки вверху формы?
Индексы у старых полей input могут измениться и Вам придётся править старый код, а не только добавлять новый. Поэтому обращение к DOM-элементам по
индексу недопустимо.  Также недопустимо жёстко определять сколько полей должно быть на форме и какие типы полей там обязательно должны присутствовать.
Если Вы делаете размётку из js (что вообще-то не предполагалось в данном проекте) нужно предусмотреть возможность обращения
к DOM-элементам по индивидуальному селектору. Так же формы должны иметь возможность меняться независимо друг от друга.

!!! DONE !!!
2. Из чек-листа 8-го задания: "В классах напрямую не создаются экземпляры других классов.". Проверьте все свои классы и устраните нарушение этого
требования. Экземпляры одних классов должны передаваться как параметры в другие классы, как и переменные из глобальной области видимости.


________________________________________________________________________________________________________________________________________________________

REVIEW2. Резюме2.

Постараюсь пояснить первое требование. При этом я хочу сказать, что я не столько хотела, чтобы Вы непременно исправили свой проект,
в котором уже выстроена какая-то логическая концепция, сколько хотела, чтобы Вы вообще обратили внимание на проблему зависимости js-кода от размётки,
от DOM-дерева, даже не важно, как это DOM-дерево создаётся, из js, или даётся в index.html. В профессиональном программировании стараются делать методы
классов js (по крайней мере тех, которые не создают размётку) независимыми от размётки. Вот простейший пример, почему это важно:
Вы на своей форме профиля сделали такую размётку: вверху поле имени, затем идёт поле ввода профессии, затем идёт поле ссылки на аватар.

Вы занесли DOM-элементы этих полей в классе работы с формой профиля в массив inputs по команде const [...inputs] = popupBuilder.popup.inputs
и обращаетесь к этим полям как inputs[0], inputs[1], inputs[2]. Заказчику не совсем понравилось расположение полей на форме, и он сказал,
что ссылка на аватар должна быть в самом верху формы. Тогда у Вас поле inputs[2] должно быть уже не ссылкой на аватар, и, хоть я, конечно,
и не знаю Ваш код, так как знаете его Вы, но, мне кажется, что Вам придётся из-за этой просьбы заказчика менять код не в одном классе.
А при размётке, данной в index.html, а не создаваемой из js, что надо будет менять код js при обращении к полям по индексу, а не только
код index.html при такой просьбе заказчика - это очевидно.

Сейчас, когда Вы задали атрибуты имён полей и обращаетесь к полям по этим атрибутам -
'name', 'about', 'avatar', в классе работы с формой профиля Вам не важно расположение этих полей, и при просьбе заказчика Вам надо будет менять
только классы-билдеры. Просьб от заказчиков на изменение размётки может быть много, и реальные проекты могут быть огромными, и с вероятностью 100%
они будут меняться и обрастать новыми функциями во время своей эксплуатации. Исключение обращения к DOM-элементам по индексу облегчает сопровождение
и расширение проекта.

Про независимость форм друг от друга и жёсткого задания, какие элементы должны присутствовать на форме и в каком количестве: в классическом варианте задания
форма профиля и форма карточки первоначально имеют одинаковое строение - имеют по 2 поля ввода, и многие студенты стали создавать обе формы из js по одному
и тому же шаблону template, что неправильно, потому что нигде в задании не сказано, что формы  должны иметь одинаковую структуру. Например, на одну форму
может быть в будущем добавлено одно поле, а на другую - два и неизвестно какого типа.

Вот такое пояснение.

Задание принимается.

Желаю, чтобы в Вашей жизни всегда было место творчеству и успехов в учёбе!

*/
