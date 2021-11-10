import React from "react";

function ErrorPage(error) {
    return (
        <div className="error">
            <div className="error__info">
                <h1 className="error__status">{error.status}</h1>
                <p className="error__message">{error.message}</p>
            </div>
            <button type="button" className="error__back-btn">Назад</button>
        </div>
    )
}

export default ErrorPage;