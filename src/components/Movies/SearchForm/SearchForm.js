import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
    return (
        <>
        <form className="search__form">
            <div className="search__wrap">
                <input className="search__input" type="search" placeholder="Фильм"></input>
                <button type="button" className="search__btn">Найти</button>
             </div>
        </form>
        <FilterCheckbox />
        <div className="content search__row"></div>
        </>
    )
}

export default SearchForm;