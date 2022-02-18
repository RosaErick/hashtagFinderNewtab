import React from "react";
import "../css/hero.css";


export default function Hero() {
  return (
    <header className="hero-header">
      <div className="hero-container">
        <h1>Encontre hashtags de maneira fácil.</h1>

        <p>
          Digite o que deseja no campo de buscas e confira os resultados do
          Twitter abaixo
        </p>
      </div>

      <div className="hero-search-bar">
        <input type="search" />
      </div>
    </header>
  );
}
