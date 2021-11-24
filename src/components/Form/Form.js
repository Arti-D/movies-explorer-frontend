import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.png';
import { useLocation } from "react-router";

function Form(props) {
    const location = useLocation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value);
      }
    
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (location.pathname === "/signup") {
            console.log(props.name, email, password);
            props.onSubmit(props.name, email, password)
        } else if (location.pathname === "/signin") {
            console.log(email, password);
            props.onSubmit(email, password);
        }

    }

    return ( 
        <section className="form">
            <img className="form__icon" alt="icon" src={logo}/>
            <h2 className="form__greetings">{props.greets}</h2>
            <form className="form__form" onSubmit={handleSubmit}>
                <div className="form__wrapp">
                    {props.children}
                    <span className="form__placeholder">Email</span>
                    <input onChange={handleChangeEmail} required minLength="2" className="form__input" type="email" />
                    <span className="error"></span>
                    <span className="form__placeholder">Пароль</span>
                    <input onChange={handleChangePassword} required minLength="2" className="form__input" type="password" />
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
