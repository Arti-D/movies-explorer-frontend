import React from "react";
import Form from "../Form/Form.js";
import { validateName } from "../../utils/validation.js";

function Register(props) {
    const [name, setName] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    function handleChangeName(e) {
        setName(e.target.value);
        setNameError(validateName(e.target.value))
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
        errorMessage={nameError}
        >
            <span className="error__text error__text_form">{nameError}</span>
            <span className="form__placeholder">Имя</span>
            <input onChange={handleChangeName} required minLength="2" maxLength="30" className="form__input" type="text" />    
        </Form>
    )
}

export default Register;