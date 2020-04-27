import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../Componentes/Titles/Titles";
import TopRatedContainer from "../../Componentes/CardContainer/TopRatedContainer";

const TopRatedMovies = () =>{

    const [topRatedMovies, setTopRatedMovies] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=1a33d2a63d1685081b5d07f619b37cd4";
       
        Axios.get(baseUrl)
        .then(res => {
            setTopRatedMovies(res.data.results);
        })
        .catch(er => console.log(er))
}, []);

    return(
        <div>
            <Titles>
                {"Top Rated Movies"}
            </Titles>
            <TopRatedContainer
               topRatedMovies={topRatedMovies}>
            </TopRatedContainer>
        </div>

    )
}

export default TopRatedMovies;
      