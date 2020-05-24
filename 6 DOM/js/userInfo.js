class UserInfo {
    constructor(container) {
        this.container = container;
        this.name = container.querySelector('.user-info__name').textContent;
        this.job = container.querySelector('.user-info__job').textContent;
    }

    set(name, job) {
        this.name = name;
        this.job = job;
    }

    update() {
        /*
            Надо исправить: Dom-элементы user-info__name и user-info__job уже искались в конструкторе.
            Стоит dom-элемент присваивать какой-либо переменной (например, this.nameElement)
            и затем использовать её в текущем методе. Аналогично для job.
         */
        this.container.querySelector('.user-info__name').textContent = this.name;
        this.container.querySelector('.user-info__job').textContent = this.job;
    }
}
