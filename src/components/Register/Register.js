import React from "react";
import Form from "../Form/From.js";

function Register() {
    return (
        <Form
        greets="Добро пожаловать!"
        btnText="Зарегистрироваться"
        question="Уже зарегистрировались?"
        linkText="Войти"
        >
            <span className="form__placeholder">Имя</span>
            <input className="form__input" type="text" />
            <span className="error"></span>
        </Form>
    )
}

export default Register;