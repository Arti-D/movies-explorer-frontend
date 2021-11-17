import React from "react";
import Form from "../Form/Form.js";

function Register() {
    return (
        <Form
        greets="Добро пожаловать!"
        btnText="Зарегистрироваться"
        question="Уже зарегистрировались?"
        linkText="Войти"
        linkPath="/signin"
        >
            <span className="form__placeholder">Имя</span>
            <input required minLength="2" maxLength="30" className="form__input" type="text" />
            <span className="error"></span>
        </Form>
    )
}

export default Register;