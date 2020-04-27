import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../../Componentes/Titles/Titles";
import MoviesCardContainer from "../../../Componentes/CardContainer/MoviesCardContainer";
import "../../../Styles/Common.css";

const TrendingMovies = () =>{

    const [movies, setMovies] = useState([]);
    console.log(movies);
        
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/trending/movie/week?api_key=1a33d2a63d1685081b5d07f619b37cd4";
       
        Axios.get(baseUrl)
        .then(res => {
            console.log(res.data.results)
            setMovies(res.data.results);
        })
        .catch(er => console.log(er))

    }, []);

      
    return(
        <div>
            <Titles>
                {"Trending Movies"}
            </Titles>
            <MoviesCardContainer
            movies={movies}
            ></MoviesCardContainer>
           
        </div>
    );
}


export default TrendingMovies;