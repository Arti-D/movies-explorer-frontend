import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import logoPath from "../../images/headerLogo.png";
import accountIcon from "../../images/account.svg";

function Header(props) {
    const location = useLocation();

    const headerVisibility = (
        `header content ${location.pathname === '/signin' || location.pathname ==='/signup' ? 'header_hidden' : ''}`
    )
    const headerLocationClassName = (
        `${location.pathname === '/' ? 'header_promo' : 'header_not-promo'}`
    );
    const headerWrappPromo = (
        `header__wrapp ${location.pathname === '/' ? 'header__wrapp_hide' : ''}`
    );
    const headerWrappLogin = (
        `header__wrapp ${location.pathname ==='/' ? '' : 'header__wrapp_hide'}`
    )

    return (      
    <header className={headerLocationClassName}>
        <div className={headerVisibility}>
            <img alt="логотип" src={logoPath} className="header__logo"/>
            <div className="header__btn-wrapp">
                <div className={headerWrappLogin}>
                    <Link to="/signup" className="header__btn header__btn_signup">Регистрация</Link>
                    <Link to="/signin" className="header__btn header__btn_signin">Войти</Link>
                </div>
                <div className={headerWrappPromo}>
                    <Link to="/movies" className="header__link">Фильмы</Link>
                    <Link to="/saved-movies" className="header__link">Сохраненные фильмы</Link>
                    <Link to="/profile" className="header__link header__account-link">Аккаунт<img className="header__acc-img" src={accountIcon} alt="аккаунт"/></Link>
            </div>
        </div>
        </div>
        
    </header>
    )
}

export default Header;