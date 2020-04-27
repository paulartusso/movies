import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import SwitchComponent from "./Componentes/SwitchComponent/SwitchComponent";
import Footer from "./Sections/Footer/Footer";
import Menu from "./Componentes/Menu/Menú";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <SwitchComponent></SwitchComponent>
        <Menu></Menu>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
