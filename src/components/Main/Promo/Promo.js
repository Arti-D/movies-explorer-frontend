import React from "react";
function Promo() {
    return (
        <section className="component component_promo">
            <div className="content promo">
                <header className="promo__header">
                    <img className="promo__logo"/>
                    <div className="promo__btn-wrapp">
                    <button className="promo__btn promo__signup-btn">Регистрация</button>
                    <button className="promo__btn promo__signin-btn">Войти</button>
                    </div>
                </header>
                <div className="promo__content-wrapp">
                    <div className="promo__text-content">
                        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                        <p className="promo__about">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <div className="promo__image-container">
                        <img className="promo__image"/>
                    </div>
                </div>
                <div className="promo__more">
                    <button className="promo__btn promo__more-btn">Узнать больше</button>
                </div>
            </div>
        </section>
    )
}

export default Promo;