import React from "react";
import SearchForm from "./SearchForm/SearchForm.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies() {
    return (
        <section className="component movies">
            <div className="content content_movies">
                <SearchForm />
                <MoviesCardList />
                <div className="movies__btn-container">
                    <button type="button" className="movies__more-btn">Еще</button>
                </div>
            </div>
        </section>
    )
}

export default Movies;