import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './App.css';
// ИМПОРТ КОМПОНЕНТОВ
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js'
import Header from '../Header/Header.js'
//

function App() {
  const [isLogined, setIsLogined] = React.useState(false);
  return (
    <div className="page">
      <Header login={isLogined}/>
      <Main />
      <Footer />
    </div>
  );
}

export default withRouter(App);
