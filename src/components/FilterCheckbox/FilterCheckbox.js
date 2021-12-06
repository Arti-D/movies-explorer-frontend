import React from "react";

function FilterCheckbox(props) {

    function handleCheckBox() {
        props.handleIsShort()
    }
    
    return (
        <div className="checkbox">
            <label className="checkbox__item">
                <input onClick={handleCheckBox} type="checkbox" className="checkbox__input"/>
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Короткометражки</div>
            </label>
        </div>
    )
}

export default FilterCheckbox;