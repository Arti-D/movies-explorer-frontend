import React from "react";

function Header() {
    return (      
    <header className="header">
        <img className="header__logo"/>
        <div className="header__btn-wrapp">
            <div className="header__wrapp">
                <button className="header__btn header__signup-btn">Регистрация</button>
                <button className="header__btn header__signin-btn">Войти</button>
            </div>
            <div className="header__wrapp header__wrapp_login">
               <a className="header__link">Фильмы</a>
               <a className="header__link">Сохраненные фильмы</a>
               <a className="header__link"><img alt="аккаунт"/> Аккаунт</a>
            </div>
        </div>
    </header>
    )
}

export default Header;