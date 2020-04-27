import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../../Componentes/Titles/Titles";
import TvCardContainer from "../../../Componentes/CardContainer/TvCardContainer";
import "../../../Styles/Common.css";

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
            <Titles>
                {"Trending Tv Shows"}
            </Titles>
            <TvCardContainer
            tvShows={tvShows}
            ></TvCardContainer>
           
        </div>
    );
}


export default TrendingTvShows;