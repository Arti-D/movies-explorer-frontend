import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.png';
import { useLocation } from "react-router";
import * as validation from "../../utils/validation";

function Form(props) {
    const location = useLocation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("");
    const [isSubmit, setIsSubmit] = React.useState(false);

    React.useEffect(() => {
        if(emailError.length === 0 && passwordError.length === 0 && props.errorMessage.length === 0) {
            setIsSubmit(true)
        } else {
            setIsSubmit(false)
        }
    }, [emailError, passwordError, props.errorMessage])
    function handleChangeEmail(e) {
        setEmail(e.target.value);
        setEmailError(validation.validateEmail(e.target.value))
      }
    
    function handleChangePassword(e) {
        setPassword(e.target.value);
        setPasswordError(validation.validatePassword(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSubmit) {
            if (location.pathname === "/signup") {
                console.log(props.name, email, password);
                props.onSubmit(props.name, email, password)
            } else if (location.pathname === "/signin") {
                console.log(email, password);
                props.onSubmit(email, password);
            }
        }

    }

    return ( 
        <section className="form">
            <Link className="header__link" to="/">
            <img className="form__icon" alt="icon" src={logo}/>
            </Link>
            <h2 className="form__greetings">{props.greets}</h2>
            <form className="form__form" onSubmit={handleSubmit}>
                <div className="form__wrapp">
                    {props.children}
                    <span className="error__text error__text_form">{emailError}</span>
                    <span className="form__placeholder">Email</span>
                    <input onChange={handleChangeEmail} required minLength="2" className="form__input" type="email" />
                    <span className="form__placeholder">Пароль</span>
                    <span className="error__text error__text_form">{passwordError}</span>
                    <input onChange={handleChangePassword} required minLength="2" className="form__input" type="password" />
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
