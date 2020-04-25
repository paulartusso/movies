import React  from 'react';
import Header from "../../Sections/Header/Header";
import TrendingMovies from "../../Sections/TrendingMovies/TrendingMovies";
import TrendingTvShows from "../../Sections/TrendingTvShows/TrendingTvShows";
import Footer from "../../Sections/Footer/Footer";
import Menu from "../../Componentes/Menu/Menú";
import "../../Styles/Common.css";

const Home = () =>{
    
    return(
        <div>
           <Header></Header>
           <TrendingMovies></TrendingMovies> 
           <TrendingTvShows></TrendingTvShows>
           <Footer></Footer>
           <Menu></Menu>
        </div>
    )
}

export default Home;