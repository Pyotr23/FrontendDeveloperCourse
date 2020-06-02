'use strict'
class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
        .then(res => {
            if (res.ok)             
                return res.json();
            return [];
        })           
    }   
    
    getUser() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
        .then(res => {
            if (res.ok)             
                return res.json();
            return Promise.reject();
        })         
    }

    updateUser(userInfo) {
        return fetch(`${this._baseUrl}/users/meу`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userInfo.name,
                about: userInfo.about
            })
        })
        .then(res => {
            if (res.ok)
                return res.json();
            return Promise.reject();
        });
    }
}

    const api = new Api({
        baseUrl: 'https://praktikum.tk/cohort11',
        headers: {
            authorization: '24e96659-b7fc-4d52-a3f3-ac251a10cc64',
            'Content-Type': 'application/json'           
        }
    });