import React from "react";
import Card from "../Card/Card";
import "../../Styles/CardContainer.css";

const MoviesCardContainer = ({movies}) =>{
      
    return(
        <div className="trending-container">

            {movies.map(item=>{
                    return(
                        <Card>
                        <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`} className="image"/>
                        </Card>   
                    )
                })}
        </div>
    );
}


export default MoviesCardContainer;