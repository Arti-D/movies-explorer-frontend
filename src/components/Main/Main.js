import React from "react";
import Promo from "./Promo/Promo.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Techs from "./Techs/Techs.js";

function Main() {
    return (
        <section className="component">
            <Promo />
            <AboutProject />
            <Techs />
        </section>
    )
}

export default Main;
