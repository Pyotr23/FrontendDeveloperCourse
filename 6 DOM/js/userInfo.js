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
        this.container.querySelector('.user-info__name').textContent = this.name;
        this.container.querySelector('.user-info__job').textContent = this.job;
    }
}