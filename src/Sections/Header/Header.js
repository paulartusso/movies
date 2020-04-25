import React from "react";
import HeaderContent from "./HeaderContent";
import "./Header.css";

const Header = ({movies}) =>{
    return(
        <div>
            <div className="header-container">
                <HeaderContent
                    movies={movies}
                    title={movies.title}
                >
                <img className="header-image" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg"}/>
                </HeaderContent>
            </div>
        </div>                )
}

export default Header;

