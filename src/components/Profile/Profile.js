import React from "react";

function Profile(props) {
    return (
        <div className="component profile">
            <h2 className="profile__title">
                Привет, {props.profileName}!
            </h2>
            <form className="profile__form">
                <div className="profile__form-container">
                    <div className="profile__input-wrapp">
                        <label for="name">Имя</label>
                        <input name="name" className="profile__input" type="text"/>
                    </div>
                    <div className="profile__input-wrapp">
                        <label for="email">Email</label>
                        <input name="email" className="profile__input" type="email" />
                    </div>
                </div>
                <div className="profile__btn-wrapp">
                    <button className="profile__btn" type="submit">Редактировать</button>
                    <button className="profile__btn" type="submit">Выйти из аккаунта</button>
                </div>
            </form>

        </div>
    )
}

export default Profile;