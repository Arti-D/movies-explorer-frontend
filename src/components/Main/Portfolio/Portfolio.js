import React from "react";

function Portfolio() {
    return (
        <section className="component portfolio">
            <div className="content">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/how-to-learn/">Статичный сайт</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/russian-travel/index.html">Адаптивный сайт</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://mesto.arti.nomoredomains.club">Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;