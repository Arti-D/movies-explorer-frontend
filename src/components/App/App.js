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
import * as auth from '../../utils/auth.js';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isFooterVisible, setFooterVisible] = React.useState(true)

  const location = useLocation()

  // FIRST RENDER
  React.useEffect(() => {
    handleFooterVisability();
    checkToken();
    updateUserInfo();
    getSavedMovies();
    window.addEventListener('resize', updateAmountOfMovies)
    return () => {
      window.removeEventListener('resize', updateAmountOfMovies)
    }
  }, []);

  // MOVIES CARDS 
  const [movies, setMovies] = React.useState([])
  const [isCardError, setCardError] = React.useState(false)
  const [isSearchBtnClicked, setIsSearchBtnClicked] = React.useState(false)


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
  
  function handleFooterVisability() {
    if (location.pathname === "/saved-movies" || location.pathname === "/movies" || location.pathname === "/") {
      setFooterVisible(true)
    } else {
      setFooterVisible(false)
    }
  };

  // СОХРАНЕНИЕ ФИЛЬМОВ
  const [savedMovies, setSavedMovies] = React.useState([])

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        const savedMovies = movies.data.map((item) => {
          item.isSaved = true;
          return item
        })
        setSavedMovies(savedMovies)
        localStorage.setItem("savedMovies", savedMovies)
      })
  }

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
        }).then((savedCard) => {
          savedCard.isSaved = true;
          setSavedMovies([...savedMovies, savedCard])
        }).catch((err) => console.log(err))
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
  // ПОИСК ФИЛЬМОВ
  function movieSearch() {
    moviesApi.getAllMovies()
    .then(movies => {
      const isSavedMovies = handleIsSaved(movies)
      localStorage.setItem("movies", JSON.stringify(isSavedMovies))
      setMovies(isSavedMovies)
    }).catch((err) => setCardError(true))
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

  function handleSearchBtn() {
    setIsSearchBtnClicked(true)
    if(localStorage.getItem("movies")) {
      let movies = JSON.parse(localStorage.getItem("movies"))
      const isSavedMovies = handleIsSaved(movies);
      setMovies(isSavedMovies)
    } else {
      movieSearch()
    }
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
        }
      })
      .catch((err) => console.log(err));
  }

  function handleAuthorization(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        console.log(data)
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegistration(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        history.push("/signin");
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
        console.log("апдейт юзер инфо", data.data)
      })
      .catch((err) => console.log(err))
  }

  function handleRefactorUser(name, email) {
    mainApi
      .refactorUser(name, email)
      .then((res) => {
        console.log("апдейтед юзер", res.data)
        setCurrentUser(res.data)
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header isLoggedIn={loggedIn}/>
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
          amountOfMovies={amountOfMovies}
          movies={movies}
          handleSearchBtn={handleSearchBtn}
          isError={isCardError}
          moreBtn={handleMoreCardBtn}
          isMoreBtnVisible={isMoreBtnVisible}
          handleSaveMovie={handleSaveMovie}
          isSaved={handleIsSaved}
          ></ProtectedRoute>
          <ProtectedRoute
          loggedIn={loggedIn}
          path="/saved-movies"
          component={SavedMovies}
          handleSaveMovie={deleteSavedMovie}
          movies={savedMovies}
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
            <ErrorPage status={"404"} message="not found"/>
          </Route>
          <ProtectedRoute
          loggedIn={loggedIn}
          path="/"
          component={Main}
          ></ProtectedRoute>
        </Switch>
        {isFooterVisible && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
