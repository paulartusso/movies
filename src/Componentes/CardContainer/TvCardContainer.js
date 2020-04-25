import React from "react";
import Card from "../Card/Card";
import "../../Styles/CardContainer.css";

const TvCardContainer = ({tvShows}) =>{
      
    return(
        <div className="trending-container">

            {tvShows.map(item=>{
                    return(
                        <Card 
                        tvShows={tvShows}
                        >
                        <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`} className="image"/>
                        </Card>   
                    )
                })}
        </div>
    );
}


export default TvCardContainer;