import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../Componentes/Titles/Titles";
import UpcomingMoviesContainer from "../../Componentes/CardContainer/UpcomingMoviesContainer";

const Upcoming = () =>{

    const [upcomingMovies, setUpcomingMovies] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=1a33d2a63d1685081b5d07f619b37cd4";
       
        Axios.get(baseUrl)
        .then(res => {
            setUpcomingMovies(res.data.results);
        })
        .catch(er => console.log(er))
}, []);

    return(
        <div>
            <Titles>
                {"Upcoming Movies"}
            </Titles>
            <UpcomingMoviesContainer
            upcomingMovies={upcomingMovies}>    
            </UpcomingMoviesContainer>
        </div>

    )
}

export default Upcoming;