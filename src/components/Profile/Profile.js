import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as validation from "../../utils/validation";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [isSubmit, setIsSubmit] = React.useState(false)

    React.useEffect(() => {
        const notErr = emailError.length === 0 && nameError.length === 0
        const notSameData = userName !== currentUser.name || userEmail !== currentUser.email
        if(notErr && notSameData) {
            setIsSubmit(true)
        } else {
            setIsSubmit(false)
        }
    }, [nameError, emailError, userName, userEmail])

    React.useEffect(() => {
        setUserEmail(currentUser.email)
        setUserName(currentUser.name)    
    }, [currentUser.email, currentUser.name])

    function handleChangeName(e) {
        setUserName(e.target.value);
        setNameError(validation.validateName(e.target.value))
    }

    function handleChangeEmail(e) {
        setUserEmail(e.target.value);
        setEmailError(validation.validateEmail(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSubmit) {
            props.refactorUser(userName, userEmail)
        }
    }

    function handleLogOut(e) {
        e.preventDefault();
        props.handleLogOut();
    }

    return (
        <div className="component profile">
            <h2 className="profile__title">
                Привет, {currentUser.name}!
            </h2>
            <form className="profile__form">
                <div className="profile__form-container">
                    <div className="profile__input-wrap">
                        <input 
                        onChange={handleChangeName} 
                        value={userName} 
                        name="name" 
                        className="profile__input profile__input_name" 
                        type="text"/>
                        <label className="profile__label" for="name" >Имя</label>
                        <span className="error__text">{nameError}</span>
                    </div>
                    <div className="profile__input-wrap">
                        <input onChange={handleChangeEmail} value={userEmail || ''} name="email" className="profile__input" type="email" />
                        <label className="profile__label" for="email">Email</label>
                        <span className="error__text">{emailError}</span>
                    </div>
                </div>
                <div className="profile__btn-wrap">
                    <button disabled={isSubmit ? false : true} onClick={handleSubmit} className="profile__btn" type="submit">Редактировать</button>
                    <button onClick={handleLogOut} className="profile__btn" type="button">Выйти из аккаунта</button>
                </div>
            </form>

        </div>
    )
}

export default Profile;