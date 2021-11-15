import React from "react";

function FilterCheckbox() {
    return (
        <div class="checkbox">
            <label class="checkbox__item">
                <input type="checkbox" className="checkbox__input"/>
                <div class="checkbox__checkmark"></div>
                <div class="checkbox__body">Короткометражки</div>
            </label>
        </div>
    )
}

export default FilterCheckbox;