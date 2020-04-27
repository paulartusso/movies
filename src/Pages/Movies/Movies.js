import React  from 'react';
import PopularMovies from "../Movies/PopularMovies";
import TopRatedMovies from './TopRatedMovies';
import UpcomingMovies from "./UpcomingMovies";
import NowplayingMovies from './NowPlayingMovies';

const Movies = () => {
    return(
        <div>
            <PopularMovies></PopularMovies>
            <TopRatedMovies></TopRatedMovies>
            <UpcomingMovies></UpcomingMovies>
            <NowplayingMovies></NowplayingMovies>
        </div>
    )
}

export default Movies;