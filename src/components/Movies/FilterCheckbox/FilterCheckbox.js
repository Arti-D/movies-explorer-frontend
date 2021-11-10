import React from "react";

function FilterCheckbox() {
    return (
        <div class="checkboxes">
            <label class="checkbox__item">
                <input type="checkbox"/>
                <div class="checkbox__checkmark"></div>
                <div class="checkbox__body">Корометражки</div>
            </label>
        </div>
    )
}

export default FilterCheckbox;