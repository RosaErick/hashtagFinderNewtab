import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import React from "react";
import "../../css/Home.css";
import infoIcon from "../../assets/img/icon-info-circle.svg";
import logIcon from "../../assets/img/icon-user-alt.svg";

const Home = () => {
  return (
    <>
          <Navbar buttons={[{ "title": "Sobre", "icon":infoIcon, "route": "/about","textColor": "#0A1744", "backgroundColor": "#72EFDB" }, {"title": "Login", "icon":logIcon, "route": "/login","textColor": "#FFF", "backgroundColor": "#0A1744"}]} />
      <Hero />
      <main className="main-home">
        <h2>Exibindo os 10 resultados mais recentes para #Natureza</h2>
      </main>
      <Footer />
    </>
  );
};

export default Home;
