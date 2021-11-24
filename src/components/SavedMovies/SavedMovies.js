import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {
    return (
        <section className="movie-list component">
            <div className="content">     
                <SearchForm />
                <ul className="movie-list__list">
                    
                </ul>
                <div className="movies__btn-container">
                    <button type="button" className="movies__more-btn movies__more-btn_hidden">Еще</button>
                </div>
            </div>
        </section>
    )
}

export default SavedMovies;