import React from "react";
import { useLocation } from "react-router";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const location = useLocation()
    return (
        <section className="movie-list">
            {props.movies.length === 0 && <p className="movie-list__empty">По вашему запросу ничего не найдено</p>}
                <ul className="movie-list__list">
                    {props.movies.length > 0 && (props.movies.slice(0, props.amountOfMovies).map((item) => (
                        <MoviesCard
                            handleSaveMovie={props.handleSaveMovie}
                            movie={item}
                            onCardSave={props.onCardSave}
                            key={item.id}
                            isSaved={props.isSaved}
                        ></MoviesCard>
                    )))}
                    {location.pathname === "/saved-movies" && props.movies.map((item) => {
                        <MoviesCard
                        handleSaveMovie={props.handleSaveMovie}
                        movie={item}
                        onCardSave={props.onCardSave}
                        key={item.id}
                        isSaved={props.isSaved}
                        ></MoviesCard>
                    }) }
                </ul>
        </section>
    )
}

export default MoviesCardList;