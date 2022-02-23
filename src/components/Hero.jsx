import React from "react";
import "../css/hero.css";
import IconSearch from "../assets/img/icon-search.svg";
import { useState, useEffect } from "react";

export default function Hero() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [postSearch, setpostSearch] = useState(null);

  useEffect(() => {
    const url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${searchValue}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;
    const token =
      "AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX";

    if (searchValue) {
      const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        try {
          const response = await fetch(url, requestOptions);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }
  });

  useEffect(() => {
    const APIPOST = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas";
    if (searchValue) {
      const postData = async () => {
        const requestOptions = {
          method: "POST",
          headers: {
            authorization: "Bearer key2CwkHb0CKumjuM",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Squad: "150222",
                  Hashtag: searchValue,
                  Data: "22/02/2021",
                  Hora: "17:00",
                },
              },
            ],
          }),
        };
        fetch(APIPOST, requestOptions)
          .then((response) => response.json())
          .then((data) => setpostSearch(data) || setSearchValue(""));

        console.log(searchResponse);
      };
      postData();
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
