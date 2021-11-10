import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SavedMovies from "../SavedMovies/SavedMovies.js"

function Movies() {
    return (
        <section className="component movies">
            <MoviesCardList />
            <SavedMovies />
            <button className="movies__more-btn">Еще</button>
        </section>
    )
}

export default Movies;