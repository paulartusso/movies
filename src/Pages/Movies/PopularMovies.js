import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../Componentes/Titles/Titles";
import PopularMoviesContainer from "../../Componentes/CardContainer/PopularMoviesContainer";

const PopularMovies = () =>{

    const [popularMovies, setPopularMovies] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=1a33d2a63d1685081b5d07f619b37cd4";
       
        Axios.get(baseUrl)
        .then(res => {
            setPopularMovies(res.data.results);
        })
        .catch(er => console.log(er))
}, []);

    return(
        <div>
            <Titles>
                {"Popular Movies"}
            </Titles>
            <PopularMoviesContainer
            popularMovies={popularMovies}>    
            </PopularMoviesContainer>
        </div>

    )
}

export default PopularMovies;
      