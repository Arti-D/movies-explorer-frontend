import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');


    React.useEffect(() => {
        setUserEmail(currentUser.email)
        setUserName(currentUser.name)    
    }, [currentUser])

    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    function handleChangeEmail(e) {
        setUserEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.refactorUser(userName, userEmail)
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
                        <input onChange={handleChangeName} value={userName || ''} name="name" className="profile__input profile__input_name" type="text"/>
                        <label className="profile__label" for="name" >Имя</label>
                    </div>
                    <div className="profile__input-wrap">
                        <input onChange={handleChangeEmail} value={userEmail || ''} name="email" className="profile__input" type="email" />
                        <label className="profile__label" for="email">Email</label>
                    </div>
                </div>
                <div className="profile__btn-wrap">
                    <button onClick={handleSubmit} className="profile__btn" type="submit">Редактировать</button>
                    <button onClick={handleLogOut} className="profile__btn" type="button">Выйти из аккаунта</button>
                </div>
            </form>

        </div>
    )
}

export default Profile;