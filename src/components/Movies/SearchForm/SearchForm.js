import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
    return (
        <div className="component">
            <form className="search__from">
                <div className="search__wrapp">
                    <input className="search__input" type="search" placeholder="Фильм"></input>
                    <button className="search__btn">Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </div>
    )
}

export default SearchForm;