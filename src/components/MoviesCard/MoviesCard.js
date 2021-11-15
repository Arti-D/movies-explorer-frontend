import React from "react";

function MoviesCard(props) {
    return (
        <li className="movie">
            <div className="movie__info">
                <h2 className="movie__title">{props.name}</h2>
                <span className="movie__duration">{props.duration}</span>
            </div>
            <img alt={props.name} src={props.img} className="movie__img" />
            <button type="button" className="movie__save-btn">Сохранить</button>
        </li>
    )
}

export default MoviesCard;