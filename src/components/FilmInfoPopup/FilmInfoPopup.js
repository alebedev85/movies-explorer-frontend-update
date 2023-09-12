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
          <img className="popup__poster"
            src={card.image ? `https://api.nomoreparties.co/${card.image.url}` : ''}
            alt={`Постер ${card.nameRU}`} />
        </div>
        <div className='popup__data'>
          <p className='popup__title'>{card.nameRU}</p>
          <p className='popup__subtitle'>{card.nameEN}</p>
          <a href={card.trailerLink} className='popup__link link' target="_blank" rel="noreferrer">Трейлер &#62;&#62;</a>
          <p className='popup__text popup__text_bold'>О фильме:</p>
          <p className='popup__text'><span className='popup__text_span'>Год: </span>{card.year}</p>
          <p className='popup__text'><span className='popup__text_span'>Страна: </span>{card.country}</p>
          <p className='popup__text'><span className='popup__text_span'>Режисер: </span>{card.director}</p>
          <p className='popup__text'><span className='popup__text_span'>Время: </span>{Math.floor(card.duration / 60)}ч {card.duration - 60 * Math.floor(card.duration / 60)}м</p>
        </div>
        <p className='poup__description'>{card.description}</p>
      </div>
    </div>
  )
}

export default FilmInfoPopup;