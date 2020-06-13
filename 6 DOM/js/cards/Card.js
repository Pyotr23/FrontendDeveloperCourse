'use strict'
class Card {
    constructor (dto, api, currentUserId, showImage, showBadge, showLikes) {        
        this._dto = dto;      
        this._api = api;   
        this._currentUserId = currentUserId;    
        this._showImage = showImage; 
        this._showBadge = showBadge;  
        this._showLikes = showLikes;     
        this._template =  `<div class="place-card">        
                                <div class="place-card__image">                                    
                                </div>
                                <div class="place-card__description">
                                    <h3 class="place-card__name"></h3>
                                    <div class="place-card__like-container">
										<button class="place-card__like-icon"></button>
										<span class="place-card__like-count">0</span>
									</div>  
                                </div>
                            </div>`;

        this._create();        
    }

    _addButton(cssClass) {                
        const button = document.createElement('button');
        button.classList.add('place-card__icon');
        button.classList.add(cssClass);
        const imageElement = this._view.querySelector('.place-card__image');
        imageElement.appendChild(button);
        button.addEventListener('click', (event) => this._showBadge(event, this._dto));
    }

    get dto() {
        return this._dto;
    }

    get view() {
        return this._view;
    }   

    _create = () => {
        this._view = this._createCardNodeTemplate();        
        this._addLink();
        this._addName(); 
        this._likeCountElement = this._view.querySelector('.place-card__like-count');
        this._setLikeState();       
        this._setEventListeners();
        return this._view;
    }

    _setLikeState = () => {         
        this._likeCountElement.textContent = this._dto.likes.length;
        const likeImage = this._view.querySelector('.place-card__like-icon');
        if (this._dto.likes.some(user => user._id === this._currentUserId))
            likeImage.classList.add('place-card__like-icon_liked');
        else 
            likeImage.classList.remove('place-card__like-icon_liked');
    }

    _createCardNodeTemplate = () => {        
        const element = document.createElement('div');
        element.insertAdjacentHTML('beforeend', this._template.trim());
        return element.firstChild;       
    }

    _addLink = () => {
        const placeCardImage = this._view.querySelector('.place-card__image');
        placeCardImage.setAttribute('data-url', this._dto.link);
        placeCardImage.style.backgroundImage = `url(${this._dto.link})`;
    }

    _addName = () => {
        this._view.querySelector('.place-card__name').textContent = this._dto.name;
    }    

    _setEventListeners() {           
        this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like); 
        this._view.querySelector('.place-card__like-icon').addEventListener('mouseenter',(event) => this._showLikes(event, this._dto));         
        this._view.querySelector('.place-card__image').addEventListener('click', () => this._showImage(this._dto.link));
        // this.
        // this._view.querySelector('.place-card__image').addEventListener('mouseover', 
        //     () => { this._showBadge(this._dto.owner.name, this._dto.owner.avatar) });
    }

    _remove = (event) => {        
        this._api.deleteCard(this._dto._id);
        this._view.remove();
        event.stopPropagation();
    }

    _like = (event) => {        
        if (event.target.classList.contains('place-card__like-icon_liked')) {
            this._api.removeLike(this._dto._id)
            .then(dto => {
                this._dto = dto;
                this._setLikeState();
            });             
        }            
        else {            
            this._api.setLike(this._dto._id)
            .then(dto => {
                this._dto = dto;
                this._setLikeState();
            });            
        }                      
    }
}
