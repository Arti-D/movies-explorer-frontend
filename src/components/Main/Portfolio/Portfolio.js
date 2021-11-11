import React from "react";

function Portfolio() {
    return (
        <section className="component portfolio">
            <div className="content">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Статичный сайт</p>
                        <a className="portfolio__link" href="#"></a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Адаптивный сайт</p>
                        <a className="portfolio__link" href="#"></a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Одностраничное приложение</p>
                        <a className="portfolio__link" href="#"></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;