import React from "react";

function AboutProject() {
    return (
        <div className="component about-project">
            <h2 className="about-project__title">О пректе</h2>
            <div className="about-project__text-wrapp">
                <div className="about-project__text-block">
                    <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__annotation">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__text-block">
                    <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__annotation">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timeline">
                <div className="about-project__back">
                    <p className="about-project__time">1 неделя</p>
                    <span className="about-project__type">Back-end</span>
                </div>
                <div className="about-project__front">
                    <p className="about-project__time about-project__time_front">4 недели</p>
                    <span className="about-project__type">Front-end</span>
                </div>
            </div>
        </div>
    )
}

export default AboutProject;