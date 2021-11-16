import React from "react";
import avatar from "../../../images/avatar.jpg"

function AboutMe() {
    return (
        <section className="component about-me">
            <div className="content">
                <h2 className="component__title">Студент</h2>
                <div className="about-me__profile">
                    <div className="about-me__info">
                        <div className="about-me__text">
                            <h3 className="about-me__name">Artemis</h3>
                            <p className="about-me__annotation">Студент-разработчик 17 лет</p>
                            <p className="about-me__about">что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю 
                            что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю
                            что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю что-нибудь про меня, потом придумаю
                            </p>
                        </div>
                        <ul className="about-me__socials">
                            <li className="about-me__socials-elem"><a href="https://github.com/Arti-D" target="_blank" rel="noreferrer" className="about-me__link">GitHub</a></li>
                            <li className="about-me__socials-elem"><a href="https://t.me/arti_di" target="_blank" rel="noreferrer" className="about-me__link">Telegram</a></li>
                        </ul>
                    </div>
                        <img className="about-me__avatar" src={avatar} alt="аватарка"/>
                </div>
            </div>
            
        </section>
    )
}

export default AboutMe;