class UserInfo {
    constructor(container) {
        this._container = container;        
        this._nameElement = container.querySelector('.user-info__name');
        this._jobElement = container.querySelector('.user-info__job');
        this._name = this._nameElement.textContent;
        this._job = this._jobElement.textContent;
    }

    set(name, job) {
        this._name = name;
        this._job = job;
    }   

    get name() {
        return this._name;
    }

    get job() {
        return this._job;
    }

    update() {
        /*  !!! DONE !!!
            Надо исправить: Dom-элементы user-info__name и user-info__job уже искались в конструкторе.
            Стоит dom-элемент присваивать какой-либо переменной (например, this.nameElement)
            и затем использовать её в текущем методе. Аналогично для job.
         */
        this._nameElement.textContent = this._name;
        this._jobElement.textContent = this._job;
    }
}
