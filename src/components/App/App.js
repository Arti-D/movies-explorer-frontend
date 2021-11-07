import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './App.css';
// ИМПОРТ КОМПОНЕНТОВ
import Main from '../Main/Main.js';
//

function App() {
  return (
    <div className="page">
      <Main></Main>
    </div>
  );
}

export default withRouter(App);
