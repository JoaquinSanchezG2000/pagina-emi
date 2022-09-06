import React from "react";
import "./App.css";
import Navegation from "./Componentes/Navegation";
import Carrusel2 from "./Componentes/Carrusel2";
import Features from "./Componentes/Features";
import ProductInfo from "./Componentes/ProductInfo";
import Footer from "./Componentes/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navegation></Navegation>
      <Carrusel2></Carrusel2>
      <Features></Features>
      <ProductInfo></ProductInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;
