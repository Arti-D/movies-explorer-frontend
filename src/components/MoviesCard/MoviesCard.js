import React from "react";
const siteUrl = "https://api.nomoreparties.co"
function MoviesCard(props) {
    return (
        <li className="movie">
            <div className="movie__info">
                <h2 className="movie__title">{props.movie.nameRU}</h2>
                <span className="movie__duration">{`${props.movie.duration} мин`}</span>
            </div>
            <img alt={`обложка ${props.movie.nameRU}`} src={siteUrl + props.movie.image.url} className="movie__img" />
            <button  type="button" className="movie__save-btn">Сохранить</button>
        </li>
    )
}

export default MoviesCard;