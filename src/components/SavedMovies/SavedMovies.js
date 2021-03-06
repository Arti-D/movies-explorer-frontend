import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieImg from "../../images/movieimg.jpg"
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {
    function renderCards() {
        const cards = []
        for (let i = 0; i < 3; i++) {
            cards.push(<MoviesCard name="В погоне за Бенкси" duration="27 минут" img={movieImg} />)
        }
        return cards
    }
    return (
        <section className="movie-list component">
            <div className="content">     
                <SearchForm />
                <ul className="movie-list__list">
                    {renderCards()}
                </ul>
                <div className="movies__btn-container">
                    <button type="button" className="movies__more-btn movies__more-btn_hidden">Еще</button>
                </div>
            </div>
        </section>
    )
}

export default SavedMovies;