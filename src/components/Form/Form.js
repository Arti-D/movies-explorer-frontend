import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.png';

function Form(props) {
    return ( 
        <section className="form">
            <img className="form__icon" alt="icon" src={logo}/>
            <h2 className="form__greetings">{props.greets}</h2>
            <form className="form__form">
                <div className="form__wrapp">
                    {props.children}
                    <span className="form__placeholder">Email</span>
                    <input required minLength="2" className="form__input" type="email" />
                    <span className="error"></span>
                    <span className="form__placeholder">Пароль</span>
                    <input required minLength="2" className="form__input" type="password" />
                    <span className="error"></span>
                </div>
                <button className="form__btn" type="submit">
                    {props.btnText}
                </button>
            </form>
            <span className="form__question">{props.question}<Link className="form__link" to={props.linkPath}>{props.linkText}</Link></span>
        </section>
    )
}

export default Form;
