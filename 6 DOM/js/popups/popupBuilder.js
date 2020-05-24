class PopupBuilder {
    // constructor() {
    //     this.popup = new Popup();
    // }

    renderPopup() {
        /*
            Надо исправить: Не следует использовать поиск по document внутри методов класса.
            Вместо этого можно передать ссылки на необходимые DOM-узлы в качестве параметров при создании экземпляра класса.
         */
        /*
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */
        document.querySelector('.root').appendChild(this.popup.container);
    }
}
