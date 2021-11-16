import React from "react";

function Portfolio() {
    return (
        <section className="component portfolio">
            <div className="content">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Статичный сайт</p>
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/how-to-learn/"></a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Адаптивный сайт</p>
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/russian-travel/index.html"></a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Одностраничное приложение</p>
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://mesto.arti.nomoredomains.club"></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;