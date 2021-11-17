import React from "react";

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <label className="checkbox__item">
                <input type="checkbox" className="checkbox__input"/>
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Короткометражки</div>
            </label>
        </div>
    )
}

export default FilterCheckbox;