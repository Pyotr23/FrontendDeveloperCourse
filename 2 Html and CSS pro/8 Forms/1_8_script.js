// HTML-элементы
const allPage = document.querySelector('.page');
const allContent = document.querySelector('.content');
const formSection = document.querySelector('.form');
const menuToggle = document.querySelector('.form__toggle');
const menuIcon = document.querySelector('.form__toggle-image');
const contentHeading = document.querySelector('.content__heading');
const contentSubheading = document.querySelector('.content__subheading');
const contentText = document.querySelector('.content__text');
const contentEmail = document.querySelector('.content__link_email');
const contentPubDate = document.querySelector('.content__date');
const contentImage = document.querySelector('.content__image-item');
const imageCredit = document.querySelector('.content__image-copyright');
const contentQuote = document.querySelector('.content__quote');
const contentListItem = document.querySelector('.content__list-item');
const contentLinks = document.querySelectorAll('.content__link');
const form = document.querySelector('.form__admin');

// Поля ввода формы
const formElements = form.elements;
const heading = formElements.heading;
const subheading = formElements.subheading;
const text = formElements.mainText;
const email = formElements.email;
const fontFamily = formElements.fontFamily;
const headingFontSize = formElements.headingFontSize;
const textFontSize = formElements.textFontSize;
const pubDate = formElements.pubDate;
const image = formElements.image;
const columnNumber = formElements.columnNumber;
const textColor = formElements.textColor;
const contentWidth = formElements.contentWidth;
const extraOption = formElements.extraOption;

// Ссылки на изображения
const BOMBARDIER = 'https://pictures.s3.yandex.net/html-forms/BOMBARDIER.jpg';
const BOMBARDIER_CREDIT_LINK = 'https://pictures.s3.yandex.net/html-forms/BOMBARDIER.jpg';
const BOMBARDIER_CC = 'https://creativecommons.org/licenses/by-sa/2.0/legalcode';
const BOMBARDIER_CC_IMG = 'https://pictures.s3.yandex.net/html-forms/BOMBARDIER_CC.svg';
const HOBBIT = 'https://pictures.s3.yandex.net/html-forms/HOBBIT.jpg';
const HOBBIT_CREDIT_LINK = 'https://pictures.s3.yandex.net/html-forms/BOMBARDIER.jpg';
const HOBBIT_CC = 'https://creativecommons.org/licenses/by/2.0/legalcode';
const HOBBIT_CC_IMG = 'https://pictures.s3.yandex.net/html-forms/BOMBARDIER_CC.svg';
const TIGER = 'https://pictures.s3.yandex.net/html-forms/TIGER.jpg';
const TIGER_CREDIT_LINK = 'https://www.flickr.com/photos/papasdos/34150356073/';
const TIGER_CC = 'https://creativecommons.org/licenses/by/2.0/legalcode';
const TIGER_CC_IMG = 'https://pictures.s3.yandex.net/html-forms/TIGER_CC.svg';
const CONNECTED = 'https://pictures.s3.yandex.net/html-forms/CONNECTED.jpg';
const CONNECTED_CREDIT_LINK = 'https://pictures.s3.yandex.net/html-forms/CONNECTED.jpg';
const CONNECTED_CC = 'https://creativecommons.org/licenses/by-nc-nd/2.0/';
const CONNECTED_CC_IMG = 'https://pictures.s3.yandex.net/html-forms/CONNECTED_CC.svg';

//  HTML изображений
const IMAGES = {
  bombardier: {
    src: BOMBARDIER,
    credit: `Фото: ${createContentLinkHTML(BOMBARDIER_CREDIT_LINK, 'Hans-Peter Gauster')}, "Bombardier CSeries CS300 HB-JCA" © 2017 ${createContentLinkHTML(BOMBARDIER_CC, 'CC BY-SA 2.0')}, &nbsp;&nbsp; ${createImageHTML(BOMBARDIER_CC_IMG, '10')}`,
  },
  hobbit: {
    src: HOBBIT,
    credit: `Дракон только что приземлился в Лос-Анджелесе. Фото: ${createContentLinkHTML(HOBBIT_CREDIT_LINK, 'Alan Wilson')}, "Smaug!" © 2014 ${createContentLinkHTML(HOBBIT_CC, 'CC BY-SA 2.0')} &nbsp;&nbsp; ${createImageHTML(HOBBIT_CC_IMG, '10')}`,
  },
  tiger: {
    src: TIGER,
    credit: `«Тигролёт» над международным аэропортом «Внуково». Фото: ${createContentLinkHTML(TIGER_CREDIT_LINK, 'Papas Dos')}, "EI-XLD". © 2017 ${createContentLinkHTML(TIGER_CC, 'CC BY 2.0')} &nbsp;&nbsp; ${createImageHTML(TIGER_CC_IMG, '18')}`,
  },
  connected: {
    src: CONNECTED,
    credit: `В аэропорту Вестчестер, штат Нью-Йорк. Фото: ${createContentLinkHTML(CONNECTED_CREDIT_LINK, 'Dave Montiverdi')}, N709JB "Fly-Fi". © 2018 ${createContentLinkHTML(CONNECTED_CC, 'CC BY-NC-ND 2.0')} &nbsp;&nbsp; ${createImageHTML(CONNECTED_CC_IMG, '10')}`,
  }
};

// Шрифты
const FONTS = {
  ibm: 'IBM Plex Serif',
  ubuntu: 'Ubuntu',
  istok: 'Istok Web'
};

/*
 * Вспомогательные функции
 */

// Создает HTML для ссылки в тексте
function createContentLinkHTML(href, linkText) {
  return `<a class="content__link" target="_blank" href=${href}>${linkText}</a>`;
}

// Создает HTML для картинки
function createImageHTML(src, height, alt = '') {
  return `<img src=${src} height=${height}px alt=${alt}>`;
}

// Приводит дату к привычному формату
function formatDate(date) {
  return date.split('-').reverse().join('.');
}

// Вставляет текст в элемент
function insertText(input, element) {
  element.innerText = input.value;
}

// Открывает и закрывает меню
function toggleMenu(menu, closedClass) {
  menu.classList.toggle(closedClass);
}

// Назначает шрифт элементу
function setContentFontFamily(font, element) {
  if (!FONTS[font]) {
    console.error('Нет такого шрифта.');
    return;
  }

  element.style.fontFamily = FONTS[font];
}

// Вставляет нужное изображение и подпись
function setImageWithCredit(imageId, imageElement, creditElement) {
  if (!IMAGES[imageId]) {
    console.error('Нет такой картинки.');
    return;
  }

  imageElement.setAttribute('src', IMAGES[imageId].src);
  creditElement.innerHTML = IMAGES[imageId].credit;
}

/*
 * Обработчики событий
 */

// Обработчик клика по иконке меню
menuToggle.onclick = () => {
  toggleMenu(formSection, 'form_is-closed');
};

// Обработчик сабмита формы
form.onsubmit = (e) => {
  e.preventDefault();

  // Закроем меню
  toggleMenu(formSection, 'form_is-closed');

  // Применим всё
  contentEmail.setAttribute('href', 'mailto:' + email.value);
  contentHeading.style.fontSize = headingFontSize.value + 'px';
  contentText.style.fontSize = textFontSize.value + 'px';
  contentPubDate.innerText = formatDate(pubDate.value);
  allContent.style.color = textColor.value;
  contentText.style.width = contentWidth.value + '%';
  allPage.style.backgroundColor = extraOption[0].checked ? 'black' : 'white';
  contentHeading.style.fontWeight = extraOption[1].checked ? 'bold' : 'normal';
  contentText.style.columnCount = 1;

  if (columnNumber[1].checked) {
    contentText.style.columnCount = 2;
  }

  contentLinks.forEach((item) => {
    item.style.color = textColor.value;
  });

  insertText(heading, contentHeading);
  insertText(subheading, contentSubheading);
  insertText(text, contentText);
  insertText(email, contentEmail);
  setContentFontFamily(fontFamily.value, allContent);
  setImageWithCredit(image.value, contentImage, imageCredit);
};