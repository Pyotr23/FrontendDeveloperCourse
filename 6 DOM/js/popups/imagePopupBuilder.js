class ImagePopupBuilder extends PopupBuilder {
    constructor(parentNode) {         
        super(parentNode);     
        this._popup = new ImagePopup();        
    }

    withImage(link) {
        this._popup.withImage(link);
    } 

    renderImage() {
        /*  !!! DONE !!!
            Можно лучше: Использование внутренних свойств экземпляров класса считается плохой практикой и нарушает основы ООП (инкапсуляция).
            Вместо этого можно реализовать отдельные геттеры и сеттеры:
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
         */        
        this._popup.content.appendChild(this._popup.image);
    }
}
