import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./Header.css";

const Header = () =>{

    const [randomMovie, setRandomMovie] = useState(null);
    const [moviesList, setMoviesList] = useState([]);
    
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/trending/movie/week?api_key=1a33d2a63d1685081b5d07f619b37cd4";
        Axios.get(baseUrl)
        .then(res => {
            setMoviesList(res.data.results);
        })
        .catch(er => console.log(er))

    }, []);

    useEffect(()=>{
        setRandomMovie(getRandomMovie());
    }, [moviesList]);

    const getRandomMovie = () =>{
        return moviesList[Math.floor(Math.random())*randomMovie.length];
    }

    return(
        <div>
            <div className="header-container">
                
            </div>
        </div>                
        )
}

export default Header;

