import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import React from "react";
import "../../css/Home.css";

const Home = () => {
  return (
    <>
      <Navbar buttons={[{"title": "Home", "icon": "../../diretorio", "route": "/","color": "#000"}, {"title": "Sair", "icon": "../../diretorio", "route": "/sair","color": "#000"}]} />
      <Hero />
      <main className="main-home">
        <h2>Exibindo os 10 resultados mais recentes para #Natureza</h2>
      </main>
      <Footer />
    </>
  );
};

export default Home;
