import React, {useState, useEffect} from "react";
import Axios from "axios";
import Titles from "../../Componentes/Titles/Titles";
import "../../Styles/Common.css";
import NowPlayingContainer from "../../Componentes/CardContainer/NowPlayingContainer";

const NowplayingMovies = () =>{

    const [playingMovies, setPlayingMovies] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=1a33d2a63d1685081b5d07f619b37cd4";
       
        Axios.get(baseUrl)
        .then(res => {
            console.log(res.data.results)
            setPlayingMovies(res.data.results);
        })
        .catch(er => console.log(er))

    }, []);

      
    return(
        <div>
            <Titles>
                {"Now Playing Movies"}
            </Titles>
            <NowPlayingContainer
            playingMovies={playingMovies}>
            </NowPlayingContainer>
           
        </div>
    );
}


export default NowplayingMovies;