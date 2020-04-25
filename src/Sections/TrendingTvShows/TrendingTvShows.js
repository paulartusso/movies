import React, {useState, useEffect} from "react";
import Axios from "axios";
import TvCardContainer from "../../Componentes/CardContainer/TvCardContainer";
import "../../Styles/Common.css";

const TrendingTvShows = () =>{

    const [tvShows, setTvShows] = useState([]);
        
    useEffect(()=> {
        let tvBaseUrl = "https://api.themoviedb.org/3/trending/tv/week?api_key=1a33d2a63d1685081b5d07f619b37cd4";

        Axios.get(tvBaseUrl)
        .then(res => {
            console.log(res.data.results)
            setTvShows(res.data.results);
        })
        .catch(er => console.log(er));
    }, []);

    
      
    return(
        <div>
            <span className="title-span">
                <h2 className="h2">
                    Trending TV Shows
                </h2>
                <h3 className="h3">
                    Explore All
                </h3>
            </span>
            <TvCardContainer
            tvShows={tvShows}
            ></TvCardContainer>
           
        </div>
    );
}


export default TrendingTvShows;