import React, { useState, useEffect } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch'
import { api } from '../../utils/MainApi.js';
import { useResize } from '../hooks/useResize';
import Search from '../../utils/Search';
import { MOVIES_CARDS_L, MOVIES_CARDS_M, MOVIES_CARDS_S } from '../../utils/constants';
import { ADD_MOVIES_CARD_L, ADD_MOVIES_CARD_M, ADD_MOVIES_CARD_S } from '../../utils/constants';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Movies({ onCardClick, onSaveClick }) {

  const { savedMovies, cardsResalt } = React.useContext(CurrentUserContext);

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана
  // const { token } = React.useContext(CurrentUserContext);

  const [cardsNumber, setCardsNumber] = useState({ first: '', next: '', }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора

  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране


  //проверка localStorage и получение карточек
  // useEffect(() => {
  //   // api.setToken(token);
  //   api.getCards()
  //     .then((res) => {
  //       setSavedMovies(res);
  //     })
  //     .catch((err) => console.log(err));
  //   if (!beatfilmMovies.length) {
  //     moviesApi.getCards()
  //       .then((res) => {
  //         // setBeatfilmMovies(res);
  //         // localStorage.setItem(localMovies, JSON.stringify(res));
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(setIsPreloader(false));
  //   } else { setIsPreloader(false) };
  // }, [])

  // useEffect(() => {
  //   if (!cardsResalt.length) {
  //     setCardsResalt(beatfilmMovies);
  //   }
  // }, [beatfilmMovies])

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

  // const searchMovies = new Search(beatfilmMovies) //экземпляр класса для поиска

  //обработчик поиска фильмов
  function handleSearchMovie(text, statusCheckbox) {
    // const searchResalt = searchMovies.search(text, statusCheckbox)
    // setCardsResalt(searchResalt);
  };

  //обработтчик проверки сохраненных фильмов
  function handlerCheckSaveMovie(movie) {
    return movie.saved === true
  }

  //обработтчик удаления сохраненных фильмов
  function handlerDeleteMovie(movie) {
    // const id = savedMovies.find((elm) => elm.movieId === movie.id)._id;
    // api.deleteCard(id)
    //   .then(() => {
    //     setSavedMovies(savedMovies.filter((elm) => elm._id !== id))
    //   })
    //   .catch((err) => console.log(err));
  }

  // //обработтчик сохранения фильмов
  // function handlerSaveButtonClick(movie) {
  //   movie.saved ? movie.saved = !movie.saved : movie.saved = true;
  //   setCardsResalt((state) => state.map((m) => m.id === movie.id ? movie : m));
  // }

  return (
    <main className="movies">
      <SearchForm
        onSearchMovie={handleSearchMovie}
      // text={localStorage.getItem(moviesSearchText)}
      // statusCheckbox={localStorage.getItem(moviesStatusCheckbox) === 'true' ? true : false}
      />
      {isPreloader ? <Preloader /> : cardsResalt.length ? <MoviesCardList
        cards={cardsResalt.slice(0, shownCardsNumber)}
        onClick={handleNextCards}
        checkSaveMivie={handlerCheckSaveMovie}
        onSaveClick={onSaveClick}
        onDeleteClick={handlerDeleteMovie}
        buttonVisibility={cardsResalt.length > shownCardsNumber}
        onCardClick={onCardClick}
      />
        :
        <NotFoundSearch />}
    </main>
  );
}

export default Movies;