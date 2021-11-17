import React, { Profiler } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { withRouter } from "react-router-dom";
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
//

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isFooterVisible, setFooterVisible] = React.useState(true)

  
  const location = useLocation()

  function handleFooterVisability() {
    if (location.pathname === "/saved-movies" || location.pathname === "/movies" || location.pathname === "/") {
      setFooterVisible(true)
    } else {
      setFooterVisible(false)
    }
  };

  React.useEffect(() => {
    handleFooterVisability()
  });


  return (
    <div className="page">
      <Header isLoggedIn={loggedIn}/>
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile profileName="Artemis"/>
        </Route>
        <Route path="/error">
          <ErrorPage status={"404"} message="not found"/>
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      {isFooterVisible && <Footer />}
    </div>
  );
}

export default withRouter(App);
