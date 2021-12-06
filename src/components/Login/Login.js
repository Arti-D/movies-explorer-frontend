import React from "react";
import Form from "../Form/Form.js";

function Login(props) {
    return (
        <Form
            isFetching={props.isFetching}
            greets="Рады видеть!"
            btnText="Войти"
            question="Ещё не зарегистрированы?"
            linkText="Регистрация"
            linkPath="/signup"
            onSubmit={props.onSubmit}
            errorMessage=""
        />
    )
}

export default Login;