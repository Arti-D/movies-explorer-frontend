import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="movie-list">
                <ul className="movie-list__list">
                    {props.movies && (props.movies.slice(0, props.amountOfMovies).map((item) => (
                        <MoviesCard
                            handleSaveMovie={props.handleSaveMovie}
                            movie={item}
                            onCardSave={props.onCardSave}
                            key={item.id}
                            isSaved={props.isSaved}
                        ></MoviesCard>
                    )))}
                </ul>
        </section>
    )
}

export default MoviesCardList;