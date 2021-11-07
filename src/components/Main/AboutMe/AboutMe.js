import React from "react";
import AboutProject from "../AboutProject/AboutProject";

function AboutMe() {
    return (
        <section className="component about-me">
            <h2 className="component-title">Студент</h2>
            <div className="about-me__profile">
                <div className="about-me__text">
                    <div className="about-me__text">
                        <h3 className="about-me__name">Гиндуллина Диана</h3>
                        <p className="about-me__about">что-нибудь про меня, потом придумаю</p>
                    </div>
                    <ul className="about-me__socials">
                        <li className="about-me__socials-elem"><a href="#" className="about-me__link">GitHub</a></li>
                        <li className="about-me__socials-elem"><a href="#" className="about-me__link">Telegram</a></li>
                    </ul>
                </div>
                <div className="about-me__avatar-container">
                    <img className="about-me__avatar" alt="аватарка"/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;