import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './App.css';
// ИМПОРТ КОМПОНЕНТОВ
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js'
//

function App() {
  return (
    <div className="page">
      <Main />
      <Footer />
    </div>
  );
}

export default withRouter(App);
