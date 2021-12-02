import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import logoPath from "../../images/headerLogo.png";
import accountIcon from "../../images/account.svg";

function Header(props) {
    const location = useLocation();
    
    const headerVisibility = (
        `header ${location.pathname === '/signin' || location.pathname ==='/signup' || location.pathname ==='/error' ? 'header_hidden' : ''}`
    )
    const headerLocationClassName = (
        `${location.pathname === '/' ? 'header_promo' : 'header_not-promo'}`
    );

    function handleMenuBtn() {
        props.handleMenu()
    }

    return (      
    <header className={headerLocationClassName}>
        <div className={headerVisibility}>
            <img alt="логотип" src={logoPath} className="header__logo"/>
                {location.pathname === "/" && 
                <div className="header__wrapp">
                    <Link to="/signup" className="header__btn header__btn_signup">Регистрация</Link>
                    <Link to="/signin" className="header__btn header__btn_signin">Войти</Link>
                </div>
                } 
                {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") &&
                <div className={`header__menu ${props.isOpen && "header__menu_active"}`}>
                    <button onClick={handleMenuBtn} type="button" className="header__burger-icon"></button>
                    <nav className={`header__nav ${props.isOpen && "header__nav_active"}`}>
                        <button onClick={handleMenuBtn} className="header__cross-btn"></button>
                        <ul className="header__list">
                            <li className="header__elem">
                                <Link to="/movies" className="header__link">Фильмы</Link>
                            </li>
                            <li className="header__elem">
                                <Link to="/saved-movies" className="header__link">Сохраненные фильмы</Link>
                            </li>
                            <li className="header__elem">
                                <Link to="/profile" className="header__link header__account-link">Аккаунт<img className="header__acc-img" src={accountIcon} alt="аккаунт"/></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                }
        </div>
    </header>
    )
}

export default Header;