import React from "react";
import SearchForm from "./SearchForm/SearchForm.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "./Preloader/Preloader.js";

function Movies(props) {
    return (
        <section className="component movies">
            <div className="content content_movies">
                <SearchForm
                isShort={props.isShort}
                handleSearchBtn={props.handleSearchBtn}
                handleIsShort={props.handleIsShort}/>
                {props.isFetching ? <Preloader /> : 
                <MoviesCardList
                movies={props.movies}
                amountOfMovies={props.amountOfMovies}
                handleSaveMovie={props.handleSaveMovie}
                isSaved={props.isSaved}
                />}
                {props.isError && <p className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
                <div className="movies__btn-container">
                    {props.isMoreBtnVisible && <button onClick={props.moreBtn} type="button" className="movies__more-btn">Еще</button>}
                </div>
            </div>
        </section>
    )
}

export default Movies;