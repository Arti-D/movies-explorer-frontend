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

  // ПОИСК ФИЛЬМОВ
  function movieSearch() {
    moviesApi.getAllMovies()
    .then(movies => {
      localStorage.setItem("movies", JSON.stringify(movies))
      setMovies(movies)
    }).catch((err) => setCardError(true))
  }

  function handleSearchBtn() {
    setIsSearchBtnClicked(true)
    if(localStorage.getItem("movies")) {
      let movies = JSON.parse(localStorage.getItem("movies")) 
      setMovies(movies)
    } else {
      movieSearch()
    }
  }

  function handleFooterVisability() {
    if (location.pathname === "/saved-movies" || location.pathname === "/movies" || location.pathname === "/") {
      setFooterVisible(true)
    } else {
      setFooterVisible(false)
    }
  };

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
          ></ProtectedRoute>
          <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
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
