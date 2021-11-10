import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
    return (
        <section className="movie-list component">
            <ul className="movie-list__list">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
        </section>
    )
}

export default SavedMovies;