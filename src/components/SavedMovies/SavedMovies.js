import React from "react";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function SavedMovies(props) {
    return (
        <section className="movie-list component">
            <div className="content">     
                <SearchForm
                isShort={props.isShort}
                handleSearchBtn={props.handleSearchBtn}
                handleIsShort={props.handleIsShort}
                />
                {props.isFetching ? <Preloader /> : 
                <MoviesCardList
                movies={props.movies}
                amountOfMovies={props.movies.length}
                handleSaveMovie={props.handleSaveMovie}
                isSaved={true}
                isError={props.isError}
                ></MoviesCardList>}
            </div>
        </section>
    )
}

export default SavedMovies;