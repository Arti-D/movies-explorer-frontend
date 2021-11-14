import React from "react";
import SearchForm from "./SearchForm/SearchForm.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies() {
    return (
        <section className="component movies">
            <SearchForm />
            <MoviesCardList />
            <button className="movies__more-btn">Еще</button>
        </section>
    )
}

export default Movies;