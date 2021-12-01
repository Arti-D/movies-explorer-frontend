import React from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox.js";

function SearchForm(props) {
    const [filterValue, setFilterValue] = React.useState("") 

    function handleInputChange(e) {
        setFilterValue(e.target.value)
    }

    function handleSearch() {
        props.handleSearchBtn(filterValue);
    }

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__wrap">
                    <input onChange={handleInputChange} type="text" className="search__input" type="search" placeholder="Фильм"></input>
                    <button onClick={handleSearch} type="button" className="search__btn">Найти</button>
                </div>
            </form>
            <FilterCheckbox handleIsShort={props.handleIsShort}/>
            <div className="content search__row"></div>
        </div>
    )
}

export default SearchForm;