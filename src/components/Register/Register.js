import React from "react";
import Form from "../Form/Form.js";

function Register(props) {
    const [name, setName] = React.useState("")
    function handleChangeName(e) {
        setName(e.target.value);
      }

    return (
        <Form
        greets="Добро пожаловать!"
        btnText="Зарегистрироваться"
        question="Уже зарегистрировались?"
        linkText="Войти"
        linkPath="/signin"
        onSubmit={props.onSubmit}
        name={name}
        >
            <span className="form__placeholder">Имя</span>
            <input onChange={handleChangeName} required minLength="2" maxLength="30" className="form__input" type="text" />
            <span className="error"></span>
        </Form>
    )
}

export default Register;