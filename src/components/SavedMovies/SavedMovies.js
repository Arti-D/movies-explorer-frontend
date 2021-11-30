import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function SavedMovies(props) {
    return (
        <section className="movie-list component">
            <div className="content">     
                <SearchForm />
                <MoviesCardList
                movies={props.movies}
                amountOfMovies={props.movies.length}
                handleSaveMovie={props.handleSaveMovie}
                isSaved={true}
                ></MoviesCardList>
                <div className="movies__btn-container">
                    <button type="button" className="movies__more-btn movies__more-btn_hidden">Еще</button>
                </div>
            </div>
        </section>
    )
}

export default SavedMovies;