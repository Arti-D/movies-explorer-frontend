import React from "react";
import Form from "../Form/Form.js";

function Login(props) {
    return (
        <Form
            greets="Рады видеть!"
            btnText="Войти"
            question="Ещё не зарегистрированы?"
            linkText="Регистрация"
            linkPath="/signup"
            onSubmit={props.onSubmit}
        />
    )
}

export default Login;