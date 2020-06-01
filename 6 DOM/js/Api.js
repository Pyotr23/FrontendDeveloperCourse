'use strict'
class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
            .then(res => res.json());
            // .then(res => console.log(res));             
    }
  
    // другие методы работы с API
}

    const api = new Api({
        baseUrl: 'https://praktikum.tk/cohort11',
        headers: {
            authorization: '24e96659-b7fc-4d52-a3f3-ac251a10cc64',
            'Content-Type': 'application/json'           
        }
    });