import React from "react";

function Footer() {
    return (
        <footer className="component footer">
            <div className="content">
                <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__main">
                    <p className="footer__copyright">&copy;Arti 2021</p>
                    <ul className="footer__socials">
                        <li className="footer__elem">
                            <a className="footer__link" href="#">GitHub</a>
                        </li>
                        <li className="footer__elem">
                            <a className="footer__link" href="#">Telegram</a>
                        </li>
                        <li className="footer__elem">
                            <a className="footer__link" href="#">Яндекс.Практикум</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;