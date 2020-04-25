import React, {useState, useEffect} from "react";
import Axios from "axios";
import MoviesCardContainer from "../../Componentes/CardContainer/MoviesCardContainer";
import "../../Styles/Common.css";

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
            <span className="title-span">
                <h2 className="h2">
                    Trending Movies
                </h2>
                <h3 className="h3">
                    Explore All
                </h3>
            </span>
            <MoviesCardContainer
            movies={movies}
            ></MoviesCardContainer>
           
        </div>
    );
}


export default TrendingMovies;