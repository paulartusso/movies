import React  from 'react';
import PopularMovies from "../Movies/PopularMovies";
import TopRatedMovies from './TopRatedMovies';
import UpcomingMovies from "./UpcomingMovies";

const Movies = () => {
    return(
        <div>
            <PopularMovies></PopularMovies>
            <TopRatedMovies></TopRatedMovies>
            <UpcomingMovies></UpcomingMovies>
        </div>
    )
}

export default Movies;