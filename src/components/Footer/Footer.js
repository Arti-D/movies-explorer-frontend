import React from "react";
import { useLocation } from "react-router";

function Footer() {
    const location = useLocation();
    const footerDisplay = (
        `footer ${location.pathname === "/signin" || location.pathname === "/signup" ? 'footer_hidden' : ''}`
    )
    
    return (
        <footer className={footerDisplay}>
            <div className="content">
                <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__main">
                    <p className="footer__copyright">&copy;Arti 2021</p>
                    <ul className="footer__socials">
                        <li className="footer__elem">
                            <a target="_blank" rel="noreferrer" className="footer__link" href="https://github.com/Arti-D">GitHub</a>
                        </li>
                        <li className="footer__elem">
                            <a target="_blank" rel="noreferrer" className="footer__link" href="https://t.me/arti_di">Telegram</a>
                        </li>
                        <li className="footer__elem">
                            <a target="_blank" rel="noreferrer" className="footer__link" href="https://practicum.yandex.ru/web">Яндекс.Практикум</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;