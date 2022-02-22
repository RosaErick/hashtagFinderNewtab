import React from "react";
import "../css/hero.css";
import IconSearch from "../assets/img/icon-search.svg";
import { useState, useEffect } from "react";

const APIPOST =
  "https://airtable.com/app6wQWfM6eJngkD4/api/docs#curl/table:buscas:create";

export default function Hero() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [postSearch, setpostSearch] = useState(null);

  useEffect(() => {
    if (searchValue) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hashtag: searchValue }),
      };
      fetch(APIPOST, requestOptions)
        .then((response) => response.json())
        .then((data) => setpostSearch(data.id) && setSearchResponse(""));
    }
  });

  console.log(postSearch);
  console.log(searchValue);

  function handleValue(e) {
    if (e.keyCode === 13) {
      setSearchValue(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
      setSearchResponse("Aguarde a busca...");

      if (e.target.value === "") {
        setSearchResponse("É necessario digitar algo no campo de buscas..");
      }
    }

    if (e.keyCode === 8) {
      setSearchResponse("");
    }
  }

  return (
    <header className="heroHeader">
      <div className="heroContainer">
        <h1>Encontre hashtags de maneira fácil.</h1>

        <p>
          Digite o que deseja no campo de buscas e confira os resultados do
          Twitter abaixo
        </p>
      </div>

      <div className="heroSearchBar">
        <img src={IconSearch} alt="" />{" "}
        <input type="search" onKeyDown={handleValue} placeholder="Buscar..." />
      </div>
      {searchResponse ? (
        <>
          <div className="searchResponse">
            <p>{searchResponse}</p>
          </div>
        </>
      ) : null}

      <div className="gradient-bg"></div>
    </header>
  );
}
