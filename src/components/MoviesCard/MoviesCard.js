import React from "react";

function MoviesCard(props) {
    return (
        <li className="movie-list__elem">
            <div className="movie-list__info">
                <h2 className="movie-list__title">{props.name}</h2>
                <span className="movie-list__duration">{props.duration}</span>
            </div>
            <img alt={props.name} className="movie-list__img" />
            <button type="button" className="movie-list__save-btn">Сохранить</button>
        </li>
    )
}

export default MoviesCard;