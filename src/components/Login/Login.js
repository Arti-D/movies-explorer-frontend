import React from "react";
import Form from "../Form/Form.js";

function Login() {
    return (
        <Form
            greets="Рады видеть!"
            btnText="Войти"
            question="Ещё не зарегистрированы?"
            linkText="Регистрация"
        />
    )
}

export default Login;