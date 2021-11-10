import React from "react";
import { useLocation } from "react-router";
import logoPath from "../../images/headerLogo.png";

function Header(props) {
    const location = useLocation();
    // const headerLocationClassName = (
    //     `header ${location.pathname === '/' ? 'header_promo' : 'header_login'}`
    // );
    // const headerWrappLocationClassName = (
    //     `header__wrapp ${location.pathname === '/' ? 'header__wrapp_promo' : 'header__wrapp_login'}`
    // );

    return (      
    <header className="header_promo">
        <div className="header content">
            <img alt="логотип" src={logoPath} className="header__logo"/>
            <div className="header__btn-wrapp">
                <div className="header__wrapp header__wrapp_not-login">
                    <a className="header__btn header__btn_signup">Регистрация</a>
                    <a className="header__btn header__btn_signin">Войти</a>
                </div>
                <div className="header__wrapp header__wrapp_login">
                    <a className="header__link">Фильмы</a>
                    <a className="header__link">Сохраненные фильмы</a>
                    <a className="header__link"><img alt="аккаунт"/> Аккаунт</a>
            </div>
        </div>
        </div>
        
    </header>
    )
}

export default Header;