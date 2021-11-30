import React from "react";
import SearchForm from "./SearchForm/SearchForm.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies(props) {
    return (
        <section className="component movies">
            <div className="content content_movies">
                <SearchForm handleSearchBtn={props.handleSearchBtn}/>
                <MoviesCardList
                movies={props.movies}
                amountOfMovies={props.amountOfMovies}
                handleSaveMovie={props.handleSaveMovie}
                isSaved={props.isSaved}
                />
                {props.isError && <p className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
                <div className="movies__btn-container">
                    {props.isMoreBtnVisible && <button onClick={props.moreBtn} type="button" className="movies__more-btn">Еще</button>}
                </div>
            </div>
        </section>
    )
}

export default Movies;