import React, { useState, useEffect } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch';
import { useResize } from '../hooks/useResize';

import { MOVIES_CARDS_L, MOVIES_CARDS_M, MOVIES_CARDS_S } from '../../utils/constants';
import { ADD_MOVIES_CARD_L, ADD_MOVIES_CARD_M, ADD_MOVIES_CARD_S } from '../../utils/constants';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Movies({ onCardClick, onSaveClick, searchMovie }) {

  const { savedMovies, cardsResalt } = React.useContext(CurrentUserContext);

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана
  // const { token } = React.useContext(CurrentUserContext);

  const [cardsNumber, setCardsNumber] = useState({ first: '', next: '', }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора

  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране


  //зависимость колличества отображаемых карточек от размера экрана
  useEffect(() => {
    if (isScreenS) {
      setCardsNumber({
        first: MOVIES_CARDS_S,
        next: ADD_MOVIES_CARD_S,
      })
    } else if (isScreenM) {
      setCardsNumber({
        first: MOVIES_CARDS_M,
        next: ADD_MOVIES_CARD_M,
      })
    } else if (isScreenL) {
      setCardsNumber({
        first: MOVIES_CARDS_L,
        next: ADD_MOVIES_CARD_L,
      })
    }
  }, [width])

  //определение колличества показываемых карточек
  useEffect(() => {
    setShownCardsNumber(cardsNumber.first)
  }, [cardsNumber])

  //обработчик нажатия кнопки ещё
  function handleNextCards() {
    setShownCardsNumber(shownCardsNumber + cardsNumber.next)
  };

  //обработтчик проверки сохраненных фильмов
  function handlerCheckSaveMovie(movie) {
    return movie.saved === true
  }


  return (
    <main className="movies">
      <SearchForm
        onSearchMovie={searchMovie}
      // text={localStorage.getItem(moviesSearchText)}
      // statusCheckbox={localStorage.getItem(moviesStatusCheckbox) === 'true' ? true : false}
      />
      {isPreloader ? <Preloader /> : cardsResalt.length ? <MoviesCardList
        cards={cardsResalt.slice(0, shownCardsNumber)}
        onClick={handleNextCards}
        checkSaveMivie={handlerCheckSaveMovie}
        onSaveClick={onSaveClick}
        buttonVisibility={cardsResalt.length > shownCardsNumber}
        onCardClick={onCardClick}
      />
        :
        <NotFoundSearch />}
    </main>
  );
}

export default Movies;