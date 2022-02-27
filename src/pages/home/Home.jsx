import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/hero.css";
import React from "react";
import "../../css/Home.css";
import infoIcon from "../../assets/img/icon-info-circle.svg";
import logIcon from "../../assets/img/icon-user-alt.svg";
import TweetCard from "../../components/TweetCard";
import ImgCard from "../../components/ImgCard";
import IconSearch from "../../assets/img/icon-search.svg";
import { useState, useEffect } from "react";
import { getTweets } from "../../api/getTweets";
import { motion } from "framer-motion";
import { postData } from "../../api/AirtablePOST";

const Home = () => {
  const [imageActive, setActiveState] = useState("");
  const [colorMode, setColorState] = useState("");
  const [animationMode, setanimationMode] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [tweetsData, setTweetsData] = useState({});
  const [titleTag, setTitleTag] = useState();
  const [moreRequest, setMoreRequest] = useState(10);
  const [resultsNumber, setResultsNumber] = useState(0);

  const toogleHandle = () =>
    setActiveState(!imageActive) || setColorState(!colorMode);

  useEffect(() => {
    if (searchValue) {
      const asyncCall = async () => {
        await postData(searchValue);
        const tweets = await getTweets(searchValue, moreRequest);
        setTweetsData(tweets);
        setSearchResponse("");
        setTitleTag(searchValue);
        setSearchValue("");
        asynCallsub();
        setMoreRequest(10);
      };
      asyncCall();
    }
  });

  const asynCallsub = async () => {
    !tweetsData.data
      ? setSearchResponse("Nenhum tweet foi achado, tente novamente... 😭")
      : setSearchResponse("");
  };

  function handleValue(e) {
    if (e.keyCode === 13) {
      setSearchValue(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
      setSearchResponse("Aguarde a busca...");
      setResultsNumber(10);
      if (e.target.value === "") {
        setSearchResponse("É necessário digitar algo no campo de buscas...");
        setSearchValue("");
      }
    }

    if (e.keyCode === 8) {
      setSearchResponse("");
      setSearchValue("");
      setTitleTag("");
      setResultsNumber(0);
    }

    if (e.target.value.length >= 20) {
      setSearchResponse("Limite de caracteres atingido 🚨.");
    }
    if (e.target.value.length >= 22) {
      e.preventDefault();
    }
  }

  return (
    <>
      <Navbar
        buttons={[
          {
            title: "Sobre",
            icon: infoIcon,
            route: "/about",
            textColor: "#0A1744",
            backgroundColor: "#72EFDB",
          },
          {
            title: "Login",
            icon: logIcon,
            route: "/login",
            textColor: "#FFF",
            backgroundColor: "#1E3E7B",
          },
        ]}
      />
      <header className="heroHeader">
        <div className="heroContainer">
          <h1>Encontre hashtags de maneira fácil.</h1>

          <p>
            Digite o que deseja no campo de buscas e confira os resultados do
            Twitter abaixo
          </p>
        </div>

        <div className="heroSearchBar">
          <img
            src={IconSearch}
            onClick={() => {
              setSearchValue(
                document
                  .getElementById("input")
                  .value.replace(/[^a-zA-Z0-9_]/g, "")
              );
              setSearchResponse("Aguarde a busca...");

              if (!document.getElementById("input").value.length) {
                setSearchResponse(
                  "É necessario digitar algo no campo de buscas.."
                );
                setSearchValue("");
              }
            }}
            alt=""
          />{" "}
          <input
            id="input"
            type="search"
            onKeyDown={handleValue}
            placeholder="Buscar..."
          />
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

      <main className="mainHome">
        <div className="mobileSelect">
          <button
            onClick={toogleHandle}
            className={colorMode ? "" : "buttonSelected"}
          >
            Tweets
          </button>
          <button
            onClick={toogleHandle}
            className={colorMode ? "buttonSelected" : ""}
          >
            Imagens
          </button>
        </div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2>
            Exibindo os {resultsNumber > 0 ? resultsNumber : null} resultados
            mais recentes para #{titleTag}
          </h2>
          <section className="mainGrid">
            <section className="gridLeftDesktop">
              <div className="imgBox">
                {tweetsData.includes
                  ? tweetsData.includes.users.map((item, index) => {
                      return (
                        <>
                          <ImgCard
                            twitterUserName={item.username}
                            tweetImage={tweetsData.includes.media[index].url}
                            tweetId={tweetsData.data[index].id}
                          />
                        </>
                      );
                    })
                  : null}
              </div>
            </section>
            <section className="gridRightDesktop">
              {tweetsData.data
                ? tweetsData.includes.users.map((item, index) => {
                    console.log(item, index);

                    return (
                      <>
                        <TweetCard
                          tweetText={tweetsData.data[index].text}
                          userName={item.username}
                          user={item.name}
                          userImage={item.profile_image_url}
                          tweetId={tweetsData.data[index].id}
                        />
                      </>
                    );
                  })
                : null}
            </section>

            {imageActive ? (
              <motion.div
                initial={{ y: animationMode, opacity: 0 }}
                animate={{ y: animationMode, opacity: 1 }}
                onClick={() => setanimationMode(animationMode)}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <>
                  <section className="gridLeft">
                    {tweetsData.includes
                      ? tweetsData.includes.users.map((item, index) => {
                          return (
                            <>
                              <ImgCard
                                twitterUserName={item.username}
                                tweetImage={
                                  tweetsData.includes.media[index].url
                                }
                                tweetId={tweetsData.data[index].id}
                              />
                            </>
                          );
                        })
                      : null}
                  </section>
                </>
              </motion.div>
            ) : (
              <>
                <section className="gridRight">
                  <motion.div
                    initial={{ y: animationMode, opacity: 0 }}
                    animate={{ y: animationMode, opacity: 1 }}
                    onClick={() => setanimationMode(!animationMode)}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {tweetsData.data
                      ? tweetsData.includes.users.map((item, index) => {
                          console.log(item, index);

                          return (
                            <>
                              <TweetCard
                                tweetText={tweetsData.data[index].text}
                                userName={item.username}
                                userImage={item.profile_image_url}
                                tweetId={tweetsData.data[index].id}
                              />
                            </>
                          );
                        })
                      : null}
                  </motion.div>
                </section>
              </>
            )}
          </section>
        </motion.div>
        {tweetsData.data ? (
          <>
            <div className="buttonBox">
              <button
                className="moreRequestButton"
                onClick={(e) => {
                  setMoreRequest(moreRequest + 10);
                  const neweSearchReq = document.getElementById("input").value;
                  setSearchValue(neweSearchReq);
                  setResultsNumber(resultsNumber + 10);
                  console.log(e);
                  console.log(moreRequest);
                }}
              >
                Ver mais tweets...
              </button>
            </div>
          </>
        ) : null}
      </main>

      <Footer />
    </>
  );
};

export default Home;
