import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="movie-list component">
            <ul className="movie-list__list">
                <MoviesCard/>
            </ul>
        </section>
    )
}

export default MoviesCardList;