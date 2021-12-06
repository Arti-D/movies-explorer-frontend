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

    
    React.useEffect(() => {
        if(props.length > 0) { 
            props.handleSearchBtn(filterValue)
        }
    }, [props.isShort])

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__wrap">
                    <input onChange={handleInputChange} type="text" className="search__input" type="search" placeholder="Введите название фильма"></input>
                    <button onClick={handleSearch} type="button" className="search__btn">Найти</button>
                </div>
            </form>
            <FilterCheckbox
            isShort={props.isShort}
            handleIsShort={props.handleIsShort}/>
            <div className="content search__row"></div>
        </div>
    )
}

export default SearchForm;