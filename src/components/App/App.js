import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { withRouter } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext.js"
import './App.css';
// ИМПОРТ КОМПОНЕНТОВ
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js'
import Header from '../Header/Header.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js'
import ErrorPage from '../ErrorPage/ErrorPage';
import ProtectedRoute from "../../utils/ProtectedRoute.js";
// ИМПОРТ ФУНКЦИЙ
import * as auth from '../../utils/auth.js';
import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import * as filterMovies from '../../utils/filterMovies.js'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const location = useLocation()

  // ОБРАБОТКА ОШИБОК 
  const [errorMessage, setErrorMessage] = React.useState("")
  const [errorStatus, setErrorStatus] = React.useState("")

  function errorHandler(err) {
    setErrorMessage(`На сервере произошла ошибка: ${err}`);
    setErrorStatus(err)
    history.push("/error")
  }
  // FIRST RENDER
  React.useEffect(() => {
    handleFooterVisability();
    checkToken();
    updateUserInfo();
    window.addEventListener('resize', updateAmountOfMovies)
    return () => {
      window.removeEventListener('resize', updateAmountOfMovies)
    }
  }, []);

  // РАБОТА С КОМПOНЕНТАМИ

  // -------------HEADER-------------
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // ---------------FOOTER-------------
  const [isFooterVisible, setFooterVisible] = React.useState(true)

  function handleFooterVisability() {
    if (location.pathname === "/saved-movies" || location.pathname === "/movies" || location.pathname === "/") {
      setFooterVisible(true)
    } else {
      setFooterVisible(false)
    }
  };
  
  // ОТОБРАЖЕНИЕ КАРТОЧЕК
  const [movies, setMovies] = React.useState([]);
  const [isCardError, setCardError] = React.useState(false);
  const [isSearchBtnClicked, setIsSearchBtnClicked] = React.useState(false);

  const [amountOfMovies, setAmountOfMovies] = React.useState(() => {
    if ((window.innerWidth <= 1064) && (window.innerWidth > 676)){
      return 8;
    } else if (window.innerWidth <= 676) {
      return 5
    } else if (window.innerWidth > 1064) {
      return 12
    }
  })
  const [isMoreBtnVisible, setIsMoreBtnVisible] = React.useState(true)

  React.useEffect(() => {
    if (movies.length <= amountOfMovies){
      setIsMoreBtnVisible(false)
    } else {
      setIsMoreBtnVisible(true)
    }
  }, [amountOfMovies, isSearchBtnClicked])

  const updateAmountOfMovies = () => {
    if ((window.innerWidth <= 1064) && (window.innerWidth > 676)){
      setAmountOfMovies(8)
    } else if (window.innerWidth <= 676) {
      setAmountOfMovies(5)
    } else if (window.innerWidth > 1064) {
      setAmountOfMovies(12)
    }
  }

  function  handleMoreCardBtn() {
    if (window.innerWidth <= 1064) {
      setAmountOfMovies(amountOfMovies + 2)
    } else {
      setAmountOfMovies(amountOfMovies + 3)
    }
  }

  // СОХРАНЕНИЕ ФИЛЬМОВ
  const [savedMovies, setSavedMovies] = React.useState([])
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  
  function handleSaveMovie(movie) {
    const isSaved = movie.isSaved;
    if (!isSaved) {
      mainApi
        .saveMovie({
          country: movie.country,
          director: movie.director,
          duration: String(movie.duration),
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailer: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
          movieId: String(movie.id),
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        })
        .then((savedCard) => {
          savedCard.isSaved = true;
          setSavedMovies([...savedMovies, savedCard])
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies))
        })
        .catch((err) => console.log(err))
    } else {
      const card = findMovie(movie)
      deleteSavedMovie(card);
    }
  }


  function findMovie(movie) {
    const card = savedMovies.find((item) => item.movieId === String(movie.id))
    return card
  }

  function deleteSavedMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then((data) => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
        deleteMovieFromMovies(movie);
      })
      .catch((err) => console.log(err))
  }

  function deleteMovieFromMovies(movie) {
    const newMovies = movies.map((item) => {
      if(String(item.id) === movie.movieId) {
        item.isSaved = false;
        return item
      } else {
        return item
      }
    })
    setMovies(newMovies)
  }

  // ЗАПРОС ДАННЫХ СЕРВЕРА
  const [isFetching, setIsFetching] = React.useState(false);

  function movieSearch() {
    setIsFetching(true)
    moviesApi
    .getAllMovies()
    .then(movies => {
      const isSavedMovies = handleIsSaved(movies)
      localStorage.setItem("movies", JSON.stringify(isSavedMovies))
      setMovies(isSavedMovies)
      setIsFetching(false)
    })
    .catch((err) => setCardError(true))
  }
  
  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        const savedMovies = movies.data.map((item) => {
          item.isSaved = true;
          return item
        })
        setSavedMovies(savedMovies)
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies))
      })
      .catch((err) => setCardError(true))
  }

  // ПОИСК С ФИЛЬТРАМИ
  function handleSearchBtn(value) {
    setIsSearchBtnClicked(true)
    if(localStorage.getItem("movies")) {
      const films = filterMovies.filter(value, JSON.parse(localStorage.getItem("movies")), isShort)
      const isSavedMovies = handleIsSaved(films);
      setMovies(isSavedMovies)
    } else {
      movieSearch()
      const films = filterMovies.filter(value, movies, isShort)
      setMovies(films)
    }
  }

  function handleSearchSavedBtn(value) {
    if(localStorage.getItem("savedMovies")) {
      const films = filterMovies.filter(value, JSON.parse(localStorage.getItem("savedMovies")), isShort)
      setFilteredMovies(films)
    } else {
      getSavedMovies();
      const films = filterMovies.filter(value, savedMovies, isShort)
      setFilteredMovies(films)
    }
  }
  // ФИЛЬТР КОРОТКОМЕТРАЖЕК
  
  const [isShort, setIsShort] = React.useState(false)
  function handleIsShort() {
    setIsShort(!isShort)
    // console.log('boo', isShort);
  }

  // сохранен ли фильм
  function handleIsSaved(movies) {
    const isSavedMovies = movies.map((mov) => {
      return isSavedMovie(mov)
    });
    return isSavedMovies
  }

  function isSavedMovie(item) {
    const isSaved = savedMovies.some((i) => i.movieId === String(item.id))
    if(isSaved) {
      item.isSaved = true
    } else {
      item.isSaved = false
    }
    return item;
  }

  // АВТОРИЗАЦИЯ
  const [currentUser, setCurrentUser] = React.useState({})
  const history = useHistory()
  
  function checkToken() {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push("/movies");
          getSavedMovies();
        }
      })
      .catch((err) => console.log(err));
  }

  function handleAuthorization(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        currentUser.name = data.name
        currentUser.email = data.email
        setCurrentUser(currentUser)
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleRegistration(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        setCurrentUser(res.data)
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleLogOut() {
    auth
      .logOut()
      .then((res) => {
        if(res) {
          setLoggedIn(false)
        }
      })
      .catch((err) => console.log(err))
  }

  // ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
  function updateUserInfo() {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data.data)
      })
      .catch((err) => console.log(err))
  }

  function handleRefactorUser(name, email) {
    mainApi
      .refactorUser(name, email)
      .then((res) => {
        setCurrentUser(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header 
        isLoggedIn={loggedIn}
        isOpen={isMenuOpen}
        handleMenu={handleMenu}/>
        <Switch>
          <Route path="/signin">
            <Login onSubmit={handleAuthorization}/>
          </Route>
          <Route path="/signup">
            <Register onSubmit={handleRegistration}/>
          </Route>
          <ProtectedRoute
          loggedIn={loggedIn}
          path="/movies"
          component={Movies}
          isFetching={isFetching}
          amountOfMovies={amountOfMovies}
          movies={movies}
          handleSearchBtn={handleSearchBtn}
          isError={isCardError}
          moreBtn={handleMoreCardBtn}
          isMoreBtnVisible={isMoreBtnVisible}
          handleSaveMovie={handleSaveMovie}
          isSaved={handleIsSaved}
          handleIsShort={handleIsShort}
          ></ProtectedRoute>
          <ProtectedRoute
          loggedIn={loggedIn}
          path="/saved-movies"
          component={SavedMovies}
          handleSaveMovie={deleteSavedMovie}
          movies={filteredMovies}
          isFetching={isFetching}
          handleSearchBtn={handleSearchSavedBtn}
          handleIsShort={handleIsShort}
          isError={isCardError}
          ></ProtectedRoute>
          <ProtectedRoute
          loggedIn={loggedIn}
          path="/profile"
          component={Profile}
          handleLogOut={handleLogOut}
          refactorUser={handleRefactorUser}
          profileName="Artemis"
          ></ProtectedRoute>
          <Route path="/error">
            <ErrorPage status={errorStatus} message={errorMessage}/>
          </Route>
          <Main 
          loggedIn={loggedIn}
          path="/"/>
        </Switch>
        {isFooterVisible && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
