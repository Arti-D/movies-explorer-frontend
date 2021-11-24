import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieImg from "../../images/в погоне за бенкси.jpg"

function MoviesCardList(props) {
    return (
        <section className="movie-list">
                <ul className="movie-list__list">
                    {console.log("from card:", props.movies)}
                    {props.movies && (props.movies.slice(0, props.amountOfMovies).map((item) => (
                        <MoviesCard
                            movie={item}
                            onCardSave={props.onCardSave}
                            key={item.id}
                            onCardDelete={props.onCardDelete}
                        ></MoviesCard>
                    )))}
                </ul>
        </section>
    )
}

export default MoviesCardList;