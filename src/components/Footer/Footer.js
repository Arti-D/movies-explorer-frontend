import React from "react";

function Footer() {
    return (
        <footer className="component footer">
            <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__main">
                <p className="footer__copyright">&copy;Arti</p>
                <ul className="footer__socials">
                    <li className="footer__socials-elem">
                        <a className="footetr__link" href="#">GitHub</a>
                        <a className="footetr__link" href="#">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;