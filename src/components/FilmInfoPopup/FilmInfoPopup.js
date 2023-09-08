import React from 'react';
import './FilmInfoPopup.css';

function FilmInfoPopup({ card, onClose }) {

  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    };
  }

  return (
    <div className={`popup  ${Object.keys(card).length ? 'popup_opened' : ''}`}
      onClick={handleOverlayClose} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <div className='popup__media'>
          <img class="card__poster"
            src={card.image ? `https://api.nomoreparties.co/${card.image.url}` : ''}
            alt={`Постер ${card.nameRU}`} />
        </div>
        <div className='popup__data'>
          <p>{card.nameRU}</p>
          <p>{card.nameEN}</p>
          <a href={card.trailerLink} className='card__link link' target="_blank" rel="noreferrer">Трейлер</a>
          <p>Год: {card.year}</p>
          <p>Страна: {card.country}</p>
          <p>Режисер: {card.director}</p>
          <p>Время: {Math.floor(card.duration / 60)}ч {card.duration - 60 * Math.floor(card.duration / 60)}м</p>
        </div>
        <p className='poup__description'>{card.description}</p>
      </div>
    </div>
  )
}

export default FilmInfoPopup;