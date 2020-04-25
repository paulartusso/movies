import React  from 'react';
import Header from "../../Sections/Header/Header";
import TrendingMovies from "../../Sections/TrendingMovies/TrendingMovies";
import TrendingTvShows from "../../Sections/TrendingTvShows/TrendingTvShows";
import "../../Styles/Common.css";

const Home = () =>{
    
    return(
        <div>
           <Header></Header>
           <TrendingMovies></TrendingMovies> 
           <TrendingTvShows></TrendingTvShows>
        </div>
    )
}

export default Home;