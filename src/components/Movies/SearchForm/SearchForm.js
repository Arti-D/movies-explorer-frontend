import React from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox.js";

function SearchForm(props) {
    return (
        <div className="search">
            <form className="search__form">
                <div className="search__wrap">
                    <input className="search__input" type="search" placeholder="Фильм"></input>
                    <button onClick={props.handleSearchBtn} type="button" className="search__btn">Найти</button>
                </div>
            </form>
            <FilterCheckbox />
            <div className="content search__row"></div>
        </div>
    )
}

export default SearchForm;