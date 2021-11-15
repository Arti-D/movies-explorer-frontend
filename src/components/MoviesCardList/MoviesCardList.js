import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieImg from "../../images/в погоне за бенкси.jpg"

function MoviesCardList() {
    
    function renderCards() {
        const cards = []
        for (let i = 0; i < 12; i++) {
            cards.push(<MoviesCard name="В погоне за Бенкси" duration="27 минут" img={movieImg} />)
        }
        return cards
    }

    return (
        <section className="movie-list">
                <ul className="movie-list__list">
                    {renderCards()}
                </ul>
        </section>
    )
}

export default MoviesCardList;