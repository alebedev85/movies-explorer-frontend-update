import React from 'react';
import './FilmInfoPopup.css';

function FilmInfoPopup({card, onClose}) {

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
      </div>
    </div>
  )
}

export default FilmInfoPopup;