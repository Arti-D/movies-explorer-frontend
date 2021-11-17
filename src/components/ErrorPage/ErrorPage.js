import React from "react";
import { useHistory } from "react-router-dom";

function ErrorPage(error) {
    const history = useHistory()

    function redirect() {
        history.push("/movies")
    }
    return (
        <div className="error">
            <div className="error__info">
                <h1 className="error__status">{error.status}</h1>
                <p className="error__message">{error.message}</p>
            </div>
            <button onClick={redirect} type="button" className="error__btn">Назад</button>
        </div>
    )
}

export default ErrorPage;