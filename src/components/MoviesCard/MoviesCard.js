import React from "react";
import { useLocation } from "react-router";
const siteUrl = "https://api.nomoreparties.co";

function MoviesCard(props) {
    const movie = props.movie;
    const location = useLocation()

    const btnClassName = (
        `movie__save-btn ${ movie.isSaved ? 'movie__save-btn_active' : ''}`
    )

    function handleSaveMovie(e){
        e.preventDefault();
        props.handleSaveMovie(movie)
        movie.isSaved = !movie.isSaved
    }

    return (
        <li className="movie">
            <div className="movie__info">
                <h2 className="movie__title">{movie.nameRU}</h2>
                <span className="movie__duration">{`${movie.duration} мин`}</span>
            </div>
            <img 
            alt={`обложка ${movie.nameRU}`} 
            src={location.pathname === "/saved-movies" ? movie.image : siteUrl + movie.image.url} 
            className="movie__img" />
            <button onClick={handleSaveMovie} type="button" className={btnClassName}>
                {movie.isSaved ? "" : "Сохранить"}
            </button>
        </li>
    )
}

export default MoviesCard;