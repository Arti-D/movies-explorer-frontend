import React from "react";

function Profile(props) {
    return (
        <div className="component profile">
            <h2 className="profile__title">
                Привет, {props.profileName}!
            </h2>
            <form className="profile__form">
                <div className="profile__form-container">
                    <div className="profile__input-wrap">
                        <input name="name" className="profile__input profile__input_name" type="text"/>
                        <label className="profile__label" for="name" >Имя</label>
                    </div>
                    <div className="profile__input-wrap">
                        <input name="email" className="profile__input" type="email" />
                        <label className="profile__label" for="email">Email</label>
                    </div>
                </div>
                <div className="profile__btn-wrap">
                    <button className="profile__btn" type="submit">Редактировать</button>
                    <button onClick={props.handleLogOut} className="profile__btn" type="button">Выйти из аккаунта</button>
                </div>
            </form>

        </div>
    )
}

export default Profile;