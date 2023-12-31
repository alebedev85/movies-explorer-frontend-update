import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, onClick, buttonVisibility, onSaveClick, checkSaveMivie, onDeleteClick, onClose, onCardClick }) {

  return (
    <section className="card-list" aria-label="Картачки c фильмами">
      <ul className='card-list__container'>
        {cards.map((movie) => (
          <MoviesCard
            key={movie._id || movie.id}
            movie={movie}
            onSaveClick={onSaveClick}
            onDeleteClick={onDeleteClick}
            isSaved={checkSaveMivie}
            onClose={onClose}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
      {buttonVisibility && (
        <button className='card-list__next-button button' onClick={onClick}>
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;